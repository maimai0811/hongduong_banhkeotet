const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const totalSlides = slideItems.length;

let index = 0;

function showSlide(i) {
  slides.style.transform = `translateX(-${i * 100}%)`;
}

document.querySelector(".next").onclick = () => {
  index = (index + 1) % totalSlides;
  showSlide(index);
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
};

// Auto slide mỗi 4 giây
setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide(index);
}, 4000);
