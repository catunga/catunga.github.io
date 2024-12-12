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
        imagen.style.display = 'none';
    });



    let encabezado = document.querySelector('#encabezado');
    encabezado.classList.add('animate__animated', 'animate__backInDown');

    encabezado.addEventListener('animationend', () => {
        let imagenes = document.querySelectorAll('.background-image');
        imagenes.forEach(imagen => {
            imagen.style.display = 'block';
            imagen.classList.add('animate__animated', 'animate__fadeInUp');
        });
      });
});