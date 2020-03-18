import * as data from './data.js'
import * as ui from './ui.js'

export const init = () => {
    const btn = ui.getButton();
    btn.addEventListener("click", data.jokeData)
}