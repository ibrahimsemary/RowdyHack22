let searched = "";

//get data from api by calling function
//not doing it now because api limited stuff
/*
document.getElementById("dark_field").oninput = function () {
    searched = document.getElementById("dark_field").value;
}

document.getElementById("searchButton").onclick = function () {
    console.log("clicked");
}
*/
//______________________________________________________
//stuff for second page (result 2)

let data = [
    [],
    [
        "Reebok Flashfilm Train 2 Men's Shoes",
        47.99,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/tvoAAOSweIFhZ7Qc/s-l225.jpg",
        "https://www.ebay.com/itm/174786149499"
    ],
    [
        "Men's Athletic Running Shoes Casual Outdoor Sports Tennis Sneakers Gym Size11",
        27.99,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/15IAAOSwtbNgozBY/s-l225.jpg",
        "https://www.ebay.com/itm/164871744178"
    ],
    [
        "Men's Casual Running Tennis Sports Shoes Outdoor Gym Athletic Sneakers Walking",
        32.06,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/Z2IAAOSwXqhh29xc/s-l225.jpg",
        "https://www.ebay.com/itm/313826877835"
    ],
    [
        "adidas Run Falcon 2.0 Shoes Men's",
        42,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/ZIYAAOSwv3ZiMq5j/s-l225.jpg",
        "https://www.ebay.com/itm/154903284098"
    ],
    [
        "adidas Racer TR21 Shoes Men's",
        45,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/XvMAAOSwZG9iOjfF/s-l225.jpg",
        "https://www.ebay.com/itm/154903284006"
    ],
    [
        "adidas Lite Racer Adapt 3.0 Shoes Men's",
        50,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/UEkAAOSwn1liF88S/s-l225.jpg",
        "https://www.ebay.com/itm/154848830824"
    ],
    [
        "adidas Originals Lite Racer Adapt 4.0 Shoes Men's",
        46,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/0hQAAOSwso5iP0iX/s-l225.jpg",
        "https://www.ebay.com/itm/154903284445"
    ],
    [
        "PUMA Men's Astro Kick Sneakers",
        29.99,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/9CMAAOSwdUJiHk5m/s-l225.jpg",
        "https://www.ebay.com/itm/284622928457"
    ],
    [
        "adidas EQ21 Run Shoes Men's",
        56,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/uZMAAOSwzmViPfZg/s-l225.jpg",
        "https://www.ebay.com/itm/154903283973"
    ],
    [
        "PUMA Men's Scuderia Ferrari Drift Cat Delta Motorsport Shoes",
        59.99,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/3PMAAOSwfutiIX5Y/s-l225.jpg",
        "https://www.ebay.com/itm/275102688843"
    ],
    [
        "PUMA Men's Axelion LS Training Shoes",
        54.99,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/J8oAAOSw8jhiHk5L/s-l225.jpg",
        "https://www.ebay.com/itm/284301838548"
    ],
    [
        "Reebok Flexagon Energy Train 3 Men's Training Shoes",
        34.99,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/nHEAAOSwA6liMikA/s-l225.jpg",
        "https://www.ebay.com/itm/175203355129"
    ],
    [
        "adidas Grand Court Shoes Women's",
        38,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/mXMAAOSwrIxiPKKd/s-l225.jpg",
        "https://www.ebay.com/itm/154623249403"
    ],
    [
        "Men's Athletic Running Sneakers Fashion Casual Walking Sports Tennis Shoes Gym",
        25.99,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/Xd0AAOSwKJ5h4AFg/s-l225.jpg",
        "https://www.ebay.com/itm/194733629390"
    ],
    [
        "BRUNO MARC Mens Casual Shoes Lace Up Waking Shoes Fashion Sneakers Size 6.5-15",
        26.99,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/ajYAAOSwfBphZ8i9/s-l225.jpg",
        "https://www.ebay.com/itm/283246609676"
    ],
    [
        "PUMA Men's Pacer Future Sneakers",
        39.99,
        "New",
        "https://i.ebayimg.com/thumbs/images/g/KkgAAOSwyIJiHk5g/s-l225.jpg",
        "https://www.ebay.com/itm/284523926701"
    ]
]

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


export function request1() {
    return [card1, card2, card3];
}

export function request2(){
    return [card4,card5,card6];
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




