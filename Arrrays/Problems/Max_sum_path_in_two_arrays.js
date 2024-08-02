class Solution {
    maxPathSum(arr1, arr2) {
        let mid= 0
        for(let i of arr1){
            if (arr2.includes(i)){
                mid=i;
            }
        }
        // console.log(mid)
        let s1=arr1.slice(0,arr1.lastIndexOf(mid)+1)
        .reduce((a,b)=>a+b,0);
        let s2=arr1.slice(arr1.lastIndexOf(mid)+1,arr1.length)
        .reduce((a,b)=>a+b,0);
        let t1=arr2.slice(0,arr2.lastIndexOf(mid)+1)
        .reduce((a,b)=>a+b,0);
        let t2=arr2.slice(arr2.lastIndexOf(mid)+1,arr2.length)
        .reduce((a,b)=>a+b,0);
        
        // console.log(s1,s2,t1,t2);
        return Math.max( s1+t2,t1+s2);
    }
}
const obj = new Solution();
const a1 = [2, 3, 7, 10, 12];
const a2 = [1, 5, 7, 8];
const n = a1.length;
const m = a2.length;
console.log(obj.maxPathSum(a1, a2));