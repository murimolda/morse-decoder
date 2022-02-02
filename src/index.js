const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
       let letter = '';
    let simbol = '';
    let result = '';
    let space = ' ';

    for (let i = 0; i < expr.length; i += 10) {
        letter = expr.slice(i, i + 10);
        if (letter === '**********') {
            space = ' ';
            result = `${result}${space}`
        } else {
            while (simbol.length < 5) {
                for (let j = letter.length; j > 1; j -= 2) {
                    let a = `${letter[j - 2]}${letter[j - 1]}`;
                    if (a === '10') {
                        simbol = `.${simbol}`
                    } else if (a === '11') {
                        simbol = `-${simbol}`
                    } else if (a === '00') {
                        simbol = ` ${simbol}`
                    }
                }
            }
            for (const [key, value] of Object.entries(MORSE_TABLE)) {
                if (`${key}` === simbol.trim()) {
                    result = `${result}${value}`
                }
            }
            simbol = '';
        }
    }
    return result;

}

module.exports = {
    decode
}
