// INPUT: the array of countries from data.js
// OUTPUT: an array of the names
// REQS: use .map

export const getCountryNames = (countries) => {
  const countryNames = countries.map((country) => country.name);
  return countryNames;
};

// INPUT: the array of countries from data.js
// OUTPUT: an array of the names and their iso2 country codes using .map
// REQS: use .map

export const getCountryCodes = (countries) => {
  const newArray = countries.map((country) => [country.name, country.iso2]);
  return newArray;
};

// INPUT: the array of shoes from data.js
// OUTPUT: an array of the brands
// REQS: use .map

export const getBrands = (brands) => {
  const brandsArray = brands.map((brand) => brand.brand);
  return brandsArray;
};
