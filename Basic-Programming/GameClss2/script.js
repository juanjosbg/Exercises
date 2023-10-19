function aleatiorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc =  aleatiorio(1,3)

jugador = prompt("Elije: 1 para piedra, 2 para papel, 3 para tijera ")
//alert("Elejista " + jugador)
if(jugador == 1) {
    alert("Elejiste 🥌")
} else if(jugador == 2){
    alert("Elejista 🧻")
} else if(jugador == 3){
    alert("Elejiste ✂")
} else{ // Si elije otra opcion que no sea 1,2 o 3. mostrar:
    alert("ELEJISTE PERDER!!")
}
// para saber que eligio la pc
if(pc == 1) {
    alert("PC elije 🥌")
} else if(pc == 2){
    alert("PC elije 🧻")
} else if(pc == 3){
    alert("PC elije ✂")
} else{ // Si elije otra opcion que no sea 1,2 o 3. mostrar:
    alert("PC ELIJE PERDER!!")
}

// COMBATE
// 1. verificar que no empatamos
if(pc == jugador) {
    alert("EMPATE")
} else if(jugador == 1 && pc == 3){
    alert("GANASTE")
} else if(jugador == 2 && pc == 1){
    alert("GANASTE")
} else if(jugador == 3 && pc == 2){
    alert("GANASTE")
} else {
    alert("PERDISTE")
}