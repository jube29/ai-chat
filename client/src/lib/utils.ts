import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names: clsx resolves conditionals/arrays into a string,
 * then twMerge dedupes conflicting utilities (e.g. "px-2 px-4" -> "px-4").
 * Every shadcn component uses this to let callers override its classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
