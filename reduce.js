// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

import { brands, dogs } from './data';

export const getSneaks = (brands) => {
  const shoesArray = brands.map((x) => x.shoes);
  return shoesArray.reduce((flat, next) => flat.concat(next), []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const ages = dogs.map((dog) => dog.age);
  const ageSum = ages.reduce((acc, age) => acc + age, 0);
  return Number(ageSum / ages.length);
};

///possible answer for 1:
// const sneakers = [];
// brands.forEach(b => b.shoes.reduce((a, s) => {
//   a.push(s);
//   return a;
// }, sneakers));
// return sneakers;
