var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";


var encryptText = "";
// var decryptText = "";

function crypt(valor) {
    var text = "";
    var alfabeto = "";
    var enalfabeto = "";
    var cajapintar = "";

    if (valor == 'encriptar') {
        cajapintar = 'desencriptar';
        text = document.getElementById(valor).value;
        alfabeto = plainAlphabet;
        enalfabeto = encryptAlphabet;

    } else if (valor == 'desencriptar') {
        cajapintar = 'encriptar';
        text = document.getElementById(valor).value;
        alfabeto = encryptAlphabet;
        enalfabeto = plainAlphabet;
    }

    for (var i = 0; i < text.length; i++) {
        var lowerText = text.toLowerCase(text);
        var letter = false;
        for (var x = 0; x < alfabeto.length; x++) {
            if (lowerText[i] == alfabeto[x]) {
                encryptText = encryptText + enalfabeto[x];
                var letter = true;
            }
        }
        if (letter == false) {
            encryptText = encryptText + lowerText[i];
        }
    }
    console.log(encryptText);

    document.getElementById(cajapintar).value = encryptText;




    eraser();

}





// function ecrypt() {
//     var text = document.getElementById("text").value;
//     for (var i = 0; i < text.length; i++) {
//         var lowerText = text.toLowerCase(text);
//         var letter = false;
//         for (var x = 0; x < plainAlphabet.length; x++) {
//             if (lowerText[i] == plainAlphabet[x]) {
//                 encryptText = encryptText + encryptAlphabet[x];
//                 var letter = true;
//             }
//         }
//         if (letter == false) {
//             encryptText = encryptText + lowerText[i];
//         }
//     }
//     console.log(encryptText);
//     document.getElementById("encryptArea").value = encryptText;
//     eraser();
// }

// function decrypt() {
//     var encryptText = document.getElementById("encryptArea").value;
//     for (var i = 0; i < encryptText.length; i++) {
//         var letter = false;
//         for (var x = 0; x < encryptAlphabet.length; x++) {
//             if (encryptText[i] == encryptAlphabet[x]) {
//                 decryptText = decryptText + plainAlphabet[x];
//                 var letter = true
//             }
//         }
//         if (letter == false) {
//             decryptText = decryptText + encryptText[i];
//         }
//     }
//     console.log(decryptText);
//     document.getElementById("text").value = decryptText;
//     eraser();
// }

function eraser() {
    decryptText = "";
    encryptText = "";
}


