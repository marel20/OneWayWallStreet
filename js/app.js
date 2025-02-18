document.addEventListener("DOMContentLoaded", function () {
    // Navbar
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
    // (Aquí iría el código para el cambio de idioma, si lo tienes)
  
    // Menu-toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const menuIcon = menuToggle.querySelector("i");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
  
    // Alternar menú y cambiar ícono
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
  
    // Desplazar suavemente hacia abajo
    document.getElementById("scrollToSection").addEventListener("click", function() {
      document.getElementById("heroHome").scrollIntoView({ behavior: "smooth" });
    });
  });

  //efecto typewriter
  document.addEventListener("DOMContentLoaded", function () {
    const texto = "Bienvenidos a One Way. Vamos a enfrentarnos a los tiburones de Wall Street.";
    const target = document.getElementById("typewriter");
    let index = 0;
  
    function escribir() {
      if (index < texto.length) {
        target.textContent += texto.charAt(index);
        index++;
        setTimeout(escribir, 100); // Ajusta la velocidad (100 ms por carácter)
      } else {
        // Opcional: cuando termine, quitar el borde del cursor
        target.style.borderRight = "none";
      }
    }
  
    escribir();
  });
  