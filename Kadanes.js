// Algorithm Name: Kadane’s Algorithm

function maxSubArraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// Test
let arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(arr2)); // Output: 6
