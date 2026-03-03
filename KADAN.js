// Algorithm Name: Kadane’s Algorithm
function maxSubArray(arr) {
  let maxSum = arr[0], curSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    curSum = Math.max(arr[i], curSum + arr[i]);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1]));
