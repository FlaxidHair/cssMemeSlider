const memes = [...document.querySelectorAll(".slider-content-meme")];
const paginationItems = [...document.querySelectorAll(".pagination-wrap")];
const sliderContent = document.querySelector(".slider-wrapper__content");

paginationItems.forEach((el) => {
  el.addEventListener("click", () => {
    paginationItems.forEach((elem) => {
      elem.children[0].classList.remove("active");
    });
    el.children[0].classList.add("active");
    sliderContent.innerHTML = memes[paginationItems.indexOf(el)].outerHTML;
  });
});
