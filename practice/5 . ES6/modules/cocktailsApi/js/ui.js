export const $button = document.querySelector("button");
const $imgDiv = document.querySelector(".picture");
const $h1 = document.querySelector("h1");
const $category = document.querySelector("#category");
const $glass = document.querySelector("#glass");
const $p = document.querySelector("p");
const $img = document.createElement("img");

const renderData = (p1, p2, p3, p4, p5) => {
    $img.setAttribute("src", p1);
    $imgDiv.appendChild($img);
    $h1.textContent = p2;
    $category.textContent = `Category: ${p3}`;
    $glass.textContent = `Glass: ${p4}`;
    $p.textContent = p5;
}

export { renderData }