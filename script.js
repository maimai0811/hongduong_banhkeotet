// const slides = document.querySelector(".slides");
// const slideItems = document.querySelectorAll(".slide");
// const totalSlides = slideItems.length;

// let index = 0;

// function showSlide(i) {
//   slides.style.transform = `translateX(-${i * 100}%)`;
// }

// document.querySelector(".next").onclick = () => {
//   index = (index + 1) % totalSlides;
//   showSlide(index);
// };

// document.querySelector(".prev").onclick = () => {
//   index = (index - 1 + totalSlides) % totalSlides;
//   showSlide(index);
// };

// // Auto slide mỗi 4 giây
// setInterval(() => {
//   index = (index + 1) % totalSlides;
//   showSlide(index);
// }, 4000);


const wishes = [
    "Chúc bạn năm mới Bính Ngọ: Mã Đáo Thành Công, Vạn Sự Như Ý!",
    "Chúc gia đình an khang thịnh vượng, tài lộc đầy nhà, sức khỏe dồi dào.",
    "Năm mới chúc bạn luôn vui vẻ như chim sẻ, khỏe mạnh như đại bàng, giàu sang như chim phụng.",
    "Cung chúc tân xuân, vạn sự hanh thông, triệu điều may mắn!",
    "Chúc mừng năm mới 2026! Thành công rực rỡ, hạnh phúc ngập tràn."
];

function changeWish() {
    const display = document.getElementById('wish-display');
    const randomIndex = Math.floor(Math.random() * wishes.length);
    display.innerText = wishes[randomIndex];
}

// Chạy lần đầu khi load trang
window.onload = changeWish;

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// const cartBtn = document.getElementById("cartButton");
// const cartCount = document.querySelector(".cart-count");

// let count = 0;

// cartBtn.addEventListener("click", () => {
//     count++;
//     cartCount.textContent = count;
// });




