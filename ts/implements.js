var Product = (function () {
    function Product(title, price) {
        this.title = title;
        this.price = price;
    }
    return Product;
}());
var p = new Product('Galaxy S8', 600);
console.log("Title: " + p.title + ", Price: " + p.price);
//# sourceMappingURL=implements.js.map