// alert()

// const puntaje = "1000";

// if(puntaje == 1000){
//     console.log("Si es igual")
// }

// if(true){
//     console.log("Escribo algo")
// }
//////////////////////////

// let precio = prompt ('Ingrese precio')

// if(precio<20){
//     alert("Precio menor a 20")
// }else if(precio<50){
//     alert("Precio menor a 50")
// }else if(precio<100){
//     alert("Precio menor a 100")
// }else {
//     alert("El precio es mayor a 100")
// }

//////////////////////////


// let algo = true
// let condicion = 9<9

////////////////////

// const usuario = true;
// const tienePlata = true;

// let usuario = confirm("Autenticado????")
// let tienePlata = confirm("Puede pagar????")

// if(usuario ==true && tienePlata==true){
//     document.write('Tu pedido se hizo con exito...')
// }else{
//     document.write('Hubo un error con el pago')
// }


// if(usuario ==true && tienePlata==true){
//     document.write('Tu pedido se hizo con exito...')
// }else if(!usuario){
//     document.write('Inicia sesion para realizar el pedido')
// }else if(!tienePlata){
//     document.write('Fondos insuficientes')
// }else{
//     document.write('Hubo un error con el pago')
// }


// -----------------------------------
// clase 3

//for(posicion inicial; condicion de cumplimiento; que hacer mientras se cumple la function)

// for (inicializacion; hasta que; incremento)

//Notacion Javascript
// for(let i=0; i <= 10; i+=1){
//     console.log(i)

// }

// for(let i=0; i<=10; i+=1){
//     resultado.innerHTML += i + " x " + i+1 + " = " + i*(i+1) + "<br>";
//     console.log ((6) + " x " + (i) + " = " + 6*(i));
//     alert((8) )
// }

// for(let i=0; i<=10; i+=1){
//     tabla4.innerHTML += (4) + " x " + (i) + " = " + 4*(i) + "<br>";
//     // console.log ((6) + " x " + (i) + " = " + 6*(i));
//     // alert((8) )
// }

// for(let i=0; i<=10; i+=1){
//     // tabla4.innerHTML += (9) + " x " + (i) + " = " + 9*(i) + "<br>";
//     console.log ((9) + " x " + (i) + " = " + 9*(i));
//     alert((9) + " x " + (i) + " = " + 9*(i));
//     document.write(9) + " x " + (i) + " = " + 9*(i) + "<br>";
// }

// for(let i=0; i<=10; i+=1){
//     tabla4.innerHTML += (7) + " x " + (i) + " = " + 7*(i) + "<br>";
//     // console.log ((6) + " x " + (i) + " = " + 6*(i));
//     // alert((8) )
// }

// for(let i=0; i<10; i+=1){
//     if(i==7){
//         break;
//     }
//     console.log (i)
// }

// for(let i=0; i<10; i+=1){
//     let turno = prompt('Ingrese turno')
//     if(turno=="esc"){
//         break;
//     }
//     console.log (turno)
// }

// for(let i=0; i<5; i+=1){
//     let turno = prompt('Ingrese turno')
//     if(turno=="esc"){
//         continue;
//     }
//     console.log (turno)
// }

// for(let i=0; i<=10; i+=1){
//     if(i==5){
//         continue;
//     }
//     if(i==7){
//         break;
//     }
//     console.log ((8) + " x " + (i) + " = " + 8*(i));
// }

// let i=0;

// while (i <10){
//     console.log("Numero: " + i)
//     i+=1
// }


// let i=50;

// do{
//     console.log (i)
//     i=+1;
// } while(i<55)


// let entrada = prompt("Ingrese un nombre")

// while(entrada!= "esc"){
//     console.log (entrada);
//     entrada = prompt("Ingrese un nombre")
// }

// let entrada;
// do {
//     entrada = prompt("Ingrese un nombre")
//     console.log(entrada);
// }while(entrada != "esc")

// let metodoPago = prompt ("Ingrese Metodo de Pago")
// // const metodoPago = "efectivo";
// switch(metodoPago.toLocaleLowerCase){
//     case "efectivo":
//         console.log("Pagaste en efectivo")
//         break;
//     case "tarjeta":
//         console.log("Pagaste con tarjeta")
//         break;
//     default:
//     console.log("Pagaste con otro medio de pago")
//     break;
// }


///////////////////// funciones clase 4

////////////// declaracion de una funcion

