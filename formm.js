window.addEventListener("load",function(event) {
  document.getElementById('contact-us--form').addEventListener('submit', function (e) {
    e.preventDefault()

    if (!e.target.checkValidity()) {
      e.stopPropagation()

      e.target.classList.add('was-validated');

      return;
    }

    handleSubmit()
  });

  const backButtons = document.getElementsByClassName('contact-us--form--success--back');
  Array.from(backButtons).forEach(function (el) {
    el.addEventListener('click', handleFormBackButton)
  });
}, false);

const submitSuccess = document.querySelector('.submit-success')
const submitError = document.querySelector('.submit-error')

const handleSubmit = () => {
  let myForm = document.getElementById('contact-us--form');
  let formData = new FormData(myForm);
  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })

    .then(() => {
      // Show sucess block
      handleFormBackButton();

      submitSuccess.style.display = 'block';
      submitError.style.display = null;
    })
    .catch((error) => { submitError.style.display = 'block'; submitSuccess.style.display = null; });
};

const handleFormBackButton = () => {
  const formSuccessEl = document.getElementById('contact-us--form--success');
  formSuccessEl.classList.toggle('d-none');

  const formEl = document.getElementById('contact-us--form');
  formEl.classList.toggle('d-none');

  formEl.reset();
}