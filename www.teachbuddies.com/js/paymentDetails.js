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
    if(phone.length != 10){
        alert("Please enter correct Phone Number")
        return;   
    }

    // Process the form data (Here you can handle payment logic or send the data via AJAX)
    alert(`"Payment Details Has Been Shared!"
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Amount: ₹${amount}`);
    // Redirect to the payment page
    window.location.href = './paymentPage.html';

    // Example: You can send the data to the server using fetch or AJAX.
    // For example, if you want to send data to a server:
    /*
    fetch('/paymentHandler', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            amount: amount
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Payment processed:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    */
});



// OLD CODE 

// function proceedToPay() {
//     alert("Payment Details Has Been Shared!");
//     window.location.href = './paymentPage.html';
// }

// export const paymentUtils = {
//     proceedToPay,
// };


// // const scriptURL = '' // Add your script URL here

// // const form = document.forms['paymentForm']

// // form.addEventListener('submit', e => {
// //     e.preventDefault()
// //     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
// //         .then(response => {
// //             if (response.ok) {
// //                 throw new Error(`Error: ${response.statusText}`);
// //             }else{
// //                 alert("Payment Details Has Been Shared!");
// //                 window.location.href = '../payment1.html'; // Ensure this path is correct
// //             }
// //         })
// //         .catch(error => console.error('Error:', error.message));
// // });
