// INTERSECTION

type Combinable = {
    name: string
}

type DefineAge = {
    age: number
}

type UnserstandIntersect = Combinable & DefineAge;

const e1: UnserstandIntersect = {
    name: "hamza",
    age: 25
}