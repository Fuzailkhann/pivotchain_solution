const productForm = document.getElementById("input-form")
const productList = document.getElementById("product-list")
const productName = document.getElementById("name")
const productDescription = document.getElementById("description")
const productPrice = document.getElementById("price")

let products = [
    { id: 1, name: 'Product 1', price: 10, description: 'default 1 is here' },
    { id: 2, name: 'Product 2', price: 20, description: 'default product 2 is here' },
    { id: 3, name: 'Product 3', price: 30, description: 'default  product 3 here' }
  ];
  

const renderProduct =() =>{
    productList.innerHTML =""

    products.forEach((product) =>{
        const li = document.createElement("li")
        li.innerHTML = `
        <strong>${product.name}</strong>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <button onclick ="editProduct(${product.id})">edit</button>
        <button onclick ="deleteProduct(${product.id})" >delete</button>
        `
        productList.appendChild(li)

    })
}

function addProduct(){
    const newProduct = {
        id: products.length + 1,
        name : productName.value ,
        description: productDescription.value ,
        price : parseFloat( productPrice.value)
    }
    products.push(newProduct)
    renderProduct()
    productForm.reset();
}


function editProduct(productId) {
    const product = products.find(product => product.id === productId);
    if (product) {
      productName.value = product.name;
      productPrice.value = product.price;
      productDescription.value = product.description;
      deleteProduct(productId);
    }
  }

function deleteProduct(productId) {
    products = products.filter((product) => product.id !== productId )
    renderProduct()
}
productForm.addEventListener('submit' ,  (e) =>{
    e.preventDefault()
    addProduct()
})

renderProduct()