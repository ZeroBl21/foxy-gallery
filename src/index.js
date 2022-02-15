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

const baseUrl = "https://randomfox.ca/floof/",
    appNode = document.querySelector('#images');
    btnAdd = document.querySelector('#btn-fox')


//web api
async function fetchData() {
    const response = await fetch(baseUrl),
        jsonResponse = await response.json();

    //Se toma la imagen
    const foxImage = document.createElement("img");
    foxImage.src = jsonResponse.image;
    foxImage.classList.add('foxy-img');

    //Se crea el contenedor
    const container = document.createElement("div");

    //Se Agrega la imagen al contenedor
    container.append(foxImage);

    //Se Agrega al DOM
    console.log('Fox Added')
    appNode.append(container)
    
}

btnAdd.addEventListener('click', fetchData)
