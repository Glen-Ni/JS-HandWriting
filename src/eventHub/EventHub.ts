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
    (this.cache[eventName] || []).forEach(fn => {fn.call(this, ...props)});
  }
}

export default EventHub;