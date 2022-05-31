class Personaje{
    constructor( raza, clase, estadisticas) {
        this.raza = raza;
        this.clase = clase;
        this.estadisticas = this.calcularEstadisticas(this.raza, this.clase);
    }
    calcularEstadisticas(raza, clase){
        let estadisticas = new Estadisticas();
        if(raza == "Humano" && clase == "Mago") {
            estadisticas.ataque = estadisticas.ataque + 3;
            estadisticas.defensa = estadisticas.defensa + 1;
            estadisticas.mana = estadisticas.mana + 5;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 5;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 2;
            estadisticas.velocidad = estadisticas.velocidad + 2;
            estadisticas.presicion = estadisticas.presicion + 3;
            estadisticas.inteligencia = estadisticas.inteligencia + 4;
            estadisticas.agilidad = estadisticas.agilidad + 1;
            return estadisticas;
        }
        else if(raza == "Humano" && clase == "Guerrero") {
            estadisticas.ataque = estadisticas.ataque + 4;
            estadisticas.defensa = estadisticas.defensa + 2;
            estadisticas.mana = estadisticas.mana + 2;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 1;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 1;
            estadisticas.velocidad = estadisticas.velocidad + 3;
            estadisticas.presicion = estadisticas.presicion + 2;
            estadisticas.inteligencia = estadisticas.inteligencia + 2;
            estadisticas.agilidad = estadisticas.agilidad + 3;
            return estadisticas;
        }else if(raza == "Humano" && clase == "Tirador") {
            estadisticas.ataque = estadisticas.ataque + 5;
            estadisticas.defensa = estadisticas.defensa + 1;
            estadisticas.mana = estadisticas.mana + 3;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 2;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 1;
            estadisticas.velocidad = estadisticas.velocidad + 3;
            estadisticas.presicion = estadisticas.presicion + 4;
            estadisticas.inteligencia = estadisticas.inteligencia + 2;
            estadisticas.agilidad = estadisticas.agilidad + 2;
            return estadisticas;
        }else if(raza == "Humano" && clase == "Paladin") {
            estadisticas.ataque = estadisticas.ataque + 1;
            estadisticas.defensa = estadisticas.defensa + 4;
            estadisticas.mana = estadisticas.mana + 4;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 2;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 4;
            estadisticas.velocidad = estadisticas.velocidad + 1;
            estadisticas.presicion = estadisticas.presicion + 2;
            estadisticas.inteligencia = estadisticas.inteligencia + 4;
            estadisticas.agilidad = estadisticas.agilidad + 2;
            return estadisticas;
        }else if(raza == "Orco" && clase == "Mago") {
            estadisticas.ataque = estadisticas.ataque + 3;
            estadisticas.defensa = estadisticas.defensa + 1;
            estadisticas.mana = estadisticas.mana + 5;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 5;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 2;
            estadisticas.velocidad = estadisticas.velocidad + 2;
            estadisticas.presicion = estadisticas.presicion + 3;
            estadisticas.inteligencia = estadisticas.inteligencia + 4;
            estadisticas.agilidad = estadisticas.agilidad + 1;
            return estadisticas;
        }
        else if(raza == "Orco" && clase == "Guerrero") {
            estadisticas.ataque = estadisticas.ataque + 4;
            estadisticas.defensa = estadisticas.defensa + 2;
            estadisticas.mana = estadisticas.mana + 2;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 1;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 1;
            estadisticas.velocidad = estadisticas.velocidad + 3;
            estadisticas.presicion = estadisticas.presicion + 2;
            estadisticas.inteligencia = estadisticas.inteligencia + 2;
            estadisticas.agilidad = estadisticas.agilidad + 3;
            return estadisticas;
        }else if(raza == "Orco" && clase == "Tirador") {
            estadisticas.ataque = estadisticas.ataque + 5;
            estadisticas.defensa = estadisticas.defensa + 1;
            estadisticas.mana = estadisticas.mana + 3;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 2;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 1;
            estadisticas.velocidad = estadisticas.velocidad + 3;
            estadisticas.presicion = estadisticas.presicion + 4;
            estadisticas.inteligencia = estadisticas.inteligencia + 2;
            estadisticas.agilidad = estadisticas.agilidad + 2;
            return estadisticas;
        }else if(raza == "Orco" && clase == "Paladin") {
            estadisticas.ataque = estadisticas.ataque + 1;
            estadisticas.defensa = estadisticas.defensa + 4;
            estadisticas.mana = estadisticas.mana + 4;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 2;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 4;
            estadisticas.velocidad = estadisticas.velocidad + 1;
            estadisticas.presicion = estadisticas.presicion + 2;
            estadisticas.inteligencia = estadisticas.inteligencia + 4;
            estadisticas.agilidad = estadisticas.agilidad + 2;
            return estadisticas;
        }else if(raza == "Elfo" && clase == "Mago") {
            estadisticas.ataque = estadisticas.ataque + 3;
            estadisticas.defensa = estadisticas.defensa + 1;
            estadisticas.mana = estadisticas.mana + 5;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 5;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 2;
            estadisticas.velocidad = estadisticas.velocidad + 2;
            estadisticas.presicion = estadisticas.presicion + 3;
            estadisticas.inteligencia = estadisticas.inteligencia + 4;
            estadisticas.agilidad = estadisticas.agilidad + 1;
            return estadisticas;
        }
        else if(raza == "Elfo" && clase == "Guerrero") {
            estadisticas.ataque = estadisticas.ataque + 4;
            estadisticas.defensa = estadisticas.defensa + 2;
            estadisticas.mana = estadisticas.mana + 2;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 1;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 1;
            estadisticas.velocidad = estadisticas.velocidad + 3;
            estadisticas.presicion = estadisticas.presicion + 2;
            estadisticas.inteligencia = estadisticas.inteligencia + 2;
            estadisticas.agilidad = estadisticas.agilidad + 3;
            return estadisticas;
        }else if(raza == "Elfo" && clase == "Tirador") {
            estadisticas.ataque = estadisticas.ataque + 5;
            estadisticas.defensa = estadisticas.defensa + 1;
            estadisticas.mana = estadisticas.mana + 3;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 2;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 1;
            estadisticas.velocidad = estadisticas.velocidad + 3;
            estadisticas.presicion = estadisticas.presicion + 4;
            estadisticas.inteligencia = estadisticas.inteligencia + 2;
            estadisticas.agilidad = estadisticas.agilidad + 2;
            return estadisticas;
        }else if(raza == "Elfo" && clase == "Paladin") {
            estadisticas.ataque = estadisticas.ataque + 1;
            estadisticas.defensa = estadisticas.defensa + 4;
            estadisticas.mana = estadisticas.mana + 4;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 2;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 4;
            estadisticas.velocidad = estadisticas.velocidad + 1;
            estadisticas.presicion = estadisticas.presicion + 2;
            estadisticas.inteligencia = estadisticas.inteligencia + 4;
            estadisticas.agilidad = estadisticas.agilidad + 2;
            return estadisticas;
        }else if(raza == "Enano" && clase == "Mago") {
            estadisticas.ataque = estadisticas.ataque + 3;
            estadisticas.defensa = estadisticas.defensa + 1;
            estadisticas.mana = estadisticas.mana + 5;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 5;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 2;
            estadisticas.velocidad = estadisticas.velocidad + 2;
            estadisticas.presicion = estadisticas.presicion + 3;
            estadisticas.inteligencia = estadisticas.inteligencia + 4;
            estadisticas.agilidad = estadisticas.agilidad + 1;
            return estadisticas;
        }else if(raza == "Enano" && clase == "Guerrero") {
            estadisticas.ataque = estadisticas.ataque + 4;
            estadisticas.defensa = estadisticas.defensa + 2;
            estadisticas.mana = estadisticas.mana + 2;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 1;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 1;
            estadisticas.velocidad = estadisticas.velocidad + 3;
            estadisticas.presicion = estadisticas.presicion + 2;
            estadisticas.inteligencia = estadisticas.inteligencia + 2;
            estadisticas.agilidad = estadisticas.agilidad + 3;
            return estadisticas;
        }else if(raza == "Enano" && clase == "Tirador") {
            estadisticas.ataque = estadisticas.ataque + 5;
            estadisticas.defensa = estadisticas.defensa + 1;
            estadisticas.mana = estadisticas.mana + 3;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 2;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 1;
            estadisticas.velocidad = estadisticas.velocidad + 3;
            estadisticas.presicion = estadisticas.presicion + 4;
            estadisticas.inteligencia = estadisticas.inteligencia + 2;
            estadisticas.agilidad = estadisticas.agilidad + 2;
            return estadisticas;
        }else if(raza == "Enano" && clase == "Paladin") {
            estadisticas.ataque = estadisticas.ataque + 1;
            estadisticas.defensa = estadisticas.defensa + 4;
            estadisticas.mana = estadisticas.mana + 4;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 2;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 4;
            estadisticas.velocidad = estadisticas.velocidad + 1;
            estadisticas.presicion = estadisticas.presicion + 2;
            estadisticas.inteligencia = estadisticas.inteligencia + 4;
            estadisticas.agilidad = estadisticas.agilidad + 2;
            return estadisticas;
        }
    }
}

