const nav = document.querySelector('#nav');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY > 60) {    
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);