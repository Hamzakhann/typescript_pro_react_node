const names: Array<string> = []; //// GENERICS


const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello")
    }, 3000)
})

promise.then(data => {
    console.log(data)
})


function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergeObj = merge({ name: "haamza" }, { age: 25 })
console.log(mergeObj)