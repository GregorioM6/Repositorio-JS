class Personaje{
    constructor(raza, clase){
    this.raza = raza;
    this.clase = clase;
    }
}

class Estadisticas{
    constructor(ataque, resistencia, mana, ataqueMagico, resistenciaMagica, velocidad, presicion, inteligencia, rango){
    this.ataque = ataque;
    this.resistencia = resistencia;
    this.mana = mana;
    this.ataqueMagico = ataqueMagico;
    this.resistenciaMagica = resistenciaMagica;
    this.velocidad = velocidad;
    this.presicion = presicion;
    this.inteligencia = inteligencia;
    this.rango = rango;
    }
}

seleccionarRaza();

function seleccionarRaza(){
    let seleccion = confirm ("Ingrese su raza para comenzar el juego")
    console.log("1: Humano")
    console.log("2: Orco")
    console.log("3: Elfo")
    console.log("4: Enano")
    console.log("--------------------------")
    ingresarRaza (seleccion)
}

function ingresarRaza (r){
    if(r){
        let seleccionRaza = validarRaza();
        let seleccionClase = validarClase();
        razaClase(seleccionRaza, seleccionClase)
        funcionEstadisticas(seleccionRaza, seleccionClase)
    }else {
        alert("Es necesario ingresar un tipo de raza")
    }
}


