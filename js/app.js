document.addEventListener("DOMContentLoaded", function () {
  
  /*** 🔹 POPUP ***/
  function initPopup() {
      const popup = document.getElementById("popup");
      const closeBtn = document.querySelector(".close");

      if (popup) {
          popup.style.display = "flex";

          closeBtn?.addEventListener("click", function () {
              popup.style.display = "none";
          });

          setTimeout(function () {
              popup.style.display = "none";
          }, 60000);
      }
  }

  /*** 🔹 NAVBAR ***/
  function initNavbar() {
      const navbar = document.querySelector(".navbar");
      const sectionBlackPC = document.getElementById("section-black");
      const sectionBlackMobile = document.getElementById("section-black-mobile");
      const navLinks = document.querySelectorAll(".nav-links a");
      const navIcons = document.querySelectorAll(".nav-links i");
      const menuToggle = document.querySelector(".menu-toggle");
      const menuIcon = menuToggle.querySelector("i");
      const logo = document.querySelector(".logo2");

      function handleNavbarScroll() {
          const isMobile = window.innerWidth <= 768;
          const section = isMobile ? sectionBlackMobile : sectionBlackPC;
          if (!section) return;

          const sectionRect = section.getBoundingClientRect();
          if (sectionRect.bottom <= 0) {
              navbar.style.backgroundColor = "white";
              navbar.style.transition = "0.5s ease";

              if (isMobile) {
                  menuIcon.style.color = "black";
                  logo.style.backgroundColor = "black";
                  logo.style.borderRadius = "50px";
                  logo.style.transition = "0.5s ease";
              } else {
                  navLinks.forEach(link => link.style.color = "black");
                  navIcons.forEach(icon => icon.style.color = "black");
                  logo.style.backgroundColor = "black";
                  logo.style.borderRadius = "50px";
                  logo.style.transition = "0.5s ease";
              }
          } else {
              navbar.style.backgroundColor = "transparent";
              navbar.style.transition = "0.5s ease";
              if (isMobile) {
                  menuIcon.style.color = "";
                  logo.style.backgroundColor = "transparent";
                  logo.style.borderRadius = "0px";
              } else {
                  navLinks.forEach(link => link.style.color = "");
                  navIcons.forEach(icon => icon.style.color = "");
                  logo.style.backgroundColor = "transparent";
                  logo.style.borderRadius = "0px";
              }
          }
      }

      window.addEventListener("scroll", handleNavbarScroll);

      if (menuToggle) {
          const navMenu = document.querySelector(".nav-links");
          menuToggle.addEventListener("click", function () {
              navMenu.classList.toggle("active");
              menuToggle.classList.toggle("active");
              menuIcon.style.color = "white";
          });

          navLinks.forEach(link => {
              link.addEventListener("click", function () {
                  navMenu.classList.remove("active");
                  menuToggle.classList.remove("active");
              });
          });
      }

      // ---- Desplazamiento Suave ----
     const scrollToSection = document.getElementById("scrollToSection");
     if (scrollToSection) {
       scrollToSection.addEventListener("click", function () {
         document.getElementById("heroHome").scrollIntoView({ behavior: "smooth" });
       });
     }
  }

  /*** 🔹 EFECTO TYPEWRITER ***/
  function typewriterEffect(elementId, text) {
      const target = document.getElementById(elementId);
      if (!target) return;

      let index = 0;
      function escribir() {
          if (index < text.length) {
              target.textContent += text.charAt(index);
              index++;
              setTimeout(escribir, 100);
          } else {
              target.style.borderRight = "none";
          }
      }
      escribir();
  }

  /*** 🔹 BOTONES DE REDIRECCIÓN ***/
  function initButtons() {
      const pages = {
          completeTrader: "../pages/complete.html",
          masterTrader: "../pages/master.html",
          professionalTrader: "../pages/profesional.html"
      };

      Object.keys(pages).forEach(id => {
          const btn = document.getElementById(id);
          if (btn) {
              btn.addEventListener("click", function () {
                  window.location.href = pages[id];
              });
          }
      });
  }

  /*** 🔹 FORMULARIO ***/
  function initForm() {
      const form = document.getElementById("contactForm");
      if (!form) return;

      form.addEventListener("submit", function (event) {
          event.preventDefault();

          let name = document.getElementById("name").value.trim();
          let subject = document.getElementById("subject").value.trim();
          let email = document.getElementById("email").value.trim();
          let message = document.getElementById("message").value.trim();

          if (!name || !subject || !email || !message) {
              alert("Por favor, completa todos los campos.");
              return;
          }

          let button = document.getElementById("sendButton");
          button.innerHTML = 'Enviando... <span class="trading-arrow"><i class="fa-solid fa-money-bill-trend-up"></i></span>';
          button.style.pointerEvents = "none";

          setTimeout(() => {
              button.innerHTML = "Enviar";
              button.style.pointerEvents = "auto";

              let banner = document.getElementById("successBanner");
              banner.style.display = "block";

              form.reset();

              setTimeout(() => {
                  banner.style.display = "none";
              }, 3000);
          }, 2000);
      });
  }

  /*** 🔹 IMPORTAR HOTMART ***/
  function importHotmart() {
      var imported = document.createElement('script');
      imported.src = 'https://static.hotmart.com/checkout/widget.min.js';
      document.head.appendChild(imported);

      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
      document.head.appendChild(link);
  }

  /*** 🔹 EJECUTAR FUNCIONES ***/
  initPopup();
  initNavbar();
  initButtons();
  initForm();
  importHotmart();

  // Efecto typewriter en distintas páginas
  typewriterEffect("typewriter", "Bienvenidos a One Way. Vamos a enfrentarnos a los tiburones de Wall Street.");
  typewriterEffect("typewriterMaster", "Bienvenido al curso Master Trader, el más completo de ONE WAY. ¿Estás listo para unirte?");
  typewriterEffect("typewriterProfessional", "Bienvenido al curso Professional Trader, nuestro curso intermedio de ONE WAY. ¿Estás listo para unirte?");
  typewriterEffect("typewriterComplete", "Bienvenido al curso Complete Trader, el plan standard de ONE WAY. ¿Estás listo para unirte?");
});


if (!document.querySelector('script[src="https://static.hotmart.com/checkout/widget.min.js"]')) {
  importHotmart();
}
