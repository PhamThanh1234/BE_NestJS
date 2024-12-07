// Bai 1

function sumArray(arr) {
  const res = arr.reduce((total, currentValue) => {
    return total + currentValue;
  });
  return res;
}
console.log(sumArray([1, 2, 3, 4]));

// Bai 2

function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([10, 20, 30, 5]));

// Bai 3
function filterEvenNumbers(arr) {
  const res = arr.filter((value) => {
    return value % 2 == 0;
  });
  return res;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// Bai 4

function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2)); // 3

// Bai 5

function reverseArray(arr) {
  const newarr = arr.reverse();
  return newarr;
}
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

// Bai 6

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// Bai 7

function sortArrayAscending(arr) {
  const newarr = arr.sort();
  return newarr;
}
console.log(sortArrayAscending([5, 2, 9, 1])); // [1, 2, 5, 9]

//  Bai 8

function findMostFrequent(arr) {
  let max = 0;
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    let a = countOccurrences(arr, arr[i]);
    if (a > max) {
      a = max;
      maxValue = arr[i];
    }
  }
  return maxValue;
}
console.log(findMostFrequent([1, 2, 3, 2, 1, 2])); // 2

// Bai 9

function mergeAndRemoveDuplicates(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  return [...new Set(merged)];
}
console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]

// Bai 10

function isSymmetricArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isSymmetricArray([1, 2, 3, 2, 1])); // true
console.log(isSymmetricArray([1, 2, 3, 4, 5])); // false
