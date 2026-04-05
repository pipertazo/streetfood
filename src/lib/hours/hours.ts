import { businessConfig } from "@/lib/config/business-config";
import type { StoreStatus } from "@/types/business";

function minutesFromTime(hour: number, minute: number) {
  return hour * 60 + minute;
}

export function getStoreStatus(date = new Date()): StoreStatus {
  const currentMinutes = minutesFromTime(date.getHours(), date.getMinutes());

  const isOpen = businessConfig.openingWindows.some((window) => {
    const start = minutesFromTime(window.startHour, window.startMinute);
    const end = minutesFromTime(window.endHour, window.endMinute);

    if (end === 0) {
      return currentMinutes >= start || currentMinutes < 1;
    }

    return currentMinutes >= start && currentMinutes < end;
  });

  return isOpen ? "open" : "closed";
}

export function getStoreStatusLabel(date = new Date()) {
  return getStoreStatus(date) === "open" ? "Abierto ahora" : "Cerrado ahora";
}
