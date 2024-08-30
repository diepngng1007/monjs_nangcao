// import url from "../product.js";
const updateProduct = () => {
    const urlParams = new URLSearchParams(document.location.search);
    const id = urlParams.get('id');

    const name1 = document.getElementById('name')
    const image1 = document.getElementById('image')
    const price1 = document.getElementById('price')
    const updateForm = document.querySelector('form')
    console.log(price1)

    //call api để lấy dữ liệu
    fetch("http://localhost:3000/products/" + id)
    .then((response) => response.json())
    .then((data) => {
        name1.value = data.name,
        image1.value = data.image,
        price1.value = data.price
    }) 
    


    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = {
            name : name1.value,
            image: image1.value,
            price: price1.value
        }
        const options = {
            method : "PUT",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify(formData)
        }

        fetch("http://localhost:3000/products/" + id,options)
        window.location = '../index.html';

            alert('Cập nhật thành công');
          
    })
}
updateProduct();