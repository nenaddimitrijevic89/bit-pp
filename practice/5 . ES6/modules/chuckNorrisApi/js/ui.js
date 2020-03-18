export const getButton = () => document.querySelector("button");
const $main = document.querySelector(".jokes")

const render = (data) => {
    const $h3 = document.createElement("h3");
    $h3.textContent = data;
    $main.appendChild($h3);
}

export { render };