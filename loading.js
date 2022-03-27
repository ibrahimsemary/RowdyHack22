import{ebayParse} from './ebayParse.js'

//call the api and get the data
const urlParams = new URLSearchParams(window.location.search);
const search = urlParams.get('searched');
let data = ebayParse(search);

//after do all this other stuff after api is done

setTimeout(() => { 
console.log(data);
let card1 = data[1];
let card2 = data[2];
let card3 = data[3];

let card4 = data[4];
let card5 = data[5];
let card6 = data[6];

let card7 = data[7];
let card8 = data[8];
let card9 = data[9];

let card10 = data[10];
let card11 = data[11];
let card12 = data[12];

let card13 = data[13];
let card14 = data[14];
let card15 = data[15];

location.href = "result1.html"
}, 20000);


export function request1() {
    return [card1, card2, card3];
}

export function request2() {
    return [card4, card5, card6];
}

export function request3() {
    return [card7, card8, card9];
}

export function request4() {
    return [card10, card11, card12];
}

export function request5() {
    return [card13, card14, card15];
}