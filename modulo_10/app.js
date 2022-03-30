const numbers = [1,2,3,4,5,6,];
const universe = ["astro", "estrella", "acuario", "planeta", "andromeda"];
const letters = ["a", "b", "c","d","z"];

// hasId
console.log("- HasId -");

const findClients = [
    {name: "Diego", surname: "Arnedo"},
    {name: "Paco", surname: "Sánchez", id:012}
];
const hasId = clients => clients.some(client => client.id);
console.log(hasId(findClients));

//head
console.log("- Head -");

function head(array) {
    const [first] = array;
    console.log(first);
};
head(numbers);

//tail
console.log("- Tail -");

function tail(array) {
    const [ , ...arr] = array;
    console.log(arr);
};
tail(numbers);

//swapFirstToLast
console.log("- swapFirstToLast -");

function swapFirstToLast(arrayLast) {
    const [primero, ...ult] = arrayLast;
    arrayLast = [ult + "," + primero];
    console.log(arrayLast);
};
swapFirstToLast(numbers);

//excludeId
console.log("- excludeId -");

const car = {
    id: 1, marca: "seat", modelo: "León"
};
function excludeId (object) {
    const {id,...rest} = object;
    console.log(rest);
    return {...rest};
};
excludeId(car);

// wordsStartingWithA
console.log("- wordsStartingWithA -");

const  wordsStartingWithA = words => words.filter(word => word[0] === "a");
console.log(wordsStartingWithA(universe));

//concat
console.log("- concat -");

const concat = (...arguments) => {
    const concatString = arguments => arguments.join("|");
    console.log(concatString(arguments))};
 concat("hola",true, "adiós", false,6,"yes");

//  multArray
console.log("- multArray -");

const numbersMult = [1,2,3,2];
const multArray = (n,array) => array.map(arr => arr * n );
console.log(multArray(2, numbersMult));

// calcMult
console.log("- calcMult -");

const calcMult = (...array) => array.reduce((acc, arr) => acc * arr );
console.log(calcMult(1,2,3,2));

// swapFirstSecond
console.log("- swapFirstSecond -");

function swapFirstSecond(change) {
    const [primero,segundo, ...ult] = change;
    change = [segundo + "," + primero + "," + ult];
    console.log(change);
};
swapFirstSecond(letters);

// longest
console.log("- longest -");

const  longest = (n, words) => words.every(word => word[0] === n);
console.log(longest("a",universe));


    
    
    




