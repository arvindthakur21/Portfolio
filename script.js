
  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active-link");
      }
    });
  });

 ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 200
  });

  ScrollReveal().reveal('.hero-content', { origin: 'top' });
  ScrollReveal().reveal('.about-container', { origin: 'left' });
  ScrollReveal().reveal('.projects-section h2, .project-card', { origin: 'bottom', interval: 100 });
  ScrollReveal().reveal('.skills-section h2, .skill-card', { origin: 'right', interval: 100 });
  ScrollReveal().reveal('.contact-section', { origin: 'bottom' });

   const backToTopBtn = document.getElementById("backToTop");

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
document.getElementById("year").textContent = new Date().getFullYear();
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
