console.log('sync 1');

setTimeout(() => {
  console.log('async 1');
}, 3000);

console.log('sync 2');

setTimeout(() => {
  console.log('async 2');
}, 5000);

console.log('sync 3');
