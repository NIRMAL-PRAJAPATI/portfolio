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

  // introduction page
  $('.intro').click(() => {
    mobileMenu.classList.toggle('hidden');
  })

  // education page
  $('.edu').click(() => {
    $(div2).load('education.html', () => {
      mobileMenu.classList.toggle('hidden');
    })  
  })

  // skill & experiance page changer
  $('.skill').click(function () {
    $(div2).load('skill&experiance.html', () => {
      mobileMenu.classList.toggle('hidden');

      skillDisplayFunc();
    })
  })

  // project page
  $('.project').click(function () {
    $(div2).load('project.html', () => {
      mobileMenu.classList.toggle('hidden');

      projectDisplayFunc();
    })
  })

  // projectlisr object
        let projects = {
            project1: {
            name: 'Realtime Chat App',
            description: 'Developed a real-time chat web application utilizing HTML, CSS, JavaScript, and TailwindCSS for a responsive and user-friendly design. Implemented backend functionality using Node.js and Express.js, with real-time communication powered by Socket.IO. Designed features to ensure seamless, instant messaging with a focus on performance and reliability.',
            tech: 'HTML, CSS, JavaScript, Tailwind CSS, Node.js, Express.js, SocketIO',
            codelink: '#',
            openlink: '#'
        },

            project2: {
                name: 'Student Things',
                description: 'This is my full stack project. Where I have used HTML, CSS, JavaScript with Bootstrap framework as frontend technology. For backend I used Node.js, Express.js. MongoDB as a database. in this website students can register/login. Students can upload projects, update/delete the profile, view other students project likes them and their ID, update/delete their own projects and many more things which helps to improve my backend skills.',
                tech: 'HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, MongoDB',
                codelink: '#',
                openlink: '#'
            },

            project3: {
                name: 'Nationalist',
                description: "This website serves as a comprehensive guide to India, offering detailed information about its states, cities, political landscape, and renowned cultural and historical highlights. Explore India's rich diversity and discover the key elements that define its uniqueness.",
                tech: "HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js",
                codelink: "https://github.com/NIRMAL-PRAJAPATI/nationalist",
                openlink: "https://nirmal-prajapati.github.io/nationalist/"
            },

            project4: {
                name: "Spotify Clone",
                description: "I developed a Spotify clone using HTML, CSS, and JavaScript, incorporating AJAX for seamless data fetching. The app mimics core Spotify features, including real-time song loading and playback without page reloads.",
                tech: "HTML, CSS, JavaScript",
                codelink: "https://github.com/NIRMAL-PRAJAPATI/spotify-clone",
                openlink: "https://nirmal-prajapati.github.io/spotify-clone/"
            },

            project5: {
                name: "Online Casino Game",
                description: "I developed an online casino game using HTML, CSS, and JavaScript, featuring an engaging interface and interactive gameplay. The game allows users to experience virtual casino entertainment with smooth animations and dynamic user interaction.",
                tech: "HTML, CSS, JavaScript, Bootstrap",
                codelink: "https://github.com/NIRMAL-PRAJAPATI/online-casino-game",
                openlink: "https://nirmal-prajapati.github.io/online-casino-game/"
            },

            project6: {
                name: "Weather Information",
                description: "This website fetches real-time weather data from an external API, providing accurate and up-to-date weather information for any location users search for. It allows users to access current conditions, forecasts, and other essential weather updates seamlessly.",
                tech: "HTML, CSS, JavaScript",
                codelink: "https://github.com/NIRMAL-PRAJAPATI/weather-web",
                openlink: "https://nirmal-prajapati.github.io/weather-web/"
            },

            project7: {
                name: "Number Finder",
                description: "Number finder game is an interactive project where players aim to discover a target number. By guessing correctly, they earn points, adding a fun challenge to the gameplay. The game enhances problem-solving and quick-thinking skills.",
                tech: "HTML, CSS, JavaScript",
                codelink: "https://github.com/NIRMAL-PRAJAPATI/bubble-hunter",
                openlink: "https://nirmal-prajapati.github.io/bubble-hunter/"
            },

            project8: {
                name: "Uplink Homepage Clone",
                description: "I created a functional clone of the Uplink website home page, replicating its design and layout using modern web technologies. The project showcases my ability to build responsive and visually accurate websites, reflecting a real-world application's user interface.",
                tech: "HTML, CSS, JavaScript",
                codelink: "https://github.com/NIRMAL-PRAJAPATI/stock_tempelate.github.io",
                openlink: "https://nirmal-prajapati.github.io/stock_tempelate.github.io/"
            },

            project9: {
                name: "Puma Homepage Clone",
                description: "Project is a responsive clone of the Puma website's home page, designed to adapt seamlessly across different devices. It replicates the sleek design, layout, and functionality of the original site, providing an engaging and user-friendly experience.",
                tech: "HTML, CSS, JavaScript",
                codelink: "https://github.com/NIRMAL-PRAJAPATI/puma_clone.github.io",
                openlink: "https://nirmal-prajapati.github.io/puma_clone.github.io/"
            },

            project10: {
                name: "Realtime Clock",
                description: "a real-time digital clock using HTML, CSS, and JavaScript, featuring a sleek design that displays the current time dynamically. Additionally, the clock includes special date reminders, ensuring users never miss important events. This project combines functionality with aesthetics, providing a practical tool for everyday use.",
                tech: "HTML, CSS, JavaScript, Bootstrap",
                codelink: "https://github.com/NIRMAL-PRAJAPATI/clock_world.github.io",
                openlink: "https://nirmal-prajapati.github.io/clock_world.github.io/"
            },

            project11: {
                name: "Hacker Dashboard",
                description: "The Hacker Dashboard simulates real-time hacking tasks, utilizing the async and await concepts for smooth, non-blocking execution of multiple operations. It's designed to enhance understanding of asynchronous programming in JavaScript.",
                tech: "HTML, CSS, JavaScript",
                codelink: "https://github.com/NIRMAL-PRAJAPATI/hackerman.github.io",
                openlink: "https://nirmal-prajapati.github.io/hackerman.github.io/"
            },

            project12: {
                name: "Joke Generator",
                description: "This dynamic joke generator page, built with HTML, CSS, and JavaScript, delivers a fresh dose of humor at the click of a button. It seamlessly fetches and displays random jokes, providing a fun and engaging user experience.",
                tech: "HTML, CSS, JavaScript, Bootstrap",
                codelink: "https://github.com/NIRMAL-PRAJAPATI/jokes-generator.github.io",
                openlink: "https://nirmal-prajapati.github.io/jokes-generator.github.io/"
            },

            project13: {
                name: "Learn language web",
                description: "Discover a fun and interactive way to learn new languages with our Bootstrap-powered platform. Featuring engaging lessons, quizzes, and a user-friendly interface, this website is designed to enhance your language skills at your own pace. Join a community of learners and embark on your journey to fluency today!",
                tech: "HTML, CSS, Bootstrap",
                codelink: "https://github.com/NIRMAL-PRAJAPATI/Learning_Languages_sponzeall",
                openlink: "https://nirmal-prajapati.github.io/Learning_Languages_sponzeall/"
            }
        }

        // projectlist display function
        const projectDisplayFunc = () => {
        let projectcontainer = document.querySelector('#projectcontainer');

        Object.values(projects).forEach(project => {
          projectcontainer.innerHTML += `<div class="text-white bg-gray-800 m-5 p-5 rounded" style="background-color: rgb(25, 38, 51, 0.644);">
          <h1 class="text-2xl mb-2 font-bold">${project.name}</h1>
          <p class="text-gray-400 mb-2 text-sm">${project.description}</p>
          <i class="ml-2 text-gray-300">${project.tech}</i><br>
          <a target="_blank" href="${project.codelink}"><button class="btn bg-gray-900 py-2 px-4 rounded text-blue-500 mt-3">Get Code</button></a>
          <a target="_blank" href="${project.openlink}"><button class="btn bg-gray-900 py-2 px-4 rounded text-blue-500">Open Project</button></a>
      </div>`
      })
    }


    // skills display function
    const skillDisplayFunc = () => {
      let progdiv = document.querySelector('#progdiv');
        let frontdiv = document.querySelector('#frontdiv');
        let backdiv = document.querySelector('#backdiv');
        let datadiv = document.querySelector('#datadiv');
        let tooldiv = document.querySelector('#tooldiv');

        let prog_lang_arr = ['C Programming', 'Java', 'Data Structure', 'Object Orianted Programming'];
        let frontend_arr = ['HTML5', 'CSS3', 'JavaScript', 'AJAX', 'JQuery', 'Bootstrap', 'TailwindCSS'];
        let backend_arr = ['Node.js', 'Express.js'];
        let database_arr = ['MySQL', 'MongoDB', 'PostgreSQL'];
        let tool_arr = ['Git', 'GitHub', 'Msword', 'PowerPoint', 'ChatGPT', 'V0 by Vercel'];

        prog_lang_arr.forEach(i => {
            progdiv.innerHTML += `<p class="bg-gray-800 px-3 py-2 rounded m-1 flex">${i}</p>`;
        })

        frontend_arr.forEach(i => {
            frontdiv.innerHTML += `<p class="bg-gray-800 px-3 py-2 rounded m-1 flex">${i}</p>`;
        })

        backend_arr.forEach(i => {
            backdiv.innerHTML += `<p class="bg-gray-800 px-3 py-2 rounded m-1 flex">${i}</p>`;
        })

        database_arr.forEach(i => {
            datadiv.innerHTML += `<p class="bg-gray-800 px-3 py-2 rounded m-1 flex">${i}</p>`;
        })

        tool_arr.forEach(i => {
            tooldiv.innerHTML += `<p class="bg-gray-800 text-white px-3 py-2 rounded m-1 flex">${i}</p>`;
        })
    }

})