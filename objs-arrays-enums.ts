// const person: {
//     name: string,
//     age: number
// } = {
//     name: "hamzaa",
//     age: 25
// }

// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string] // Tuple
// } = {
//     name: "Hamza",
//     age: 25,
//     hobbies: ["sports", 'reading books'],
//     role: [1, "dev"]
// }
// enum Role { ADMIN = "Hamza", DEV = 0, QA = 'HUZAIFA' };
enum Role { ADMIN, DEV, QA };
const person = {
    name: "Hamza",
    age: 25,
    hobbies: ["sports", 'reading books'],
    role: Role.ADMIN
}
// person.role.push("new") be aware of this
let favActivities: any[];

favActivities = ["yes", "do"]


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}