# cowsay

Configurable talking cow for Deno

```bash
 ________________
< Deno is Great! >
 ----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
## Examples:

```ts
import * as o from 'https://raw.githubusercontent.com/fakoua/cowsay/master/mod.ts'

let m = await o.say({
    text: 'hello every one'
})
console.log(m)
```
Or you can trigger the cli:

```bash
deno -A https://raw.githubusercontent.com/fakoua/cowsay/master/cowsay.ts "Hello from the net"
```

## Options:

```ts
let m = await o.say({
    text: 'hello',
    cow: 'cat', // Template for a cow (check the folder cows)
    eyes: 'oo', // Select the appearance of the cow's eyes, equivalent to cowsay -e
    tongue: 'L|', // The tongue is configurable similarly to the eyes through -T and tongue_string, equivalent to cowsay -T
    wrap: false, // If it is specified, the given message will not be word-wrapped
    wrapLength: 40, // Specifies roughly where the message should be wrapped.
    mode: 'b', // One of 	"b", "d", "g", "p", "s", "t", "w", "y"
})
console.log(m)
```

NB: cli now does not support other args.
