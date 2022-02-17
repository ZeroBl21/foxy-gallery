import { registerImg } from "./lazy.js";

// Navbar 


const hideNavbarMedia = window.matchMedia("(max-width: 600px)")
const pageTitle = document.querySelector("header .page-title");
const header = document.querySelector("header");
const nav = document.querySelector("header nav");

hideNavbarMedia.addEventListener("change", (ev) => {
    header.classList.toggle("active", ev.matches);

    if (!ev.matches) {
        nav.classList.remove("unfold");
    }
});

pageTitle.addEventListener("click", () => {
    if (header.classList.contains("active")) {
        nav.classList.toggle("unfold");
    }
});

header.classList.toggle("active", hideNavbarMedia.matches);
//

const baseUrl = "https://randomfox.ca/floof/";
const appNode = document.querySelector('#images');
const btnAdd = document.querySelector('#btn-fox');
const btnClear = document.querySelector('#btn-clear');


//web api
const fetchData = async () => {
        const response = await fetch(baseUrl);
        const json = await response.json();
        return json;
}

const imageContainer = async () => {
    try {
        const res = await fetchData();

        const foxImage = document.createElement("img")
        const container = document.createElement("div");

        Promise.resolve(res)
            .then(res => {
                foxImage.dataset.src = res.image;
                foxImage.classList.add('foxy-img');
                container.appendChild(foxImage);
            })

        return container;
    } catch (e) {
        throw new Error(e.message);
    }
}

async function addImage() {
    const newImage = await imageContainer();
    appNode.append(newImage);
    registerImg(newImage);
}

function clearImages() {
    appNode.innerHTML = '';
}

btnAdd.addEventListener('click', addImage);
btnClear.addEventListener('click', clearImages);