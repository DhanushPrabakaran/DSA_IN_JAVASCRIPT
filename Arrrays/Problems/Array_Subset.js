// //{ Driver Code Starts
// //Initial Template for javascript

// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// function printList(res,n){
//     let s="";
//     for(let i=0;i<n;i++){
//         s+=res[i];
//         s+=" ";
//     }
//     console.log(s);
// }


// function main() {
//     let t = parseInt(readLine());
//     let i = 0;
//     for(;i<t;i++)
//     {
//         let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
//         let n = input_ar1[0];
//         let m = input_ar1[1];
//         let a1 = new Array(n);
//         input_ar1 = readLine().split(' ').map(x=>parseInt(x));
//         for(let i=0;i<n;i++){
//             a1[i] = input_ar1[i];
//         }
//         let a2 = new Array(m);
//         input_ar1 = readLine().split(' ').map(x=>parseInt(x));
//         for(let i=0;i<m;i++){
//             a2[i] = input_ar1[i];
//         }
//         let obj = new Solution();
//         let res = obj.isSubset(a1, a2, n, m);
//         console.log(res);
        
//     }
// }// } Driver Code Ends




// // } Driver Code Ends


//User function Template for javascript

// /**
//  * @param {number[]} a1
//  * @param {number[]} a2
//  * @param {number} n
//  * @param {number} m
//  * @returns {string}
// */

class Solution{
    isSubset(a1, a2, n, m){
        //code here
        
        if (n<m) return "No";
        let pos=new Map();
        for(let i =0;i<a1.length;i++){
            if (pos.has(a1[i])) {
                pos.set(a1[i], pos.get(a1[i]) + 1);
            } else {
                pos.set(a1[i], 1);
            }
        }
        console.log(pos);
        let pos1=new Map();
        for(let i =0;i<a2.length;i++){
            if (pos1.has(a2[i])) {
                pos1.set(a2[i], pos1.get(a2[i]) + 1);
            } else {
                pos1.set(a2[i], 1);
            }
        }
        console.log(pos1);
        let res=true;
        pos1.forEach( (value, key) => {
            // console.log(value, key);
            if (!pos.has(key) || value>pos.get(key)){
                res=false;
            }
        });
        return res? "Yes":"No"
        
    }
}

const obj = new Solution();
const a1 = [589 ,5847, 595 ,959, 258];
const a2 = [258 ,25];
const n = a1.length;
const m = a2.length;
console.log(obj.isSubset(a1, a2, n, m)); // Output: "Yes


