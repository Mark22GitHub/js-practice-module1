import gallery from "./hongkong.js";
console.log(gallery);

// const body = document.querySelector("body");
// const section = document.querySelector(".section");
// // const section1 = document.getElementsByClassName("section");
// // console.dir(section1);
// const picture = document.querySelector("#wrapper-img");
// // const picture1 = document.getElementById("wrapper-img");
// // console.dir(picture1);
// const showBtn = document.querySelector('[data-action="show"]');
// const sectionTitle = document.querySelector(".section-title");
// // const sectionTitle1 = document.getElementsByClassName("section-title");
// // console.dir(sectionTitle1);
// const mainList = document.querySelector(".main-list");
// // const mainListItems = mainList.querySelectorAll(".main-list-item");
// // console.dir(mainListItems);
// const mainListItems = document.querySelectorAll(".main-list-item");
// const innerListTitle = document.querySelector(".main-list-item__title");
// const eventsList = document.querySelector("#events");
// // const eventsList1 = document.getElementById("events");
// // console.dir(eventsList1);
// const eventListItems = document.querySelectorAll("#events li");
// // const eventListItems1 = document.getElementById("events li");
// // console.dir(eventListItems1);
// const beautyImage = document.getElementById("beauty");
// console.log(beautyImage);
// beautyImage.width = "500";

// console.dir(showBtn);
// // picture.setAttribute("width", "320px");
// picture.width = "450";

// const src1 =
//   "https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
// const src2 =
//   "https://images.pexels.com/photos/5328670/pexels-photo-5328670.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

// showBtn.addEventListener("click", () => {
//   if (beautyImage.src === src1 && sectionTitle.style.color === "brown") {
//     beautyImage.src = src2;
//     sectionTitle.style.color = "navy";
//   } else {
//     beautyImage.src = src1;
//     sectionTitle.style.color = "brown";
//   }
//   //   picture.classList.toggle("wrapper-img");
// });

// sectionTitle.addEventListener("click", () => {
//   console.log("ok");
//   sectionTitle.classList.toggle("section-title");

//   //   sectionTitle.style.fontSize = "50px";
//   //   sectionTitle.style.fontWeight = "900";
//   //   sectionTitle.style.textAlign = "center";
//   //   sectionTitle.style.color = "brown";
// });

// // const tmplt = document.createElement("template");
// // const tmpltList = document.createElement("ul");

// // mainListItems[0].append("template");
// // console.log(tmplt.append(tmpltList);)

// const methodList = `<ul>
// <li>getElementsByClassName</li>
// <li>getElementsById</li>
// <li>querySelector</li>
// <li>querySelectorAll</li>
// </ul>`;

// console.log(mainList.firstElementChild);

// // mainList.firstElementChild.innerHTML += methodList;
// // mainList.firstElementChild.insertAdjacentHTML("beforeend", methodList);

// const list = document.createElement("ul");
// const item1 = document.createElement("li");
// const item2 = document.createElement("li");
// const item3 = document.createElement("li");
// const item4 = document.createElement("li");

// item1.textContent = "getElementsByClassName";
// item2.textContent = "getElementsById";
// item3.textContent = "querySelector";
// item4.textContent = "querySelectorAll";

// list.append(item1, item2, item3, item4);
// mainListItems[0].append(list);
// console.log(list);

// beautyImage.setAttribute(
//   "src",
//   "https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
// );

// ---------------------
const galleryList = document.querySelector(".photo-gallery");
const overlay = document.querySelector(".js-lightbox");
const overlayImage = document.querySelector(".lightbox__image");

const card = gallery.map((el) => {
  //   console.log(el);

  const title = document.createElement("h2");
  title.textContent = el.title;

  const picture = document.createElement("img");
  picture.setAttribute("src", el.image);
  picture.setAttribute("alt", el.category);
  picture.setAttribute("width", "450px");

  const description = document.createElement("p");
  description.textContent = el.description;

  const subtitle = document.createElement("h3");
  subtitle.innerHTML = `<span>категория: </span> ${el.category}`;

  const seria = document.createElement("p");
  seria.innerHTML = `<span>серия: </span> ${el.seria}`;

  const photographer = document.createElement("p");
  photographer.innerHTML = `<span>фотограф: </span> ${el.author.name}`;

  const country = document.createElement("p");
  country.innerHTML = `(${el.author.country}<span> ${el.author.city}</span>)`;

  const galleryItem = document.createElement("li");

  galleryItem.append(
    title,
    picture,
    description,
    subtitle,
    seria,
    photographer,
    country
  );
  galleryItem.setAttribute("class", "main-item");
  galleryItem.setAttribute("class", "gallery-item");
  galleryList.insertAdjacentElement("beforeend", galleryItem);
});
galleryList.addEventListener("click", (event) => {
  if (event.target.nodeName === "IMG") {
    console.log(event.target.src);
    overlay.classList.add("is-open");
    overlayImage.src = event.target.src;
  }
});

overlay.addEventListener("click", clearOverlay);

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    clearOverlay();
  }
});

function clearOverlay() {
  overlay.classList.remove("is-open");
  overlayImage.src = "";
}
