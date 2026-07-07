//1. Celsius to Fahrenheit
function celToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celToFahrenheit(0));
console.log(celToFahrenheit(100));

//2. Swap Two Numbers Using a Third Variable
let a = 5, b = 10;
let temp;

temp = a;
a = b;
b = temp;

console.log(`a: ${a}, b: ${b}`);


//3. Swap Two Numbers Without Using a Third Variable
let x = 5, y = 10;

// Method 1: Arithmetic
x = x + y; // 15
y = x - y; // 5
x = x - y; // 10

// Method 2: Modern JS Destructuring (Alternative)
// [x, y] = [y, x];

console.log(`x: ${x}, y: ${y}`);


//4. Calculate Simple Interest
function calculateSI(principal, rate, time) {
    return (principal * rate * time) / 100;
}
console.log(calculateSI(1000, 5, 2));


//5. Calculate Total and Average Marks (Array of Size 10)
const marks = [85, 90, 78, 92, 88, 76, 95, 89, 84, 91];

let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}
let average = total / marks.length;

console.log(`Total: ${total}, Average: ${average}`);



//6. Find Greatest Among 5 Numbers
function findGreatest(n1, n2, n3, n4, n5) {
    let max = n1;
    if (n2 > max) max = n2;
    if (n3 > max) max = n3;
    if (n4 > max) max = n4;
    if (n5 > max) max = n5;
    return max;
    
    //alternative: return Math.max(n1, n2, n3, n4, n5);
}
console.log(findGreatest(10, 45, 2, 99, 34));



//7.Calculate Salary
function calculateSalary(basic, hra, da) {
    return basic + hra + da;
}
console.log(calculateSalary(50000, 20000, 15000));



//12. Find Maximum and Minimum in an Array
function findMinMax(arr) {
    if (arr.length === 0) return "Array is empty";
    
    let min = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return { min, max };
}
console.log(findMinMax([4, 2, 9, 1, 7]));


//13. Left Shift and Right Shift of an Array by One Position
// Left Shift (Rotates left: [1, 2, 3] -> [2, 3, 1])
function leftShift(arr) {
    if (arr.length <= 1) return arr;
    let first = arr.shift(); // Removes the first element
    arr.push(first);         // Adds it to the end
    return arr;
}

// Right Shift (Rotates right: [1, 2, 3] -> [3, 1, 2])
function rightShift(arr) {
    if (arr.length <= 1) return arr;
    let last = arr.pop();    // Removes the last element
    arr.unshift(last);       // Adds it to the beginning
    return arr;
}

console.log("Left Shift:", leftShift([1, 2, 3, 4, 5]));
console.log("Right Shift:", rightShift([1, 2, 3, 4, 5]));