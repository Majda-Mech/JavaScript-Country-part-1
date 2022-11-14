import axios from "axios";

async function fetchCountryInformation(){
    const BASE_URI = 'https://restcountries.com';
    const ENDPOINT = 'v3.1/all';
    try {
        const response = await axios.get('BASE_URI + ENDPOINT');
        console.log(countries.data[0]);

        const { data: countries } = response;
        const countryList = document.getElementById("countries");

        countries.map((country) => {
            countryList.innerHTML += `
                <li>
                    <h3 class="countries-">${country[0].region}">${countries[0].name}</h3>
                    <p>Has a population of ${country.data[0].polution} people</p>
                    <img src="${country[0].flags.png}" alt="${country[0].name}"/>
                </li>
               `
        })
    }catch ( error ){
        console.error( error )
    }
}
fetchCountryInformation()
