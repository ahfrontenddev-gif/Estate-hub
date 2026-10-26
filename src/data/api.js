const formatNumber = (number) => new Intl.NumberFormat("fa-IR").format(number);
const formatPrice = (price) => `${formatNumber(price)} تومان`;
export { formatNumber, formatPrice };
