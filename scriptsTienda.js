// no es obligatorio el uso de bootstrap

const productos = [
    {
        nombre: "ryzen 3",
        descripcion: `
        •Modelo: Ryzen 5 5600G
        •Nucleos: 6 nucleos
        •Hilos: 12 hilos
        •Frecuencia: 3.9ghz - 4.4ghz
        •Igpu: si
        •Socalo: AM4
        •Memoria: ddr4
        •TDP: 65
        `,
        precio: 300000,
        categoria: "procesador",
        imagen: "ryzen3.webp",
    },
    {
        nombre: "ryzen 5",
        descripcion: "",
        precio: 500000,
        categoria: "procesador",
        imagen: "ryzen5.webp",
    },
    {
        nombre: "ryzen 7",
        descripcion: "",
        precio: 700000,
        categoria: "procesador",
        imagen: "ryzen7.webp",
    },
    {
        nombre: "ryzen 9",
        descripcion: "",
        precio: 900000,
        categoria: "procesador",
        imagen: "ryzen9.webp",
    },
    {
        nombre: "rx 6800",
        descripcion: "",
        precio: 800000,
        categoria: "gpu",
        imagen: "rx6800.jpg",
    },
    {
        nombre: "rx 6700",
        descripcion: "",
        precio: 650000,
        categoria: "gpu",
        imagen: "rx6700.webp",
    },
    {
        nombre: "rx 6600",
        descripcion: "",
        precio: 500000,
        categoria: "gpu",
        imagen: "rx6600.webp",
    },
    {
        nombre: "rx 6500",
        descripcion: "",
        precio: 320000,
        categoria: "gpu",
        
        imagen: "rx6500.webp",
    },
    {
        nombre: "rtx 4090",
        descripcion: "",
        precio: 2000000,
        categoria: "gpu",
        imagen: "rtx4090.webp",
    },
    {
        nombre: "rtx 4080",
        descripcion: "",
        precio: 1300000,
        categoria: "gpu",
        imagen: "rtx4080.webp",
    },
    {
        nombre: "rtx 4070",
        descripcion: "",
        precio: 1000000,
        categoria: "gpu",
        imagen: "rtx4070.webp",
    },
    {
        nombre: "rtx 4060",
        descripcion: "",
        precio: 700000,
        categoria: "gpu",
        imagen: "rtx4060.webp",
    },
    {
        nombre: "rtx 4050",
        descripcion: "",
        precio: 500000,
        categoria: "gpu",
        imagen: "rtx4050.jpg",
    },
    {
        nombre: "intel core i9",
        descripcion: "",
        precio: 900000,
        categoria: "procesador",
        imagen: "i9.jpg",
    },
    {
        nombre: "intel core i7",
        descripcion: "",
        precio: 500000,
        categoria: "procesador",
        imagen: "i7.webp",
    },
    {
        nombre: "intel core i5",
        descripcion: "",
        precio: 300000,
        categoria: "procesador",
        imagen: "i5.webp",
    },
    {
        nombre: "intel core i3",
        descripcion: "",
        precio: 120000,
        categoria: "procesador",
        imagen: "i3.webp",
    },
    {
        nombre: "intel pentium",
        descripcion: "",
        precio: 70000,
        categoria: "procesador",
        imagen: "pentium.jpg",
    },
    {
        nombre: "SSD Kingstone 1tb",
        descripcion: "",
        precio: 70000,
        categoria: "SSD",
        imagen: "SSDKingstone.jfif",
    },
    {
        nombre: "SSD Kingstone 500gb",
        descripcion: "",
        precio: 50000,
        categoria: "SSD",
        
        imagen: "SSDKingstone.jfif",
    },
    {
        nombre: "SSD Kingstone 240gb",
        descripcion: "",
        precio: 30000,
        categoria: "SSD",
        imagen: "SSDKingstone.jfif",
        descripcion: "",
    },
    {
        nombre: "Disco Duro Seagate 2tb",
        descripcion: "",
        precio: 90000,
        categoria: "HDD",
        imagen: "seagate.webp",
    },
    {
        nombre: "Disco Duro Seagate 1tb",
        descripcion: "",
        precio: 70000,
        categoria: "HDD",
        imagen: "seagate.webp",
    },
    {
        nombre: "Disco Duro WD Blue 4tb",
        descripcion: "",
        precio: 120000,
        categoria: "HDD",
        imagen: "wdblue.jfif",
    },
    {
        nombre: "Disco Duro WD Blue 1tb",
        descripcion: "",
        precio: 70000,
        categoria: "HDD",
        imagen: "wdblue.jfif",
    },
    {
        nombre: "Disco Duro WD Blue 320gb",
        descripcion: "",
        precio: 20000,
        categoria: "HDD",
        imagen: "wdblue.jfif",
    },
]

