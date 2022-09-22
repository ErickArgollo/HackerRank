a = [1, 2, 3, 4, 3, 2, 1];
// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger() {
    const newArr = a.sort((a, b) => a - b);
    let unique = 0;
    for(let i = 0; i < newArr.length; i += 1){
        let counter = 0;
        for(let j=0; j < newArr.length; j += 1){
            if(i !== j){
                if(newArr[i] === newArr[j]){
                    counter += 1
                }
            }
        }
        if(counter === 0) {
           unique = newArr[i];
        }
    }
   return unique
}




lonelyinteger();