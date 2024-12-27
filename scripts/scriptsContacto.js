let obtuboTarjetas = false;

try {
    let contenedorTarjetas = document.querySelector("#reseñas");
    let tarjetas = document.querySelectorAll(".tarjetaReseña");
    obtuboTarjetas = true;
    let indiceRotacion = 0;
    let desplazamiento = tarjetas[0].offsetWidth + 20;

    function rotarTarjetas() {
        contenedorTarjetas.style.transition = "transform 4.0s ease-in-out";
        contenedorTarjetas.style.transform = `translateX(-${desplazamiento * indiceRotacion}px)`;
        indiceRotacion = (indiceRotacion + 1) % (tarjetas.length - 2);

        if (indiceRotacion === 0) {
            setTimeout(() => {
                contenedorTarjetas.style.transition = "none";
                contenedorTarjetas.style.transform = `translateX(0px)`;
            }, 500);
        }
    }
    rotarTarjetas();
    setInterval(rotarTarjetas, 4000);

} catch (error) {
    if (!obtuboTarjetas) {
        console.log("Error al obtener tarjetas de reseña " + error);
    } else {
        console.log("Error al mover las tarjetas de reseña, probablemente causado por cambio de visibilidad: " + error);
    }
}
