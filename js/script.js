// Project categories:
// Creative coding: untitled shapes, drawing with sound
// Research-creation (or tangible media?): body-controller
// Game design: fly me home, escape game, when the sun goes down, traces of you
// Data visualizations: covid19 analysis, drawing with sound

// Star rotate on scroll, and logo styling affected by user interactions
let logo = $(".logo");
let name = $(".name");
let logoDark = $('.logo-dark');
let logoLight = $('.logo-light');
let nameDark = $('.name-dark');
let nameLight = $('.name-light');
let arrow = $('.arrow');

logoDark.css('background-color', '#FFF');
logoLight.css('background-color', '#1C1C1C');
nameDark.css('color', '#FFF');
nameLight.css('color', '#1C1C1C');

$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();

  // Logo (star) spin
  logo.css('transform', 'rotate(' + scrollTop + 'deg)');

  // Fade out project arrow
  if ($(this).scrollTop() > 20)
    arrow.fadeTo(120, 0);
  else
    arrow.fadeTo(120, 1);
});

logo.mouseenter(function() {
    name.css('display', 'block');
    logo.css('transform', 'rotate(180deg)');
    logoDark.css('background-color', '#1C1C1C');
    logoLight.css('background-color', '#FFF');
    logoLight.find("a").css('color', '#1C1C1C');
    logoLight.find()
  }
);
logo.mouseleave(function() {
    name.css('display', 'none');
    logoDark.css('background-color', '#FFF');
    logoLight.css('background-color', '#1C1C1C');
    logoLight.find("a").css('color', '#FFF');
  }
);

// Menu styling, affected by user interactions
let menu = $(".menu");
let menuButton = $(".menu button");
let navLinks = $(".menu a");
let nav = $("nav");
let menuButtonDark = $(".menu-dark button");
let menuButtonLight = $(".menu-light button");

menuButtonDark.css('background-color', '#FFF');
menuButtonDark.find("h1").css('color', '#1C1C1C');

menuButtonLight.css('background-color', '#1C1C1C');
menuButtonLight.find("h1").css('color', '#FFF');

let navFlag = false;

// Menu button expands nav on hover, and menu button logo rotates 90deg
menuButton.mouseenter(function() {
    menuButton.css('transform', 'rotate(90deg)');
    menuButtonDark.css('background-color', '#1C1C1C');
    menuButtonDark.find("h1").css('color', '#FFF');
    menuButtonLight.css('background-color', '#FFF');
    menuButtonLight.find("h1").css('color', '#1C1C1C');
    nav.css('display', 'block');
  }
);
menu.mouseleave(function() {
  if (!navFlag) {
    menuButton.css('transform', 'rotate(180deg)');
    menuButtonDark.css('background-color', '#FFF');
    menuButtonDark.find("h1").css('color', '#1C1C1C');
    menuButtonLight.css('background-color', '#1C1C1C');
    menuButtonLight.find("h1").css('color', '#FFF');
    nav.css('display', 'none');
  }
  }
);

// Keep nav open when menu button clicked
menuButton.click(function() { navFlag = !navFlag; });

// Project title follow mouse on hover code
let numProjects = $(".flex-item").length;
let projects = [];

for (let i = 0; i < numProjects; i++)
  projects[i] = ($(".flex-item").eq(i));

// Title always has same height (same font and size) but width of title changes
let height = projects[0].children('.project-title').height() / 2;
let widths = [];

for (let i = 0; i < numProjects; i++)
  widths[i] = projects[i].children('.project-title').width() / 2;

$(document).mousemove(function(e){
    for (let i = 0; i < numProjects; i++) {
      projects[i].children('.project-title').css({
          left: e.pageX - widths[i],
          top: e.pageY - height
      });
      projects[i].children('.project-title').css('z-index', '100');
    }
});

for (let i = 0; i < numProjects; i++) {
  projects[i].mouseenter(function() { projects[i].children('.project-title').show(); });
  projects[i].mouseleave(function() { projects[i].children('.project-title').hide(); });
}

// Take user to appropriate project description page based on clicked project
function covid19EmotionAnalysis() { window.location.href = 'projects/covid19emotionanalysis.html'; }
function tracesOfYou() { window.location.href = 'projects/tracesofyou.html'; }
function bodyController() { window.location.href = 'projects/bodycontroller.html'; }
function flyMeHome() { window.location.href = 'projects/flymehome.html'; }
function escape() { window.location.href = 'projects/escape.html'; }
function drawingWithSound() { window.location.href = 'projects/drawingwithsound.html'; }
function whenTheSun() { window.location.href = 'projects/whenthesun.html'; }
function shapes() { window.location.href = 'projects/shapes.html'; }
