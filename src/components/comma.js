const comma = (value) => {
  if (value === "0") return value;

  let output = "";
  let decimal = "";
  let isNeg;

  if (value.includes(".")) {
    output = value.substring(0, value.indexOf("."));
    decimal = value.substring(value.indexOf(".")); //decimal part
  } else {
    output = value;
  }

  if (parseFloat(value) < 0) {
    isNeg = true;
    output = output.substring(1);
  }
  return isNeg
    ? "-" + parseFloat(output).toLocaleString() + decimal
    : parseFloat(output).toLocaleString() + decimal;
};

export default comma;
