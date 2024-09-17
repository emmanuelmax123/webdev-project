export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
  // we first round the priceCents so the tofixed runs properly with all number
}

export default formatCurrency;
