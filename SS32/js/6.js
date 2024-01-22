class Product {
    constructor(id, product_name, price) {
        this.id = id;
        this.product_name = product_name;
        this.price = price;
    }
}

const products = [
    new Product(1, 'Sản phẩm A', 50),
    new Product(2, 'Sản phẩm B', 30),
    new Product(3, 'Sản phẩm C', 70),
];

function sortProductsByPrice(productsArray) {
    for (let i = 0; i < productsArray.length - 1; i++) {
        for (let j = i + 1; j < productsArray.length; j++) {
            if (productsArray[i].price > productsArray[j].price) {
                let temp = productsArray[i];
                productsArray[i] = productsArray[j];
                productsArray[j] = temp;
            }
        }
    }
    return productsArray;
}

const sortedProducts = sortProductsByPrice(products);
console.log('Mảng products sau khi sắp xếp theo giá tăng dần:');
console.log(sortedProducts);
