const cardArray = document.querySelectorAll('.d-none')
//array para a remoção do .d-none fazendo os cards aparecerem
cardArray.forEach(e =>{
  e = e.classList.remove('d-none')
})