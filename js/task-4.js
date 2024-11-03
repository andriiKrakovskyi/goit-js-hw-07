const formName = document.querySelector('.login-form');
formName.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  if (!email.value || !password.value) {
    alert('All form fields must be filled in');
  }

  const info = {
    email: email.value.trim(),
    password: password.trim(),
  };
  console.log(info);

  event.target.reset();
}
