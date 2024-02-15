
//taking some constants
const rows = 4
const cols = 4
const sum = 150

//create a 2d array
const twoDArray = [];
for (let i = 0; i < rows; i++) {
    twoDArray[i] = []; // Initialize each row as an empty array
    for (let j = 0; j < cols; j++) {
        twoDArray[i][j] = 1; // Set each element to zero
    }
}

/**
 * Here trying to generate first set of row of numbers where its eq to sum 
 */
let a = Math.floor((sum*2)/3)
// console.log(a);
let b = Math.floor(a/4)
// console.log(b)
let c = b-10
// console.log(c)
let d = sum-(a+b+c)
//console.log(d)

//this is first row of array
let intArr = [b,d,c,a]
console.log(intArr);
// for (let i = 0; i < intArr.length; i++) {
//     twoDArray[0][i] = intArr[i];
// }


//second row of 2-d array which is mirror img of first 

let arr_row_2 = intArr.reverse()
arr_row_2[0] = arr_row_2[0]+1
arr_row_2[1] = arr_row_2[1]-1
arr_row_2[2] = arr_row_2[2]-3
arr_row_2[3] = arr_row_2[3]+3

console.log(arr_row_2)

// here we are shifting the first array by 2 indexs for 3rd row
const splitIndex = intArr.length - 2;
const shiftedPart = intArr.slice(splitIndex);
const remainingPart = intArr.slice(0, splitIndex);
const arr_row_3 = shiftedPart.concat(remainingPart);
arr_row_3[0] = arr_row_3[0]-2
arr_row_3[1] = arr_row_3[1]+2
arr_row_3[2] = arr_row_3[2]+2
arr_row_3[3] = arr_row_3[3]-2
console.log(arr_row_3);


/**This is for 4rth row where end and intial and soo on indexs of row 3 array 
 * are swapped for row 4 
 */
let arr_row_4 = arr_row_3

// Calculate the number of elements in the array
const length = arr_row_4.length;

// Iterate over half of the array and swap elements
for (let i = 0; i < length / 2; i++) {
    // Calculate the index of the element to swap with
    const swapIndex = length - 1 - i;

    // Swap elements using destructuring assignment
    [arr_row_4[i], arr_row_4[swapIndex]] = [arr_row_4[swapIndex], arr_row_4[i]];
}

arr_row_4[0] = arr_row_4[0]+1
arr_row_4[1] = arr_row_4[1]-1
arr_row_4[2] = arr_row_4[2]+1
arr_row_4[3] = arr_row_4[3]-1

// Display the modified array
console.log(arr_row_4); 
