import { getStoreStatus, getStoreStatusLabel } from "@/lib/hours/hours";

export function getStorePresentation(date = new Date()) {
  const status = getStoreStatus(date);

  return {
    status,
    label: getStoreStatusLabel(date),
    isOpen: status === "open",
  };
}
