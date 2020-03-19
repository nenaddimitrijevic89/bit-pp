export const $button = document.querySelector("button");
const $text = document.querySelector(".text");
const $profileImg = document.querySelector(".image")

const renderObject = (param1, param2) => {
    const $h3 = document.createElement("h3");
    $h3.textContent = param1;
    $text.innerHTML = "";
    $text.appendChild($h3);
    const $img = document.createElement("img");
    $img.setAttribute("src", param2);
    $profileImg.innerHTML = "";
    $profileImg.appendChild($img);
}



export { renderObject }