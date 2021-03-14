module.exports = function reverse (n) {
  let nStr = String (n);
  let nRev = nStr.split("").reverse().join("");
  return (Number (nRev));
}
