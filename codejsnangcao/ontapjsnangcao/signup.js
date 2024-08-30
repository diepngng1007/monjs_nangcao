const SignUp = () => {
    const usernameInp = document.getElementById('username')
    const passwordInp = document.getElementById('password')
    const emailInp = document.getElementById('email')
    const signupForm = document.querySelector('form')

    // console.log(usernameInp);
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            username : usernameInp.value,
            password: passwordInp.value,
            email: emailInp.value
        }
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }
        fetch("http://localhost:3000/accounts", options)
        alert("Success Register")
    })

}
SignUp()