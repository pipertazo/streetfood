"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { CartSummary } from "@/components/cart/cart-summary";
import { EmptyCart } from "@/components/cart/empty-cart";
import { PaymentPanel } from "@/components/checkout/payment-panel";
import { WhatsAppSubmitButton } from "@/components/checkout/whatsapp-submit-button";
import { RadioGroup } from "@/components/shared/radio-group";
import { StoreStatusBadge } from "@/components/shared/store-status-badge";
import { TextField } from "@/components/shared/text-field";
import { useCartStore } from "@/features/cart/cart-store";
import { getCartSummary } from "@/features/cart/cart-selectors";
import { saveCustomerData, CUSTOMER_STORAGE_KEY } from "@/features/checkout/customer-storage";
import { checkoutSchema, type CheckoutSchema } from "@/features/checkout/checkout-schema";
import { getStorePresentation } from "@/features/store-status/store-status";
import { businessConfig } from "@/lib/config/business-config";
import { readStorage } from "@/lib/storage/local-storage";
import { buildWhatsAppMessage } from "@/lib/whatsapp/build-whatsapp-message";
import { buildWhatsAppUrl } from "@/lib/whatsapp/build-whatsapp-url";
import type { StoredCustomerData } from "@/types/checkout";

const defaultValues: CheckoutSchema = {
  fullName: "",
  phone: "",
  deliveryType: "delivery",
  address: "",
  email: "",
  rememberData: true,
};

export function CheckoutForm() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const setCheckoutDeliveryType = useCartStore((state) => state.setCheckoutDeliveryType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const store = getStorePresentation();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    defaultValues,
  });

  const deliveryType = watch("deliveryType");
  const summary = getCartSummary(items, deliveryType);

  useEffect(() => {
    setCheckoutDeliveryType(deliveryType);
  }, [deliveryType, setCheckoutDeliveryType]);

  useEffect(() => {
    const savedCustomer = readStorage<StoredCustomerData | null>(CUSTOMER_STORAGE_KEY, null);
    if (!savedCustomer) {
      return;
    }

    setValue("fullName", savedCustomer.fullName);
    setValue("phone", savedCustomer.phone);
    setValue("deliveryType", savedCustomer.deliveryType);
    setValue("address", savedCustomer.address);
    setValue("email", savedCustomer.email ?? "");
    setValue("rememberData", true);
  }, [setValue]);

  const onSubmit = handleSubmit((values) => {
    if (!store.isOpen || items.length === 0) {
      return;
    }

    setIsSubmitting(true);
    saveCustomerData(values);

    const message = buildWhatsAppMessage({
      customer: values,
      items,
      subtotal: summary.subtotal,
      deliveryFee: summary.delivery,
      total: summary.total,
    });

    const url = buildWhatsAppUrl(businessConfig.whatsappPhone, message);

    // Futuro: este punto queda preparado para disparar una API real de creación de orden.
    window.open(url, "_blank", "noopener,noreferrer");
    clearCart();
    router.push("/menu");
  });

  return (
    <form className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]" onSubmit={onSubmit}>
      <section className="space-y-5 rounded-[28px] border border-sand/10 bg-ember p-5 shadow-card sm:p-6">
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Checkout</p>
          <h1 className="text-3xl font-extrabold text-cream">Completá tus datos</h1>
          <p className="text-sm leading-6 text-smoke">
            Son pocos datos para que el pedido salga claro y rápido por WhatsApp.
          </p>
        </div>

        <TextField
          error={errors.fullName?.message}
          label="Nombre y apellido"
          placeholder="Ej: Juan Pérez"
          {...register("fullName")}
        />

        <TextField
          error={errors.phone?.message}
          inputMode="tel"
          label="Teléfono"
          placeholder="Ej: 299 123 4567"
          {...register("phone")}
        />

        <RadioGroup
          error={errors.deliveryType?.message}
          label="¿Cómo querés recibir tu pedido?"
          name="deliveryType"
          options={[
            {
              label: "Delivery",
              value: "delivery",
              description: "Sumamos el envío fijo de Cipolletti.",
            },
            {
              label: "Take away",
              value: "takeaway",
              description: "Retirás vos y no se cobra delivery.",
            },
          ]}
          value={deliveryType}
          onChange={(value) =>
            setValue("deliveryType", value as "delivery" | "takeaway", { shouldValidate: true })
          }
        />

        {deliveryType === "delivery" ? (
          <TextField
            error={errors.address?.message}
            label="Dirección"
            placeholder="Calle, altura y referencia"
            {...register("address")}
          />
        ) : null}

        <TextField
          error={errors.email?.message}
          label="Email (opcional)"
          placeholder="tuemail@ejemplo.com"
          {...register("email")}
        />

        <label className="flex items-start gap-3 rounded-2xl border border-sand/10 bg-coal/50 p-4">
          <input className="mt-1 h-4 w-4 accent-gold" type="checkbox" {...register("rememberData")} />
          <span className="space-y-1">
            <span className="block text-sm font-bold text-cream">Recordar mis datos</span>
            <span className="block text-sm text-smoke">
              Los guardamos solo en este dispositivo para próximas compras.
            </span>
          </span>
        </label>
      </section>

      <div className="space-y-6">
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                Estado del local
              </p>
              <h2 className="text-2xl font-extrabold text-cream">Antes de enviar</h2>
            </div>
            <StoreStatusBadge label={store.label} status={store.status} />
          </div>

          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <CartSummary
              delivery={summary.delivery}
              subtotal={summary.subtotal}
              total={summary.total}
            />
          )}
        </section>

        <PaymentPanel />

        <section className="space-y-4 rounded-[28px] border border-sand/10 bg-ember p-5 shadow-card sm:p-6">
          {!store.isOpen ? (
            <div className="rounded-2xl border border-[#6f3f2f] bg-[#2f1812] p-4 text-sm text-[#f2a482]">
              El local está cerrado ahora mismo. Podés preparar el pedido, pero el envío por
              WhatsApp queda habilitado solo dentro del horario de atención.
            </div>
          ) : null}
          <WhatsAppSubmitButton disabled={!store.isOpen || items.length === 0} isSubmitting={isSubmitting} />
        </section>
      </div>
    </form>
  );
}
