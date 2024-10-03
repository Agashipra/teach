const scriptURL = ''

const form = document.forms['paymentForm']

form.addEventListener('submit' , e =>{
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response =>  {
        alert("Payment Details Has Been Shared!");  
        window.location.href = 'www.teachbuddies.com/paymentPage.html';  
    })

    // .then(() => { window.location.reload(); })
    .catch(error => console.error('Error : ' , error.message))
})

