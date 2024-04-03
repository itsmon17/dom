const ul = document.querySelector("ul");
const btnContactUs = document.querySelector("button");
const h1 = document.querySelector("h1");
const textButtonContainer = document.querySelector(".text__button__container");
const header = document.querySelector("header");
/////
Array.from(ul.children).forEach((el) =>
    Array.from(el.children).forEach((el) => (el.style.color = "#ff0000"))
);
//
btnContactUs.innerText = "Investigate";
//
h1.style.textTransform = "upperCase";
//
const newBtn = document.createElement("button");
newBtn.innerText = "buttonCreate";
textButtonContainer.append(newBtn);
//
header.style.height = "100px";
