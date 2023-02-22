const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let decodeMorse = [];
  for (let i = 0; i < expr.length; i = i + 10) {
    decodeMorse.push(expr.slice(i, i + 10));
  }

  for (let i = 0; i < decodeMorse.length; i++) {
    let elem = '';
    if (decodeMorse[i] == '**********') {
        decodeMorse[i] = ' ';
      continue;
    }

    for (let j = 0; j < 10; j = j + 2) {
      if (decodeMorse[i][j] === '1' && decodeMorse[i][j + 1] === '0') {
        elem += '.';
      } else if (decodeMorse[i][j] === '1' && decodeMorse[i][j + 1] === '1') {
        elem += '-';
      }
    }

    decodeMorse[i] = MORSE_TABLE[elem];
  }

  return decodeMorse.join('');
}

module.exports = {
  decode,
};
