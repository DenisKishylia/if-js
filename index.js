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

// lesson-3

// Task 1

const palindrome = (string) => {
    string = string.toLowerCase(); // all letters to lowercase
    return string === string.split('').reverse().join(''); // split string to array, reverse array, join array to string
}
console.log(palindrome('Левел'));

// Task 2

const min = (a,b) => {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        return 'The values are equal';
    }
}
console.log(min(-15,15));
console.log(min(15,15));

const max = (a,b) => {
    if (a < b) {
        return b;
    } else if (a > b) {
        return a;
    } else {
        return 'The values are equal';
    }
}
console.log(max(-25,25));
console.log(max(25,25));

const min2 = (a,b) => {
    return a > b ? b : a;
}
console.log(min2(17,-14));

const max2 = (a,b) => {
    return a > b ? a : b;
}
console.log(max2(233,184));

// Task 3

let arr0 = [12, 13, 20, 18, 70, 100, 43, 57, 50, 18];
const replaceZero = (arr0) => {
    for (i = 0; i < arr0.length; i++) {
        let strArr = '' + arr0[i];
        if (strArr.indexOf('0') !== -1) { 
            arr0[i] = strArr.replaceAll('0', 'zero'); 
        }
    }
}
replaceZero(arr0);
console.log(arr0); 