const scriptURL = 'https://script.google.com/macros/s/AKfycbxlM99e04-GOawsokNhCSTSOl_rPcbeWFgT5bxDxMdEIHaL0-AwSGKxF-mUsx1Q1n3ovA/exec'
const form = document.forms['submit-to-google-sheet']
const sukses = document.querySelector("#sukses")

$(".indonesian").css("display","none")

$("#translateIndonesia").click(function(){
  $(".indonesian").css("display","")
  $(".english").css("display","none")
})

$("#translateInggris").click(function(){
  $(".indonesian").css("display","none")
  $(".english").css("display","")
})

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{ 
        console.log('Success!', response);
        sukses.classList.remove("d-none")
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})