//Реализовать функцию, которая создает копию передаваемого объекта и возвращает ее.

let cat = {
    length: 60,
    weight: 4,
    'eyes color': 'green eyes',
    'hair color': 'grey',
};

function copyCat(obj) {
    let clone = {};
    for( let key in obj) {
        clone[key] = obj[key];
    }
    return clone;
};
console.log(cat);
console.log(copyCat(cat));

//Реализовать ф-ю, которая принимает объект и возвращает число обозначающее длину всех строковых

const image = {
    heigth: 45,
    width: 60,
    color: 'yellow',
    theme: 'landscape',
};

function returnLength(obj) {
    let counter = 0;

    for(let key in obj) {
        if (typeof obj[key] === 'string') {
            counter++;
        }
    }
    return counter;
};

returnLength(image);
console.log(returnLength(image));