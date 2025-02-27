

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
    const logo = document.querySelector(".logo");
  
    // Verifica si los elementos existen antes de continuar
if (!navbar) console.warn("⚠️ navbar no encontrado.");
if (!sectionBlackPC && !sectionBlackMobile) console.warn("⚠️ Ninguna sección negra encontrada.");

// Solo ejecuta el scroll si al menos uno de los elementos existe
if (navbar && (sectionBlackPC || sectionBlackMobile)) {
  window.addEventListener("scroll", handleNavbarScroll);
}

    function handleNavbarScroll() {
      const isMobile = window.innerWidth <= 768;
      const section = isMobile ? sectionBlackMobile : sectionBlackPC;

      if (!section) return;
  
      const sectionRect = section.getBoundingClientRect();
  
      if (sectionRect.bottom <= 0) {
        navbar.style.backgroundColor = "white"; // Fondo claro
  
        if (isMobile) {
          menuIcon.style.color = "black"; // Cambia color del ícono en mobile
          logo.style.backgroundColor = "black";
          logo.style.borderRadius = 50 + "px";
          logo.style.transition = "0.5s ease";
        } else {
          navLinks.forEach(link => link.style.color = "black"); // Solo en PC
          navLink.forEach(link => link.style.color = "black"); // Solo en PC
          logo.style.backgroundColor = "black";
          logo.style.borderRadius = 50 + "px";
          logo.style.transition = "0.5s ease";
        }
      } else {
        navbar.style.backgroundColor = "transparent"; // Fondo original
  
        if (isMobile) {
          menuIcon.style.color = ""; // Restaurar color original en mobile
          logo.style.backgroundColor = "transparent";
          logo.style.borderRadius = 0 + "px";
        } else {
          navLinks.forEach(link => link.style.color = "");
          navLink.forEach(link => link.style.color = "");
          logo.style.backgroundColor = "transparent";
          logo.style.borderRadius = 0 + "px";
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


  //efecto typewriter home
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

     //efecto typewriter Master Trader
     document.addEventListener("DOMContentLoaded", function () {
       const texto = "Bienvenido al curso Master Trader, el mas completo de ONE WAY. ¿Estás listo para unirte?";
       const target = document.getElementById("typewriterMaster");
       let index = 0;
    
       function escribirMaster() {
         if (index < texto.length) {
           target.textContent += texto.charAt(index);
           index++;
           setTimeout(escribir, 100); // Ajusta la velocidad (100 ms por carácter)
         } else {
           // Opcional: cuando termine, quitar el borde del cursor
           target.style.borderRight = "none";
         }
       }
    
       escribirMaster();
     });

      //efecto typewriter Professional Trader
   document.addEventListener("DOMContentLoaded", function () {
     const texto = "Bienvenido al curso Professional Trader, nuestro curso intermedio de ONE WAY. ¿Estás listo para unirte?";
     const target = document.getElementById("typewriterProfessional");
     let index = 0;
  
     function escribirProfessional() {
       if (index < texto.length) {
         target.textContent += texto.charAt(index);
         index++;
         setTimeout(escribir, 100); // Ajusta la velocidad (100 ms por carácter)
       } else {
         // Opcional: cuando termine, quitar el borde del cursor
         target.style.borderRight = "none";
       }
     }
  
     escribirProfessional();
   });

     //efecto typewriter Complete Trader
     document.addEventListener("DOMContentLoaded", function () {
       const texto = "Bienvenido al curso Complete Trader, el plan standard de ONE WAY. ¿Estás listo para unirte?";
       const target = document.getElementById("typewriterComplete");
       let index = 0;
    
       function escribirComplete() {
         if (index < texto.length) {
           target.textContent += texto.charAt(index);
           index++;
           setTimeout(escribir, 100); // Ajusta la velocidad (100 ms por carácter)
         } else {
           // Opcional: cuando termine, quitar el borde del cursor
           target.style.borderRight = "none";
         }
       }
    
       escribirComplete();
     });

  //btn cards programs
   document.getElementById("completeTrader").addEventListener("click", function() {
     window.location.href = "../pages/complete.html"; // Reemplaza con la URL de destino
   });

   document.getElementById("masterTrader").addEventListener("click", function() {
     window.location.href = "../pages/master.html"; // Reemplaza con la URL de destino
   });

   document.getElementById("professionalTrader").addEventListener("click", function() {
     window.location.href = "../pages/profesional.html"; // Reemplaza con la URL de destino
   });
  
  //form
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real del formulario

    let name = document.getElementById("name").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || subject === "" || email === "" || message === "") {
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

        document.getElementById("contactForm").reset();

        setTimeout(() => {
            banner.style.display = "none";
        }, 3000);
    }, 2000);
});

//hotmart
function importHotmart(){ 
  var imported = document.createElement('script'); 
  imported.src = 'https://static.hotmart.com/checkout/widget.min.js'; 
  document.head.appendChild(imported); 
 var link = document.createElement('link'); 
 link.rel = 'stylesheet'; 
 link.type = 'text/css'; 
 link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css'; 
 document.head.appendChild(link);	} 
importHotmart(); 