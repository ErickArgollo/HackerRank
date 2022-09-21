const arr = [1, 1, 0, -1, -1];

function plusMinus(){
    let positive = 0;
    let negative = 0;
    let zero = 0;
    arr.forEach((num) => {
       if(num > 0){
        positive += 1
       }
       else if(num < 0){
        negative += 1
       }
       else{
           zero += 1
       }

    })
    console.log((positive/arr.length).toFixed(6))
    console.log((negative/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
}
plusMinus()