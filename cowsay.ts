import * as cow from './mod.ts'
import { parse } from "https://deno.land/std/flags/mod.ts";


async function main() {
    const args = Deno.args
    const opts = {
        string: [
            "text",
            "cow",
            "eyes",
            "tongue"
        ],
        boolean: [
            "wrap",
            "random",
            "think",
            "help",
            "list"
        ],
        alias: {
            random: "r",
            think: "k",
            wrap: "w",
            wrapLength: "wl",
            help: "h",
            text: "t",
            cow: "c",
            tongue: "g",
            mode: "m",
            eyes: "e",
            list: "ls"
        },
        default: {
            text: "Deno is great!",
            cow: "cow",
            eyes: "oo",
            tongue: "U",
            wrap: false,
            wrapLength: 40,
            mode: null,
            random: false,
            think: false,
            help: false,
            list: false
        }
    }

    let argv = parse(args, opts)


    if (argv.help) {
        const help = `
    arguments:
        --text       |   -t: Message Text [ex: --text="Hello world" ]
        --cow        |   -c: Cow image (default value is "cow") [ex: --cow="cat2" ]
        --mode       |   -m: Predefined eyes/tonges (from 1 to 8) [ex: --mode=3]
        --eyes       |   -e: Eyes of the image if exists (default: "oo") [ex: --eyes="@@" ]
        --tongue     |   -g: Tongue of the image (default: "U") [ex: --tongue="V" ]
        --random     |   -r: Pick random cow (default false) [ex: --random ]
        --think      |   -k: Use think insted of say (default false) [ex: --think ]
        --wrap       |   -w: Wrap the text (default false) [ex: --wrap ]
        --wrapLength | --wl: Where the message should be wrapped (default 40) [ex: --wrapLength=10 ]
        --list       | --ls: List the available cows

    example:
        deno -A https://raw.githubusercontent.com/fakoua/cowsay/master/cowsay.ts -t="Hello World" -r
        `
        console.log(help)
        Deno.exit(0)
    }

    if (argv.list) {
        console.table(cow.list())
        Deno.exit(0)
    }

    let res = ""

    if (argv.think) {
        res = cow.think({
            text: argv.text,
            cow: argv.cow,
            eyes: argv.eyes,
            tongue: argv.tongue,
            wrap: argv.wrap,
            wrapLength: argv.wrapLength,
            random: argv.random,
            mode: argv.mode
        })
    } else {
        res = cow.say({
            text: argv.text,
            cow: argv.cow,
            eyes: argv.eyes,
            tongue: argv.tongue,
            wrap: argv.wrap,
            wrapLength: argv.wrapLength,
            random: argv.random,
            mode: argv.mode
        })
    }

    console.log(res)
}

main()


