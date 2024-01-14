const form = document.querySelector('form.login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let isFormValid = true;
  const formData = {};

  const inputs = form.elements;
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.value.trim() === '') {
      isFormValid = false;
    }
    formData[input.name] = input.value.trim();
  }

  if (!isFormValid) {
    alert('All form fields must be filled in');
  } else {
    console.log(formData);
    form.reset();
  }
});
