// 1-masala
function checkTwoArr(arr1, arr2) {
  return arr1.some(item1 => arr2.includes(item1));
}


console.log(checkTwoArr([1, 2, 3, 4], [0, 6]));  
console.log(checkTwoArr([3, 1], [4, 0]));        
console.log(checkTwoArr([9, 9, 8], [8, 9]));     
console.log(checkTwoArr([1, 2, 3, 4], [2, 3]));  


// 2-masala
function sortArray(arr1, arr2, str) {
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  const reversed = [...merged].reverse();
  const strArr = Array(merged.length).fill(str);
  return [merged, reversed, strArr];
}

console.log("\n2. sortArray:");
console.log(sortArray([1, 10], [2, 3, 4], 'nodejs'));


// 3-masala
function numberSplit(n) {
  const half = Math.floor(n / 2);
  return n % 2 === 0 ? [half, half] : [half, n - half];
}

console.log("\n3. numberSplit:");
console.log(numberSplit(4));  
console.log(numberSplit(10));  
console.log(numberSplit(11)); 
console.log(numberSplit(-9)); 


// 4-masala
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log("\n4. sortByLength:");
console.log(sortByLength(["a", "ccc", "dddd", "bb"]));           
console.log(sortByLength(["apple", "pie", "shortcake"]));         

// 5-masala
function doubleAndSortEven(arr) {
  return arr.map(x => x * 2).filter(x => x % 2 === 0).sort((a, b) => a - b);
}

console.log("\n5. doubleAndSortEven:");
console.log(doubleAndSortEven([1, 2, 3, 4]));  


// 6-masala
function doubleAndSquareEven(arr) {
  return arr.map(x => x * 2).filter(x => x % 2 === 0).map(x => x * x);
}

console.log("\n6. doubleAndSquareEven:");
console.log(doubleAndSquareEven([1, 2, 3, 4])); 


// 7-masala
function reverseImage(arr) {
  return arr.reverse().map(row => row.reverse());
}

console.log("\n7. reverseImage:");
console.log(reverseImage([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));



// 8-masala
function changeNumberToString(start, end) {
  const numToStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  return numbers.map(n => numToStr[n]);
}

console.log("\n8. changeNumberToString:");
console.log(changeNumberToString(1, 5));  

// 9-masala
function addToArray(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    result.push(arr.slice(i, i + 3));
  }
  return [arr, result];
}

console.log("\n9. addToArray:");
console.log(addToArray(10));
