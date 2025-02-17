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
  document.addEventListener("DOMContentLoaded", function () {
    // Esperar a que Google Translate esté listo
    function waitForTranslate() {
        const select = document.querySelector(".goog-te-combo");
        if (select) {
            attachLanguageChange(select);
        } else {
            setTimeout(waitForTranslate, 500); // Revisar cada 500ms si está cargado
        }
    }

    function attachLanguageChange(select) {
        const languageList = document.querySelectorAll(".language-list li");
        languageList.forEach((item) => {
            item.addEventListener("click", function () {
                const lang = item.getAttribute("data-lang");
                select.value = lang;
                select.dispatchEvent(new Event("change"));
            });
        });
    }

    waitForTranslate();
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

//desplazar suavemente para abajo
        // Función para desplazarse suavemente
        document.getElementById("scrollToSection").addEventListener("click", function() {
            document.getElementById("heroHome").scrollIntoView({ behavior: "smooth" });
        });


