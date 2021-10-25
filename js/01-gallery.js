import { galleryItems } from './gallery-items.js';
// Change code below this line
const createitem = galleryItems
  .map(
    (el, index) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      data-index="${index}"
      alt="${el.description}"
    />
  </a>
</div>`,
  )
  .join('');
gelleryRef.insertAdjacentHTML('beforeend', createitem);
console.log(galleryItems);
