/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  const arrColors = colors.split("");
  let a = 0;
  let b = 0;
  for (let i = 0, len = arrColors.length; i < len; i++) {
    if (
      arrColors[i] === "A" &&
      arrColors[i - 1] === "A" &&
      arrColors[i + 1] === "A"
    )
      a++;
    if (
      arrColors[i] === "B" &&
      arrColors[i - 1] === "B" &&
      arrColors[i + 1] === "B"
    )
      b++;
  }

  return a > b;
};

console.log(winnerOfGame("AAABABB"));
console.log(winnerOfGame("AA"));
console.log(winnerOfGame("ABBBBBBBAAA"));