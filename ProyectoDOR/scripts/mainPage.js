document.addEventListener('DOMContentLoaded', function() {
  const hamburgerToggle = document.querySelector('.hamburger-toggle');
  const aside = document.querySelector('.aside');

  hamburgerToggle.addEventListener('click', function() {
      aside.classList.toggle('active');
  });
});