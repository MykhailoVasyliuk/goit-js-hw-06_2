const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault();

    const login = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    ;
    if (login === "" || password === "") {
        alert("All fields must be filled")
    }

    const formData = {
        login,
        password,
    }

    console.log(formData);
    event.currentTarget.reset();
}