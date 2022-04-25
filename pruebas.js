// let raza = prompt("Seleccione su Raza");

// while(raza != "no" ){
//     switch (raza) {
//         case "mago":
//             alert("Usted ha seleccionado: " + raza + "   Si desea cambiar de raza ingrese la misma a continuacion: ");
//             console.log("Usted ha seleccionado: " + raza);
//     break;
//         case "cazador":
//             alert("Usted ha seleccionado: " + raza + "   Si desea cambiar de raza ingrese la misma a continuacion: ");
//             console.log("Usted ha seleccionado: " + raza);
//     break;
//         case "paladin":
//             alert("Usted ha seleccionado: " + raza + "   Si desea cambiar de raza ingrese la misma a continuacion: ");
//             console.log("Usted ha seleccionado: " + raza);
//     break;
//         case "nigromante":
//             alert("Usted ha seleccionado: " + raza + "   Si desea cambiar de raza ingrese la misma a continuacion: ");
//             console.log("Usted ha seleccionado: " + raza);
//     break;
//         case "druida":
//             alert("Usted ha seleccionado: " + raza + "   Si desea cambiar de raza ingrese la misma a continuacion: ");
//             console.log("Usted ha seleccionado: " + raza);
//     break;
//         case "enano":
//             alert("Usted ha seleccionado: " + raza + "   Si desea cambiar de raza ingrese la misma a continuacion: ");
//             console.log("Usted ha seleccionado: " + raza);
//     break;
//         default:
//             alert("Esa raza no esta disponible en el juego")
//     break;
// }
// raza = prompt("Seleccionar otra raza");
// }


// let saldo = 5000;

seleccionarRaza();

function seleccionarRaza(){
    let seleccion = confirm ("Ingrese su raza para comenzar el juego")
    console.log("1: Humano")
    console.log("2: Orco")
    console.log("3: Elfo")
    console.log("4: Enano")
    ingresarRaza (seleccion)
}

function ingresarRaza (r){
    if(r){
        let raza = Number(prompt("Ingresar raza:"))
        validarRaza(raza)
        let clasePrueba = probar();
        razaClase(raza, clasePrueba)
    }else {
        alert("Es necesario ingresar un tipo de raza")
    }
}


function probar(){
    let opcion = Number(prompt("Ingresar clase"))
    if(opcion == 1 ){
        return 1;
    }else if (opcion == 2){
        return 2;
    }else("Opcion erronea")
}

function validarRaza (tipoRaza){
    if(tipoRaza == "1"){
        seleccionarClase1()
    }else if (tipoRaza == "2"){
        seleccionarClase2()
    }else if (tipoRaza == "3"){
        seleccionarClase3()
    }else if (tipoRaza == "4"){
        seleccionarClase4()
        alert("Raza incorrecta")
    }
}


// function seleccionarClase1(){
//     console.log("1: Mago")
//     console.log("2: Guerrero")
//     console.log("3: Tirador")
//     console.log("4: Paladin")
//     console.log("5: Picaro")
//     console.log("6: Nigromante")
//     console.log("7: Druida")
//     console.log("8: Brujo")
//     console.log("9: Chaman")
//     console.log("10: Cazador de demonios")

function seleccionarClase1(){
    console.log("1: Mago")
    console.log("2: Guerrero")
    console.log("3: Tirador")
    console.log("4: Paladin")
    console.log("5: Picaro")
    console.log("6: Nigromante")
    console.log("7: Brujo")
    console.log("8: Cazador de demonios")
}

function seleccionarClase2(){
    console.log("1: Mago")
    console.log("2: Guerrero")
    console.log("3: Brujo")
    console.log("4: Chaman")
    console.log("5: Cazador de demonios")
}

function seleccionarClase3(){
    console.log("1: Mago")
    console.log("2: Tirador")
    console.log("3: Nigromante")
    console.log("4: Druida")
    console.log("5: Brujo")
    console.log("6: Chaman")
    console.log("7: Cazador de demonios")
}

function seleccionarClase4(){
    console.log("1: Mago")
    console.log("2: Guerrero")
    console.log("3: Tirador")
    console.log("4: Paladin")
    console.log("5: Picaro")
}

function razaClase (tipoRaza, opcion){
    console.log("Acaaa ", tipoRaza, opcion)
    if(tipoRaza == 1 && opcion== 1 ){
        resultadoClase1()
    }else if(tipoRaza == 1 && opcion== 2 )
        resultadoClase2()
    }

// function razaClase2 (tipoRaza, opcion){
//     if(tipoRaza == 1 && opcion== 1 ){
//         resultadoClase1()
//     }else if(tipoRaza == 1 && opcion== 2 )
//         resultadoClase2()
//     }


function resultadoClase1(){
    console.log("Ataque: 60")
    console.log("Resistencia: 50")
    console.log("Mana: 100")
    console.log("Ataque magico: 90")
    console.log("Resistencia magica: 50")
    console.log("Velocidad: 55")
    console.log("Presicion: 60")
    console.log("Inteligencia: 70")
    console.log("Rango: 4")
}

// // function salir(){
// //     alert("Fin de la operacion")
// // }


class Estadistica{
    constructor(ataque , velocidad){
        this.ataque = ataque;
        this.velocidad = velocidad
    }
}

const personajebase = new Estadistica (80, 100)
console.log(personajebase)

mago = () =>{ return 150}



function mejorarPersonaje(){

    nuevaestadistica = personajebase.velocidad 
    return nuevaestadistica;

}
const personaje2 = new Estadistica(mejorarPersonaje(), 50)


console.log(personaje2)


class Personaje{

    constructor( raza, clase ) {
        this.raza = raza;
        this.clase = clase;
        this.estadisticas = this.calcularEstadisticas(this.raza, this.clase);
    }

    calcularEstadisticas(raza, clase){
        let estadisticas = new Estadisticas();

        if(raza == "Orco") {
            estadisticas.fuerza = estadisticas.fuerza + 2;
        }

        return estadisticas;

    }

}

class Estadisticas {
    constructor(){
        this.fuerza = 1;
        this.agilidad = 1;
        this.inteligencia = 1;
    }
}

const personaje1 = new Personaje("Humano", "Arquero");

console.log(personaje1);