/* There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
Example:

strings = ['ab', ' ab', ' abc' ];
queries = [' ab', ' abc', 'bc']

There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array, .

results = [2, 1, 0];
*/


// strings = ['ab', ' ab', ' abc' ];
// queries = [' ab', ' abc', 'bc']

function matchingStrings(strings, queries) {
    const newArr = [];
    for(let i = 0; i < queries.length; i += 1){
        newArr[i] = 0;
        for(let k = 0; k < strings.length; k += 1){
           if(queries[i].trim() === strings[k].trim()){
            newArr[i] += 1
           }
        }
    }
return newArr
}

matchingStrings()