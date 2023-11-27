// Add your custom JavaScript code here

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

/******Bible Verse******/
// Array of Bible verses
const bibleVerses = [
  "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",
  "The Lord is my shepherd; I shall not want. - Psalm 23:1",
  "Jeremiah 29:11 ~ For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
  "Deuteronomy 31:6 ~ Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.",
  "Proverbs 3:5-6 ~ Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
  "Lamentations 3:22-23 ~ The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
  "Psalm 34:8 ~ Oh, taste and see that the Lord is good! Blessed is the man who takes refuge in him!",
  "Isaiah 41:10 ~ Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
  "2 Corinthians 4:16-18 ~ So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.",
  "You will keep in perfect peace those whose minds are steadfast, because they trust in you. -Isaiah 26:3",
  "So in Christ Jesus you are all children of God through faith, for all of you who were baptized into Christ have clothed yourselves with Christ. -Galatians 3:26-27",
  " I can do all this through him who gives me strength. -Philippians 4:13",
  "When I am afraid, I put my trust in you. -Psalms 56:3",
  "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit. -Romans 15:13",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. -Romans 8:28",
  "A friend loves at all times, and a brother is born for a time of adversity. -Proverbs 17:17",
  "but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. -Isaiah 40:31",
  "Be on your guard; stand firm in the faith; be courageous; be strong. Do everything in love. -1 Corinthians 16:13-14",
  "Cast all your anxiety on him because he cares for you. -1 Peter 5:7",
  "These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up. -Deuteronomy 6:6-7",
  "Surely God is my salvation; I will trust and not be afraid. The LORD, the LORD himself, is my strength and my defense ; he has become my salvation. -Isaiah 12:2",
  "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. -Isaiah 41:10",
  "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal. -2 Corinthians 4:16-18",
  "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze. -Isaiah 43:2",
  "For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future. -Jeremiah 29:11",
  "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord. -Romans 8:38-39",
  "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world. -John 16:33",
  "Jesus looked at them and said, “With man this is impossible, but not with God; all things are possible with God. -Mark 10:27",
  "Come to me, all you who are weary and burdened, and I will give you rest. -Matthew 11:28",
  "He replied, Because you have so little faith. Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, ‘Move from here to there,’ and it will move. Nothing will be impossible for you. -Matthew 17:20",
  "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go. -Joshua 1:9",
  "For I am the LORD your God who takes hold of your right hand and says to you, Do not fear; I will help you. -Isaiah 41:13",
  "What, then, shall we say in response to these things? If God is for us, who can be against us? -Romans 8:31",
  "The name of the LORD is a fortified tower; the righteous run to it and are safe. -Proverbs 18:10",
  "Do not turn me over to the desire of my foes, for false witnesses rise up against me, spouting malicious accusations. -Psalms 27:12",
  "Be strong and take heart, all you who hope in the LORD. -Psalms 31:24",
  "Therefore encourage one another and build each other up, just as in fact you are doing. -1 Thessalonians 5:11",
  "Give thanks to the LORD, for he is good; his love endures forever. -Psalms 107:1",
  "My comfort in my suffering is this: Your promise preserves my life. -Psalms 119:50",
  "One thing I ask from the LORD, this only do I seek: that I may dwell in the house of the LORD all the days of my life, to gaze on the beauty of the LORD and to seek him in his temple. -Psalms 27:4",
  "I love you, LORD, my strength. The LORD is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold. -Psalms 18:1-2",
  "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God. -2 Corinthians 1:3-4",
  "Jesus said to her, “I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die. Do you believe this?” -John 11:25-26",
  "The boundary lines have fallen for me in pleasant places; surely I have a delightful inheritance. I will praise the LORD, who counsels me; even at night my heart instructs me. I keep my eyes always on the LORD. With him at my right hand, I will not be shaken. -Psalms 16:6-8",
  "Be joyful in hope, patient in affliction, faithful in prayer. -Romans 12:12",
  "Taste and see that the LORD is good; blessed is the one who takes refuge in him. -Psalms 34:8",
  "Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I entrust my life. -Psalms 143:8",
  "God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea, though its waters roar and foam and the mountains quake with their surging. -Psalms 46:1-3",
  "My flesh and my heart may fail, but God is the strength of my heart and my portion forever. -Psalms 73:26",
  "Do you not know? Have you not heard? The LORD is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom. He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. -Isaiah 40:28-31",
  "The LORD will keep you from all harm— he will watch over your life; the LORD will watch over your coming and going both now and forevermore. -Psalms 121:7-8",
  "May he give you the desire of your heart and make all your plans succeed. -Psalms 20:4",
  "‘ “The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.” ’ -Numbers 6:24-26",
  "And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them. -1 John 4:16",
  "Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom. -2 Corinthians 3:17",
  "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you. -Ephesians 4:32",
  "Greater love has no one than this: to lay down one’s life for one’s friends. -John 15:13",
  "For now we see only a reflection as in a mirror; then we shall see face to face. Now I know in part; then I shall know fully, even as I am fully known. -1 Corinthians 13:12",


  // Add more verses as needed
];

// Function to get the current date
function getCurrentDate() {
  const today = new Date();
  return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
}

// Function to get the current time in milliseconds since midnight
function getCurrentTime() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(0, 0, 0, 0);
  return now - midnight;
}

// Function to set the daily Bible verse
function setDailyVerse() {
  const currentDate = getCurrentDate();
  const verseIndex = currentDate.charCodeAt(currentDate.length - 1) % bibleVerses.length;
  const dailyVerse = bibleVerses[verseIndex];

  // Update the content of the #dailyVerse element
  document.getElementById('dailyVerse').textContent = `${currentDate} - ${dailyVerse}`;
}

// Function to update the verse at midnight
function updateVerseAtMidnight() {
  const currentTime = getCurrentTime();
  const timeUntilMidnight = 24 * 60 * 60 * 1000 - currentTime; // Time until midnight in milliseconds

  setTimeout(function () {
    setDailyVerse();
    updateVerseAtMidnight(); // Set up the timer for the next midnight
  }, timeUntilMidnight);
}

// Call the function to set the daily verse when the page loads
setDailyVerse();

// Call the function to update the verse at midnight
updateVerseAtMidnight();
