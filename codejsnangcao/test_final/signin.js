const SignIn = () => {
    const usernameInput = document.getElementById('username')
    const passwordInput = document.getElementById('password')
    const rolesInput = document.getElementById('role')
    const signinForm = document.querySelector('form')

    signinForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = {
            username: usernameInput.value,
            password: passwordInput.value,
            // role: rolesInput.value
        }
        fetch("http://localhost:3000/accounts")
        .then((response) => response.json())
        .then((data) => {
            const findAccount = data.find((account) => account.username === formData.username && account.password === formData.password)
            localStorage.setItem("account",JSON.stringify(findAccount)) // khong co set ma doi co get ?? JSON.stringify(findAccount) conver qua dang json.
            if(findAccount){
                // window.location = "./index.html"
                // alert("success!")
                if(findAccount.role === "US"){
                    window.location = "./user.html"
                }else if(findAccount.role === "AD"){
                    window.location = "./index.html"
                }
                alert("success!")
            }
            else{
                alert("invalid username or password or role! Please try again")
            }
        })
    })
}
SignIn()