"use client";

import { PrimaryButton } from "@/components/shared/primary-button";

type WhatsAppSubmitButtonProps = {
  disabled?: boolean;
  isSubmitting?: boolean;
};

export function WhatsAppSubmitButton({
  disabled = false,
  isSubmitting = false,
}: WhatsAppSubmitButtonProps) {
  return (
    <PrimaryButton className="w-full" disabled={disabled || isSubmitting} type="submit">
      {isSubmitting ? "Preparando pedido..." : "Enviar pedido por WhatsApp"}
    </PrimaryButton>
  );
}
