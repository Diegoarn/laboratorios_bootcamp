
var randomPick = (min, max) => Math.ceil(Math.random() * (max - min)) + min;

var random = [];

while (random.length < 10) {
       var randomNumber = randomPick(0, 100);
       if (!random.includes(randomNumber)){
       random.push(randomNumber);
}
};

console.log(random);


