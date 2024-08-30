const SignUp = () => {
    const usernameInput = document.getElementById('username')
    const passwordInput = document.getElementById('password')
    const emailInput = document.getElementById('email')
    const rolesInput = document.getElementById('role')
    const signupForm = document.querySelector('form')

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            username: usernameInput.value,
            password: passwordInput.value,
            email: emailInput.value,
            role: rolesInput.value
        }
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }
        fetch("http://localhost:3000/accounts", options)
        alert("Success")
    })
}
SignUp()