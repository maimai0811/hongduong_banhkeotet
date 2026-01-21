/*********************************
 * DATA SẢN PHẨM
 *********************************/
const products = [
    {
        id: 1,
        type: 1,
        name: "Bông Lan Mochi Trứng Chảy",
        image: "images/category/1.jpg",
        description: "Kẹo dẻo vị trái cây",
        detail: "Kẹo dẻo nhiều hương vị trái cây tự nhiên, phù hợp cho trẻ em và người lớn.",
        unit: "Túi 500gr",
        price: 150000
    },
    {
        id: 2,
        type: 1,
        name: "Táo Đỏ Sữa Hạt Điều",
        image: "images/category/2.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 140000
    },
    {
        id: 3,
        type: 1,
        name: "Táo Đỏ Sữa Hạt Điều Trà Xanh",
        image: "images/category/3.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 153000
    },
    {
        id: 4,
        type: 1,
        name: "Kẹo Dâu Lát",
        image: "images/category/4.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 215000
    },
    {
        id: 5,
        type: 1,
        name: "Kẹo Xoài Lát",
        image: "images/category/5.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 183000
    },
    {
        id: 6,
        type: 1,
        name: "Nougat Cam Vàng",
        image: "images/category/6.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 210000
    },
    {
        id: 7,
        type: 1,
        name: "Nougat Cam Vàng Trà Xanh",
        image: "images/category/7.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 220000
    },
{
        id: 8,
        type: 1,
        name: "Mứt Trần Bì",
        image: "images/category/8.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 90000
    },
    {
        id: 9,
        type: 1,
        name: "Xoài Sấy",
        image: "images/category/9.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 125000
    },
    {
        id: 10,
        type: 1,
        name: "Mít Sấy",
        image: "images/category/10.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 150000
    },
    {
        id: 11,
        type: 1,
        name: "Bánh Táo Đỏ",
        image: "images/category/11.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 183000
    },
    {
        id: 12,
        type: 3,
        name: "Tết Di Sản",
        image: "images/setchanh/1.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 183000
    },
        {
        id: 13,
        type: 3,
        name: "Tết Danh Thắng 1",
        image: "images/setchanh/1.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 183000
    },
        {
        id: 14,
        type: 3,
        name: "Tết Danh Thắng 2",
        image: "images/setchanh/1.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 183000
    },
        {
        id: 15,
        type: 3,
        name: "Tết Danh Thắng 3",
        image: "images/setchanh/1.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Túi 500gr",
        price: 183000
    },

    {
        id: 16,
        type: 4,
        name: "LỤC BẢO TINH HOA",
        image: "images/setnghetoi/1.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Set",
        price: 1840000
    },
    {
        id: 17,
        type: 4,
        name: "NGŨ QUÝ TINH HOA",
        image: "images/setnghetoi/2.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Set",
        price: 1550000
    },
        {
        id: 18,
        type: 4,
        name: "TAM CHÂU TINH HOA",
        image: "images/setnghetoi/3.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Set",
        price: 970000
    },
        {
        id: 19,
        type: 4,
        name: "SONG BẢO TINH HOA",
        image: "images/setnghetoi/4.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Set",
        price: 690000
    },
        {
        id: 20,
        type: 4,
        name: "NGŨ BẢO TINH HOA",
        image: "images/setnghetoi/5.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Set",
        price: 1600000
    },
        {
        id: 21,
        type: 4,
        name: "TAM BẢO TINH HOA",
        image: "images/setnghetoi/6.jpg",
        description: "Bánh quy bơ thơm",
        detail: "Bánh quy bơ giòn xốp, nướng theo công thức truyền thống.",
        unit: "Set",
        price: 1000000
    },
];

/*********************************
 * RENDER BÁNH KẸO LẺ
 *********************************/
const productListEl = document.getElementById("productList");

