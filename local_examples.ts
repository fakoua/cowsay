import * as o from './mod.ts'

let m = await o.say({
    text: 'hello man',
    wrap: true,
    wrapLength: 4

})
console.log(m)