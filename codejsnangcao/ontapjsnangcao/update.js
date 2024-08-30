const updateProduct = () => {
    const urlParams = new URLSearchParams(document.location.search)
    const id = urlParams.get('id')

    const nameInp = document.getElementById('name')
    const imageInp = document.getElementById('image')
    const priceInp = document.getElementById('price')
    const updateForm = document.querySelector('form')
    console.log(imageInp);

    fetch("http://localhost:3000/products/" + id)
    .then((response) => response.json())
    .then((data) => {
        nameInp.value = data.name,
        imageInp.value = data.image,
        priceInp.value = data.price
    })

    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: nameInp.value,
            image: imageInp.value,
            price: priceInp.value
        }
        const options = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }
        fetch("http://localhost:3000/products/" + id, options)
        window.location = "./index.html"
        alert("Cập nhật thành công")
    })
}
updateProduct()