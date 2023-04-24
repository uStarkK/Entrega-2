const ProductManager = require("./class.js")
const products = new ProductManager("./products.json")
const fs = require("fs")

async function getProducts() {
    const object1 = {
        name: "Fideos",
        price: 20,
        thumbnail: "url.com/url",
        code: "aaa"
    }
    const object2 = {
        nombre: "Guantes",
        price: 25,
        thumbnail: "url.com/url",
        code: "aab"
    }
    const object3 = {
        name: "Camiseta",
        price: 30,
        thumbnail: "url.com/url",
        code: "aac"
    }
    const object4 = {
        name: "Medias",
        price: 10,
        thumbnail: "url.com/url",
        code: "aad"
    }

    await products.saveProduct(object1)
    await products.saveProduct(object2)
    await products.saveProduct(object3)
    await products.saveProduct(object4)
    await products.getAllProducts()
    await products.getProductByid(2).then(id => console.log(id))
    await products.deleteProduct(4)
    await products.deleteProduct(1)
    await products.getAllProducts()
    await products.getProductByid(3).then(id => console.log(id))
    await products.getAllProducts()
    await products.updateProduct(2, {nombre:"Remera", price: 99, code:"aaj"})
}

if (!fs.existsSync("products.json")) {
    fs.writeFileSync("products.json", "[]", "utf-8");
    console.log("aaaaaaa")
} else {
    getProducts()
}




