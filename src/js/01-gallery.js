import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const simpleLightbox = require('simplelightbox');
const itemContainer = document.querySelector(`.gallery`);

function createGalleryItemMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <li class="image__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
        })
        .join('');
}

const itemMarkup = createGalleryItemMarkup(galleryItems);

itemContainer.insertAdjacentHTML('beforeend', itemMarkup);

console.log(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});

console.log(galleryItems);
