function Country(name, short, population, flag, continent,) {
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

const menuButton = () => {
    return`
    <button id="menuButton">
        <svg width="40" height="40">
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
        </svg>
        <span>button</span>
    </button>
    `;
};

//Components
const header = (logo, button) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>
    `
}


const countryCard = (name, short, population, flag, continent) => {
    return`
    <div class="card">
        <h3>${name}</h3>
        <h3>${short}</h3>
        <h3>${population}</h3>
        <h3>${continent}</h3>
        <img src="${flag}"></img>
    </div>
    `
}



const loadEvent = async _ => {
    // Get data
    const countryRes = await fetch("https://restcountries.com/v3.1/all"); //await asincron muvelet, azert kell h megvarjuk a betoltest
    const countryArr = await countryRes.json(); //counrtarr varja meg amig lefut a curtyres
    //console.log(countryArr);

    //Process data
    let countries = countryArr.map(function(country){ //a map egy arrayt csinal
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    })

    console.log(countries);


    let cards = "";
    for (const country of countries){
        cards += countryCard(country.name, country.short, country.population, country.flag, country.continent)
    }

    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", header("Countries", menuButton));
    rootElement.insertAdjacentHTML("beforeend", cards);

    const getMenuButton = document.getElementById("menuButton")
    getMenuButton.addEventListener("click", (event) => {
        event.target.classList.toggle("clicked");
    })
}

window.addEventListener("load", loadEvent)