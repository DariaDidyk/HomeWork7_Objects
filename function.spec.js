//Реализовать функцию, которая создает копию передаваемого объекта и возвращает ее.

describe ('copyCat', function() {
    it('создался ли клон обьекта cat', function() {
        let cat = {
            length: 60,
            weight: 4,
            'eyes color': 'green eyes',
            'hair color': 'grey',
        };
        expect(copyCat(cat)).to.deep.equal(cat);
    });
});

//Реализовать ф-ю, которая принимает объект и возвращает число обозначающее длину всех строковых

describe ('returnLength', function() {
    it('количество строчных свойств = 2', function() {
        const image = {
            heigth: 45,
            width: 60,
            color: 'yellow',
            theme: 'landscape',
        };
        expect(returnLength(image)).to.equal(2);
    });
});