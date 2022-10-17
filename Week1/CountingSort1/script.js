const arr = [0, 1, 1, 3, 3, 2, 1, 3, 0];


//Solução 1
function calc2(){
    
    const newObject = {};
       
    for(let i = 0; i < 100; i += 1){
        newObject[i] = 0
    }
    
    const number0To99 = Object.keys(newObject);
    
    for(let i = 0;  i < arr.length; i += 1){
        for(let j = 0; j < 100; j += 1){
            if(arr[i] == number0To99[j]){
                newObject[j] += 1
            }
        }
    }
    
    return Object.values(newObject);
}


//Solução 2

function calc2 () {

    const number0To99 = [];
    for(let i = 0; i < 100; i += 1){
        number0To99.push(i)
    }    

    const newObject = number0To99.reduce((acc, curr) => {
        return {
            ...acc,
            [curr]: arr.filter((e) => e == curr).length
        
        }
    }, {})
    
    console.log(Object.values(newObject)) 
}

calc2()


