// format price
export function formatPrice(price: any, locale: string = "id-ID", currency: string = "IDR"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
