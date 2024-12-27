
let obtuboTarjetas = false;

try{
    let contenedorTarjetas = document.querySelector("#reseñas");
    let tarjetas = document.querySelectorAll(".tarjetaReseña");
    let indiceRotacion = 0;
    let desplazamiento = tarjetas[0].offsetWidth + 20 ; 

    function rotarTarjetas() {
        contenedorTarjetas.style.transform = `translateX(-${desplazamiento * indiceRotacion}px)`;
        indiceRotacion = (indiceRotacion + 1) % tarjetas.length;
    }

    setInterval(rotarTarjetas, 2000); 

}catch(error){
    console.log("Error al mover las tarjetas de reseña, probablemente causado por cambio de visibilidad" + error)
}
 