// let num1 = "5"
// let num2 = 3

// function sumar(){
//     console.log (2+2)
//     // alert(2+2)
//     //otros metodos de llamar en pantalla
// }

///////////llamar a la funcion

// sumar()

///////////Expresion de funcion

// const restar = function(){
//     console.log(num1 - num2)
// }

// // console.log(restar)
// restar()



//// holsting sube todo lo que es funcion&var(solo la definicion se lleva)
//// para que se pueda ingresar a llamar la funcion antes de declararla(escribirla)

////////Funciones

// prompt()
// alert()
// console.log()
// console.log(parseInt(num1))

//////////Metodos

// console.log(num2.toString())

///////Parametros

// function saludar (nombre, apellido){
//     console.log(nombre, apellido)
//     console.log("Hola " + nombre + " " + apellido)
// }

// // saludar()

// // saludar("Adrian")

// saludar("Adrian", "Gonzalez")



// let nombre = prompt("Tu nombre")
// let alimento  = prompt("Tu alimento")
// // `´ comillas
// function comer(nombre, comida= "Fideos"){
// // si no se pone nada en tu alimento automaticamente pasa a llamarse fideos el alimento
//     // console.log(`${nombre} come ${comida}`)
//     console.log(nombre + " come " + comida)
// }
// comer(nombre,alimento)

// let num1 = Number(prompt("Ingresar numero 1"))
// let num2  = Number(prompt("Ingresar numero 2"))

// function sumar(n1, n2){
//     console.log(n1+n2)
// }

// sumar(num1,num2)

//// si una funcion no requiere parametros no importa 
// function saludar (){
//     console.log("Hola a todos")
// }

// saludar(25)

////////////////// ejemplo
// let saldo = 5000;

// entrarAlCajero();

// function entrarAlCajero(){
//     let tarjeta = confirm ("Ingrese Tarjeta")
//     ingresarClave (tarjeta)
// }

// function ingresarClave (t){
//     if(t){
//         let clave = prompt("Ingresar clave");
//         validarClave(clave)
//     }else {
//         alert("Es necesaria una tarjeta")
//     }
// }

// function validarClave(codigo){
//     if(codigo=== "1234"){
//         seleccionarOperacion()
//     }else{
//         alert("Clave incorrecta")
//     }
// }

// function seleccionarOperacion(){
//     console.log("1: retirar dinero")
//     console.log("2: consultar saldo")
//     console.log("3: salir")
//     console.log("-----------------")

//     let op = prompt("Ingresar opcion")
//     switch(op){
//         case "1":
//             let monto = Number(prompt("Monto a retirar"))
//             retirarDinero()
//             break;
//         case "2":
//             consultarSaldo()
//             break;
//         case "3":
//             salir();
//             break;  
//         default:
//             console.log("Operacion Invalida")  
//             break;   
//     }
// }

// function retirarDinero(dinero){
//     if(dinero> saldo){
//         alert("Saldo Insuficiente")
//     }else {
//         saldo -= dinero;
//         alert("retiraste " + dinero)
//     }
//     seleccionarOperacion()
// }

// function consultarSaldo(){
//     alert("Su saldo es: " + saldo)
//     seleccionarOperacion()
// }

// function salir(){
//     alert("Fin de la operacion")
// }

///////////// revisar el ejemplo de arriba pq me aparece NaN cuando consulto el monto luego de retirar dinero

//////////////////// otro ejemplo

// function hacerAlgo(){
//     let a=1
// }

// let resultado = hacerAlgo()
// console.log(resultado)

// function sumar (a, b){
//     return a + b;
// }

// let resultado = sumar("2", "4");
// console.log(resultado)

///// otro ejemplo

// let total = 0;

// function agregarAlCarrito (precio){
//     return total += precio
// }

// function calcularImpuesto(total){
//     return 1.21 * total;
// }

// total = agregarAlCarrito(400)
// total = agregarAlCarrito(300)
// total = agregarAlCarrito(200)

// const totalPagar = calcularImpuesto(total)

// console.log(total)
// console.log("El total a pagar es " + totalPagar)



// //////// scope variables locales y globales



// for(let i =0; i<10; i+=1){
//     console.log(i)
// }
// /// aca daria error si lo ejecuto el console.log por fuera de la funcion
// console.log(i)


//////////////////// funciones anonimas y flecha


