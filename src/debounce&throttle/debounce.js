/**
 * debounce
 * @param {*} fn
 * @param {number} time
 */
function debounce(fn, time) {
  let timer = null;
  return (...args) => {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, time);
  };
}

// clearTimeout 不回把timer置为null，需要手动操作