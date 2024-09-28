$(document).ready(function () {
  let img = document.querySelector('#nirmalimg');
  let div2 = document.querySelector('#div2');
  let emailbtn = document.querySelector('#emailbtn');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // mail setter
  emailbtn.addEventListener("click", function() {
    const email = "nirmalprajapati727@gmail.com";
    const subject = "contact to nirmal from there portfolio";
    const body = "";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });


  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  img.addEventListener('mouseover', () => {
    img.src = "img/realimg.png";
  })

  img.addEventListener('mouseout', () => {
    img.src = "img/artimg.png";
  })

  // introduction page
  $('.intro').click(() => {
    mobileMenu.classList.toggle('hidden');
  })

  // education page
  $('.edu').click(() => {
    $(div2).load('education.html', () => {
      mobileMenu.classList.toggle('hidden');
      main();
    })  
  })

  // skill & experiance page changer
  $('.skill').click(function () {
    $(div2).load('skill&experiance.html', () => {
      mobileMenu.classList.toggle('hidden');
      main();
    })
  })

  // project page
  $('.project').click(function () {
    $(div2).load('project.html', () => {
      mobileMenu.classList.toggle('hidden');
      main();
    })
  })

  // amout me page
  $('.contact').click(function () {
    $(div2).load('aboutme.html', () => {
      mobileMenu.classList.toggle('hidden');
      main();
    })
  })


})