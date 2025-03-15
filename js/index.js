

document.getElementById('discord').addEventListener('click', function() {

    let texto = "Catungap"
  
    navigator.clipboard.writeText(texto).then(function() {
        Swal.fire({
            title: "Se copió mi nombre de usuario :3",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(img/papel.webp)",
            backdrop: `
              rgb(44 0 39 / 31%);
              url("img/nyancat.gif")
              left top
              no-repeat
            `
          });
    }).catch(function(error) {
        Swal.fire({
            title: "Hubo un error al copiar el nombre UnU",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(img/papel.webp)",
            backdrop: `
              rgba(123, 0, 0, 0.4)
              url("img/nyancat.gif")
              left top
              no-repeat
            `
          });
    });

    
  });

function leermas(nombre) {
    const texto = document.querySelector('.'+nombre+' .opinion-texto');
    switch (nombre) {
        case 'magui':

            if (texto.classList.contains('corto')) {
                texto.classList.remove('corto');
                texto.innerHTML = "“muy buen amix, muy creativo e inteligente :3 (ojalá no se le suba el ego porque es un egocéntrico ash)” <button class=\"leer-mas\" onclick=\"leermas('"+nombre+"')\"> Leer menos </button> ";
            } else {
                texto.classList.add('corto');
                texto.innerHTML = "“muy buen amix, muy creativo e inteligente :3...” <button class=\"leer-mas\" onclick=\"leermas('"+nombre+"')\"> Leer más </button> ";
            }
            break;

        case 'seba':
            if (texto.classList.contains('corto')) {
                texto.classList.remove('corto');
                texto.innerHTML = "“Es alguien que cuando trabaja en serio es una de las mejores personas trabajando y realmente alguien que aporta mucho a un equipo de trabajo. Pero cuando no esta completamente en serio puede llegar a actuar como un niño de 8 años” <button class=\"leer-mas\" onclick=\"leermas('"+nombre+"')\"> Leer menos </button> ";
            } else {
                texto.classList.add('corto');
                texto.innerHTML = "“Es alguien que cuando trabaja en serio es una de las mejores personas...” <button class=\"leer-mas\" onclick=\"leermas('"+nombre+"')\"> Leer más </button> ";
            }
            break;

        case 'agus':
            if (texto.classList.contains('corto')) {
                texto.classList.remove('corto');
                texto.innerHTML = "“Una persona muy amable, creativa e innovadora. Asi tambien un peligro para la sociedad ^_^” <button class=\"leer-mas\" onclick=\"leermas('"+nombre+"')\"> Leer menos </button> ";
            } else {
                texto.classList.add('corto');
                texto.innerHTML = "“Una persona muy amable, creativa e innovadora...” <button class=\"leer-mas\" onclick=\"leermas('"+nombre+"')\"> Leer más </button> ";
            }
            break;

        case 'milaneso':
            if (texto.classList.contains('corto')) {
                texto.classList.remove('corto');
                texto.innerHTML = "¿¿¿Que qué opino de catunga??? JA, estaba esperando este momento toda mi vida........... Catunga es... cómo decirlo ¿acaso es humano? No lo vean como un simple mortal que hace cosas de simples mortales, veanlo como un ser capaz de realizar las mayores genialidades y ATROCIDADES jamás pensadas. Catunga es aquello que más deseo y Catunga es aquello que más odio.  Pero ojo; Catunga es una buena persona; Catunga no hace maldades con malas intenciones; Catunga puede ser torpe, pero es inteligente, quizás el ser más capaz que conozco, para bien o para mal...Entonces, ¿qué es Catunga? Tengo miedo, pero tendré que decirlo igualmente: Catunga es creación, y Catunga es destrucción; una buena mezcla. Catunga me da paz. <button class=\"leer-mas\" onclick=\"leermas('"+nombre+"')\"> Leer menos </button> ";
            } else {
                texto.classList.add('corto');
                texto.innerHTML = "“¿¿¿Que qué opino de catunga??? JA, estaba esperando este momento...” <button class=\"leer-mas\" onclick=\"leermas('"+nombre+"')\"> Leer más </button> ";
            }
            break;
    } 

};

window.addEventListener('load', function() {

    if (!window.location.hash) {
        window.location.hash = '#presentacion';
    }

    document.getElementById('loading-screen').style.display = 'none';
    let imagenes = document.querySelectorAll('.background-image');
    imagenes.forEach(imagen => {
        imagen.classList.add('hidden');
    });



    let encabezado = document.querySelector('#encabezado');
    encabezado.classList.add('animate__animated', 'animate__backInDown');

    
        if (window.location.hash === '#catunga') {        
            let imagenes = document.querySelectorAll('.background-image');
            imagenes.forEach(imagen => {
                imagen.classList.remove('hidden');
                imagen.classList.add('animate__animated', 'animate__fadeInUp');
            });
        } else {
            encabezado.addEventListener('animationend', () => {
                let imagenes = document.querySelectorAll('.background-image');
                imagenes.forEach(imagen => {
                    imagen.classList.remove('hidden');
                    imagen.classList.add('animate__animated', 'animate__fadeInUp');
                });
            });
        }
    


      


    document.querySelectorAll('.seccion').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let sectionId = this.getAttribute('data-section');
            let currentSection = document.querySelector('.section-content:not([style*="display: none"])');
            let nextSection = document.getElementById(sectionId);

            let inicio = document.getElementById('ermwhatthesigma');
            inicio.scrollIntoView({ behavior: "smooth", block: "start" });
            
            currentSection.classList.add('animate__animated', 'animate__fadeOut');

            currentSection.addEventListener('animationend', function() {
                
                currentSection.style.display = 'none';
                currentSection.classList.remove('animate__animated', 'animate__fadeOut');

                nextSection.style.display = 'block';
                nextSection.classList.add('animate__animated', 'animate__fadeInUp');

                nextSection.addEventListener('animationend', function() {
                    nextSection.classList.remove('animate__animated', 'animate__fadeInUp');
                }, { once: true });
                let sectionName = sectionId.replace('section-', '');
                history.pushState(null, '', `#${sectionName}`);

                if (sectionName === 'catunga') {
                    encabezado.style.display = 'none';
                } else {
                    encabezado.style.display = 'block';
                }

            }, { once: true });
        });
    });

    window.addEventListener('popstate', function(event) {
        let hash = window.location.hash.substring(1);
        let sectionId = `section-${hash}`;
        let currentSection = document.querySelector('.section-content:not([style*="display: none"])');
        let nextSection = document.getElementById(sectionId);

        if (nextSection) {
            currentSection.style.display = 'none';
            nextSection.style.display = 'block';

            if (hash === 'catunga') {
                encabezado.style.display = 'none';
            } else {
                encabezado.style.display = 'block';
            }
        }
    });

    let hash = window.location.hash.substring(1);
    if (hash) {
        let sectionId = `section-${hash}`;
        let nextSection = document.getElementById(sectionId);

        if (nextSection) {
            document.querySelectorAll('.section-content').forEach(section => {
                section.style.display = 'none';
            });
            nextSection.style.display = 'block';

            if (hash === 'catunga') {
                encabezado.style.display = 'none';
            } else {
                encabezado.style.display = 'block';
            }
        }
    }

});





