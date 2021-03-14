module.exports = function reverse (n) {
  let N = Math.abs(n);
  let nStr = String (N);
  let nRev = nStr.split("").reverse().join("");
  return (Number (nRev));
}
