let montoRemera = parseInt(prompt("Ingrese el monto de la remera:"));
let cantidadRemera = parseInt(prompt("Ingrese la cantidad de remeras:"));
let montoBuzo = parseInt(prompt("Ingrese el monto del buzo:"));
let cantidadBuzo = parseInt(prompt("Ingrese la cantidad de buzos:"));
let montoSilla = parseInt(prompt("Ingrese el monto de la silla:"));
let cantidadSilla = parseInt(prompt("Ingrese la cantidad de sillas:"));
let tipoTarjeta = prompt("Ingrese su tipo de tarjeta de credito:");
const CUOTAS = 6;
let iva = 21;

function montoCompra (cantRemera, montRemera, cantBuzo, montBuzo, cantSilla, montSilla,) {
    let sumaRemera = (cantRemera * montRemera);
    let sumaBuzo = (cantBuzo * montBuzo);
    let sumaSilla = (cantSilla * montSilla);
    let totalNeto =  sumaRemera + sumaBuzo + sumaSilla;
    return totalNeto;
}

function calcularIva (total, interes){
    let valorInteres = (interes * total)/100;
    let totalBruto = total + valorInteres;
    return totalBruto;
}

function calcularInteres (entidadTarjeta){
    let interes;
switch (entidadTarjeta){
    case "Visa":
        interes = 10;
        break;
    case "Mastercard":
        interes = 15;
        break;
    case "American Express":
        interes = 25;
        break;
    default:
        interes = 40;
        console.log ("No existe ese tipo de tarjeta de credito!");
        break;
    }
    return interes;
}

function calcularCuota( totalConInteres, cantCuotas){
    let valorCuota = totalConInteres/cantCuotas;
    return valorCuota;
}

let totalNeto = montoCompra (montoRemera, cantidadRemera, montoBuzo, cantidadBuzo, montoSilla, cantidadSilla);
let interesObtenido = calcularInteres ( tipoTarjeta);
let totalBrutoCompra = calcularIva( totalNeto , interesObtenido);
let cadaCuota = calcularCuota ( totalBrutoCompra, CUOTAS)


alert("El monto neto de la compra es de $ " + totalNeto+"\nEl monto bruto de la compra es de $"+ totalBrutoCompra+"\nEl monto en 6 cuotas es de $ " + cadaCuota);
console.log ("El monto neto a abonar es $ " + totalNeto);
console.log ("El monto bruto a abonar es $ " + totalBrutoCompra);
console.log ("El monto en 6 cuotas es de $ " + cadaCuota);