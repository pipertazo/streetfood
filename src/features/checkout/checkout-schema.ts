import { z } from "zod";

export const checkoutSchema = z
  .object({
    fullName: z.string().min(3, "Ingresá tu nombre y apellido."),
    phone: z.string().min(8, "Ingresá un teléfono válido."),
    deliveryType: z.enum(["delivery", "takeaway"], {
      required_error: "Seleccioná cómo querés recibir el pedido.",
    }),
    address: z.string(),
    email: z
      .string()
      .email("Ingresá un email válido.")
      .or(z.literal("")),
    rememberData: z.boolean().default(false),
  })
  .superRefine((values, ctx) => {
    if (values.deliveryType === "delivery" && values.address.trim().length < 5) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["address"],
        message: "Ingresá la dirección para el delivery.",
      });
    }
  });

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