class Estadisticas {
    constructor(){
        this.ataque = 1;
        this.defensa = 1;
        this.mana = 1;
        this.ataqueMagico = 1;
        this.defensaMagica = 1;
        this.velocidad = 1;
        this.presicion = 1;
        this.inteligencia = 1;
        this.agilidad = 1;
    }
}


class Bot{
    constructor( nombre) {
        this.nombre = nombre;
        this.estadisticas = this.calcularEstadisticas(this.nombre);
    }
    calcularEstadisticas(nombre){
        let estadisticas = new Estadisticas();
        if(nombre == "Bot1") {
            estadisticas.ataque = estadisticas.ataque + 1;
            estadisticas.defensa = estadisticas.defensa + 1;
            estadisticas.mana = estadisticas.mana + 1;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 1;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 1;
            estadisticas.velocidad = estadisticas.velocidad + 1;
            estadisticas.presicion = estadisticas.presicion + 1;
            estadisticas.inteligencia = estadisticas.inteligencia + 1;
            estadisticas.agilidad = estadisticas.agilidad + 1;
            return estadisticas;
        }
        else if(nombre == "Bot2") {
            estadisticas.ataque = estadisticas.ataque + 2;
            estadisticas.defensa = estadisticas.defensa + 2;
            estadisticas.mana = estadisticas.mana + 2;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 2;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 2;
            estadisticas.velocidad = estadisticas.velocidad + 2;
            estadisticas.presicion = estadisticas.presicion + 2;
            estadisticas.inteligencia = estadisticas.inteligencia + 2;
            estadisticas.agilidad = estadisticas.agilidad + 2;
            return estadisticas;
        }else if(nombre == "Bot3") {
            estadisticas.ataque = estadisticas.ataque + 6;
            estadisticas.defensa = estadisticas.defensa + 6;
            estadisticas.mana = estadisticas.mana + 6;
            estadisticas.ataqueMagico = estadisticas.ataqueMagico + 6;
            estadisticas.defensaMagica = estadisticas.defensaMagica + 6;
            estadisticas.velocidad = estadisticas.velocidad + 6;
            estadisticas.presicion = estadisticas.presicion + 6;
            estadisticas.inteligencia = estadisticas.inteligencia + 6;
            estadisticas.agilidad = estadisticas.agilidad + 6;
            return estadisticas;
        }
    }
}

