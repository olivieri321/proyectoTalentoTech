// no es obligatorio el uso de bootstrap

let productos = [];

/* Implementacion de categorías */ 

const totalCarrito = document.querySelector("#totalCarro");
let pagina = 1;
let totalApagar = 0;

// Carrito


const checkboxes = document.querySelectorAll("input[name='categoriasCheckbox']");
const botonSiguientePaginaTienda = document.querySelector("#botonPaginaSiguiente");
const botonAnteriorPaginaTienda = document.querySelector("#botonPaginaAnterior");

function añadirBotonesPagina(){
    botonSiguientePaginaTienda.addEventListener("click", event =>{
        if(contadorAñadidos > 15 ){
            //hacer nada
        }else{
            pagina++;
            botonAnteriorPaginaTienda.disabled = false;
            if(pagina > productos.length / maximosElementosPagina){
                botonSiguientePaginaTienda.disabled = true;
            }
        }
        
        iniciarTienda();
    })
    botonAnteriorPaginaTienda.addEventListener("click", event =>{
        if(pagina > 1){
            pagina--
            botonSiguientePaginaTienda.disabled = false;
            if(pagina == 1){
                botonAnteriorPaginaTienda.disabled = true;
            }
        }
        iniciarTienda();
    })
}

// Agregar un event listener a cada checkbox

let categoriasSeleccionadas = [];

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

        botonAnteriorPaginaTienda.disabled = true;
        botonSiguientePaginaTienda.disabled = true;
        if(contadorAñadidos>=15){
            botonSiguientePaginaTienda.disabled = false;
        }
    });
});


/* generar tarjetas de productos */

let productoshtml = "";
const maximosElementosPagina = 14; // 15 tarjetas, se cuenta desde 0
const contenedorProductos = document.getElementById("tienda")

let tarjetasProductosAñadidas = [];
let contadorAñadidos = 0

function generarTarjetasTienda(producto, numproducto) {
    try{
        if (numproducto > maximosElementosPagina * pagina || numproducto < maximosElementosPagina * (pagina - 1)) {
            // No hacer nada si no está en la página actual
        } else {
            productoshtml += `
                <card class="tarjetaProducto" numProducto="${numproducto}">
                        <div class="imagen">
                            <p><img src="../img/${producto.imagen}" alt="${producto.nombre}"></p>
                        </div>
                        <div class="descripcion">
                            <p class="precio">$${producto.precio}</p>
                            <p>${producto.nombre}</p>
                            <p class="descripcionProducto">${producto.descripcion}</p>
                        </div>
                        <div class="botonesTarjetaProducto">
                            <button class="botonAmpliarCarta" numProducto="${numproducto}">VER DESCRIPCION</button>
                            <button class="botonAgregarCarro" numProducto="${numproducto}">AÑADIR AL CARRO</button>
                        </div>
                </card>`;
            tarjetasProductosAñadidas[contadorAñadidos] = numproducto;
            contadorAñadidos++;
        }
    }catch (error) {
        console.error("Error al generar las tarjetas de los productos: ", error);
    }
    
}

/* manejo del carrito */

const zonaCarrito = document.querySelector(".elementosCarro");


function cargarCarrito(){
    try{
        let carrito = JSON.parse(localStorage.getItem('carritoTiendaTech')) || [];
        const textoTotalCarro = document.querySelector("#totalCarro");
        zonaCarrito.innerHTML = [];
        totalApagar = 0;
        let index = 0;
        carrito.forEach((elemento) => {
            zonaCarrito.innerHTML += `<div class="textoElementoCarro"> <p>${elemento.nombre}  $${elemento.precio}
              #${elemento.cantidad}</p><button class="botonEditarCantidadCarro" id="botonMenosCarro" data-index="${index}">-</button>
               <button class="botonEditarCantidadCarro" id="botonMasCarro" data-index="${index}">+</button></div>`
                totalApagar += elemento.precio * elemento.cantidad;
               index++;
            })
    
        textoTotalCarro.innerHTML = `Total a pagar $${totalApagar}`    
        añadirMasMenosCarrito();
    }catch(error){
        console.log("error al cargar el carrito: "+error)
    }
    
}

function añadirProductoACarrito(idProducto){
    try{
        if (idProducto >= 0 && idProducto < productos.length){

            let carrito = JSON.parse(localStorage.getItem('carritoTiendaTech')) || [];
            let encontrado = false;
            for (let i = 0; i < carrito.length; i++) {
                if(carrito[i].nombre == productos[idProducto].nombre && carrito[i].precio == productos[idProducto].precio){
                    carrito[i].cantidad++;
                    encontrado = true;
                }
            }
    
            if(!encontrado){
                carrito.push({
                    nombre: productos[idProducto].nombre,
                    precio: productos[idProducto].precio,
                    cantidad : 1
                });
            }
            encontrado = false;
    
            localStorage.setItem("carritoTiendaTech",JSON.stringify(carrito));
    
            console.log(carrito);
    
            cargarCarrito();
            
        }
    }
    catch(error){
        console.log("error al añadir el producto "+idProducto+" al carrito: "+error )
    }
    
}


