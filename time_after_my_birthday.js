// 21 de mayo de 1991
// 1991 / 05 / 21

const days =
[
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"

]

const birth = new Date(1991, 4, 21)//month - 1
const today = new Date()
const time = today - birth
const timeInSeconds = time / 1000
const timeInMinutes = timeInSeconds / 60
const timeInHours = timeInMinutes / 60
const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
console.log(days[nextBirthday.getDay()])