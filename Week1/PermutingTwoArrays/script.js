const k = 3;
const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];

function permutingtwo() {
    const sortedA = arr1.sort((a, b) => a - b);
    const sortedB = arr2.sort((a, b) => b - a);
    // console.log(sortedA, sortedB);

    const someSum = sortedA.some((e, i ) => e + sortedB[i] >= k);
    if(someSum){
        return 'YES'
    } else {
        return 'NO'
    }
}

permutingtwo()