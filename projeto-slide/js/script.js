"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const images = [
        { "id": "1", "url": "./img/bleach.jpg" },
        { "id": "2", "url": "./img/naruto.jpg" },
        { "id": "3", "url": "./img/onepunchman.jpg" },
        { "id": "4", "url": "./img/onepiece.webp" },
        { "id": "5", "url": "./img/pokemon.jpg" }

    ];

    const containerItems = document.querySelector("#container-items");

    const loadImages = (images, container) => {
        images.forEach(image => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");

            const img = document.createElement("img");
            img.src = image.url;
            img.alt = `Image ${image.id}`;

            itemDiv.appendChild(img);
            container.appendChild(itemDiv);
        });
    }

    loadImages(images, containerItems);

    let items = document.querySelectorAll(".item");

    const previous = () => {
        containerItems.appendChild(items[0]);
        items = document.querySelectorAll(".item");
    }

    const next = () => {
        const lastItem = items[items.length - 1];
        containerItems.insertBefore(lastItem, items[0]);
        items = document.querySelectorAll(".item");
    }

    document.querySelector("#next").addEventListener("click", previous);
    document.querySelector("#previous").addEventListener("click", next);
});
