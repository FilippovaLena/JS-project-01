console.log(`Текущий уровень энергии: ${energy}`)

const MIN_ENERGY = 0
const ENERGY_LIMIT = 3
const FULL_ENERGY = 10

let energy = FULL_ENERGY;

while (energy >= 0) {
    console.log(energy)
    if (energy === MIN_ENERGY) {
        console.log("Робот грустит... :,( Нужно подзарядить!")
        break
    } else if (energy <= ENERGY_LIMIT) {
        console.log("Робот начинает чувствовать усталость... :О")
    } else {
        console.log("Робот счастлив и бодрствует! ;)")
        
    }
    // energy = energy - 1
    // energy -= 1
    energy--
}

console.log("Программа завершена. Робот отдыхает :)")



































// console.log("Hello JS!");
