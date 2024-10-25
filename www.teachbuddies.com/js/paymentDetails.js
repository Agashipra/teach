// Get the form element
const paymentForm = document.getElementById('paymentForm');

// Add a submit event listener
paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting to the server

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const amount = document.querySelector('[name="TXN_AMOUNT"]').value;

    // Validate the form (you can add more validation as needed)
    if (!name || !email || !phone || !amount) {
        alert("Please fill in all the fields.");
        return;
    }
    if (phone.length != 10) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Process the form data (Handle payment logic or send data via AJAX)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxEvsRgaoDuaToAXG1E5WOq9UxWYEdoG0-tB40MaPbXQsa3I7bwwNCHNSqvgDLKRi_Y/exec'; // Add your script URL here
    
    // Send form data to the server using fetch
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(paymentForm) 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        window.location.href = './paymentPage.html';  // Ensure this path is correct
    })
    .catch(error => console.error('Error:', error.message));
});
