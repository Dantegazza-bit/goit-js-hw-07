// Task 4: Форма логіну
const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  const emailVal = email.value.trim();
  const passVal = password.value.trim();

  if (emailVal === "" || passVal === "") {
    alert("All form fields must be filled in");
    return;
  }

  const data = { email: emailVal, password: passVal };
  console.log(data);

  e.currentTarget.reset();
});
