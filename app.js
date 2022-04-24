// seleccionarRaza();

// function seleccionarRaza(){
    
//     let seleccion = confirm ("Ingrese su raza para comenzar el juego")
//     console.log("1: Humano")
//     console.log("2: Orco")
//     console.log("3: Elfo")
//     console.log("4: Enano")
//     console.log("--------------------------")
//     ingresarRaza (seleccion)
// }

<<<<<<< HEAD
// function ingresarRaza (r){
//     if(r){
//         let raza = Number(prompt("Ingresar raza:\n 1:Humano\n 2:Orco\n 3:Elfo\n 4:Enano"))
//         validarRaza(raza)
//         console.log("Ha seleccionado: " + raza)
//         let clasePrueba = probar();
//         razaClase(raza, clasePrueba)
=======
function ingresarRaza (r){
    if(r){
        let raza = Number(prompt("Ingresar raza:\n 1:Humano\n 2:Orco\n 3:Elfo\n 4:Enano"))
        validarRaza(raza)
        let clasePrueba = probar();
        razaClase(raza, clasePrueba)
>>>>>>> e322824c67e837c847932b5dbd8b41113cb8e499
        
//     }else {
//         alert("Es necesario ingresar un tipo de raza")
//     }
// }

<<<<<<< HEAD
// function probar(){
//     let opcion = Number(prompt("Ingresar clase"))
//     if(opcion == 1 ){
//         return 1;
//     }else if (opcion == 2){
//         return 2;
//     }else("Opcion erronea")
// }

// function validarRaza (tipoRaza){
//     if(tipoRaza == "1"){
//         seleccionarClaseHumano()
//     }else if (tipoRaza == "2"){
//         seleccionarClaseOrco()
//     }else if (tipoRaza == "3"){
//         seleccionarClaseElfo()
//     }else if (tipoRaza == "4"){
//         seleccionarClaseEnano()
//     } else{
//         alert("Raza incorrecta")
//     }
// }


// // function seleccionarClase1(){
// //     console.log("1: Mago")
// //     console.log("2: Guerrero")
// //     console.log("3: Tirador")
// //     console.log("4: Paladin")
// //     console.log("5: Picaro")
// //     console.log("6: Nigromante")
// //     console.log("7: Druida")
// //     console.log("8: Brujo")
// //     console.log("9: Chaman")
// //     console.log("10: Cazador de demonios")

// function seleccionarClaseHumano(){
//     console.log("1: Mago")
//     console.log("2: Guerrero")
//     console.log("3: Tirador")
//     console.log("4: Paladin")
//     console.log("--------------------------")
// }

// function seleccionarClaseOrco(){
//     console.log("1: Mago")
//     console.log("2: Guerrero")
//     console.log("3: Tirador")
//     console.log("4: Paladin")
//     console.log("--------------------------")
// }

// function seleccionarClaseElfo(){
//     console.log("1: Mago")
//     console.log("2: Guerrero")
//     console.log("3: Tirador")
//     console.log("4: Paladin")
//     console.log("--------------------------")
// }

// function seleccionarClaseEnano(){
//     console.log("1: Mago")
//     console.log("2: Guerrero")
//     console.log("3: Tirador")
//     console.log("4: Paladin")
//     console.log("--------------------------")
// }

// function razaClase (tipoRaza, opcion){
//     if(tipoRaza == 1 && opcion== 1 ){
//         console.log("Usted eligio Humano/Mago")
//         console.log("--------------------------")
//         resultadoClaseHumanoMago()
//     }else if(tipoRaza == 1 && opcion== 2 ){
//         console.log("Usted eligio Humano/Guerrero")
//         console.log("--------------------------")
//         resultadoClaseHumanoGuerrero()
//     }else if(tipoRaza == 1 && opcion== 3 ){
//         console.log("Usted eligio Humano/Tirador")
//         console.log("--------------------------")
//         resultadoClaseHumanoTirador()
//     }else if(tipoRaza == 1 && opcion== 4 ){
//         console.log("Usted eligio Humano/Paladin")
//         console.log("--------------------------")
//         resultadoClaseHumanoPaladin()
//     }else if(tipoRaza == 2 && opcion== 1 ){
//         console.log("Usted eligio Orco/Mago")
//         console.log("--------------------------")
//         resultadoClaseOrcoMago()
//     }else if(tipoRaza == 2 && opcion== 2 ){
//         console.log("Usted eligio Orco/Guerrero")
//         console.log("--------------------------")
//         resultadoClaseOrcoGuerrero()
//     }else if(tipoRaza == 2 && opcion== 3 ){
//         console.log("Usted eligio Orco/Tirador")
//         console.log("--------------------------")
//         resultadoClaseOrcoTirador()
//     }else if(tipoRaza == 2 && opcion== 4 ){
//         console.log("Usted eligio Orco/Paladin")
//         console.log("--------------------------")
//         resultadoClaseOrcoPaladin()
//     }else if(tipoRaza == 3 && opcion== 1 ){
//         console.log("Usted eligio Elfo/Mago")
//         console.log("--------------------------")
//         resultadoClaseElfoMago()
//     }else if(tipoRaza == 3 && opcion== 2 ){
//         console.log("Usted eligio Elfo/Guerrero")
//         console.log("--------------------------")
//         resultadoClaseElfoGuerrero()
//     }else if(tipoRaza == 3 && opcion== 3 ){
//         console.log("Usted eligio Elfo/Tirador")
//         console.log("--------------------------")
//         resultadoClaseElfoTirador()
//     }else if(tipoRaza == 3 && opcion== 4 ){
//         console.log("Usted eligio Elfo/Paladin")
//         console.log("--------------------------")
//         resultadoClaseElfoPaladin()
//     }else if(tipoRaza == 4 && opcion== 1 ){
//         console.log("Usted eligio Enano/Mago")
//         console.log("--------------------------")
//         resultadoClaseEnanoMago()
//     }else if(tipoRaza == 4 && opcion== 2 ){
//         console.log("Usted eligio Enano/Guerrero")
//         console.log("--------------------------")
//         resultadoClaseEnanoGuerrero()
//     }else if(tipoRaza == 4 && opcion== 3 ){
//         console.log("Usted eligio Enano/Tirador")
//         console.log("--------------------------")
//         resultadoClaseEnanoTirador()
//     }else if(tipoRaza == 4 && opcion== 4 ){
//         console.log("Usted eligio Enano/Paladin")
//         console.log("--------------------------")
//         resultadoClaseEnanoPaladin()
//     }
//     }

// function resultadoClaseHumanoMago(){
//     console.log("Ataque: 60")
//     console.log("Resistencia: 50")
//     console.log("Mana: 100")
//     console.log("Ataque magico: 90")
//     console.log("Resistencia magica: 50")
//     console.log("Velocidad: 55")
//     console.log("Presicion: 60")
//     console.log("Inteligencia: 70")
//     console.log("Rango: 4")
//     console.log("--------------------------")
// }

// function resultadoClaseHumanoGuerrero(){
//     console.log("Ataque: 60")
//     console.log("Resistencia: 50")
//     console.log("Mana: 100")
//     console.log("Ataque magico: 90")
//     console.log("Resistencia magica: 50")
//     console.log("Velocidad: 55")
//     console.log("Presicion: 60")
//     console.log("Inteligencia: 70")
//     console.log("Rango: 4")
// }
=======

function validarRaza (tipoRaza){
    if(tipoRaza == "1"){
        console.log("Usted selecciono: Humano")
        console.log("--------------------------")
    }else if (tipoRaza == "2"){
        console.log("Usted selecciono: Orco")
        console.log("--------------------------")
    }else if (tipoRaza == "3"){
        console.log("Usted selecciono: Elfo")
        console.log("--------------------------")
    }else if (tipoRaza == "4"){
        console.log("Usted selecciono: Enano")
        console.log("--------------------------")
    } else{
        alert("Raza incorrecta")
    }
}

function probar(){
    let opcion = Number(prompt("Ingresar clase:\n 1:Mago\n 2:Guerrero\n 3:Tirador\n 4:Paladin"))
    if(opcion == 1 ){
        console.log("Usted selecciono: Mago")
        console.log("--------------------------")
        return 1;
    }else if (opcion == 2){
        console.log("Usted selecciono: Guerrero")
        console.log("--------------------------")
        return 2;
    }else if (opcion == 3){
        console.log("Usted selecciono: Tirador")
        console.log("--------------------------")
        return 3;
    }else if (opcion == 4){
        console.log("Usted selecciono: Paladin")
        console.log("--------------------------")
        return 4;
    }else("Es necesario ingresar un tipo de clase")
    
}

function razaClase (tipoRaza, opcion){
    if(tipoRaza == 1 && opcion== 1 ){
        console.log("Usted eligio ser  Humano/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseHumanoMago()
    }else if(tipoRaza == 1 && opcion== 2 ){
        console.log("Usted eligio ser  Humano/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseHumanoGuerrero()
    }else if(tipoRaza == 1 && opcion== 3 ){
        console.log("Usted eligio ser  Humano/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseHumanoTirador()
    }else if(tipoRaza == 1 && opcion== 4 ){
        console.log("Usted eligio ser  Humano/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseHumanoPaladin()
    }else if(tipoRaza == 2 && opcion== 1 ){
        console.log("Usted eligio ser  Orco/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseOrcoMago()
    }else if(tipoRaza == 2 && opcion== 2 ){
        console.log("Usted eligio ser  Orco/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseOrcoGuerrero()
    }else if(tipoRaza == 2 && opcion== 3 ){
        console.log("Usted eligio ser  Orco/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseOrcoTirador()
    }else if(tipoRaza == 2 && opcion== 4 ){
        console.log("Usted eligio ser  Orco/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseOrcoPaladin()
    }else if(tipoRaza == 3 && opcion== 1 ){
        console.log("Usted eligio ser  Elfo/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseElfoMago()
    }else if(tipoRaza == 3 && opcion== 2 ){
        console.log("Usted eligio ser  Elfo/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseElfoGuerrero()
    }else if(tipoRaza == 3 && opcion== 3 ){
        console.log("Usted eligio ser  Elfo/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseElfoTirador()
    }else if(tipoRaza == 3 && opcion== 4 ){
        console.log("Usted eligio ser  Elfo/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseElfoPaladin()
    }else if(tipoRaza == 4 && opcion== 1 ){
        console.log("Usted eligio ser  Enano/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseEnanoMago()
    }else if(tipoRaza == 4 && opcion== 2 ){
        console.log("Usted eligio ser  Enano/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseEnanoGuerrero()
    }else if(tipoRaza == 4 && opcion== 3 ){
        console.log("Usted eligio ser  Enano/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseEnanoTirador()
    }else if(tipoRaza == 4 && opcion== 4 ){
        console.log("Usted eligio ser  Enano/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        resultadoClaseEnanoPaladin()
    }
}

    function resultadoClaseHumanoMago(){
    console.log("Ataque: 60")
    console.log("Resistencia: 50")
    console.log("Mana: 100")
    console.log("Ataque magico: 90")
    console.log("Resistencia magica: 50")
    console.log("Velocidad: 55")
    console.log("Presicion: 60")
    console.log("Inteligencia: 70")
    console.log("Rango: 4")
    console.log("--------------------------")
}

function resultadoClaseHumanoGuerrero(){
    console.log("Ataque: 80")
    console.log("Resistencia: 60")
    console.log("Mana: 50")
    console.log("Ataque magico: 40")
    console.log("Resistencia magica: 60")
    console.log("Velocidad: 75")
    console.log("Presicion: 65")
    console.log("Inteligencia: 60")
    console.log("Rango: 1")
    console.log("--------------------------")
}

function resultadoClaseHumanoTirador(){
    console.log("Ataque: 60")
    console.log("Resistencia: 50")
    console.log("Mana: 100")
    console.log("Ataque magico: 90")
    console.log("Resistencia magica: 50")
    console.log("Velocidad: 55")
    console.log("Presicion: 60")
    console.log("Inteligencia: 70")
    console.log("Rango: 4")
    console.log("--------------------------")
}

function resultadoClaseHumanoPaladin(){
    console.log("Ataque: 40")
    console.log("Resistencia: 80")
    console.log("Mana: 80")
    console.log("Ataque magico: 70")
    console.log("Resistencia magica: 90")
    console.log("Velocidad: 40")
    console.log("Presicion: 50")
    console.log("Inteligencia: 80")
    console.log("Rango: 1")
    console.log("--------------------------")
}

function resultadoClaseOrcoMago(){
    console.log("Ataque: 60")
    console.log("Resistencia: 50")
    console.log("Mana: 100")
    console.log("Ataque magico: 90")
    console.log("Resistencia magica: 50")
    console.log("Velocidad: 55")
    console.log("Presicion: 60")
    console.log("Inteligencia: 70")
    console.log("Rango: 4")
    console.log("--------------------------")
}

function resultadoClaseOrcoGuerrero(){
    console.log("Ataque: 80")
    console.log("Resistencia: 60")
    console.log("Mana: 50")
    console.log("Ataque magico: 40")
    console.log("Resistencia magica: 60")
    console.log("Velocidad: 75")
    console.log("Presicion: 65")
    console.log("Inteligencia: 60")
    console.log("Rango: 1")
    console.log("--------------------------")
}

function resultadoClaseOrcoTirador(){
    console.log("Ataque: 90")
    console.log("Resistencia: 30")
    console.log("Mana: 70")
    console.log("Ataque magico: 30")
    console.log("Resistencia magica: 30")
    console.log("Velocidad: 90")
    console.log("Presicion: 95")
    console.log("Inteligencia: 65")
    console.log("Rango: 5")
    console.log("--------------------------")
}

function resultadoClaseOrcoPaladin(){
    console.log("Ataque: 40")
    console.log("Resistencia: 80")
    console.log("Mana: 80")
    console.log("Ataque magico: 70")
    console.log("Resistencia magica: 90")
    console.log("Velocidad: 40")
    console.log("Presicion: 50")
    console.log("Inteligencia: 80")
    console.log("Rango: 1")
    console.log("--------------------------")
}

function resultadoClaseElfoMago(){
    console.log("Ataque: 60")
    console.log("Resistencia: 50")
    console.log("Mana: 100")
    console.log("Ataque magico: 90")
    console.log("Resistencia magica: 50")
    console.log("Velocidad: 55")
    console.log("Presicion: 60")
    console.log("Inteligencia: 70")
    console.log("Rango: 4")
    console.log("--------------------------")
}

function resultadoClaseElfoGuerrero(){
    console.log("Ataque: 80")
    console.log("Resistencia: 60")
    console.log("Mana: 50")
    console.log("Ataque magico: 40")
    console.log("Resistencia magica: 60")
    console.log("Velocidad: 75")
    console.log("Presicion: 65")
    console.log("Inteligencia: 60")
    console.log("Rango: 1")
    console.log("--------------------------")
}

function resultadoClaseElfoTirador(){
    console.log("Ataque: 90")
    console.log("Resistencia: 30")
    console.log("Mana: 70")
    console.log("Ataque magico: 30")
    console.log("Resistencia magica: 30")
    console.log("Velocidad: 90")
    console.log("Presicion: 95")
    console.log("Inteligencia: 65")
    console.log("Rango: 5")
    console.log("--------------------------")
}

function resultadoClaseElfoPaladin(){
    console.log("Ataque: 40")
    console.log("Resistencia: 80")
    console.log("Mana: 80")
    console.log("Ataque magico: 70")
    console.log("Resistencia magica: 90")
    console.log("Velocidad: 40")
    console.log("Presicion: 50")
    console.log("Inteligencia: 80")
    console.log("Rango: 1")
    console.log("--------------------------")
}


function resultadoClaseEnanoMago(){
    console.log("Ataque: 60")
    console.log("Resistencia: 50")
    console.log("Mana: 100")
    console.log("Ataque magico: 90")
    console.log("Resistencia magica: 50")
    console.log("Velocidad: 55")
    console.log("Presicion: 60")
    console.log("Inteligencia: 70")
    console.log("Rango: 4")
    console.log("--------------------------")
}

function resultadoClaseEnanoGuerrero(){
    console.log("Ataque: 80")
    console.log("Resistencia: 60")
    console.log("Mana: 50")
    console.log("Ataque magico: 40")
    console.log("Resistencia magica: 60")
    console.log("Velocidad: 75")
    console.log("Presicion: 65")
    console.log("Inteligencia: 60")
    console.log("Rango: 1")
    console.log("--------------------------")
}

function resultadoClaseEnanoTirador(){
    console.log("Ataque: 90")
    console.log("Resistencia: 30")
    console.log("Mana: 70")
    console.log("Ataque magico: 30")
    console.log("Resistencia magica: 30")
    console.log("Velocidad: 90")
    console.log("Presicion: 95")
    console.log("Inteligencia: 65")
    console.log("Rango: 5")
    console.log("--------------------------")
}
>>>>>>> e322824c67e837c847932b5dbd8b41113cb8e499

function resultadoClaseEnanoPaladin(){
    console.log("Ataque: 40")
    console.log("Resistencia: 80")
    console.log("Mana: 80")
    console.log("Ataque magico: 70")
    console.log("Resistencia magica: 90")
    console.log("Velocidad: 40")
    console.log("Presicion: 50")
    console.log("Inteligencia: 80")
    console.log("Rango: 1")
    console.log("--------------------------")
}


const finalizar = () => {return "Ya se ha seleccionado su personaje"}

alert(finalizar())

console.log(finalizar())

<<<<<<< HEAD
// // // function salir(){
// // //     alert("Fin de la operacion")
// // // }
=======
>>>>>>> e322824c67e837c847932b5dbd8b41113cb8e499
