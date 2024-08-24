document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navRight = document.querySelector('.nav-right');
  
    hamburger.addEventListener('click', () => {
      navRight.style.display = navRight.style.display === 'flex' ? 'none' : 'flex';
    });
  });
  