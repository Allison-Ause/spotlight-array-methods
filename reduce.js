// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

import { brands } from './data';

export const getSneaks = (brands) => {
  //call reduce on brands to get each brand.'
  const shoesArray = brands.map((x) => x.shoes);
  return shoesArray.reduce((flat, next) => flat.concat(next), []);
};
//then put each brand's shoes into an accumulated array.
//could spread shoes array into the push

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {};

///possible answer for 1:
// const sneakers = [];
// brands.forEach(b => b.shoes.reduce((a, s) => {
//   a.push(s);
//   return a;
// }, sneakers));
// return sneakers;
