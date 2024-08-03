class Solution{
    
    posNegPair(arr){
        //code here
        let len = arr.length;
        let res=[]
        let temp=[]
        for (let i =0;i<len;i++){
            if (arr.includes(-arr[i]) && !temp.includes(arr[i])){
                res.push(arr[i],-arr[i])
                temp.push(arr[i])
            }
        }
        console.log(res)
        return res;
    }
}
const a = new Solution()

console.log(a.posNegPair([1, -3, 2, 3, 6, -1, -3, 3]))