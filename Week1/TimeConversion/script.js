/*Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s = '12:01:00PM'
Return '12:01:00'.

s = '12:01:00AM'
Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

All input times are valid

Sample Input
07:05:45PM

Sample Output
19:05:45
*/

const s = '06:45:54AM'
// s = '13:05:45AM'
// retorno 01:05:45

// s = '12:01:00AM'
//retorno 00:01:00

function timeConversion() {
    const newArray = s.split(':');
    const hour = newArray[0];
    const hourToNumber = Number(hour);
    const VerifyPM = newArray[2].split('').some((letter) => letter === 'P')

    if(VerifyPM) {
        let sumHour = hourToNumber + 12;
        if(sumHour === 24){
            sumHour = 12
        }
        newArray[0] = String(sumHour);
        newArray[2] = newArray[2].split('').splice(0, 2).join('');
        return newArray.join(':');
    }

     else {

        if(hourToNumber === 12){
            newArray[0] = '00'
        }
            newArray[2] = newArray[2].split('').splice(0, 2).join('');
            return newArray.join(':');
       }
}

timeConversion()