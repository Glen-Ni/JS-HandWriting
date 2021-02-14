class EventHub {
  cache = {}
  on = (eventName, fn) => {
    // if (this.cache[eventName] === undefined) {
    //   this.cache[eventName] === []
    // }
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit = (eventName, ...props) => {
    // const eventList = this.cache[eventName] || [];
    // eventList.forEach(fn => {
    //   fn.call(this, ...props);
    // });
    (this.cache[eventName] || []).forEach(fn => {fn(...props)});
  }
  off = (eventName, fn) => {
    // 我的写法，会过滤掉一个数组中所有fn
    this.cache[eventName] = (this.cache[eventName] || []).filter(
      (item) => item !== fn
    );
    // 别人的写法，用indexof 删除第一项
    // 数组的indexof在ie12才可以用，最好自己写个indexOf方法
  }

}

export default EventHub;