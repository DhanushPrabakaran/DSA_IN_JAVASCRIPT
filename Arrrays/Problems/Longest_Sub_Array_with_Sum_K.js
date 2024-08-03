class Solution{
    lenOfLongSubarr(arr, n, k){
        let start = 0;
        let end = 0;
        let sum = arr[0];
        let res = 0;

        while (end < n) {
            if (sum < k) {
                end++;
                if (end < n) {
                    sum += arr[end];
                }
            } else if (sum === k) {
                res = Math.max(res, end - start + 1);
                end++;
                if (end < n) {
                    sum += arr[end];
                }
            } else {
                sum -= arr[start];
                start++;
            }
        }

        return res;
    }
}

// Example usage:
const obj = new Solution();
console.log(obj.lenOfLongSubarr([-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6], 17, 15)); // Output: 5
