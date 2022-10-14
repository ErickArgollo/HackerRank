const arr = [[-1, 1, -7, -8], 
             [-10, -8, -5, -2],
             [0, 9, 7, -1],
             [4, 4, -2, 1]];


function diagonalDifference() {
    // const primaryDiagonal = arr[0][0] + arr[1][1] + arr[2][2] + arr[3][3]

    // const secondaryDiagonal = arr[0][3] + arr[1][2] + arr[2][1] + arr[3][0];

    let primary = 0;
    let secondary = 0;

    for(let i = 0; i <  arr.length; i+=1){
        primary += arr[i][i]
        secondary += arr[i][arr.length - i - 1]
    }

    return Math.abs(primary - secondary)
}

diagonalDifference()