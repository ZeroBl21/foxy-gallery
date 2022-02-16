const isIntersecting = entry => entry.isIntersecting;

const load = (entry) => {
    const container = entry.target;
    const img = container.firstChild;
    const url = img.dataset.src;

    img.src = url;

    observer.unobserve(container);
};

const observer = new IntersectionObserver( entries =>{
    entries
        .filter(isIntersecting)
        .forEach(load)
});

export const registerImg = image => {
    observer.observe(image)
}