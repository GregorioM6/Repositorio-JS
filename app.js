class Personaje{
    constructor( raza, clase) {
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
        }
        else if(raza == "Enano" && clase == "Guerrero") {
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
        razaClase(seleccionRaza, seleccionClase);
        // mejorarPersonaje(seleccionRaza, seleccionClase)
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
        console.log("Usted eligio ser Humano/Mago a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        const personaje1 = new Personaje("Humano", "Mago");
        console.log(personaje1);
    }else if(seleccionRaza == 1 && seleccionClase== 2 ){
        console.log("Usted eligio ser Humano/Guerrero a continuacion vera sus estadisticas:")
        console.log("--------------------------")
        const personaje1 = new Personaje("Humano", "Guerrero");
        console.log(personaje1);
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

const finalizar = () => {return "Ya se ha seleccionado su personaje"}

alert(finalizar())

console.log(finalizar())
