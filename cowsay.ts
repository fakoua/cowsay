import * as cow from './mod.ts'


async function main() {
    const args = Deno.args.slice(1)
    let text = 'Deno is great!'
    if (args.length > 0) {
        text = args[0]
    }
    let res = await cow.say({
                        text: text
                    })
    console.log(res)
}

await main()


