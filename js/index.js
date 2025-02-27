document.getElementById('encabezado-menu').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
    document.getElementById('icono-burger').classList.toggle('active');
    document.getElementById('cuadradito3').classList.toggle('active');
    document.getElementById('cuadradito4').classList.toggle('active');
});

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
});