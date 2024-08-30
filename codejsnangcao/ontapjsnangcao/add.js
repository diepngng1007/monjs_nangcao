const addProduct = () => {
    const nameInp = document.getElementById('name')
    const imageInp = document.getElementById('image')
    const priceInp = document.getElementById('price')
    const addForm = document.querySelector('form')
    console.log(addForm);

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: nameInp.value,
            image: imageInp.value,
            price: priceInp.value
        }
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }
        fetch("http://localhost:3000/products",options)
        window.location = "./index.html"
        alert("Thêm mới thành công")
    })
}
addProduct();