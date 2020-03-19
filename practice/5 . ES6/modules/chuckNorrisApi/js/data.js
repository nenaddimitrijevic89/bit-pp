import { renderObject } from './ui.js';

const dataObject = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.chucknorris.io/jokes/random");
    request.send();

    request.addEventListener("load", () => {
        let data = JSON.parse(request.responseText);
        renderObject(data.value, data.icon_url);
    })
}

export { dataObject };