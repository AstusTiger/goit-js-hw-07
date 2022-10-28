import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

//gallery.addEventListener("click", openModal);

let imageList = "";

for (let item of galleryItems) {
  imageList += `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`;
}

gallery.insertAdjacentHTML("afterbegin", imageList);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

console.log(lightbox);
