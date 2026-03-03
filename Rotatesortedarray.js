// Algorithm Name: Search in Rotated Sorted Array
function searchRotated(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return mid;

    if (arr[l] <= arr[mid]) {
      if (target >= arr[l] && target < arr[mid]) r = mid - 1;
      else l = mid + 1;
    } else {
      if (target > arr[mid] && target <= arr[r]) l = mid + 1;
      else r = mid - 1;
    }
  }
  return -1;
}

console.log(searchRotated([4,5,6,7,0,1,2], 0));
