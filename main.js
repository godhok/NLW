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

//uma vez encontrando um .alguma coisa, quer dizer que é uma propriedade do objeto que apareceu antes.



ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home,
#home img,
.stats,
#services,
#services header,
#services .card,
#about, about header, about .content`);