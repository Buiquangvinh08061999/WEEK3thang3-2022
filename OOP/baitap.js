function Product(id, name, photo, price) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.price = price;
}

let product1 = [
    new Product(1, "SamSung", "https://i.pravatar.cc/150?img=1", 200000),
    new Product(2, "Nokia", "https://i.pravatar.cc/150?img=2", 200000),
    new Product(3, "Iphone", "https://i.pravatar.cc/150?img=3", 200000),
    new Product(4, "ShSSSS", "https://i.pravatar.cc/150?img=4", 200000),
    new Product(5, "Xiaomi", "https://i.pravatar.cc/150?img=5", 200000),
];

function renderProduct() {
    let anhxaHammap = product1.map(function (value) {
        return `
         <div class="product">
        <h3>${value.name}</h3>
        <img src="${value.photo}" alt="">
        <p>${value.price}</p>
        <p>${value.id}</p>
        <button onclick="addToCart(${value.id})">Add to cart</button>
    </div>`
    })
    document.querySelector("#show-product").innerHTML = anhxaHammap.join("");
}
renderProduct();
