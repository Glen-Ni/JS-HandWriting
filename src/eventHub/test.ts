import EventHub from './EventHub';

const eventHub = new EventHub();

const test1 = (message) => {
  console.assert(eventHub instanceof Object === true, 'eventHub 是个对象');
  console.log(message);
}

const test2 = (message) => {
  let called = false;
  eventHub.on('test', (a,b) => {
    called = true;
    console.assert(a === '我我我');
    console.assert(b === '那叫一个帅');
  });
  eventHub.emit('test', '我我我', '那叫一个帅');
  console.assert(called);
  console.log(message);
};

const test3 = (message) => {
  let called = false;
  const fn = y => {
    called = true;
  };
  eventHub.on('test2', fn);
  eventHub.off('test2', fn);
  eventHub.emit('test2');
  setTimeout(() => {
    console.assert(!called);
  }, 1000);
  console.log(message);
};

test1('1. EventHub 可创建对象');
test2('2. .on后.emit，可触发函数');
test3('3. .off有用');
