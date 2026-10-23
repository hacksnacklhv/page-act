// ===============================
// HACK & SNACK
// script.js
// ===============================

// Navbar cambia de color al hacer scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(10,10,20,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
    } else {
        header.style.background = "rgba(15,8,25,.8)";
        header.style.boxShadow = "none";
    }
});

// Animación de aparición
const elementos = document.querySelectorAll(".card, .stat, .promo-box, .grid img");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold:0.2
});

elementos.forEach(el => {

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition="all .8s ease";

    observer.observe(el);

});

// Botones Pedir
const botones = document.querySelectorAll(".card button");

botones.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("🍔 Tu pedido fue agregado al carrito.");

});

});

// Botón Ordenar
const ordenar = document.querySelector(".btn");

if(ordenar){

ordenar.addEventListener("click",()=>{

console.log("Ir al menú");

});

}

// Efecto de brillo al mover el mouse
document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

document.body.style.background=
`radial-gradient(circle at ${x*100}% ${y*100}%,
rgba(166,61,255,.18),
#14071F 55%)`;

});