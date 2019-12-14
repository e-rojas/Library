// import { resolve } from 'dns';
// import { rejects } from 'assert';

// /*
// 3 stages of promise
// Pending: The initial state— the operation has not completed yet.
// Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example,
//  a request’s promise might resolve with a JSON object as its value.
// Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.
// */
// const inventory = {
//   sunglasses: -1900,
//   pants: -1088,
//   bags: -1344
// };

// const executorFunction = (resolve, reject) => {
//   Object.values(inventory).forEach(value => {
//     if (value > 0) {
//       resolve('Sunglasses order processed.');
//     } else {
//       reject('That item is sold out.');
//     }
//   });
// };

// const firstPromise = new Promise(executorFunction);
// firstPromise;

const items = [{ Bananas: 4.25 }, { Onions: 1.55 }, { Tomatos: 2.25 }];

Object.values(items).forEach(value => {
  value += value;
});
