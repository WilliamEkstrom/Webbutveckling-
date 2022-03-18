let clicked = 0;
let clickPower =1;
let bought = false;
let boughtSpade = false;
let boughtGravskopa = false;
let boughtNuke = false;
let boughtKakmonster = false;

const clickerButton = document.querySelector(".clicker");
const textField = document.querySelector(".clickcount");
const spade = document.querySelector(".spade");
const gravskopa = document.querySelector(".gravskopa");
const nuke = document.querySelector(".nuke");
const kakmonster = document.querySelector(".kakmonster");

clickerButton.addEventListener("click", () => {
    clicked = clicked + clickPower;
    textField.innerHTML = clicked;
});

spade.addEventListener("click", () => {
    if (clicked >= 20 && boughtSpade === false) {
        boughtSpade = true;
        clickPower = 3;
        clicked -= 20;
        textField.innerHTML = clicked;

    }
})

gravskopa.addEventListener("click", () => {
    if (clicked >= 50 && boughtGravskopa === false) {
        boughtGravskopa = true;
        clickPower = 25;
        clicked -= 50;
        textField.innerHTML = clicked;
    }
})

nuke.addEventListener("click", () => {
    if (clicked >= 1500 && boughtNuke === false) {
        boughtNuke = true;
        clickPower = 500;
        clicked -= 1500;
        textField.innerHTML = clicked;
    }
})

kakmonster.addEventListener("click", () => {
    if (clicked >= 25000 && boughtKakmonster === false) {
        boughtKakmonster = true;
        clicked += 50000000;
        clicked -= 25000;
        textField.innerHTML = clicked;
    }
})