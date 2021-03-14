module.exports = function reverse (n) {
  let nRev = n.split("").reverse().join("");
  return (+nRev);
}
