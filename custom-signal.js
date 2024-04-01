let current = null

export function customSignal(initValue) {
  let value = initValue
  let subscribers = []

  function set(newValue) {
    value = newValue
    subscribers.forEach((sub) => {
      sub()
    })
  }

  function read() {
    subscribers.push(current)
    return value
  }

  return [read, set]
}

export function effect(fn) {
  current = fn

  fn()

  current = null
}
