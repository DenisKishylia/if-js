// Task 1 

let user = 'John Doe'
console.log(user);
let student = 'Denis';
console.log(student);
user = student; // Denis
console.log(user); 

// Task 2 

let test = 1;
test += 1;
test += '1'; // 21
console.log(test);
test -= 1; // 20
console.log(test);
test = Boolean(test); // true
console.log(test);

// Task 3

const arr = [2, 3, 5, 8];
let result = 1;
for (i = 0; i < arr.length; i++) {
    result *= arr[i]; 
}
console.log(result);

// Task 4

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
let value;
for (i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {
        console.log(arr2[i]);
    }
}

// Task 5

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i = 0; i < arr3.length; i++) {
    if (!(arr3[i] % 2)) {
        cell = arr3[i];
        console.log(arr3[i]);
    }
} 