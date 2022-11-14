import axios from "axios";

async function fetchCountryInformation(){

    const BASE_URI = 'https://restcountries.com'
    const ENDPOINT = 'v3.1/all'

    try {
        const response = await axios.get('BASE_URI + ENDPOINT');
        const { data: countries } = response;

        const countryList = document.getElementById("countries");

        countries.map((country) => {
            country.innerHTML = `
                <li>
                    <h3 class="countries-${countries.region}">$</h3>
                    <p>Has a population of $ { countries [0].polution } people</p>
                    <img src="" alt"${countries[0].population}>
                </li>
               `
    })

    } catch ( error ){
        console.error( error )
    }}
fetchCountryInformation()
