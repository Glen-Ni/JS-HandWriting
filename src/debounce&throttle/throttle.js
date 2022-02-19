/**
 * throttle
 * @param {*} fn
 * @param {number} time
 */
function throttle(fn, time) {
  let flag = false;
  return (...args) => {
    if (flag) {
      return;
    }
    flag = true;
    setTimeout(() => {
      fn(...args);
      flag = false;
    }, time);
  };
}

// 涉及到闭包，再看下闭包吧
// 最好call一下，重置一下作用域