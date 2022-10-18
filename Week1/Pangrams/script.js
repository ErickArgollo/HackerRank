
const s = "The quick brown fox jumps over the lazy dog";


function isPangram(){
    const arrayOfAlphabet = [];
    const strWithoutSpaces = s.replace(/\s/g, '').split('');
    for(let i = 65; i <= 90; i += 1){
        arrayOfAlphabet.push(String.fromCharCode(i))
    }

    for(let i = 0; i < arrayOfAlphabet.length; i += 1){
        const verifyPangram = strWithoutSpaces.some((e) => e.toUpperCase() === arrayOfAlphabet[i])
        if(!verifyPangram){
            return 'not pangram'
        }
    }
    
    return 'pangram'
}

isPangram()