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
        unit: "Túi 12 bánh",
        price: 150000
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
