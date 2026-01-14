/*********************************
 * BIẾN DOM
 *********************************/
const cartBtn = document.getElementById("cartButton");
const cartPopup = document.getElementById("cartPopup");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

const cartType1El = document.getElementById("cartType1");
const cartType2El = document.getElementById("cartType2");

/*********************************
 * DATA GIỎ HÀNG
 *********************************/
let cart = [];

/*********************************
 * MỞ / ĐÓNG POPUP
 *********************************/
cartBtn.addEventListener("click", () => {
    cartPopup.style.right = "0";
    cartOverlay.style.display = "block";
});

closeCart.addEventListener("click", closePopup);
cartOverlay.addEventListener("click", closePopup);

function closePopup() {
    cartPopup.style.right = "-100%";
    cartOverlay.style.display = "none";
}

/*********************************
 * NHẬN EVENT THÊM VÀO GIỎ
 *********************************/
document.addEventListener("add-to-cart", function (e) {
    const { id, type, setId = null } = e.detail;

    let product = null;
    if (type === 1) {
        product = products.find(p => p.id === id);
    } else if (type === 2) {
        product = productsInSet.find(p => p.id === id);
    }

    if (!product) return;

    const cartItem = cart.find(
        i => i.id === id && i.type === type
    );

    if (cartItem) {
        cartItem.qty++;
    } else {
        cart.push({
            id: product.id,
            type: product.type,
            setId,                
            name: product.name,
            unit: product.unit,
            price: product.price,
            qty: 1
        });
    }

    renderCart();
});


/*********************************
 * RENDER GIỎ HÀNG
 *********************************/
// function renderCart() {
//     cartType1El.innerHTML = "";
//     cartType2El.innerHTML = "";

//     cart.forEach(item => {
//         const div = document.createElement("div");
//         div.className = "cart-item";
//         div.dataset.id = item.id;
//         div.dataset.type = item.type;

//         const image = getProductImage(item);

//         div.innerHTML = `
//             ${item.type === 1 ? `<img src="${image}">` : ""}
//             <div class="item-info">
//                 <p class="item-name">${item.name}</p>
//                 <p class="item-price">
//                     ${item.price.toLocaleString()}đ / ${item.unit}
//                 </p>
//             </div>

//             <div class="qty-control">
//                 <button class="decrease">-</button>
//                 <span>${item.qty}</span>
//                 <button class="increase">+</button>
//             </div>

//             <button class="remove-item">✖</button>
//         `;

//         if (item.type === 1) {
//             cartType1El.appendChild(div);
//         } else {
//             div.classList.add("no-img");
//             cartType2El.appendChild(div);
//         }
//     });

//     updateCartBadge();

//     updateCartTotal();
// }


function renderCart() {
    cartType1El.innerHTML = "";
    cartType2El.innerHTML = "";

    /* =====================
       BÁNH KẸO LẺ (GIỮ NGUYÊN)
    ===================== */
    cart.filter(i => i.type === 1).forEach(item => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.dataset.id = item.id;
        div.dataset.type = item.type;

        const image = getProductImage(item);

        div.innerHTML = `
            <img src="${image}">
            <div class="item-info">
                <p class="item-name">${item.name}</p>
                <p class="item-price">
                    ${item.price.toLocaleString()}đ / ${item.unit}
                </p>
            </div>

            <div class="qty-control">
                <button class="decrease">-</button>
                <span>${item.qty}</span>
                <button class="increase">+</button>
            </div>

            <button class="remove-item">✖</button>
        `;

        cartType1El.appendChild(div);
    });

    /* =====================
       SET QUÀ (GROUP KHI RENDER)
    ===================== */
    const setItems = cart.filter(i => i.type === 2);

    // group theo setId
    const grouped = setItems.reduce((acc, item) => {
        if (!acc[item.setId]) acc[item.setId] = [];
        acc[item.setId].push(item);
        return acc;
    }, {});

    Object.keys(grouped).forEach(setId => {
        const setInfo = giftSets.find(s => s.id === setId);

        // wrapper set cha
        const setWrap = document.createElement("div");
        setWrap.className = "cart-set";

        // title set cha
        setWrap.innerHTML = `
            <h5 class="cart-set-title">
                🎁 ${setInfo?.name || "Set quà"}
            </h5>
        `;

        // render từng set con (GIỐNG HỆT CART ITEM CŨ)
        grouped[setId].forEach(item => {
            const div = document.createElement("div");
            div.className = "cart-item no-img set-child";
            div.dataset.id = item.id;
            div.dataset.type = item.type;

            div.innerHTML = `
                <div class="item-info">
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">
                        ${item.price.toLocaleString()}đ / ${item.unit}
                    </p>
                </div>

                <div class="qty-control">
                    <button class="decrease">-</button>
                    <span>${item.qty}</span>
                    <button class="increase">+</button>
                </div>

                <button class="remove-item">✖</button>
            `;

            setWrap.appendChild(div);
        });

        cartType2El.appendChild(setWrap);
    });

    updateCartBadge();
    updateCartTotal();
}


/*********************************
 * TĂNG / GIẢM / XOÁ
 *********************************/
document.addEventListener("click", function (e) {
    const cartItemEl = e.target.closest(".cart-item");
    if (!cartItemEl) return;

    const id = cartItemEl.dataset.id;
    const type = Number(cartItemEl.dataset.type);
    const item = cart.find(i => i.id === id && i.type === type);

    if (!item) return;

    if (e.target.classList.contains("increase")) {
        item.qty++;
        renderCart();
    }

    if (e.target.classList.contains("decrease")) {
        if (item.qty > 1) item.qty--;
        renderCart();
    }

    if (e.target.classList.contains("remove-item")) {
        cart = cart.filter(i => !(i.id === id && i.type === type));
        renderCart();
    }
});

/*********************************
 * BADGE GIỎ HÀNG
 *********************************/
function updateCartBadge() {
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    document.querySelector(".cart-count").textContent = totalQty;
}

/*********************************
 * LẤY ẢNH SẢN PHẨM
 *********************************/
function getProductImage(cartItem) {
    const product = products.find(
        p => p.id === cartItem.id && p.type === cartItem.type
    );
    return product ? product.image : "";
}


const cartTotalEl = document.getElementById("cartTotal");
function calculateTotal() {
    return cart.reduce((sum, item) => {
        return sum + item.price * item.qty;
    }, 0);
}
function updateCartTotal() {
    const total = calculateTotal();
    cartTotalEl.textContent = total.toLocaleString() + "đ";
}

