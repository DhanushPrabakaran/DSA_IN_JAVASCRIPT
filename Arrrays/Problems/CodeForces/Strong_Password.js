'use strict';

let n = parseInt(readline()); // Read the number of strings
let arr = [];

for (let i = 0; i < n; i++) {
  let temp = readline();
  let len = temp.length;

  if (len <= 1) {
    arr.push("w" + temp); // Push the modified string to the array
    continue;
  }

  let modified = false;
  let k = 0;
  while (k < len - 1) {
    if (temp[k] == temp[k + 1]) {
      let val= String.fromCharCode((temp.charCodeAt(k + 1) + 1)%122);
      temp = temp.slice(0, k + 1) +
             `${val}` +
             temp.slice(k + 1, len); // Adjust the slice index
      arr.push(temp); // Push the modified string to the array
      modified = true;
      break;
    }
    k++;
  }
  
  if (!modified) {
    // Append a character to ensure the string does not end with two same characters
    let lastChar = temp[len - 1];
    let newChar = String.fromCharCode((lastChar.charCodeAt(0) + 1)%122);
    
    arr.push(temp + newChar); 
    // Append newChar to the original string
  }
}

// Print the final array
for (let i = 0; i < n; i++) {
  print(arr[i]);
}
