
// >= 40  === falling grade
// diferença da nota pelo multiplo de 5 é menor que 3? se for arredonda, se n, n arredonda 

const grades = [73, 67, 38, 33];

function nextMultiple(num) {
    const newArr = [1, 2, 3];
    return newArr.find((e) => (e + num) % 5 === 0) + num
}

function gradingStudents() {

    return grades.map((e) => {
         if( e < 37 ){
             return e
         } else {
             if(nextMultiple(e) - e < 3){
                 return nextMultiple(e)
             } else {
                 return e
             }
         }
     })
 
 }
console.log(gradingStudents())