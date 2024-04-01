import { customSignal, effect } from "./custom-signal.js"

const [count, setCount] = customSignal(10)

//we make sure the read function gets invoked first and sets the global sub value. so the read function then updates the sublist with calling subscriber
effect(() => console.log(count()))

setCount(100)
