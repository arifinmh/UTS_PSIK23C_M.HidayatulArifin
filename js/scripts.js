// JavaScript for header background change on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// JavaScript for smooth scrolling to sections
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// JavaScript for hiding header on scroll down and showing it on scroll up
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.top = "-60px"; // Adjust based on header height
  } else {
    // Scrolling up
    header.style.top = "0";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// JavaScript for opening and closing modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("modalBtn"); // Make sure to add this ID to the element that triggers the modal
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
