/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const hashMap = new Map();
  for (let i = 0, len = list1.length; i < len; i++) {
    hashMap.set(list1[i], i);
  }
  const res = [];
  let minSum = Number.MAX_VALUE;
  for (let i = 0, len = list2.length; i < len; i++) {
    if (i > minSum) {
      break;
    }
    if (hashMap.has(list2[i])) {
      j = hashMap.get(list2[i]);
      if (j + i < minSum) {
        minSum = j + i;
        res.length = 0;
        res.push(list2[i]);
      } else if (i + j === minSum) {
        res.push(list2[i]);
      }
    }
  }
  return res;
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
);
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
);
