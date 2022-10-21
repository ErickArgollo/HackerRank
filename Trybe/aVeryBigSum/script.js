function aVeryBigSum(ar) {
    return ar.reduce((acc, curr) => acc + curr)

}

function compareTriplets(a, b) {
    const resultedArr = [0, 0];
    for(let i = 0; i < a.length; i += 1){
        if(a[i] > b[i]){
            resultedArr[0] += 1
        }
        if ( a[i] < b[i] ) {
            resultedArr[1] += 1
        }

    }
    return resultedArr
}
