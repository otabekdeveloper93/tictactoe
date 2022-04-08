// const arr = [
//     [1,1,1,1],
//     [5,2,2,100],
//     [9,4,2,1]
// ];

// for (let j = 1; j < arr.length; j++) {
//     arr[j][0] += arr[j-1][0];
//     for (let i = 1; i < arr[j].length; i++) {
//         arr[0][i] += arr[0][i - 1];
//         let top = arr[j-1][i];
//         let left = arr[j][i-1];
//         arr[j][i] += top > left ? left : top;
//         i = arr[j][i]
//         console.log(i);
//     }
// }
// console.log(arr);
// console.log(arr[arr.length -1][arr[0].length -1]);