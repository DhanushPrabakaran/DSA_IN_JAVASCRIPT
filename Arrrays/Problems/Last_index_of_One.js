// Last index of One

class Solution{
    
    lastIndex(S){
        //code here
        let len = S.length;
        let res=-1
        console.log("hey")
        for (let i =0;i<len;i++){
            if(S[i] === "1"){
                res=i;
            }
            
        }
        return res;
    }
   
}
let a = new Solution()

console.log(a.lastIndex("00001"))