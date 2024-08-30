const addProduct = () => {
    const nameInput = document.getElementById('name')
    const imageInput = document.getElementById('image')
    const priceInput = document.getElementById('price')
    const error1 = document.getElementById('error1')    
    const error2 = document.getElementById('error2')    
    const error3 = document.getElementById('error3')    
    // console.log(error1);

    const addForm = document.querySelector('form')

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: nameInput.value,
            image: imageInput.value,
            price: priceInput.value
        }
        if(nameInput.value == ""){
            error1.style.color = "red"
            error1.innerHTML = "Vui lòng nhập tên sản phẩm"
            return false
        }
        if(imageInput.value == ""){
            error2.style.color = "red"
            error2.innerHTML = "Vui lòng nhập tên sản phẩm"
            return false
        }
        if(priceInput.value == ""){
            error3.style.color = "red"
            error3.innerHTML = "Vui lòng nhập tên sản phẩm"
            return false
        }
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }
        fetch("http://localhost:3000/products", options)
        window.location = "./index.html"
        alert("success")
    });
}
addProduct()