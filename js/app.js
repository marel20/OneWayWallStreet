//navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const sectionBlack = document.getElementById("section-black");

  window.addEventListener("scroll", function () {
      const sectionRect = sectionBlack.getBoundingClientRect();

      if (sectionRect.bottom <= 0) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });

  // Funcionalidad de cambio de idioma
  const languageList = document.querySelectorAll(".language-list li");

  languageList.forEach((item) => {
      item.addEventListener("click", function () {
          const lang = item.getAttribute("data-lang");
          translatePage(lang);
      });
  });

  function translatePage(lang) {
      const translations = {
          es: {
              home: "Inicio",
              about: "Sobre Nosotros",
              services: "Servicios",
              contact: "Contacto",
          },
          en: {
              home: "Home",
              about: "About Us",
              services: "Services",
              contact: "Contact",
          },
          fr: {
              home: "Accueil",
              about: "À Propos",
              services: "Services",
              contact: "Contact",
          },
          de: {
              home: "Startseite",
              about: "Über Uns",
              services: "Dienstleistungen",
              contact: "Kontakt",
          },
          it: {
              home: "Home",
              about: "Chi Siamo",
              services: "Servizi",
              contact: "Contatto",
          },
      };

      document.querySelectorAll(".nav-links a").forEach((link, index) => {
          const key = Object.keys(translations[lang])[index];
          link.textContent = translations[lang][key];
      });
  }
});

//menu-toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuIcon = menuToggle.querySelector("i");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  // Alternar menú y cambiar icono
  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active"); // Para cambiar el ícono
  });

  // Cerrar menú al hacer clic en un enlace
  navItems.forEach(link => {
      link.addEventListener("click", function () {
          navLinks.classList.remove("active");
          menuToggle.classList.remove("active"); // Volver al ícono de barras
      });
  });
});


