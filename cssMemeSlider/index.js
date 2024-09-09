const memes = [...document.querySelectorAll(".slider-content-meme")];
const paginationItems = [...document.querySelectorAll(".pagination-wrap")];
const sliderContent = document.querySelector(".slider-wrapper__content");
const message = document.querySelector(".slider-wrapper__text");
const messageText = ["Первое", "Второе", "Третье", "Четвертое"];
paginationItems.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.children[0].classList.contains("active")) {
      return;
    }
    sliderContent.style.opacity = 0;
    message.style.opacity = 0;

    setTimeout(() => {
      paginationItems.forEach((elem) => {
        elem.children[0].classList.remove("active");
      });
      el.children[0].classList.add("active");
      message.textContent = messageText[paginationItems.indexOf(el)];
      sliderContent.innerHTML = memes[paginationItems.indexOf(el)].outerHTML;
    }, 250);

    setTimeout(() => {
      sliderContent.style.opacity = 1;
      message.style.opacity = 1;
    }, 300);
  });
});
