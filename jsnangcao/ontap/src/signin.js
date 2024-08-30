const SignIn = () => {
    const username1 = document.getElementById('username')
    const password1 = document.getElementById('password')
    const signinForm = document.querySelector('form')
    console.log(signinForm);
    
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = {
            "username": username1.value,
            "password": password1.value
        }
        fetch("http://localhost:3000/accounts")
        .then((response) => response.json())
        .then((data) => {
            const findAccount = data.find((account) =>
                account.username === formData.username && account.password === formData.password )
            if(findAccount){
                alert("Success login")
            }else{
                alert("Failed")
            }
        
            console.log(data);
        })
       
    })
}
SignIn()