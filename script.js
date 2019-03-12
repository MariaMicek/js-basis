var myCat = new Object();

myCat.sound = "miau miau miau";
myCat.sleep = "zzz";
myCat.eat = "I am sleeping now";
myCat.age = 2;

myCat.age = 3;
myCat['age'] = 4;

console.log(myCat);
console.log(myCat.sound);
console.log(myCat['sleep']);
console.log(myCat.eat);
console.log(myCat['age']);

var myCar = {
    speed: 70,
    year: 2003,
    color: 'red',
    'color-2': 'green'
}

console.log(myCar);
console.log(myCar['color-2']);

myCar = {
    mark: 'ford',
    model: 'mustang',
    year: '1997',
    parts: {

        engine: [1, 2, 3],
        body: ['red', 'blue'],

    },
    sound: function() {
        console.log('wrrrrr')
    },
    drive: function(speed) {
        console.log('speed ' + speed);
        console.log('speed', speed);
    }
}

console.log(myCar.parts.body[1]);
console.log(myCar.sound());
console.log(myCar.drive(120));
