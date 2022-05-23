class producto {
    constructor(marca, detalle, segmento, color, precioLista) {
        this.marca = marca.toUpperCase();
        this.detalle = detalle.toUpperCase();
        this.segmento = segmento.toUpperCase();
        this.color = color
        this.precioLista = parseFloat(precioLista);
    }
    actualizarPrecioIva() {
        this.precioLista = this.precioLista*1.21;
    }
}


//JQUERY

//$("body").prepend("<p>Hola chicos</p>");

$(document).ready(function() {
    $("header").append("<p>Por favor ingresar su opción</p>");
    //cambios en el DOM
    $("#cabecera").css({ background: 'grey', color: 'white' });
    //selector y evento change
    $("#miSeleccion").on("change", ordenar);
    //boton para hacer aparecer la suscripcion
    $("#boton").append("<button class='btn btn-warning' id='btnSuscrip'>Suscribirse</button>");
    $("#btnSuscrip").click(suscribir);
});

const ordenar = () => {
    let seleccion = $("#miSeleccion").val();
    //console.log(seleccion);
    if (seleccion == "menor") {
        productos.sort(function(a, b) {
            return a.precio - b.precio;
        });
    } else if (seleccion == "mayor") {
        productos.sort(function(a, b) {
            return b.precio - a.precio;
        });
    } else if (seleccion == "alfabetico") {
        productos.sort(function(a, b) {
            return a.nombre.localeCompare(b.nombre);
        });
    }
    $("li").remove();
    renderizarProductos();
}

let producto1 = new producto("mla", "sillagamer", "tecnologia", "negro", "100000");
let producto2 = new producto("mla", "mousegamer", "tecnologia", "negro" , "4000");
let producto3 = new producto("mla", "mousepadgamer", "tecnologia", "negro" , "1500");
let producto4 = new producto("mla", "monitorgamer", "tecnologia", "negro" , "50000");
let producto5 = new producto("mla", "gabinetegamer", "tecnologia", "negro" , "3000");
let producto6 = new producto("mla", "buzo", "ropa", "negro" , "4500");
let producto7 = new producto("mla", "remera", "ropa", "negro" , "3000");
let producto8 = new producto("mla", "pantalon", "ropa", "negro" , "4500");

const listaProductos = [];
listaProductos.push(producto1);
listaProductos.push(producto2);
listaProductos.push(producto3);
listaProductos.push(producto4);
listaProductos.push(producto5);
listaProductos.push(producto6);
listaProductos.push(producto7);
listaProductos.push(producto8);
console.log(listaProductos);


listaProductos.sort(function(a, b) {
    return a.precio - b.precio;
});

console.log(listaProductos);


const filtroGamer = listaProductos.filter(item => item.detalle.includes("GAMER"));
console.log(filtroGamer);
for(const precioGamer of filtroGamer){
    precioGamer.actualizarPrecioIva();
}

const listarProductos = (listaDeProducto) =>{
    listaDeProducto.filter(item => alert("Usted selecciono:\n Marca: " + item.marca +"\n Detalle: " + item.detalle +
    "\n Segmento: " + item.segmento +"\n Color: " + item.color +"\n Precio: " + item.precioLista))
    let pruebaId = document.getElementById("parrafoPrueba");
    for (const item of listaDeProducto) {
    pruebaId.innerHTML += `<div>
                            <p>  Marca: ${item.marca}</p>
                            <p>  Detalle: ${item.detalle}</p>
                            <p>  Producto: ${item.segmento}</p>
                            <p>  Producto: ${item.color}</p>
                            <p>  Producto: ${item.precioLista}</p>
                            </div>`
    }
}

const filtroDetalle = (detalle, listaProductos)=>{
    return listaProductos.filter(item => item.detalle == detalle.toUpperCase());
}

let busquedaTipo = prompt ("Ingrese el segmento que desee buscar(tecnologia/ropa)");
const filtro = listaProductos.filter(item => item.segmento == busquedaTipo.toUpperCase());
console.log(filtro);

if (busquedaTipo == "tecnologia"){
    let busquedaDetalle = prompt ("Ingrese el producto que desee buscar(sillagamer/mousegamer/mousepadgamer/monitorgamer/gabinetegamer)");
    const resultado = filtroDetalle(busquedaDetalle, listaProductos);
    listarProductos(resultado);
    console.log(resultado);
}else{
    let busquedaDetalle = prompt ("Ingrese el producto que desee buscar(buzo/remera/pantalon)");
    const resultado = filtroDetalle(busquedaDetalle, listaProductos);
    listarProductos(resultado);
    console.log(resultado);
}

let texto = document.getElementsByTagName("h5");{
texto[0].style.backgroundColor = "orange";
texto[1].style.backgroundColor = "orange";
texto[2].style.backgroundColor = "orange";
texto[3].style.backgroundColor = "orange";
texto[4].style.backgroundColor = "orange";
texto[5].style.backgroundColor = "orange";
texto[6].style.backgroundColor = "lightgreen";
texto[7].style.backgroundColor = "lightgreen";
texto[8].style.backgroundColor = "lightgreen";
}


let cartas = document.getElementsByClassName("card");
for (let carta of cartas) {
    carta.onmouseover = () => { carta.style.background = "lightblue"; };
    carta.onmouseout = () => { carta.style.background = "white"; };
}

function apretarTab(e) {
    if (e.which == 9 || e.keyCode == 9) {
        alert("Presionaste Tab para avanzar a otro campo");
    }
}

let botonTecnologia = document.getElementById("tecnologia");
let botonTecVisible = false;
botonTecnologia.onclick = () => {
    muestraOculta("tarjetasTecnologia", botonTecVisible);
    botonTecVisible = !botonTecVisible;
}

function muestraOculta(segmento,visibilidad) {
    let elemento = document.getElementById(segmento);
    if(visibilidad == false) {
        if(elemento.classList.contains('oculto')){
            elemento.classList.remove('oculto');
        }
        elemento.className +=" visible";
    } else {
        if (elemento.classList.contains('visible')){
            elemento.classList.remove('visible');
        }
    elemento.className +=" oculto";
    }
}

let botonRopa = document.getElementById("ropa");
let botonRopaVisible = false;
botonRopa.onclick = () => {
    muestraOculta("tarjetasRopa", botonRopaVisible);
    botonRopaVisible = !botonRopaVisible;
}

