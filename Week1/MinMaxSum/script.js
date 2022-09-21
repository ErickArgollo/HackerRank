const arr = [1, 3, 5, 7, 9];


function miniMaxSum() {
    let maxSum = 0;
    let minSum = 0;
    const newArr = [...arr];
    const sortArr = newArr.sort((a, b) => a - b);

    for(let i = 1; i < sortArr.length; i += 1){
        maxSum += sortArr[i];
    }

    for(let i = 0; i < sortArr.length - 1; i += 1){
        minSum += sortArr[i];
    }
   
console.log(minSum, maxSum)
}
miniMaxSum()