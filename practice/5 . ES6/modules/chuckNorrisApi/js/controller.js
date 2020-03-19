import * as data from './data.js';
import * as ui from './ui.js';

export const init = () => {
    render();
}

const render = () => {
    ui.$button.addEventListener("click", data.dataObject)
}