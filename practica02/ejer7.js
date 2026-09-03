//7.Formato de hora actual: Obtenga la hora, minutos y segundos actual. Muestre en formato: HH:MM:SS

let fecha = new Date()
let hora = fecha.getHours()
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds()

console.log(`la hora es ${hora}:${minutos}:${segundos}`)