// const aprender = function(){
//     console.log("En el curso de javascript")
// }

// const aprender2 = () => {
//     console.log("En el curso de javascript")
// }

// const aprender3 = () => console.log("En el curso de javascript")

// const aprender4 = () => {return "En el curso de javascript"}

// const aprender5 = () => "En el curso de javascript"

// aprender()
// aprender2()
// aprender3()
// console.log(aprender4())
// console.log(aprender5())


//////////////////////////// clase 5 ////////////////////////////////////

//////////// objetos
////////// Semantica de producto tiene relacion
// const nombre = "Zapatillas";
// const precio = 4000;
// const disponible = true

// const producto1 = {} /// a esto se lo conoce como objeto literal

// // console.log(typeof producto)

// const producto2 = {
//     nombre: "Tapatillas" // a esto se llama propiedad o llave
// }


// const producto3 = {
//     nombre: "TV" // representa un valor
// }

// const producto = {
//     nombre: "Zapatillas", // la , es importante
//     precio: 4500,
//     disponible: true,
// }

// console.log(producto)
// // alert(producto)
// // document.write(producto)
// // resultado.innerHTML = producto;

// alert(producto.nombre + " " + producto.precio)
// // alert(`${producto.nombre} ${producto.precio}`)

// document.write(producto.nombre)
// resultado.innerHTML = producto.nombre

// // producto = {
// //     nombre: "Zapatos"
// // }
// // console.log(producto)

// producto.nombre = "chanclas"

// console.log(producto)


////////////// constructores ///

// function Producto(n, p, d){
//     this.nombre = n;
//     this.precio = p;
//     this.disponible = d;
// }

// // const producto ={
// //     nombre: "fasaf",
// //     precio: 23123,
// //     disponible: true
// // }

// let p1= new Producto("CocaCola", 200, true)
// let p2= new Producto("Sprite", 199, true)
// let p3= new Producto("Pepsi", 150, false)
// let p4= new Producto("Locion para afeitarse", 500, true)


// console.log(p1)
// console.log(p2)
// console.log(p3)
// console.log(p4)

// function Mascotas(){

// }

// function Mascotas(){
    
// }

// function Superheroes(n, a, p){ ////// forma correcta para aplicar
//     this.nombre = n;
//     this.alterego = a;
//     this.poder = p;
// }


// // let batman ={ ////// forma incorrecta para aplicar dado que se pierde tiempo
// //     nombre: "Bruno Dias",
// //     alterego: "batman",
// //     superpoder: "Cinturon y plata"
// // }

// // let Superman ={
// //     nombre: "Clark Kent",
// //     alterego: "Superman",
// //     superpoder: "Super fuerza"
// // }

// let batman= new Superheroes("Bruno Diaz", "Batman", "Cinturon y plata")
// let superman= new Superheroes("Clark Kent", "Superman", "Superfuerza")

// console.log(batman)
// console.log(superman)


////////////////////// otro ejemplo

// const producto ={
//     nombre: "TV",
//     precio: 40000,
//     disponible: true,
//     mostrarInfo: function(){
//         return `El producto: ${this.nombre} tiene un precio de ${this.precio} y su disponibilidad es ${this.disponible}`
//     }
// }

// ///// visualizar si dentro del objeto literal existe un item y que responda verdadero o falso:
// console.log("img" in producto) // falso
// console.log("disponible" in producto) // verdadero

// console.log(producto)
// console.log(producto.nombre)
// console.log(producto.precio)
// console.log(producto.disponible)
// let informacion = producto.mostrarInfo()
// console.log(informacion)

// function saludar(){
//     console.log("Hola")
// }

// saludar()
// producto.mostrarInfo()


/////// propiedades de la ventana del navegador
// console.log(this)
// console.log(window)


// console.log(producto)
// console.dir(producto)

// for(let prop in window){
//     console.log(prop)
// }

// for(let prop in window.document.body){
//     console.log(prop.children)
// }

/////////////

// for(let item in producto){
//     console.log(item)
// }


/////////////////////////////////// otro ejemplo

class Producto{
    constructor(n, p, d){
    this.nombre = n;
    this.precio = p;
    }
    disponible = true;
    cantidad=20

    mostrarInfor=()=>{
        return "El producto"
    }
}

const p1 = new Producto("Helado", 200)

console.dir(p1)

console.log(p1.nombre)
console.log(p1.mostrarInfor())
