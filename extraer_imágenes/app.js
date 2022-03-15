
const pattern = /https:\/\/.{1,}.(png|jpg)/i;

const values = [
'<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>',
'<imgsrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'
];

values.forEach(value => {
   
    var result = pattern.exec(value)
    console.log(result[0]) 
  });

