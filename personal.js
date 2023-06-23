var typed = new Typed("#multiple-text", {
  strings: ["FrontEnd Developer", "Programmer", "Designer", "Student"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle box menu
document.getElementById('menu-icon').addEventListener('click', function() {
  document.getElementById('box-menu').classList.add('active');
});

// Close box menu
document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('box-menu').classList.remove('active');
});

// Detect screen size change and close box menu
window.addEventListener('resize', function() {
  if (window.innerWidth > 767) {
    document.getElementById('box-menu').classList.remove('active');
  }
});


let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classlist.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};
