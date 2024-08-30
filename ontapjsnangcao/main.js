 const tbody = document.querySelector('tbody')

const showList = () => {
    fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
        tbody.innerHTML = data.map((product,index) => {
            return /*html*/`
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${product.name}</td>
                    <td><img src="${product.image}" /></td>
                    <td>${product.price}</td>
                    <td>
                        <a class="btn btn-warning" href="./update.html?id=${product.id}" role="button">Cập nhật</a>
                        <button type="submit" class="btn btn-danger" data-id="${product.id}">Xóa</button>
                    </td>
                </tr>
            `
        }).join("")

        const btnDelete = document.querySelectorAll('.btn-danger')
        console.log(btnDelete);
        for(let btn of btnDelete){
            let id = btn.dataset.id
            btn.addEventListener('click', () => {
                if(confirm("Bạn chắn chắn muốn xóa chứ?")){
                    return deleteProduct(id)
                }
            })
        }
    })
}
showList()

const deleteProduct = (id) => {
    fetch("http://localhost:3000/products/" + id, {
        method: "DELETE"
    })
}
