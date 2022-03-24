import 'core-js/actual/array/from';       // <- at the top of your entry point
import 'core-js/actual/array/group-by';   // <- at the top of your entry point
import 'core-js/actual/set';              // <- at the top of your entry point
import 'core-js/actual/promise';          // <- at the top of your entry point
import 'core-js/actual/structured-clone'; // <- at the top of your entry point
import 'core-js/actual/queue-microtask';  // <- at the top of your entry point

Array.from(new Set([1, 2, 3, 2, 1]));          // => [1, 2, 3]
[1, 2, 3, 4, 5].groupBy(it => it % 2);         // => { 1: [1, 3, 5], 0: [2, 4] }
Promise.resolve(42).then(x => console.log(x)); // => 42
structuredClone(new Set([1, 2, 3]));           // => new Set([1, 2, 3])
queueMicrotask(() => console.log('called as microtask'));
