let img = document.querySelector('#nirmalimg');

// for navigation bar
const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

img.addEventListener('mouseover', () => {
  img.src = "img/realimg1.png";
})

img.addEventListener('mouseout', () => {
  img.src ="img/artimg.png";
})