import { renderData } from './ui.js'

const getData = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php");
    request.send();

    request.addEventListener("load", () => {
        const data = JSON.parse(request.responseText);
        renderData(data.drinks[0].strDrinkThumb, data.drinks[0].strDrink, data.drinks[0].strCategory, data.drinks[0].strGlass, data.drinks[0].strInstructions);
    })
}

export { getData }