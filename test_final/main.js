// da set roi gio get ra code di
var check = JSON.parse(localStorage.getItem("account"))
// bien luu gia tri cua no dau co bien var check thi moi luu dc no chu ?
//1đ nua muon xai dc json thi phai lam gi.. code tiep di

if(check.role == "AD"){
    window.location = './index.html';
}else{
    
    window.location = "./user.html";
}


const tbody = document.querySelector('tbody');
// console.log(tbody);
const showList = () => {
    fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
        tbody.innerHTML = data.map((product, index) => {
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
        for(let btn of btnDelete){
            btn.addEventListener("click", () => {
                let id = btn.dataset.id;
                if(confirm("Bạn chắc chắn muốn xóa dữ liệu chứ")){
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