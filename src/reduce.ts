// Array.reduce((prev, now) => {
  // ...some modify
  // return prev
// }, prev)


const reduce2 = (arr, fn, origin) => {
  let sum = origin;
  for (let i = 0; i < arr.length; i++) {
    sum = fn(sum, arr[i]);
  }
  return sum;
}


const test = reduce2([1,2,3], (prev, now) => {
  return prev+now;
}, 0)

console.log(test);

Array.prototype.reduce2 = (fn, origin) => {
  let sum = origin;
  for (let i = 0; i < this.length; i++) {
    sum = fn(sum, this[i]);
  }
  return sum;
}