const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    currentTarget: {
      elements: {
        email: { value: email } = {},
        password: { value: password },
      },
    },
  } = event;
  const resultObj = { email, password };
  // const email = event.currentTarget.elements.hafaS;

  const isFormValid = Boolean(email && password);
  if (!isFormValid) {
    return alert("Please, fill in all the fields!");
  }

  console.log(resultObj);
  event.currentTarget.reset();
}
