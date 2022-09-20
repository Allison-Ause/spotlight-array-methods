// INPUT: the array of countries from data.js
// OUTPUT: only countries in Oceana
// REQS: use .filter

export const filterOceania = (countries) => {
  const oceaniaArray = countries.filter((country) => country.continent === 'Oceania');
  return oceaniaArray;
};

// INPUT: the array of countries from data.js
// OUTPUT: only countries whose name that include the letters 'au'
// REQS: use .filter

export const filterAu = (countries) => {
  const auArray = countries.map((country) => country.name.includes('au'));
  return auArray;
};

// INPUT: the array of dogs from data.js
// OUTPUT: only dogs that are 2 years old or younger
// REQS: use .filter
export const filterYoungDogs = (dogs) => {};

// INPUT: the array of dogs from data.js
// OUTPUT: a list of names of dogs that are 2 years old or younger
// REQS: use .filter AND .map OR use your filterYoungDogs function and a map
export const getYoungDogNames = (dogs) => {};