function renderProducts() {
    if (!productListEl) return;

    productListEl.innerHTML = "";

    products
        .filter(p => p.type === 1)
        .forEach(p => {
            const div = document.createElement("div");
            div.className = "product-item";
            div.innerHTML = `
                <img src="${p.image}" alt="${p.name}">
                <div class="product-info">
                    <p class="product-name">${p.name}</p>
                    <!-- <p class="product-desc">${p.description || ""}</p>-->
                    <p class="product-price">
                        ${p.price.toLocaleString()}đ / ${p.unit}
                    </p>
                </div>
                <button class="add-cart-btn"
                    data-id="${p.id}"
                    data-type="${p.type}">
                    ＋
                </button>
            `;
            productListEl.appendChild(div);
        });
}

renderProducts();

/*********************************
 * PHÁT SỰ KIỆN THÊM VÀO GIỎ
 *********************************/
document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("add-cart-btn")) return;

    const id = Number(e.target.dataset.id);
    const type = Number(e.target.dataset.type);

    // Gửi event cho cart.js xử lý
    document.dispatchEvent(
        new CustomEvent("add-to-cart", {
            detail: { id, type }
        })
    );
});




function renderSetNgheToi(products) {
  const grid = document.getElementById("setNgheToiGrid");
  if (!grid) return;

  const list = products
    .filter(p => p.type === 4)   // set nghệ tỏi
    .slice(0, 6);

  grid.innerHTML = list.map(p => `
    <div class="setnghetoi-item"
         data-id="${p.id}"
         data-type="4"
         data-set-id="${p.setId || ""}">
         
        <img src="${p.image}" alt="${p.name}">

        <div class="overlay">
            <div class="info">
                <h3 class="name">${p.name}</h3>
                <p class="price">${p.price.toLocaleString()}đ</p>
            </div>

            <button class="btn-plus" type="button">+</button>
        </div>
    </div>
  `).join("");
}



renderSetNgheToi(products);

document.addEventListener("click", function (e) {

  /* =====================
     CLICK NÚT + → ADD CART
  ===================== */
  const btn = e.target.closest(".btn-plus");
  if (btn) {
    e.stopPropagation();

    const item = btn.closest(".setnghetoi-item");
    if (!item) return;

    document.dispatchEvent(new CustomEvent("add-to-cart", {
      detail: {
        id: Number(item.dataset.id),
        type: Number(item.dataset.type),
        setId: item.dataset.setId || null
      }
    }));

    return; // ❌ KHÔNG fly, ❌ KHÔNG toggle
  }

  /* =====================
     CLICK CARD → MOBILE TAP
  ===================== */
  const item = e.target.closest(".setnghetoi-item");
  if (!item) return;

  // Desktop bỏ qua (hover xử lý)
  if (window.innerWidth >= 769) return;

  const isActive = item.classList.contains("active");

  // Đóng card khác
  document.querySelectorAll(".setnghetoi-item.active")
    .forEach(el => el !== item && el.classList.remove("active"));

  // Tap lần 1 → mở
  if (!isActive) {
    item.classList.add("active");

    // rung lắc
    item.classList.remove("tap");
    void item.offsetWidth;
    item.classList.add("tap");
  }
});



function renderSetChanh(products) {
    const circle = document.getElementById("setChanhCircle");
    if (!circle) return;

    const list = products
        .filter(p => p.type === 3)   // set chanh
        .slice(0, 4);                // tối đa 4 lát

    circle.innerHTML = list.map((p, index) => `
        <div class="chanh-slice slice-${index}"
             data-id="${p.id}"
             data-type="${p.type}"
             data-set-id="${p.setId || ""}">
             
            <span class="chanh-name">${p.name}</span>
        </div>
    `).join("");

    // bind event sau khi render
    circle.querySelectorAll(".chanh-slice").forEach(slice => {
        slice.addEventListener("click", () => {
            const id = slice.dataset.id;
            const product = list.find(p => p.id == id);

            if (!product) return;

            console.log("ID:", product.id);
            console.log("TYPE:", product.type);
            console.log("PRODUCT:", product);

            // ví dụ
            // addToCart(product);
            alert(`${product.name}\n${product.price.toLocaleString()}đ`);
        });
    });
}

// renderSetChanh(products);

