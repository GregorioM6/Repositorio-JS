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

let metodoPago = prompt ("Ingrese Metodo de Pago")
// const metodoPago = "efectivo";
switch(metodoPago.toLocaleLowerCase){
    case "efectivo":
        console.log("Pagaste en efectivo")
        break;
    case "tarjeta":
        console.log("Pagaste con tarjeta")
        break;
    default:
    console.log("Pagaste con otro medio de pago")
    break;
}


