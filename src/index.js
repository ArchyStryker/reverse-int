module.exports = function reverse (n) {
  Let nStr = String (n);
  let nRev = nStr.split("").reverse().join("");
  return (Number (nRev));
}
