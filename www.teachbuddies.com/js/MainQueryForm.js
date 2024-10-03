const scriptURL = ''

const form = document.forms['MainQueryForm']

form.addEventListener('submit' , e =>{
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You! Data Submitted"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error : ' , error.message))
})