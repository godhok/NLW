// String (textos)
// Number (numero)
// Boolean (true | false)


function onScroll() {
  if (scrollY > 0) {
      navigation.classList.add('scroll')
    } else {
      navigation.classList.remove('scroll')
  }
}

function openmenu() {
  document.body.classList.add('menu-expanded')
    
}

function closemenu() {
  document.body.classList.remove('menu-expanded')
}