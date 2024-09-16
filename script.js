$(document).ready(function() {
let img = document.querySelector('#nirmalimg');
let div2 = document.querySelector('#div2');
let skillandexp = document.querySelector('#se');

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

// page changer
  $('#skill').click(function() {
    $(div2).load('skill&experiance.html', () => {
      console.log("sfvs")
      main();
    })
    })

    $('#edu').click(() => {
      $(div2).load('index.html #div2', () => {
        main();
      })
    })


  })