const listaPersonajes =[];
const listaBot =[];

function enviar(){
    let nombre = document.getElementById("personaje").value
    let raza = document.getElementById("raza").value
    let clase = document.getElementById("clase").value
    console.log(raza)
    console.log(nombre)
    console.log(clase)


function seleccionarRaza(){
    let seleccion = confirm ("Ingrese su raza para comenzar el juego")
    ingresarRaza (seleccion)
}



seleccionarRaza();

function ingresarRaza (r){
        if(r){
            let seleccionRaza = validarRaza(raza);
            let seleccionClase = validarClase(clase);
            razaClase(seleccionRaza, seleccionClase);
            //finalizarSeleccion ();
            arrayPersonaje(seleccionRaza, seleccionClase);
    }else {
        alert("Es necesario ingresar un tipo de raza")
    }
    return 1;
}

ingresarRaza()

function validarRaza (raza){
    let tipoRaza = raza
    while(tipoRaza >= 5 || tipoRaza <= 0){
    tipoRaza = raza
    }if(tipoRaza == "1"){
            console.log("Usted selecciono: Humano")
            console.log("--------------------------")
            return 1;
        }else if (tipoRaza == "2"){
            console.log("Usted selecciono: Orco")
            console.log("--------------------------")
            return 2;
        }else if (tipoRaza == "3"){
            console.log("Usted selecciono: Elfo")
            console.log("--------------------------")
            return 3;
        }else if (tipoRaza == "4"){
            console.log("Usted selecciono: Enano")
            console.log("--------------------------")
            return 4;
        }
    }

function validarClase(clase){
    let tipoClase = clase
    while(tipoClase >= 5 || tipoClase <= 0){
        tipoClase = clase
    }
    if(tipoClase == 1 ){
        console.log("Usted selecciono: Mago")
        console.log("--------------------------")
        return 1;
    }else if (tipoClase == 2){
        console.log("Usted selecciono: Guerrero")
        console.log("--------------------------")
        return 2;
    }else if (tipoClase == 3){
        console.log("Usted selecciono: Tirador")
        console.log("--------------------------")
        return 3;
    }else if (tipoClase == 4){
        console.log("Usted selecciono: Paladin")
        console.log("--------------------------")
        return 4;
    }
}


function razaClase (seleccionRaza, seleccionClase){
    if(seleccionRaza == 1 && seleccionClase== 1 ){
        const Personaje1 = new Personaje("Humano", "Mago");
        console.log(Personaje1);
        console.log("Usted eligio ser Humano/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 1 && seleccionClase== 2 ){
        const Personaje1 = new Personaje("Humano", "Guerrero");
        console.log(Personaje1);
        console.log("Usted eligio ser Humano/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 1 && seleccionClase== 3 ){
        const Personaje1 = new Personaje("Humano", "Tirador");
        console.log(Personaje1);
        console.log("Usted eligio ser Humano/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 1 && seleccionClase== 4 ){
        const Personaje1 = new Personaje("Humano", "Paladin");
        console.log(Personaje1);
        console.log("Usted eligio ser Humano/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 2 && seleccionClase== 1 ){
        const Personaje1 = new Personaje("Orco", "Mago");
        console.log(Personaje1)
        console.log("Usted eligio ser Orco/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 2 && seleccionClase== 2 ){
        const Personaje1 = new Personaje("Orco", "Guerrero");
        console.log(Personaje1)
        console.log("Usted eligio ser Orco/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 2 && seleccionClase== 3 ){
        const Personaje1 = new Personaje("Orco", "Tirador");
        console.log(Personaje1)
        console.log("Usted eligio ser Orco/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 2 && seleccionClase== 4 ){
        const Personaje1 = new Personaje("Orco", "Paladin");
        console.log(Personaje1)
        console.log("Usted eligio ser Orco/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 3 && seleccionClase== 1 ){
        const Personaje1 = new Personaje("Elfo", "Mago");
        console.log(Personaje1)
        console.log("Usted eligio ser Elfo/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 3 && seleccionClase== 2 ){
        const Personaje1 = new Personaje("Elfo", "Guerrero");
        console.log(Personaje1)
        console.log("Usted eligio ser Elfo/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 3 && seleccionClase== 3 ){
        const Personaje1 = new Personaje("Elfo", "Tirador");
        console.log(Personaje1)
        console.log("Usted eligio ser Elfo/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 3 && seleccionClase== 4 ){
        const Personaje1 = new Personaje("Elfo", "Paladin");
        console.log(Personaje1)
        console.log("Usted eligio ser Elfo/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 4 && seleccionClase== 1 ){
        const Personaje1 = new Personaje("Enano", "Mago");
        console.log(Personaje1)
        console.log("Usted eligio ser Enano/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 4 && seleccionClase== 2 ){
        const Personaje1 = new Personaje("Enano", "Guerrero");
        console.log(Personaje1)
        console.log("Usted eligio ser Enano/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 4 && seleccionClase== 3 ){
        const Personaje1 = new Personaje("Enano", "Tirador");
        console.log(Personaje1)
        console.log("Usted eligio ser Enano/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }else if(seleccionRaza == 4 && seleccionClase== 4 ){
        const Personaje1 = new Personaje("Enano", "Paladin");
        console.log(Personaje1)
        console.log("Usted eligio ser Enano/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        return Personaje1;
    }
}

function arrayPersonaje(seleccionRaza, seleccionClase){
    const Personaje = razaClase(seleccionRaza, seleccionClase);
    listaPersonajes.push(Personaje);
}



console.log(listaPersonajes);

// function finalizarSeleccion (){
//     let seleccionFinalizar = prompt("Desea crear un nuevo personaje:\n 1:Si\n 2:No")
//         if (seleccionFinalizar === "1"){
//             seleccionarRaza();
//         } else {
//             console.log("Ya se ha seleccionado su personaje")
//         }
//     }



// function ingresarPelea (r){
//     if(r){
//         let seleccionRival = seleccionBot()
//         selecRival(seleccionRival)
//         arrayBot(seleccionRival)
// }else {
//     alert("Es necesario ingresar un tipo de raza")
// }
// return 1;
// }


function dificultad(){
    let valor = $("#pelea").val();
    localStorage.setItem("dificultad", JSON.stringify(valor))
    console.log("dificultad", valor)
}
    
function seleccionBot(){
    // alert("A continuacion comenzaremos la batalla");
    let seleccionRival = parseInt(JSON.parse(localStorage.getItem("dificultad")))
    while(seleccionRival >= 4 || seleccionRival <= 0){
        seleccionRival = parseInt(JSON.parse(localStorage.getItem("dificultad")))
    }if(seleccionRival == "1"){
        console.log("Usted eligio pelear contra la maquina en facil")
        console.log("--------------------------")
        return 1;
    }else if (seleccionRival == "2"){
        console.log("Usted eligio pelear contra la maquina en Normal")
        console.log("--------------------------")
        return 2;
    }else if (seleccionRival == "3"){
        console.log("Usted eligio pelear contra la maquina en Dificil")
        console.log("--------------------------")
        return 3;
    }else {
        alert("Es necesario crear un personaje")
    }
}

function selecRival (seleccionRival){
    if(seleccionRival == 1 ){
        const Bot1 = new Bot("Bot1");
        console.log(Bot1);
        console.log("Usted eligio Bot1")
        console.log("--------------------------")
        return Bot1;
    }else if(seleccionRival == 2 ){
        const Bot1 = new Bot("Bot2");
        console.log(Bot1);
        console.log("Usted eligio Bot2")
        console.log("--------------------------")
        return Bot1;
    }else if(seleccionRival == 3 ){
        const Bot1 = new Bot("Bot3");
        console.log(Bot1);
        console.log("Usted eligio Bot3")
        console.log("--------------------------")
        return Bot1;
    }
}

selecRival(JSON.parse(localStorage.getItem("dificultad")))

// function arrayBot(seleccionRival){
//     const Bot = selecRival(seleccionRival);
//     listaBot.push(Bot);
// }
// console.log(listaBot);

const resta= [];

listaBot.push(Bot);

// function restar(){
//     const ataque = listaPersonajes[0].estadisticas.ataque
//     const defensa = listaBot[0].estadisticas.defensa
//     console.log("--------------------------");
//     console.log(listaPersonajes);
//     console.log("Ataque", ataque);
//     console.log("Defensa",defensa);
//     if(ataque >= defensa){
//         alert("Derrotaste a tu enemigo, subiste de nivel");
//         alert("Nivel 2");
//         console.log("Nivel 2");
//         nivel();
//     }else(
//         alert("Tu enemigo te ha derrotado.")
//     )
// }

// restar();

function nivel(){
    listaPersonajes[0].estadisticas.ataque = listaPersonajes[0].estadisticas.ataque + 2;
    listaPersonajes[0].estadisticas.defensa = listaPersonajes[0].estadisticas.defensa + 2;
    listaPersonajes[0].estadisticas.mana = listaPersonajes[0].estadisticas.mana + 2;
    listaPersonajes[0].estadisticas.ataqueMagico = listaPersonajes[0].estadisticas.ataqueMagico + 2;
    listaPersonajes[0].estadisticas.defensaMagica = listaPersonajes[0].estadisticas.defensaMagica + 2;
    listaPersonajes[0].estadisticas.velocidad = listaPersonajes[0].estadisticas.velocidad + 2;
    listaPersonajes[0].estadisticas.presicion = listaPersonajes[0].estadisticas.presicion + 2;
    listaPersonajes[0].estadisticas.inteligencia = listaPersonajes[0].estadisticas.inteligencia + 2;
    listaPersonajes[0].estadisticas.agilidad = listaPersonajes[0].estadisticas.agilidad + 2;
    console.log("Subiste de nivel, aqui encontraras las nuevas estadisticas:", listaPersonajes[0]);
}

console.log(listaPersonajes)

var nombreRegion = document.getElementById('region');
nombreRegion.addEventListener('keyup', function(e) {
    var keycode = e.keycode || e.which;
    if (keycode == 13) {
        alert("Selecciono la region con Enter!");
    }
});


function nombreUsuario() {
    var user = document.getElementById("personaje").value;
    text = "El nombre de usuario es '" + user;
    console.log(text)
    alert(text)
}

function seleccionNo(){
    text = "El personaje no va a pelear";
    console.log(text)
}



// persobajes en local storage:
localStorage.setItem("listaDePersonajes", JSON.stringify(listaPersonajes));

const listaStorage = JSON.parse(localStorage.getItem("listaDePersonajes"))
console.log(listaStorage)

for (const personaje of listaStorage) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h1 class= "container"> Raza: ${personaje.raza}</h1>
                            <p class= "container">  Clase: ${personaje.clase}</p>
                            <ul class= "container"> Estadisticas:
                                <li> Ataque: ${personaje.estadisticas.ataque}</li>
                                <li> Defensa: ${personaje.estadisticas.defensa}</li>
                                <li> Mana: ${personaje.estadisticas.mana}</li>
                                <li> Ataque Magico: ${personaje.estadisticas.ataqueMagico}</li>
                                <li> Defensa Magica: ${personaje.estadisticas.defensaMagica}</li>
                                <li> Velocidad: ${personaje.estadisticas.velocidad}</li>
                                <li> Presicion: ${personaje.estadisticas.presicion}</li>
                                <li> Inteligencia: ${personaje.estadisticas.inteligencia}</li>
                                <li> Agilidad: ${personaje.estadisticas.agilidad}</li>
                            </ul>`;
    document.body.appendChild(contenedor);
}
}


const btn = document.querySelector('#miBoton')
btn.addEventListener('click', () => {

Swal.fire({
    title: 'Vamos!!!',
    text: 'Haz decidido combatir!',
    icon: 'success',
    confirmButtonText: 'Pelear'
})
})

const btn2 = document.querySelector('#miBoton2')
btn2.addEventListener('click', () => {

Swal.fire({
    title: 'Oh Noooo!!!',
    text: 'Haz decidido no combatir, suerte en la proxima!',
    icon: 'error',
    confirmButtonText: 'Salir'
})
})


let btn3 = document.querySelector("#btnClima");
btn3.addEventListener('click', () => {
    let key = "0ca063b746578ffb14d9f9455bdb165a"
    let ciudad = document.querySelector('#ciudad').value
    ciudad = encodeURIComponent(ciudad)
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`
    console.log(url)
    if (ciudad != "") {
        fetch(url)
            .then((data) => {
                return data.json()
            })
            .then((clima) => {
                console.log(clima)
                let temp = clima.main.temp
                let tempC = temp - 273.15;
                let html = document.querySelector("#temperatura")
                html.innerHTML = tempC.toFixed(0)
                if (tempC < 10) {
                    html.className = "cold"
                } else {
                    html.className = "warm"
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
})