/* Implementacion de categorias */ 
let pagina = 1;

let productosSeleccionados = 0;
let totalApagar = 0;

const checkboxes = document.querySelectorAll("input[name='categoriasCheckbox']");

// Agregar un event listener a cada checkbox
let categoriasSeleccionadas = [];

// Agregar evento a cada checkbox
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
        const categoria = event.target.id.trim().toLowerCase();

        if (event.target.checked) {
            // Agregar la categoría seleccionada al array
            categoriasSeleccionadas.push(categoria);
        } else {
            // Eliminar la categoría deseleccionada del array
            categoriasSeleccionadas = categoriasSeleccionadas.filter((cat) => cat !== categoria);
        }
        pagina = 1;
        iniciarTienda();
    });
});


/* generar tarjetas de productos */

let productoshtml = "";
const maximosElementosPagina = 14;
const contenedorProductos = document.getElementById("tienda")

const botonSiguientePaginaTienda = document.querySelector("#botonPaginaSiguiente");
const botonAnteriorPaginaTienda = document.querySelector("#botonPaginaAnterior");

let tarjetasProductosAñadidas = [];
let contadorAñadidos = 0

function generarTarjetasTienda(producto, numproducto) {
    try{
        if (numproducto > maximosElementosPagina * pagina || numproducto < maximosElementosPagina * (pagina - 1)) {
            // No hacer nada si no está en la página actual
        } else {
            productoshtml += `
                <card class="tarjetaProducto">
                        <div class="imagen">
                            <p><img src="../img/${producto.imagen}" alt="${producto.nombre}"></p>
                        </div>
                        <div class="descripcion">
                            <p class="precio">$${producto.precio}</p>
                            <p>${producto.nombre}</p>
                        </div>
                        <div class="botonesTarjetaProducto">
                            <button class="botonAmpliarCarta" data-index="${numproducto}">VER DESCRIPCION</button>
                            <button class="botonAgregarCarro" data-index="${numproducto}">AÑADIR AL CARRO</button>
                        </div>
                </card>`;
            tarjetasProductosAñadidas[contadorAñadidos] = numproducto;
            contadorAñadidos++;
        }
    }catch (error) {
        console.error("Error al generar las tarjetas de los productos: ", error);
    }
    
}

/* funcion para añadir las tarjetas que contienen los productos a la tienda */ 

function iniciarTienda() {
    try{
        contadorAñadidos = 0;
        tarjetasProductosAñadidas = [];
        contenedorProductos.innerHTML = "";
        productoshtml = "";
        let temp = 0;
        productos.forEach((producto, index) => {
            if (categoriasSeleccionadas.includes(producto.categoria.trim().toLowerCase()) || categoriasSeleccionadas.length == 0) {
                generarTarjetasTienda(producto, temp);
                temp++;
            }
        });
        contenedorProductos.innerHTML = productoshtml;
        añadirListenersCompra();
    }catch(error){
        console.error("Error al iniciar tienda: ", error)
    }
    
}

/* funcion para agregar listeners a los botones de comprar producto*/

