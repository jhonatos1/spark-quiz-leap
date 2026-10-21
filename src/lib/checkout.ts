export const CHECKOUT_URL = "https://pay.kiwify.com.br/2QOHfhX";

// Only identifiers supplied by the producer may be forwarded to the checkout.
const APPROVED_AFFILIATES = new Set(["GTAv1Ygf"]);

export function getCheckoutUrl(search: string): string {
  const affiliates = new URLSearchParams(search).getAll("afid");
  if (affiliates.length !== 1 || !APPROVED_AFFILIATES.has(affiliates[0])) {
    return CHECKOUT_URL;
  }

  const checkout = new URL(CHECKOUT_URL);
  checkout.searchParams.set("afid", affiliates[0]);
  return checkout.toString();
}
