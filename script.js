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
    img.src = "img/realimg1.png";
  })

  img.addEventListener('mouseout', () => {
    img.src = "img/artimg.png";
  })

  $('.edu').click(() => {
    $(div2).load('index.html #div2', () => {
      main();
    })
  })

  // skill & experiance page changer
  $('.skill').click(function () {
    $(div2).load('skill&experiance.html', () => {
      main();
    })
  })

  // project page
  $('.project').click(function () {
    $(div2).load('project.html', () => {
      main();
    })
  })

  // contact page
  $('.contact').click(function () {
    $(div2).load('project.html', () => {
      main();
    })
  })


})