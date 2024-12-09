function capitalize(word){
    return word[0].toUpperCase() + word.slice(1);
};

function reverseString(sentence){
    return sentence.split(' ').map(word => word.split('').reverse().join('')).reverse().join(' ');
};

const calculator = () => {
    function sum(a,b){
        return a+b;
    };

    function sub(a,b){
        return a-b;
    };

    function mult(a,b){
        return a*b;
    };

    function div(a,b){
        return a/b;
    }

    return {
        sum,
        sub,
        mult,
        div
    };
};

function cesarCipher(string, range){
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = lowerAlphabet.toUpperCase();

    let splittedString = string.split('');
    let encriptedText = '';

    function checkTextOrSymbol(splittedString){
        for (const char of splittedString){
            if (!/[A-Za-z]/.test(char)){
                encriptedText += char;
            }else if (char === char.toLowerCase()){
                lowerCharAdd(char, range);
            }else if(char === char.toUpperCase()){
                upperCharAdd(char, range);
            }

        }
    };

    function lowerCharAdd(char, range){
        let index = lowerAlphabet.indexOf(char);
        let count = -1;
        for(let i = 0; i <= range; i++){
            if(index+i >= lowerAlphabet.length){
                count+=1;
            }
        }

        if(count === -1){
            encriptedText += lowerAlphabet[index+range];
        }else{
            encriptedText += lowerAlphabet[count];
        }
    };

    function upperCharAdd(char, range){
        let index = upperAlphabet.indexOf(char);
        let count = -1;
        for(let i = 0; i <= range; i++){
            if(index+i >= upperAlphabet.length){
                count+=1;
            }
        }

        if(count === -1){
            encriptedText += upperAlphabet[index+range];
        }else{
            encriptedText += upperAlphabet[count];
        }
    };

    checkTextOrSymbol(splittedString);
    return encriptedText;
};

function analyzeArray(array){
    const object = {
        average: array.reduce((prev, current)=> current + prev,0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    }

    return object;

};

export{
    capitalize,
    reverseString,
    calculator,
    cesarCipher,
    analyzeArray,
}