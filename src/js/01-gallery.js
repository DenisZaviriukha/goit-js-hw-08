// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryWrapper = document.querySelector('.gallery')
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const createGalleryElements = () => galleryItems.map((element) => 
        `<a class="gallery__item" href="${element.original}">
            <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
        </a>`
).join("") 

galleryWrapper.insertAdjacentHTML('beforeend', createGalleryElements())

let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});     