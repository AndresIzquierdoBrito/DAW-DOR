document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
});

let productos = document.querySelectorAll('.producto');

productos.forEach((producto) => {
  let button = document.createElement('button');
  button.innerText = 'Comprar ahora';
  producto.appendChild(button);
});