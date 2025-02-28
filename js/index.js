document.getElementById('encabezado-menu').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
    document.getElementById('icono-burger').classList.toggle('active');
    document.getElementById('cuadradito3').classList.toggle('active');
    document.getElementById('cuadradito4').classList.toggle('active');
});

function leermas(nombre) {
    const texto = document.querySelector('.'+nombre+' .opinion-texto');
    switch (nombre) {
        case 'magui':

            break;

        case 'seba':

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
    document.getElementById('loading-screen').style.display = 'none';
    let imagenes = document.querySelectorAll('.background-image');
    imagenes.forEach(imagen => {
        imagen.classList.add('hidden');
    });



    let encabezado = document.querySelector('#encabezado');
    encabezado.classList.add('animate__animated', 'animate__backInDown');

    encabezado.addEventListener('animationend', () => {
        let imagenes = document.querySelectorAll('.background-image');
        imagenes.forEach(imagen => {
            imagen.classList.remove('hidden');
            imagen.classList.add('animate__animated', 'animate__fadeInUp');
        });
      });

    document.querySelectorAll('.section-content').forEach(section => {
        if (section.id !== 'section-presentacion') {
            section.style.display = 'none';
        }
    });

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
                    nextSection.classList.remove('animate__animated', 'animate__fadeIn');
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


    document.querySelector('.goku5').addEventListener('click', function() {
        this.classList.add('animate__animated', 'animate__tada');
        this.addEventListener('animationend', function() {
            this.classList.remove('animate__animated', 'animate__tada');
        }, { once: true });
    });

});





