// import url from "../product.js";
const addProduct = () => {
    const name1 = document.getElementById('name')
    const image1 = document.getElementById('image')
    const price1 = document.getElementById('price')
    const addForm = document.querySelector('form')
    console.log(addForm)
    addForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const fromData = {
            name : name1.value,
            image: image1.value,
            price: price1.value

        }
        if(name1.value == ""){
            alert("Vui lòng nhập tên sản phẩm")
            return false
        }
        if(image1.value == ""){
            alert("Vui lòng nhập ảnh sản phẩm")
            return false
        }
        if(price1.value == ""){
            alert("Vui lòng nhập giá sản phẩm")
            return false
        }
        const options = {
            method : "POST",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify(fromData)
        }
        fetch('http://localhost:3000/products',options)
        
        
        window.location = '../index.html';
        alert('Thêm mới thành công')
         
        

          

    })
}
addProduct();