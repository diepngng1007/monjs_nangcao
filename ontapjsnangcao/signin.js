const SignIn = () => {
  const usernameInp = document.getElementById("username");
  const passwordInp = document.getElementById("password");
  const signinForm = document.querySelector("form");
  // console.log(usernameInp);

  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      username: usernameInp.value,
      password: passwordInp.value,
    };
    fetch("http://localhost:3000/accounts")
      .then((response) => response.json())
      .then((data) => {
        const findAccount = data.find(
          (account) =>
            account.username === formData.username &&
            account.password === formData.password
        );
        if (findAccount) {
          alert("Success Login");
          window.location = "./index.html";
        } else {
          alert("Invalid username or password. Please try again");
        }
      });
  });
};
SignIn();
