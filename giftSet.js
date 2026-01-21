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


const productsInSet = [
  {
    id: "1_1",
    setId: "1",
    type: 2,
    name: "CÁT TƯỜNG NHƯ Ý 1",
    image: "images/set/1_1.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      "Bánh Cookies Mochi Chocolate 200g",
      "Hạt Điều Rang Muối 120g",
      "Nho Khô Chile 3 Màu 120g",
      "Xoài Sấy Dẻo 250g",
      "Kẹo Dừa Lát 200g",
      "Khô Gà Lá Chanh 120g",
      "Rượu Vang Chile Villa Carino",
      "Vỏ hộp carton lạnh cánh mở vali cắt CNC cửa sổ ép kim phủ UV kèm túi xách đồng bộ"
    ]
    ,
    unit: "Set",
    price: 890000
  },
  {
    id: "1_2",
    setId: "1",
    type: 2,
    name: "CÁT TƯỜNG NHƯ Ý 2",
    image: "images/set/1_1.jpg",
    description: "Bánh quy bơ thơm",
    detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
    contains: [

    ],
    unit: "Set",
    price: 955000
  },
  {
    id: "1_3",
    setId: "1",
    type: 2,
    name: "CÁT TƯỜNG NHƯ Ý (Phiên bản không rượu)",
    image: "images/set/1_1.jpg",
    description: "Bánh quy bơ thơm",
    detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
    contains: [

    ],
    unit: "Set",
    price: 845000
  },
  {
    id: "2_1",
    setId: "2",
    type: 2,
    name: "TỨ LINH VƯỢNG NIÊN 1",
    image: "images/set/2_1.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 775000
  },
  {
    id: "2_2",
    setId: "2",
    type: 2,
    name: "TỨ LINH VƯỢNG NIÊN 2",
    image: "images/set/2_1.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 845000
  },
  {
    id: "2_3",
    setId: "2",
    type: 2,
    name: "TỨ LINH VƯỢNG NIÊN (Phiên bản không rượu)",
    image: "images/set/2_1.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 585000
  },
  {
    id: "3_1",
    setId: "3",
    type: 2,
    name: "SONG PHƯỢNG VINH HOA 1",
    image: "images/set/3_1.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 1055000
  },
  {
    id: "3_2",
    setId: "3",
    type: 2,
    name: "SONG PHƯỢNG VINH HOA 2",
    image: "images/set/3_2.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 925000
  },
  {
    id: "3_3",
    setId: "3",
    type: 2,
    name: "SONG PHƯỢNG VINH HOA 3",
    image: "images/set/3_3.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 1095000
  },
  {
    id: "3_4",
    setId: "3",
    type: 2,
    name: "SONG PHƯỢNG VINH HOA (Phiên bản không rượu 1)",
    image: "images/set/3_3.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 645000
  },
  {
    id: "3_5",
    setId: "3",
    type: 2,
    name: "SONG PHƯỢNG VINH HOA (Phiên bản không rượu 2)",
    image: "images/set/3_3.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 845000
  },
  {
    id: "4_1",
    setId: "4",
    type: 2,
    name: "HOA MINH CÁT LỘC 1",
    image: "images/set/4_1.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 520000
  },
  {
    id: "5_1",
    setId: "5",
    type: 2,
    name: "MINH NIÊN HỒNG PHÁT 1",
    image: "images/set/5_1.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 560000
  },
  {
    id: "5_2",
    setId: "5",
    type: 2,
    name: "MINH NIÊN HỒNG PHÁT 2",
    image: "images/set/5_1.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 645000
  },
  {
    id: "6_1",
    setId: "6",
    type: 2,
    name: "LONG VÂN KHAI VẬN 1",
    image: "images/set/6.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 1095000
  },
  {
    id: "6_2",
    setId: "6",
    type: 2,
    name: "LONG VÂN KHAI VẬN 2",
    image: "images/set/6.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 929000
  },
  {
    id: "7_1",
    setId: "7",
    type: 2,
    name: "XUÂN NGỌC CÁT VƯỢNG 1",
    image: "images/set/7.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [

    ],
    unit: "Set",
    price: 1479000
  },
  {
    id: "7_2",
    setId: "7",
    type: 2,
    name: "XUÂN NGỌC CÁT VƯỢNG 2",
    image: "images/set/7.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [

    ],
    unit: "Set",
    price: 1935000
  },
  {
    id: "7_3",
    setId: "7",
    type: 2,
    name: "XUÂN NGỌC CÁT VƯỢNG 3",
    image: "images/set/7.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [

    ],
    unit: "Set",
    price: 1315000
  },
  {
    id: "7_4",
    setId: "7",
    type: 2,
    name: "XUÂN NGỌC CÁT VƯỢNG 4",
    image: "images/set/7.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [

    ],
    unit: "Set",
    price: 1675000
  },
  {
    id: "7_5",
    setId: "7",
    type: 2,
    name: "XUÂN NGỌC CÁT VƯỢNG 5",
    image: "images/set/7.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [

    ],
    unit: "Set",
    price: 2135000
  },
  {
    id: "8_1",
    setId: "8",
    type: 2,
    name: "MINH NIÊN LỤC VƯỢNG 1",
    image: "images/set/8.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 770000
  },
  {
    id: "8_2",
    setId: "8",
    type: 2,
    name: "MINH NIÊN LỤC VƯỢNG 2",
    image: "images/set/8.jpg",
    description: "Kẹo dẻo vị trái cây",
    detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
    contains: [
      
    ],
    unit: "Set",
    price: 669000
  },
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
  slideTimer = setInterval(slideNext, 50000);
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

