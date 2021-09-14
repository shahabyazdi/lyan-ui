import React from "react";
import toLocaleDigits from "../../shared/toLocaleDigits";
import "./number.scss";

export default function Input({
  value,
  type,
  className = "",
  onChange,
  onValueChange,
  separator,
  decimal,
  digits,
  ...props
}) {
  if (!separator) separator = "";
  if (!decimal) decimal = ".";

  let [negative = ""] = (value || "").toString().match(/^-/) || [];

  type = "text";
  value = removeSeparator(value);

  if (separator) value = addSeparator(value);

  value = toLocaleDigits(value, digits);

  return (
    <input
      className={`lui-input ${className}`}
      value={negative + value.replace(".", decimal)}
      type={type}
      onChange={handleChange}
      {...props}
    />
  );

  function handleChange(e) {
    e.target.value = toEnglishDigits(e.target.value);

    let [negative = ""] = e.target.value.toString().match(/^-/) || [];
    let value = removeSeparator(e.target.value.replace(decimal, "."));

    if (separator) e.target.value = addSeparator(value);

    e.target.value = negative + e.target.value;

    onChange?.(e);
    onValueChange?.(negative + value);
  }

  function addSeparator(value = "") {
    let [integer, ...decimals] = value.toString().split(".");

    value = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    if (decimals.length > 0) {
      value = `${value}.${decimals.join("")}`;
    }

    return value;
  }

  function removeSeparator(value = "") {
    let [integer, ...decimals] = value.toString().split(".");

    if (!integer && value) integer = "0";

    value = integer.replace(/[^0-9]/g, "");

    if (decimals.length > 0) {
      decimals = decimals.map((part) => part.replace(/[^0-9]/g, ""));

      value = `${value}.${decimals.join("")}`;
    }

    return value;
  }

  function toEnglishDigits(value) {
    if (!value || !digits) return value;

    digits.forEach((digit, index) => (value = value.replaceAll(digit, index)));

    return value;
  }
}
