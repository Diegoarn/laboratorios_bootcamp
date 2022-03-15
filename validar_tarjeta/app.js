const pattern = /^5[0-5]\d{2}((\s|-)?\d{4}){3}$/

const values = [
  '5299 6400 0000 0000',
  '5299-6400-00000000',
  '5299640000000000'
];

values.forEach(value => {
  console.log(value , pattern.test(value));  
});
