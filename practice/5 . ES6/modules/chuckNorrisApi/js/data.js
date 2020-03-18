import { render } from './ui.js';

const jokeData = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.chucknorris.io/jokes/random");
    request.send();

    request.addEventListener("load", function() {
        let data = JSON.parse(request.responseText);
        render(data.value);
    })
}

export { jokeData };