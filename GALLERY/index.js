import gallery from "../GALLERY/gallery.js";
const list = document.querySelector(".photo-gallery");
const overlay = document.querySelector(".js-lightbox");
const imgOverlay = document.querySelector(".lightbox__image");

const cart = gallery.map((el, index) => {
  const title = document.createElement("h2");
  title.textContent = el.title;
  const img = document.createElement("img");
  img.setAttribute("src", el.image);
  img.setAttribute("alt", el.category);
  img.setAttribute("width", "350px");
  img.setAttribute("data-index", index);

  const description = document.createElement("p");
  description.textContent = el.description;

  const subtitle = document.createElement("h3");
  subtitle.innerHTML = `<span>категория:${el.category} </span> `;

  const seria = document.createElement("p");
  seria.innerHTML = `<span>серия: </span>${el.seria}`;

  const photographer = document.createElement("p");
  photographer.innerHTML = `<span>фотограф:${el.author.name} </span> `;

  const country = document.createElement("p");
  country.innerHTML = `(${el.author.country}<span>${el.author.city}</span>)`;

  const galleryItem = document.createElement("li");

  galleryItem.append(
    title,
    img,
    description,
    subtitle,
    seria,
    photographer,
    country
  );
  list.append(galleryItem);
});

// -Открыввем фото галереи и открываем только по клику на фото (сделано в ифе)

list.addEventListener("click", (e) => {
  if (e.target.nodeName === "IMG") {
    overlay.classList.add("is-open");
    imgOverlay.src = e.target.src;
    imgOverlay.dataset.index = e.target.dataset.index;
  }
});

// - закрываем всплытое окно с фото
overlay.addEventListener("click", () => {
  clearOverlay();
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    clearOverlay();
  }
  if (event.key === "ArrowLeft") {
    arrowLeft();
  }
  if (event.key === "ArrowRight") {
    arrowRight();
  }
});

const clearOverlay = function () {
  overlay.classList.remove("is-open");
  imgOverlay.src = "";
};

function setNewSrc(step, index) {
  imgOverlay.dataset.index = `${index + step}`;

  imgOverlay.src = gallery[index + step].image;
}

function arrowLeft() {
  let index = +imgOverlay.dataset.index;
  if (index === 0) {
    setNewSrc(0, gallery.length - 1);
    return;
  }
  console.log(index);
  setNewSrc(-1, index);
}

function arrowRight() {
  let index = +imgOverlay.dataset.index;
  if (index === gallery.length - 1) {
    setNewSrc(0, 0);
    return;
  }
  console.log(index);
  setNewSrc(1, index);
}