function añadirListenersCompra(){
    try{
        const botonesAñadirAlCarro = document.querySelectorAll(".botonAgregarCarro");
        botonesAñadirAlCarro.forEach(boton => {
            boton.addEventListener("click", (event) => {
                console.log(boton.getAttribute("numproducto"));
                añadirProductoACarrito(boton.getAttribute("numproducto"))
    
            });
        });
    }catch(error){
        console.log("error al añadir listeners a los botones de compra: " + error);
    }
    
}

function agregarBotonesAmpliar(){
    try{
        const botonesAmpliar = document.querySelectorAll('.botonAmpliarCarta');
        botonesAmpliar.forEach(boton => {
            boton.addEventListener('click', () => {
                const numProducto = boton.getAttribute('numProducto');
                const tarjeta = document.querySelector(`.tarjetaProducto[numProducto="${numProducto}"]`);
                tarjeta.classList.toggle('cartaAmpliada');
            });
        });
    }catch(error){
        console.log("Error al agregar botones para ampliar las tarjetas de productos : "+error)
    }
    
}

function comprarProductos(){
    try{
        alert("Productos comprados, gracias por su compra!!!");
        eliminarTodosLosProductos();
    }catch(error){
        console.log("error al tratar de alertar al usuario de su compra : "+error)
    }
    
}

// logica para interactuar con los botones "+" y "-" del carrito

function añadirListenersPagoBorrar(){
    try{
        const botonBorrar = document.querySelector("#botonBorrar");
        const botonPagar = document.querySelector("#botonPagar");
        botonBorrar.addEventListener("click", event => {
            eliminarTodosLosProductos();
        })
        botonPagar.addEventListener("click", event => {
            comprarProductos();
        })
    }catch(error){
        console.log("Error al tratar de añadir listeners a los botones de PAGO y BORRAR: "+error)
    }
    
}

function eliminarUnProducto(id) {
    try{
        let carrito = JSON.parse(localStorage.getItem('carritoTiendaTech')) || [];
        for (let index = 0; index < carrito.length; index++) {
            if(index == id){
                
                if(carrito[index].cantidad> 1){
                    carrito[index].cantidad--;
                }else{
                    carrito.splice(index, 1);
                }
                
            }   
        }
        localStorage.setItem('carritoTiendaTech', JSON.stringify(carrito));
        cargarCarrito();
    }catch(error){
        console.log("error al tratar de eliminar el producto "+id+" del carrito: "+ error);
    }
    
}

function eliminarTodosLosProductos(){
    try{
        let carrito = [];
        localStorage.setItem('carritoTiendaTech', JSON.stringify(carrito));
        cargarCarrito();
    }catch(error){
        console.log("error al intentar borrar el carro entero :" + error);
    }
    
}


function añadirUnProducto(id){
    try{
        let carrito = JSON.parse(localStorage.getItem('carritoTiendaTech')) || [];
        for (let index = 0; index < carrito.length; index++) {
            if(index == id){
                carrito[index].cantidad++;
            }
        }
        localStorage.setItem('carritoTiendaTech', JSON.stringify(carrito));
        cargarCarrito();
    }catch(error){
        console.log("Error al añadir producto" + id +" al carrito :"+ error)
    }
    
}

function añadirMasMenosCarrito(){
    try{
        const botonesMenosCarrito = document.querySelectorAll("#botonMenosCarro");
        const botonesMasCarrito = document.querySelectorAll("#botonMasCarro");
        for (let i = 0; i < botonesMenosCarrito.length; i++) {
            botonesMenosCarrito[i].addEventListener("click", (event) =>{
                eliminarUnProducto(botonesMenosCarrito[i].dataset.index)
            })
        }
        for (let i = 0; i < botonesMasCarrito.length; i++) {
            botonesMasCarrito[i].addEventListener("click", (event) =>{
                añadirUnProducto(botonesMasCarrito[i].dataset.index)
            })
        }
    }catch(error){
        console.log("Error en la creacion de los botones + y - de los productos del carrito: " + error)
    }
    
}


/* funcion para añadir las tarjetas que contienen los productos a la tienda */ 

async function buscarProductos() {
    try {
        const response = await fetch('../productos.json');
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        const data = await response.json();
        productos = data;
        iniciarTienda();
    } catch (error) {
        console.error('Error al realizar fetch:', error);
    }
}

function iniciarTienda() {
    try{
        contadorAñadidos = 0;
        tarjetasProductosAñadidas = [];
        contenedorProductos.innerHTML = "";
        productoshtml = "";
        let temp = 0;

        // por cada producto se verificara y generara en la tienda
        productos.forEach((producto) => {
            if (categoriasSeleccionadas.includes(producto.categoria.trim().toLowerCase()) || categoriasSeleccionadas.length == 0) {
                generarTarjetasTienda(producto, temp);
                temp++;
            }
        });
        contenedorProductos.innerHTML = productoshtml;
        añadirListenersCompra();
        cargarCarrito();
        agregarBotonesAmpliar();
    }catch(error){
        console.error("Error al iniciar tienda: ", error)
    }
    
}


buscarProductos();
añadirListenersPagoBorrar();
añadirBotonesPagina();
