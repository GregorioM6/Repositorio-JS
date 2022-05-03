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

seleccionarRaza();

function seleccionarRaza(){
    let seleccion = confirm ("Ingrese su raza para comenzar el juego")
    ingresarRaza (seleccion)
}

function ingresarRaza (r){
    if(r){
        let seleccionRaza = validarRaza();
        let seleccionClase = validarClase();
        razaClase(seleccionRaza, seleccionClase);
        finalizarSeleccion ();
        arrayPersonaje(seleccionRaza, seleccionClase);
        let seleccionRival = seleccionBot()
        selecRival(seleccionRival)
        arrayBot(seleccionRival)
    }else {
        alert("Es necesario ingresar un tipo de raza")
    }
    return 1;
}


function validarRaza (){
    let tipoRaza = Number(prompt("Ingresar raza:\n 1:Humano\n 2:Orco\n 3:Elfo\n 4:Enano"))
    while(tipoRaza >= 5 || tipoRaza <= 0){
    tipoRaza = Number(prompt("Ingresar raza:\n 1:Humano\n 2:Orco\n 3:Elfo\n 4:Enano"))
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

function finalizarSeleccion (){
    let seleccionFinalizar = prompt("Desea crear un nuevo personaje:\n 1:Si\n 2:No")
        if (seleccionFinalizar === "1"){
            seleccionarRaza();
        } else {
            console.log("Ya se ha seleccionado su personaje")
        }
    }


    
function seleccionBot(){
    alert("A continuacion comenzaremos la batalla");
    let seleccionRival = Number(prompt("Elija el nivel de dificultad de la batalla:\n 1:Facil\n 2:Normal\n 3:Dificil"))
    while(seleccionRival >= 4 || seleccionRival <= 0){
        seleccionRival = Number(prompt("Elija el nivel de dificultad de la batalla:\n 1:Facil\n 2:Normal\n 3:Dificil"))
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

function arrayBot(seleccionRival){
    const Bot = selecRival(seleccionRival);
    listaBot.push(Bot);
}
console.log(listaBot);

const resta= [];


function restar(){
    const ataque = listaPersonajes[0].estadisticas.ataque
    const defensa = listaBot[0].estadisticas.defensa
    console.log("--------------------------");
    console.log(listaPersonajes);
    console.log("Ataque", ataque);
    console.log("Defensa",defensa);
    if(ataque >= defensa){
        alert("Derrotaste a tu enemigo, subiste de nivel");
        alert("Nivel 2");
        console.log("Nivel 2");
        nivel();
    }else(
        alert("Tu enemigo te ha derrotado.")
    )
}

restar();

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

