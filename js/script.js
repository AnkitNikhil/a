// Add your custom JavaScript code here
alert("Happy 77th Independence Day!");
// Smooth scrolling
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });
});

// Animate sections on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    $('.fade-in').each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop() + $(window).height();
      if (elementPos < topOfWindow) {
        $(this).addClass('fade-in-animation');
      }
    });
  });
});

// JavaScript Animation
window.addEventListener('scroll', animateAboutSection);

function animateAboutSection() {
  const aboutContainer = document.querySelector('.about-container');
  if (!aboutContainer) return; // Check if the element exists, if not, return early

  const aboutContainerPosition = aboutContainer.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (aboutContainerPosition < screenPosition) {
    aboutContainer.classList.add('show');
  }
}


function fadeInAboutContent() {
  const aboutContent = document.querySelector('.about-content');
  const rect = aboutContent.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight * 0.8) {
    aboutContent.classList.add('fade-in');
  }
}

window.addEventListener('scroll', fadeInAboutContent);
window.addEventListener('load', fadeInAboutContent);

// Add "animated" class to each letter of the text
document.addEventListener("DOMContentLoaded", function () {
  var letters = document.querySelectorAll(".navbar-brand .animated-text");
  letters.forEach(function (letter) {
    letter.innerHTML = letter.textContent.replace(/\S/g, "<span class='animated-letter'>$&</span>");
  });
});

// Form submission
$(document).ready(function () {
  $('#contact-form').on('submit', function (event) {
    event.preventDefault();

    // Perform form validation
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var isValid = true;

    if (name.trim() === '') {
      $('#name-error').text('Please enter your name');
      isValid = false;
    } else {
      $('#name-error').text('');
    }

    if (email.trim() === '') {
      $('#email-error').text('Please enter your email');
      isValid = false;
    } else if (!isValidEmail(email)) {
      $('#email-error').text('Please enter a valid email');
      isValid = false;
    } else {
      $('#email-error').text('');
    }

    if (message.trim() === '') {
      $('#message-error').text('Please enter your message');
      isValid = false;
    } else {
      $('#message-error').text('');
    }

    if (isValid) {
      // Submit the form using Formspree
      $.ajax({
        url: 'https://formspree.io/f/mleyggko',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function () {
          // Add loading animation or disable the submit button if desired
          $('#success-message').text('Sending...');
        },
        success: function (data) {
          // Clear the form and display success message
          $('#contact-form')[0].reset();
          $('#success-message').text('Your message has been sent successfully!');
        },
        error: function (error) {
          // Display error message if the form submission fails
          $('#success-message').text('There was an error sending your message. Please try again later.');
        }
      });
    }
  });

  // Validate email format
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
// JavaScript Animation
window.addEventListener('scroll', animateAboutSection);

function newFunction() {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

function animateAboutSection() {
  const aboutContainer = document.querySelector('.about-container');
  if (!aboutContainer) return; // Check if the element exists, if not, return early

  const aboutContainerPosition = aboutContainer.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (aboutContainerPosition < screenPosition) {
    aboutContainer.classList.add('show');
  }
}

// JavaScript
const aboutSection = document.querySelector('#about');

function fadeInAboutContent() {
  const aboutContent = document.querySelector('.about-content');
  const rect = aboutContent.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight * 0.8) {
    aboutContent.classList.add('fade-in');
  }
}

window.addEventListener('scroll', fadeInAboutContent);
window.addEventListener('load', fadeInAboutContent);

// Add "animated" class to each letter of the text
document.addEventListener("DOMContentLoaded", function () {
  var letters = document.querySelectorAll(".navbar-brand .animated-text");
  letters.forEach(function (letter) {
    letter.innerHTML = letter.textContent.replace(/\S/g, "<span class='animated-letter'>$&</span>");
  });
});
/******************Contact Form********************/
// Form submission
$(document).ready(function () {
  $('#contact-form').on('submit', function (event) {
    event.preventDefault();

    // Perform form validation
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var isValid = true;

    if (name.trim() === '') {
      $('#name-error').text('Please enter your name');
      isValid = false;
    } else {
      $('#name-error').text('');
    }

    if (email.trim() === '') {
      $('#email-error').text('Please enter your email');
      isValid = false;
    } else if (!isValidEmail(email)) {
      $('#email-error').text('Please enter a valid email');
      isValid = false;
    } else {
      $('#email-error').text('');
    }

    if (message.trim() === '') {
      $('#message-error').text('Please enter your message');
      isValid = false;
    } else {
      $('#message-error').text('');
    }

    if (isValid) {
      // Submit the form using Formspree
      $.ajax({
        url: 'https://formspree.io/f/mleyggko',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function () {
          // Add loading animation or disable the submit button if desired
          $('#success-message').text('Sending...');
        },
        success: function (data) {
          // Clear the form and display success message
          $('#contact-form')[0].reset();
          $('#success-message').text('Your message has been sent successfully!');
        },
        error: function (error) {
          // Display error message if the form submission fails
          $('#success-message').text('There was an error sending your message. Please try again later.');
        }
      });
    }
  });

  // Validate email format
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
