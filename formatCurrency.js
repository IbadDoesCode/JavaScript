// Format Number as Currency

function formatCurrency(number) {
  return new Intl.NumberFormat(
    "en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

console.log(formatCurrency(300))