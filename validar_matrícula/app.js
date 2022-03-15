

const pattern = /^(\d{4})(\s|-)?([A-Z]{3})$/

const values = ['2021 GMD',
'2345-GMD',
'4532BDB',
'0320-AAA',
];

values.forEach(value => {
  console.log(value, pattern.test(value)) 
});

values.forEach(value => {
    var result = pattern.exec(value);
    console.log("números: " + result[1] + " - " +  "letras: " + result[3])
});