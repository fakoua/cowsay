import * as cow from './mod.ts'

let c = await cow.say({
    text: 'Open: http://localhost:8080',
    random: true
})

console.log(c)

