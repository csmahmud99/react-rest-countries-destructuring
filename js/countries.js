// Fetch all country data from the External API

const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => displayCountries(data));
}

// Display all loaded data from the External API to the Project UI
const displayCountries = countries => {
    // console.log(countries);

    // Getting single countries data one by one by JS Array Map Method
    const allCountriesHTML = countries.map(country => console.log(country));
}


loadCountries();