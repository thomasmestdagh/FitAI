//scrolling behaviour
const headerLinks = document.querySelectorAll('.header__link a');

for(const link of headerLinks){
  link.addEventListener('click', clickHandler);
}

function clickHandler(e){
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  })
}

//scrolling animations