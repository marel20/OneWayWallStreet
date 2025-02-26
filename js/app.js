document.addEventListener("DOMContentLoaded", function () {
    //popup
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close");

    // Mostrar el popup al cargar la página
    popup.style.display = "flex";

    // Cerrar el popup al hacer clic en la "X"
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Cerrar el popup automáticamente después de 1 minuto (60,000 ms)
    setTimeout(function () {
        popup.style.display = "none";
    }, 60000);

    
    // Navbar
    const navbar = document.querySelector(".navbar");
    const sectionBlackPC = document.getElementById("section-black");
    const sectionBlackMobile = document.getElementById("section-black-mobile");
    const navLinks = document.querySelectorAll(".nav-links a");
    const navLink = document.querySelectorAll(".nav-links i");
    const menuToggle = document.querySelector(".menu-toggle");
    const menuIcon = menuToggle.querySelector("i"); // Asegúrate de que el ícono esté dentro del botón
  
    function handleNavbarScroll() {
      const isMobile = window.innerWidth <= 768;
      const section = isMobile ? sectionBlackMobile : sectionBlackPC;
  
      if (!section) return;
  
      const sectionRect = section.getBoundingClientRect();
  
      if (sectionRect.bottom <= 0) {
        navbar.style.backgroundColor = "white"; // Fondo claro
  
        if (isMobile) {
          menuIcon.style.color = "black"; // Cambia color del ícono en mobile
        } else {
          navLinks.forEach(link => link.style.color = "black"); // Solo en PC
          navLink.forEach(link => link.style.color = "black"); // Solo en PC
        }
      } else {
        navbar.style.backgroundColor = "transparent"; // Fondo original
  
        if (isMobile) {
          menuIcon.style.color = ""; // Restaurar color original en mobile
        } else {
          navLinks.forEach(link => link.style.color = "");
          navLink.forEach(link => link.style.color = "");
        }
      }
    }
  
    window.addEventListener("scroll", handleNavbarScroll);
  
    // ---- Funcionalidad del menú ----
    const navMenu = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    
  
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
      menuIcon.style.color = "white"; // Cambia color del ícono en mobile
    });
  
    navItems.forEach(link => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  
    // ---- Desplazamiento Suave ----
    const scrollToSection = document.getElementById("scrollToSection");
    if (scrollToSection) {
      scrollToSection.addEventListener("click", function () {
        document.getElementById("heroHome").scrollIntoView({ behavior: "smooth" });
      });
    }
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
  
  //form
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real del formulario

    // Validar que los campos no estén vacíos
    let name = document.getElementById("name").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || subject === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Animación de envío
    let button = document.getElementById("sendButton");
    button.innerHTML = "Enviando...";
    button.style.pointerEvents = "none";

    setTimeout(() => {
        button.innerHTML = "Enviar";
        button.style.pointerEvents = "auto";

        // Mostrar banner de éxito
        let banner = document.getElementById("successBanner");
        banner.style.display = "block";

        // Resetear el formulario
        document.getElementById("contactForm").reset();

        // Ocultar el banner después de 3 segundos
        setTimeout(() => {
            banner.style.display = "none";
        }, 3000);
    }, 2000);
});