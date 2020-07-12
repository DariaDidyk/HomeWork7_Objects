//Реализовать функцию, которая создает копию передаваемого объекта и возвращает ее.

// const createCopyPicture = (obj) => {
//     let clone = {}; 
//     for (let key in obj) {
//         clone[key] = obj[key];
//     } 
//     return clone;
// };

// const image = {
//     heigth: 45,
//     weight: 60,
//     color: 'yellow',
//     theme: 'nature',
// }

// const picture = createCopyPicture(image);
// console.log(picture, createCopyPicture(image));

//Реализовать ф-ю, которая принимает объект и возвращает число обозначающее длину всех строковых



const checkStr = function(obj) {
    let counter = 0;
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            counter++;
        }
    } 
    return counter;
}
    let cat = {
        hair_color: "grey",
        eye_color: "green",
        character: "nice",
        weight: 5,
    };
    console.log(checkStr(cat));

