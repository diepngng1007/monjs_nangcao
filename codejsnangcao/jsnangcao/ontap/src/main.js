import url from "../product.js";


const tbody = document.querySelector('tbody');
const showList = () =>{
    fetch(url)
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
                    <a class="btn btn-warning" href="/ontap/src/update.html?id=${product.id}" role="button">Cập nhật</a>
                    <button type="submit" class="btn btn-danger" data-id="${product.id}">Xóa</button>
                </td>
            </tr>
            `
        }).join("")
        //chuc nang xoa
        const btnDelete = document.querySelectorAll('.btn-danger')
        for(let btn of btnDelete){
            let id = btn.dataset.id;
            btn.addEventListener('click', () => {
                if(confirm('Bạn chắc chắn muốn xóa dữ liệu chứ?')){
                    return deleteProduct(id)
                }
            })
        }
    });

}
showList();

const deleteProduct = (id) => {
    fetch("http://localhost:3000/products/" + id, {
        method: "DELETE"
    })

}


    
    



