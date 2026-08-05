//======================================
// CARRITO DE COMPRAS
//======================================

let contador = 0;

const contadorCarrito = document.getElementById("contador");

const botonesAgregar = document.querySelectorAll(".agregar");

botonesAgregar.forEach((boton) => {

    boton.addEventListener("click", () => {

        contador++;

        contadorCarrito.textContent = contador;

        boton.innerHTML = "✔ Agregado";

        boton.style.background = "#16a34a";

        setTimeout(() => {

            boton.innerHTML = "Agregar al carrito";

            boton.style.background = "";

        }, 1500);

    });

});

//======================================
// BOTÓN COMPRAR AHORA
//======================================

const comprar = document.getElementById("comprar");

comprar.addEventListener("click", () => {

    contador++;

    contadorCarrito.textContent = contador;

    alert("Producto agregado correctamente al carrito.");

});

//======================================
// BUSCADOR
//======================================

const buscador = document.querySelector(".busqueda input");

const productos = document.querySelectorAll(".producto");

buscador.addEventListener("keyup", () => {

    const texto = buscador.value.toLowerCase();

    productos.forEach((producto) => {

        const nombre = producto.querySelector("h3").textContent.toLowerCase();

        if (nombre.includes(texto)) {

            producto.style.display = "block";

        } else {

            producto.style.display = "none";

        }

    });

});

//======================================
// NEWSLETTER
//======================================

const formulario = document.querySelector(".newsletter form");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const correo = formulario.querySelector("input").value;

    if (correo === "") {

        alert("Ingrese un correo electrónico.");

        return;

    }

    alert("¡Gracias por suscribirte!");

    formulario.reset();

});

//======================================
// SCROLL SUAVE
//======================================

document.querySelectorAll('a[href^="#"]').forEach((enlace) => {

    enlace.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

//======================================
// ANIMACIÓN AL HACER SCROLL
//======================================

const tarjetas = document.querySelectorAll(".card, .producto");

function mostrarElementos() {

    const altura = window.innerHeight;

    tarjetas.forEach((elemento) => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < altura - 100) {

            elemento.style.opacity = "1";

            elemento.style.transform = "translateY(0)";

        }

    });

}

tarjetas.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(50px)";

    elemento.style.transition = "0.8s";

});

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();

//======================================
// EFECTO HEADER
//======================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "none";

    }

});

//======================================
// EFECTO HOVER EN IMAGEN
//======================================

const imagen = document.querySelector(".hero-imagen img");

imagen.addEventListener("mouseover", () => {

    imagen.style.transform = "scale(1.05)";

    imagen.style.transition = ".4s";

});

imagen.addEventListener("mouseout", () => {

    imagen.style.transform = "scale(1)";

});

//======================================
// MENSAJE DE BIENVENIDA
//======================================

window.addEventListener("load", () => {

    console.log("AuraBand cargado correctamente.");

});

//======================================
// RELOJ DIGITAL
//======================================

function actualizarHora() {

    const ahora = new Date();

    const hora = ahora.toLocaleTimeString();

    console.log("Hora actual:", hora);

}

setInterval(actualizarHora, 1000);