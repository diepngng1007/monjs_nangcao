const updateProduct = () => {
    const urlParams = new URLSearchParams(document.location.search)
    const id = urlParams.get('id')

    const nameInput = document.getElementById('name')
    const imageInput = document.getElementById('image')
    const priceInput = document.getElementById('price')
    const updateForm = document.querySelector('form')

    fetch("http://localhost:3000/products/" + id)
    .then((response) => response.json())
    .then((data) => {
        nameInput.value = data.name,
        imageInput.value = data.image,
        priceInput.value = data.price
    })

    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: nameInput.value,
            image: imageInput.value,
            price: priceInput.value
        }
        const options = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }
        fetch("http://localhost:3000/products/" + id, options)
        window.location = "./index.html"
        alert("success")
    })
}
updateProduct()