/* =====================
   TOUCH SUPPORT (MOBILE)
===================== */
let startX = 0;
let endX = 0;
const slider = document.querySelector(".gift-slider");

slider.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", e => {
  endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  const diff = startX - endX;

  if (Math.abs(diff) > 50) { // ngưỡng vuốt
    if (diff > 0) {
      slideNext(); // vuốt sang trái
    } else {
      slidePrev(); // vuốt sang phải
    }
  }
});



slider.addEventListener("touchstart", () => {
  clearInterval(slideTimer);
});

slider.addEventListener("touchend", () => {
  startAutoSlide();
});


let currentSetProducts = [];
let selectedProduct = null;

function openSetDetail(setId) {
  currentSetProducts = productsInSet.filter(p => p.setId === setId);
  if (!currentSetProducts.length) return;

  renderSetOptions();
  selectProduct(currentSetProducts[0]); // mặc định Set 1

  document.getElementById("setPopup").classList.remove("hidden");
}

/* Render nút Set 1 / Set 2 / Set 3 */
function renderSetOptions() {
  document.getElementById("popupImage").src = 'images/set/' + currentSetProducts[0].setId + '.jpg';
  const container = document.getElementById("setOptions");
  container.innerHTML = "";

  currentSetProducts.forEach((product, index) => {
    const btn = document.createElement("button");
    btn.textContent = `Set ${index + 1}`;
    btn.onclick = () => selectProduct(product);
    container.appendChild(btn);
  });
}

/* Khi chọn 1 set */
function selectProduct(product) {
  selectedProduct = product;

  // document.getElementById("popupImage").src = product.image;
  document.getElementById("popupName").textContent = product.name;
  // document.getElementById("popupDescription").textContent = product.description;
  // document.getElementById("popupDetail").textContent = product.detail;
  document.getElementById("popupPrice").textContent =
    product.price.toLocaleString() + "đ";

  renderContains(product.contains || []);

  document.querySelectorAll(".set-options button")
    .forEach((btn, i) => {
      btn.classList.toggle(
        "active",
        currentSetProducts[i].id === product.id
      );
    });
}

/* Render danh sách thành phần */
function renderContains(contains) {
  const ul = document.getElementById("popupContains");
  ul.innerHTML = "";

  if (!contains.length) {
    ul.innerHTML = "<li>Đang cập nhật thành phần</li>";
    return;
  }

  contains.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

/* Đóng popup */
function closePopupShowSet() {
  document.getElementById("setPopup").classList.add("hidden");
}

function addToCart() {
  document.dispatchEvent(new CustomEvent("add-to-cart", {
    detail: {
      id: selectedProduct.id,
      type: 2,
      setId: selectedProduct.setId
    }
  }));

  // closePopupShowSet();
}




// function addToCart() {
//   if (!selectedProduct) return;

//   cart.push({
//     ...selectedProduct,
//     quantity: 1
//   });

//   closePopup();
//   renderCart(); // nếu bạn có hàm này
// }


const popupImage = document.getElementById("popupImage");
const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");

/* mở viewer */
popupImage.addEventListener("click", function () {
  viewerImage.src = this.src;
  viewerImage.classList.remove("zoomed");
  imageViewer.classList.remove("hidden");
});

/* đóng khi click ra ngoài */
imageViewer.addEventListener("click", function (e) {
  if (e.target === imageViewer || e.target.classList.contains("image-viewer-overlay")) {
    imageViewer.classList.add("hidden");
    viewerImage.classList.remove("zoomed");
  }
});

/* zoom ảnh khi click vào ảnh */
viewerImage.addEventListener("click", function (e) {
  e.stopPropagation(); // không đóng viewer
  this.classList.toggle("zoomed");
});

