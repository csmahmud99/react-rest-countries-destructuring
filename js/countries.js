// Step -1: Fetch all country data from the External API

const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => displayCountries(data));
}

// Step - 2: Display all loaded data from the External API to the Project UI
const displayCountries = countries => {
    // console.log(countries);
    console.log(countries[0]);
    console.log(countries[5]);

    // Step -3: Getting single countries data one by one by JS Array Map Method
    // const allCountriesHTML = countries.map(country => console.log(country));

    // Step - 5: Calling the Auxiliary Function
    const allCountriesHTML = countries.map(country => getCountryHTML(country));

    // console.log(allCountriesHTML);
    // console.log(allCountriesHTML[0]);

    // Step-6: Showing the dynamic data inside the HTML file by linking that with js code
    const container = document.getElementById("countries");

    // container.innerHTML = allCountriesHTML;

    // Step-7: The 'join()' method is used in the following line of code is to display the countries without 'Comma Sign (,) which is found from the variable named 'AllCountriesHTML'.
    container.innerHTML = allCountriesHTML.join(" ");
}

// Step-4: Auxiliary Function for showing the data on the UI

/* 
// Process 01: Direct data showing method without Destructuring
const getCountryHTML = country => {
    // console.log(country);
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src=${country.flags.png} alt="country-flags" />
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Continent:</strong> ${country.continents}</p>
        </div>
    `
} 
*/

/* 
// Process 02: Data showing using Destructuring inside the function
const getCountryHTML = country => {
    const {name, flags, capital, continents} = country;

    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src=${flags.png} alt="country-flags" />
            <p><strong>Capital:</strong> ${capital}</p>
            <p><strong>Continent:</strong> ${continents}</p>
        </div>
    `
} 
*/

// Calling the Mother Function
loadCountries();