function añadirListenersCompra() {
    try{
        let botonesAgregar = document.querySelectorAll(".botonAgregarCarro");
        let botonesAmpliar = document.querySelectorAll(".botonAmpliarCarta")

        let listaCarrito = document.querySelector("#carrito div ul"); // obtiene un elemento ul
        let totalCarrito = document.querySelector("#carrito div p");
        const cartaProducto = document.querySelectorAll(".tarjetaProducto");
        const descripcionCartaProducto = document.querySelectorAll(".tarjetaProducto .descripcion");

        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", function() {
                const productoIndex = boton.getAttribute("data-index");
                const producto = productos[productoIndex];
    
                totalApagar += producto.precio;
                const elementoLista = document.createElement("li");
                elementoLista.innerText = `${producto.nombre} $${producto.precio}`;
                console.log(elementoLista);
                listaCarrito.appendChild(elementoLista);
                totalCarrito.innerText = "Total a pagar $" + totalApagar;
                productosSeleccionados++;
            });
        });
        botonesAmpliar.forEach((boton) =>{
            let ampliado = false;
            const productoIndex = boton.getAttribute("data-index");
            const producto = productos[productoIndex];
            boton.addEventListener("click",function(){
                if(!ampliado){
                    cartaProducto[productoIndex].classList.add("tarjetaProductoCompleta");
                    descripcionCartaProducto[productoIndex].innerHTML += "<p>"+ producto.descripcion +"</p>";
                    ampliado = true; 
                }else{
                    cartaProducto[productoIndex].classList.remove("tarjetaProductoCompleta");
                    descripcionCartaProducto[productoIndex].innerHTML = `<p class="precio">$${producto.precio}</p>
                    <p>${producto.nombre}</p>`;
                    ampliado = false;
                }
                

            })
        });
    }catch(error){
        console.error("Error al añadir listeners a los botones de agregar al carro de las tarjetas de productos: ", error)
    }
    
}

/* manejo de paginas de tarjetas de productos*/ 


function siguientePagina(){
    try{
        console.log("se clickeo siguiente pagina")
        if(productos.length / maximosElementosPagina > pagina){
            pagina++;
            iniciarTienda();
            botonAnteriorPaginaTienda.disabled = false;
            botonAnteriorPaginaTienda.style.opacity = "1.0"
            if(!(productos.length / maximosElementosPagina > pagina)){
                botonSiguientePaginaTienda.disabled = true;
                botonSiguientePaginaTienda.style.opacity = "0.5"
            }
        }
    }catch(error){
        console.error("Error al pasar a siguiente pagina ", error);
    }
    
}
function anteriorPagina(){
    try{
        if(pagina != 1){
            pagina--;
            iniciarTienda();
            botonSiguientePaginaTienda.disabled = false;
            botonSiguientePaginaTienda.style.opacity = "1.0"
            if(pagina == 1){
                botonAnteriorPaginaTienda.disabled = true;
                botonAnteriorPaginaTienda.style.opacity = "0.5"
            }
        }
    }catch{
        console.error("Error al pasar a anterior pagina ", error);
    }
    
}

botonSiguientePaginaTienda.addEventListener("click",siguientePagina);
botonAnteriorPaginaTienda.addEventListener("click",anteriorPagina);

//agregar listener a boton borrar

try{
    const botonBorrar = document.querySelector("#botonBorrar");
    function borrarElementosCarrito(){
        for(let index = 0; index < productosSeleccionados; index++){
            listaCarrito.innerHTML = "";
            totalCarrito.innerHTML = "";
            totalApagar = 0;
        }
    }
    botonBorrar.addEventListener("click", borrarElementosCarrito);
    
    const botonComprar = document.querySelector("#botonPagar")
    
    function comprarProductos(){
        borrarElementosCarrito();
        alert("Productos Comprados");
    }
    
    botonComprar.addEventListener("click", comprarProductos)
}catch(error){
    console.error("Error al asignar listeners a botones de borrar o pagar del carro", error);
}


iniciarTienda();




