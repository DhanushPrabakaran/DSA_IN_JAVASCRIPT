class Solution {
    countEleLessThanOrEqual(arr1,arr2,m,n){
        //code here
        let res=[]
        arr2.sort((a, b) => a - b)
        
        for(let i=0;i<m;i++){
            // res[i]=0;
            res[i]+=arr2.lastIndexOf(arr1[i]);

            // for(let j=0;j<n;j++){
            //     if(arr1[i]<=arr2[j]){
            //         res[i]++;
            //     }
            // }
        }
        return res;
        }
}
const obj = new Solution();
const a1 = [4,8,7,5,1];
const a2 = [4,48,3,0,1,1,5];
const n = a1.length;
const m = a2.length;
console.log(obj.countEleLessThanOrEqual(a1, a2, n, m));