function add(n1: number, n2: number): number {
    return n1 + n2
}


function printRes(res: number): void {
    console.log("Result is -", res)
}

printRes(add(2, 5))

// let functionAsVar: Function;
let functionAsVar: (a: number, b: number) => number;
functionAsVar = add
// functionAsVar = printRes //it cause error becuse it is not satisfied req

console.log(functionAsVar(2, 8))
// let someValue: undefined; //undefined is another type



function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
    let res = n1 + n2;
    cb(res)
}


addAndHandle(0, 9, (res) => console.log(res))