function validarRaza (){
    let tipoRaza = Number(prompt("Ingresar raza:\n 1:Humano\n 2:Orco\n 3:Elfo\n 4:Enano"))
    while(tipoRaza >= 5 || tipoRaza <= 0){
    tipoRaza = Number(prompt("Ingresar raza:\n 1:Humano\n 2:Orco\n 3:Elfo\n 4:Enano"))
    }
        if(tipoRaza == "1"){
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

function validarClase(){
    let tipoClase = Number(prompt("Ingresar clase:\n 1:Mago\n 2:Guerrero\n 3:Tirador\n 4:Paladin"))
    while(tipoClase >= 5 || tipoClase <= 0){
        tipoClase = Number(prompt("Ingresar clase:\n 1:Mago\n 2:Guerrero\n 3:Tirador\n 4:Paladin"))
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
        const Personaje1 = new Personaje("Humano", "Mago")
        console.log(Personaje1)
        console.log("Usted eligio ser Humano/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 1 && seleccionClase== 2 ){
        const Personaje1 = new Personaje("Humano", "Guerrero")
        console.log(Personaje1)
        console.log("Usted eligio ser Humano/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 1 && seleccionClase== 3 ){
        const Personaje1 = new Personaje("Humano", "Tirador")
        console.log(Personaje1)
        console.log("Usted eligio ser Humano/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 1 && seleccionClase== 4 ){
        const Personaje1 = new Personaje("Humano", "Paladin")
        console.log(Personaje1)
        console.log("Usted eligio ser Humano/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 2 && seleccionClase== 1 ){
        const Personaje1 = new Personaje("Orco", "Mago")
        console.log(Personaje1)
        console.log("Usted eligio ser Orco/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 2 && seleccionClase== 2 ){
        const Personaje1 = new Personaje("Orco", "Guerrero")
        console.log(Personaje1)
        console.log("Usted eligio ser Orco/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 2 && seleccionClase== 3 ){
        const Personaje1 = new Personaje("Orco", "Tirador")
        console.log(Personaje1)
        console.log("Usted eligio ser Orco/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 2 && seleccionClase== 4 ){
        const Personaje1 = new Personaje("Orco", "Paladin")
        console.log(Personaje1)
        console.log("Usted eligio ser Orco/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 3 && seleccionClase== 1 ){
        const Personaje1 = new Personaje("Elfo", "Mago")
        console.log(Personaje1)
        console.log("Usted eligio ser Elfo/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 3 && seleccionClase== 2 ){
        const Personaje1 = new Personaje("Elfo", "Guerrero")
        console.log(Personaje1)
        console.log("Usted eligio ser Elfo/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 3 && seleccionClase== 3 ){
        const Personaje1 = new Personaje("Elfo", "Tirador")
        console.log(Personaje1)
        console.log("Usted eligio ser Elfo/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 3 && seleccionClase== 4 ){
        const Personaje1 = new Personaje("Elfo", "Paladin")
        console.log(Personaje1)
        console.log("Usted eligio ser Elfo/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 4 && seleccionClase== 1 ){
        const Personaje1 = new Personaje("Enano", "Mago")
        console.log(Personaje1)
        console.log("Usted eligio ser Enano/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 4 && seleccionClase== 2 ){
        const Personaje1 = new Personaje("Enano", "Guerrero")
        console.log(Personaje1)
        console.log("Usted eligio ser Enano/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 4 && seleccionClase== 3 ){
        const Personaje1 = new Personaje("Enano", "Tirador")
        console.log(Personaje1)
        console.log("Usted eligio ser Enano/Tirador a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }else if(seleccionRaza == 4 && seleccionClase== 4 ){
        const Personaje1 = new Personaje("Enano", "Paladin")
        console.log(Personaje1)
        console.log("Usted eligio ser Enano/Paladin a continuacion vera sus estadisticas:")
        console.log("--------------------------")
    }
}


function funcionEstadisticas(seleccionRaza, seleccionClase){
    if(seleccionRaza == 1 && seleccionClase== 1 ){
    const Estadisticas1 = new Estadisticas(60, 50, 100, 90, 50, 55, 60, 70, 4)
    console.log(Estadisticas1)
    }else if(seleccionRaza == 1 && seleccionClase== 2 ){
        const Estadisticas1 = new Estadisticas(80, 60, 50, 40, 60, 75, 65, 60, 1)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 1 && seleccionClase== 3 ){
        const Estadisticas1 = new Estadisticas(60, 50, 100, 90, 50, 55, 60, 70, 5)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 1 && seleccionClase== 4 ){
        const Estadisticas1 = new Estadisticas(40, 80, 80, 70, 90, 40, 50, 80, 1)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 2 && seleccionClase== 1 ){
        const Estadisticas1 = new Estadisticas(60, 50, 100, 90, 50, 55, 60, 70, 4)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 2 && seleccionClase== 2 ){
        const Estadisticas1 = new Estadisticas(80, 60, 50, 40, 60, 75, 65, 60, 1)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 2 && seleccionClase== 3 ){
        const Estadisticas1 = new Estadisticas(90, 30, 70, 30, 30, 90, 95, 65, 5)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 2 && seleccionClase== 4 ){
        const Estadisticas1 = new Estadisticas(40, 80, 80, 70, 90, 40, 50, 80, 1)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 3 && seleccionClase== 1 ){
        const Estadisticas1 = new Estadisticas(60, 50, 100, 90, 50, 55, 60, 70, 4)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 3 && seleccionClase== 2 ){
        const Estadisticas1 = new Estadisticas(80, 60, 50, 40, 60, 75, 65, 60, 1)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 3 && seleccionClase== 3 ){
        const Estadisticas1 = new Estadisticas(90, 30, 70, 30, 30, 90, 95, 65, 5)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 3 && seleccionClase== 4 ){
        const Estadisticas1 = new Estadisticas(40, 80, 80, 70, 90, 40, 50, 80, 1)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 4 && seleccionClase== 1 ){
        const Estadisticas1 = new Estadisticas(60, 50, 100, 90, 50, 55, 60, 70, 4)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 4 && seleccionClase== 2 ){
        const Estadisticas1 = new Estadisticas(80, 60, 50, 40, 60, 75, 65, 60, 1)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 4 && seleccionClase== 3 ){
        const Estadisticas1 = new Estadisticas(90, 30, 70, 30, 30, 90, 95, 65, 5)
        console.log(Estadisticas1)
    }else if(seleccionRaza == 4 && seleccionClase== 4 ){
        const Estadisticas1 = new Estadisticas(40, 80, 80, 70, 90, 40, 50, 80, 1)
        console.log(Estadisticas1)
    }
}


const finalizar = () => {return "Ya se ha seleccionado su personaje"}

alert(finalizar())

console.log(finalizar())