/* =====================
   DATA
===================== */
const giftSets = [
  { id: "1", name: "CÁT TƯỜNG NHƯ Ý", image: "images/set/1.jpg", order: 1 },
  { id: "2", name: "TỨ LINH VƯỢNG NIÊN", image: "images/set/2.jpg", order: 2 },
  { id: "3", name: "SONG PHƯỢNG VINH HOA", image: "images/set/3.jpg", order: 3 },
  { id: "4", name: "HOA MINH CÁT LỘC", image: "images/set/3.jpg", order: 4 },
  { id: "5", name: "MINH NIÊN HỒNG PHÁT", image: "images/set/5.jpg", order: 5 },
  { id: "6", name: "LONG VÂN KHAI VẬN", image: "images/set/6.jpg", order: 6 },
  { id: "7", name: "XUÂN NGỌC CÁT VƯỢNG", image: "images/set/7.jpg", order: 7 },
  { id: "8", name: "MINH NIÊN LỤC VƯỢNG", image: "images/set/8.jpg", order: 8 }
];

/* =====================
   RENDER
===================== */
const track = document.getElementById("giftTrack");

giftSets
  .sort((a, b) => a.order - b.order)
  .forEach(set => {
    const div = document.createElement("div");
    div.className = "gift-item";
    div.innerHTML = `
      <img src="${set.image}" alt="${set.name}">
      <h3>${set.name}</h3>
      <p>Xem chi tiết</p>
    `;
    div.onclick = () => openSetDetail(set.id);
    track.appendChild(div);
  });

/* =====================
   SLIDER CONTROLLER
===================== */
let currentIndex = 0;
let slideTimer;

function getItems() {
  return document.querySelectorAll(".gift-item");
}

function getItemWidth() {
  const item = getItems()[0];
  return item ? item.offsetWidth + 16 : 0;
}

function updateSlide() {
  track.style.transform =
    `translateX(-${currentIndex * getItemWidth()}px)`;
}

function slideNext() {
  const items = getItems();
  if (!items.length) return;

  currentIndex = (currentIndex + 1) % items.length;
  updateSlide();
  resetAutoSlide();
}

function slidePrev() {
  const items = getItems();
  if (!items.length) return;

  currentIndex =
    (currentIndex - 1 + items.length) % items.length;
  updateSlide();
  resetAutoSlide();
}

function startAutoSlide() {
  slideTimer = setInterval(slideNext, 3000);
}

function resetAutoSlide() {
  clearInterval(slideTimer);
  startAutoSlide();
}

/* =====================
   INIT
===================== */
startAutoSlide();

/* =====================
   OPTIONAL: resize fix
===================== */
window.addEventListener("resize", updateSlide);
