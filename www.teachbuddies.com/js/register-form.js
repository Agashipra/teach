// Process the form data (Handle payment logic or send data via AJAX)

const scriptURL = 'https://script.google.com/macros/s/AKfycbwwjL0Oxu25YrqpT2qKP2sCaOUcw_IswSl9kh7ON5RGfqP9eKXSRP2_2adnh6dpaS84/exec'; // Add your script URL here
const registerForm = document.getElementById('registerForm');
    
// Send form data to the server using fetch
fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(registerForm) 
})
.then(response => {
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    alert("Done");
    window.location.href = './index.html';  // Ensure this path is correct
})
.catch(error => console.error('Error:', error.message));
alert("ma");