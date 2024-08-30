const SignUp = () => {
    const username1 = document.getElementById('username')
    const password1 = document.getElementById('password')
    const email1 = document.getElementById('email')
    const signupForm = document.querySelector('form')
    console.log(signupForm);
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            // username: username1.value,
            // password: password1.value,
            // email: email1.value
            "username": username1.value,
            "password": password1.value,
            "email": email1.value
        }
        // console.log(username1.value);
        fetch("http://localhost:3000/accounts", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(() => {
            alert("Success resgister")
        })
    })
}
SignUp()