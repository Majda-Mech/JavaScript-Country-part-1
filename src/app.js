import axios from 'axios';

async function fetchCountries() {
  try {
    const result = await axios.get('https://restcountries.com/v2/all');
    const countries = result.data;

    countries.sort((a, b) => {
      return a.population - b.population;
    });

    createListItems(countries);

  } catch (e) {
    console.error(e);
  }
}

fetchCountries();

function createListItems(countries) {

  const countryList = document.getElementById('country-list');

function getRegionClass(currentRegion) {
  switch (currentRegion) {
    case 'Africa':
      return 'blue';
    case 'Americas':
      return 'green';
    case 'Asia':
      return 'red';
    case 'Europe':
      return 'yellow';
    case 'Oceania':
      return 'purple';
    default:
      return 'default';
  }
}
