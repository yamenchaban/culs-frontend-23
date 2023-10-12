const previousSlideButton = document.getElementById("previousSlide");
const nextSlideButton = document.getElementById("nextSlide");
const chapterView = document.querySelector(".presentation .chapter:first-child");
const position = document.querySelector(".titles .position");
let currentSlide = 0;

function updateSlideView() {
  position.innerHTML = currentSlide + 1;
  chapterView.style.transition = "transform 0.5s ease-in-out";
  chapterView.style.transform = `translateX(${-100 * currentSlide}vw)`;
}

nextSlideButton.addEventListener("click", (e) => {
  if (currentSlide < chapterView.childElementCount - 1) {
    currentSlide++;
    updateSlideView();
  }
});

previousSlideButton.addEventListener("click", (e) => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlideView();
  }
});

updateSlideView();
