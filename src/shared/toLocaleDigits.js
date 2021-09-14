export default function toLocaleDigits(value, digits) {
  if (value === undefined || value === null || !Array.isArray(digits)) {
    return value;
  }

  return value.toString().replace(/[0-9]/g, (w) => digits[w]);
}
