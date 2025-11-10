// Lightweight `cn` implementation to avoid extra dependencies.
// Accepts strings, falsy values, and arrays of strings.
export function cn(
  ...inputs: (
    | string
    | number
    | boolean
    | null
    | undefined
    | Record<string, boolean>
    | Array<unknown>
  )[]
): string {
  const flatten = (arr: unknown[]): string[] =>
    arr.flatMap((v) => {
      if (!v) return [];
      if (Array.isArray(v)) return flatten(v as unknown[]);
      if (typeof v === "object") {
        const obj = v as Record<string, unknown>;
        return Object.keys(obj).filter((k) => Boolean(obj[k]));
      }
      return [String(v)];
    });

  return flatten(inputs as unknown[]).join(" ");
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
