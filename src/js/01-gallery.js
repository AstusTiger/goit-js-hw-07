import { galleryItems } from "./gallery-items.js";
//import * as basicLightbox from "basiclightbox";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", openModal);

// let imageList = "";
// for (let item of galleryItems) {
//   imageList += `<div class="gallery__item">
//     <a class="gallery__link" href=${item.original}>
//       <img

//         class="gallery__image"
//         src=${item.preview}
//         data-source=${item.original}
//         alt=${item.description}
//       />
//     </a>
//   </div>`;
// }

// const imageList = galleryItems
//   .map(
//     (item) => `<div class="gallery__item">
//      <a class="gallery__link" href=${item.original}>
//        <img

//          class="gallery__image"
//          src=${item.preview}
//        data-source=${item.original}
//        alt=${item.description}
//      />
//    </a>
//   </div>`
//   )
//   .join("");

const imageList = galleryItems.reduce((acc, item) => {
  return (
    acc +
    `<div class="gallery__item">
     <a class="gallery__link" href=${item.original}>
       <img class="gallery__image" src=${item.preview}
       data-source=${item.original}
       alt=${item.description} />
   </a>
  </div>`
  );
}, "");

function openModal(e) {
  e.preventDefault();
  console.log(e.target);
  const body = document.querySelector("body");
  if (e.target === e.currentTarget) return;

  const image = e.target;
  function closeModal(e) {
    if (e.key === "Escape") {
      document.removeEventListener("keyup", closeModal);

      instance.close();
    }
  }

  document.addEventListener("keyup", closeModal);

  const instance = basicLightbox.create(`
    <img src=${image.dataset.source} />
  `);
  instance.show();

  console.log(e.currentTarget);
}

gallery.insertAdjacentHTML("afterbegin", imageList);
