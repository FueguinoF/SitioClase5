//Ejercicio 1

/*//Variación, declarando variables de colores y cargandolas al vector
let c1 = "Indigo"
let c2 = "Azul"
let c3 = "Verde"
let c4 = "Rojo"
let c5 = "Amarillo"
const colores = []
colores.unshift(c1,c3,c2,c4,c5)
*/
//Declaracion del vector con la  asignación de variables y colores
const colores = ["Azul","Rojo","Verde","Amarillo","Violeta"]

//console.log("1-) ",colores[0],colores[1],colores[2],colores[3],colores[4])
//Impresion medio burda, se puede declarar como console.log(colores) y te lo imprime con formato de 
//vector, se puede imprimir con un ciclo for u otra iteración también. 

//Ejercicio 2

let elem = colores[2]  //Genero la variable con el valor de la 3 posición del vector anterior
console.log("2-) ",elem)

//Ejercicio 3

console.log("3-) ", colores[0].charAt(0)) //uso la función privada para traerme la primer letra de la 1er posición

//Ejercicio 4

let num = Math.floor(Math.random() * 98) +1 //Genera número aleatorio entre 1 y 99
console.log("4-) El número aleatorio es: ",num)

//Ejercicio 5

const numeros = []
for (let i = 1; i <= 10 ; i++){ //Llena vector con los numeros del 1 al 10 
    numeros.push(i)
}

console.log("5-) El array es: ", numeros)

//Ejercicio 6

const numeros2 = []
for (let i = 1; i <= 10 ; i++){
    let num = Math.floor(Math.random() * 99) +1  //Genera y llena con numeros aleatorios entre 1 y 100
    numeros2.push(num)
}

console.log("6-) El array es: ", numeros2)

//Ejercicio 7 

//const numeros3 = [numeros2] //Copia burda, te mete todo el vector en la primera posición del otro
const numeros3 = []
numeros2.forEach(Element => numeros3.push(Element)) //Esta es mucho mejor, se puede resolver con un for
                                                    //pero quise usar el forEach para empezar a aplicarlo


console.log("7-) primer array: ",numeros2)
console.log("7-) segundo array: ",numeros3)

//Ejercicio 8

let cadena = prompt("Ingrese palabras, 'cancelar' termina la carga")
let cadena2 = ""
while (cadena != "cancelar"){
    cadena2 = cadena2 + "-" + cadena
    cadena = prompt("Ingrese nueva palabra, 'cancelar' termina la carga")
}

console.log(cadena2)

let cadena3 = prompt("Ingrese palabras, 'cancelar' termina la carga")
let cadena4 = []
while (cadena3 != "cancelar"){
    cadena4.push(cadena3)
    cadena3 = prompt("Ingrese nueva palabra, 'cancelar' termina la carga")
}

//cadena4.forEach(Element => console.log(Element + "-")) //prueba de impresion con errores
let cadena5 = ""
for (let i = 0; i < cadena4.length; i++){
    cadena5 = cadena5 + "-" + cadena4[i]
}
console.log(cadena5)


//Ejercicio 9 

function convertir(){
    let dolares = document.getElementById("dolares").value
    let pesos = dolares * 300
    document.getElementById("pesos").value = pesos
}

//Ejercicio 10 

function convertir2(){
    let pesos = document.getElementById("pesos2").value
    let dolares = pesos / 300
    document.getElementById("dolares2").value = dolares
}

//Ejercicio 11

function convertirgrados(){
    let gradosc = document.getElementById("gradoscelsius").value
    let gradosf = (gradosc * 9/5) + 32
    document.getElementById("gradosfarenheit").value = gradosf
}

//Ejercicio 12

function cargacomentarios(){
    let nombre = document.getElementById("nombrecliente").value
    let material = document.getElementById("listamateriales").value
    switch (true) {
        case document.getElementById("diminuta").checked:
            var tamaño = document.getElementById("diminuta").value
            break;
        case document.getElementById("mediana").checked:
            tamaño = document.getElementById("mediana").value
            break;
        case document.getElementById("grande").checked:
            tamaño = document.getElementById("grande").value
            break;
        default:
            tamaño = "sin especificar"
            break;
    }
    let comentarios = document.getElementById("comentarios").value
    document.getElementById("textocomentarios").value = nombre  +" ha pedido una caja de "+  material + " de dimensión " + tamaño + ". "+ comentarios
}

//Ejecicio 13

var nums = Math.floor(Math.random() * 6)
//console.log(nums) "Trampa" para corroborar el funcionamiento o "ganar" el juego

var int = 0

function juego(){
    if (int < 3){
        if (nums != document.getElementById("numintento").value){
            document.getElementById("resultado").value = "Error, numero incorrecto. Intente nuevamente"
            int = int + 1
            //console.log(int) 
            document.getElementById("cantintentos").innerText = "Intentos : "+ int
            document.getElementById("numintento").value = ""
            document.getElementById("numintento").focus(this)
        }
        else{
            int = int + 1
            document.getElementById("cantintentos").innerText = "Intentos : "+ int
            document.getElementById("resultado").value = "Felicitaciones, adivino el número "+nums+" en "+int+" intentos."
        }
    }
    else{
            document.getElementById("resultado").value = "Se acabaron los intentos, perdió el juego"
    }    
}

//Ejercicio 14

let lista = document.getElementById("personas")   

function agregar(){
    let persona = document.getElementById("persona").value
    let nombre = document.createElement("li")
    nombre.appendChild(document.createTextNode(persona))
    lista.appendChild(nombre)
    document.getElementById("persona").value = ""
    document.getElementById("persona").focus(this)
}