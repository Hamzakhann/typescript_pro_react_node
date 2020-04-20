type Combinable = string | number; //aliases or custom type
type CustomType = "as-text" | 'as-num';
function combine(
    inp1: number | string, //Union type
    inp2: Combinable,
    resultCon: "as-text" | "as-num" //literal type
) {
    return "hello"
}