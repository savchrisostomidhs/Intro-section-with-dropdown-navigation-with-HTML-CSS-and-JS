const li = document.querySelectorAll(".dd");
const drop = document.querySelectorAll(".drop");
const arrow = document.querySelectorAll(".arrow");

li.forEach((d, i) => {
    d.addEventListener("click", () => {
        if (window.getComputedStyle(drop[i], null).display === "none") {
            drop[i].style.display = "flex";
            arrow[i].src = "./images/icon-arrow-up.svg";
            arrow[i].alt = "arrow-up";
        } else {
            drop[i].style.display = "none";
            arrow[i].src = "./images/icon-arrow-down.svg";
            arrow[i].alt = "arrow-down";
        }
        drop.forEach((it, ind) => { if (ind !== i) it.style.display = "none"; });
        arrow.forEach((it, ind) => {
            if (ind !== i) {
                it.src = "./images/icon-arrow-down.svg";
                it.alt = "arrow-down";
            }
        });
    })
});

let x = window.matchMedia("(max-width: 1000px)")

if (x.matches) {
    document.querySelector(".hero").src = "./images/image-hero-mobile.png";
} else {
    document.querySelector(".hero").src = "./images/image-hero-desktop.png";
}

const burger = document.querySelector(".burger");
const burgerOpen = document.querySelector(".open");
const burgerClose = document.querySelector(".close");
const nav = document.querySelector(".nav-bar");

burger.addEventListener("click", () => {
    if (window.getComputedStyle(burgerOpen, null).display === "none") {
        burgerOpen.style.display = "block";
        burgerClose.style.display = "none";
        nav.style.animation = "close 1s forwards";
    } else {
        burgerOpen.style.display = "none";
        burgerClose.style.display = "block";
        nav.style.display = "flex";
        nav.style.animation = "open 1s forwards";
    }
});

nav.addEventListener("animationend", () => {
    console.log(window.getComputedStyle(nav, null).animationName === "close")
    if (window.getComputedStyle(nav, null).animationName === "close") {
        nav.style.display = "none";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth <= 1000) {
        burgerOpen.style.display = "block";
        burgerClose.style.display = "none";
        nav.style.display = "none";
    } else {
        burger.style.display = "none"
        nav.style.display = "flex";
    }
});