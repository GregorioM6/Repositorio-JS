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

// function ingresarRaza (r){
//     if(r){
//         let raza = Number(prompt("Ingresar raza:\n 1:Humano\n 2:Orco\n 3:Elfo\n 4:Enano"))
//         validarRaza(raza)
//         console.log("Ha seleccionado: " + raza)
//         let clasePrueba = probar();
//         razaClase(raza, clasePrueba)
        
//     }else {
//         alert("Es necesario ingresar un tipo de raza")
//     }
// }

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


// // // function salir(){
// // //     alert("Fin de la operacion")
// // // }