const scriptURL = 'https://script.google.com/macros/s/AKfycbxlM99e04-GOawsokNhCSTSOl_rPcbeWFgT5bxDxMdEIHaL0-AwSGKxF-mUsx1Q1n3ovA/exec'
const form = document.forms['submit-to-google-sheet']
const kirim = document.querySelector(".btn");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{ 
        console.log('Success!', response);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
