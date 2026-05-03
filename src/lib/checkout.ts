const FALLBACK_MAILTO =
  "mailto:hello@spareply.com?subject=SpaReply%20%2449%20launch%20toolkit&body=Hi%20SpaReply%20team%2C%20I%27d%20like%20to%20buy%20the%20%2449%20SpaReply%20launch%20toolkit.%20My%20clinic%3A%20%5Bclinic%20name%5D%20in%20%5Bcity%5D.";

export const TOOLKIT_PRICE_USD = 49;

export function getToolkitCheckoutUrl(): string {
  const link = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
  if (link && link.trim().length > 0) {
    return link.trim();
  }
  return FALLBACK_MAILTO;
}

export function isStripeCheckoutEnabled(): boolean {
  const link = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
  return Boolean(link && link.trim().length > 0);
}
