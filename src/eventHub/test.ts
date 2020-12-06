import EventHub from './EventHub';

const eventHub = new EventHub();

console.assert(eventHub instanceof Object === true, 'eventHub 是个对象')

let called = false;
eventHub.on('test', y => {
  called = true;
  console.log('called: ' + called);
  console.assert(y === '你是傻逼');
})
eventHub.emit('test', '你是傻逼');