const scriptURL = 'https://script.google.com/macros/s/AKfycbwwjL0Oxu25YrqpT2qKP2sCaOUcw_IswSl9kh7ON5RGfqP9eKXSRP2_2adnh6dpaS84/exec'; // Add your script URL here
const registerForm = document.getElementById('register-form_tutor');
    
// Send form data to the server using fetch
registerForm.addEventListener('submit' , e => {
    e.preventDefault()
    fetch(scriptURL , {method: 'POST' , body : new FormData(form)})
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})