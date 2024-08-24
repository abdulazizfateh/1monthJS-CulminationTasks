// Masalalar - Culmination Tasks in the first Month of Java Script 
// TASK 1 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Sizga primitive qiymatlardan iborat ikkita a va b massiv berilgan. Bu massivlardagi barcha elementlardan tashkil topgan
//  uchunchi massivni hosil qiling. Bunda, qiymati teng bo'lgan elementlardan faqat bittadan qilib olish kerak.
//  Ya'ni, takrorlanmasin. Ma'lumot uchun, bunday tuzulma matematikada "to'plam" deb nomalanadi.


// let arr1 = [1, 2, 3];
// let arr2 = [3, 4, 5];
// let arr = [];

// let [a, b, c] = arr1;
// let [d, e, f] = arr2
// arr.push(a, b, c, d, e, f);


// const removeTheDuplicate = (arr) => {
//     newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let findTheDuplicate = newArr.find((item) => {
//             if (item == arr[i]) {
//                 return true;
//             } else {
//                 return false;
//             }
//         });
//         if (!findTheDuplicate) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(removeTheDuplicate(arr));









// TASK 2 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Sizga a sonli massiv berilgan. Uning elementlari orasida qiymati eng katta va qiymati eng kichik bo'lganlarini
// console`ga testda ko'rsatilgan shaklda chiqaruvchi dastur tuzing.

// let arr = [1, 5, 10, 3];

// const findTheBigSmall = (arr) => {
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//     }
//     return { min, max };
// }

// console.log(findTheBigSmall(arr));









// TASK 3 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Sizga elementlarining qiymati istalgan turga mansub bo'lishi mumkin bo'lgan massiv berilgan.
//  Massiv elementlari orasida qiymati massiv bo'lgan element mavjud yoki yo'qligini aniqlovchi dastur tuzing.
//  Agar bunday element mavjud bo'lsa console`ga true qiymati, aks holda false qiymati chiqarilsin.

// let arr = [1, 'true', [1, 10], 'Hello'];

// const findTheInnerArr = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == 'object') {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(findTheInnerArr(arr));









// TASK 4 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Satrning teskari o'qilishini console`ga chiqaruvchi funksiya hosil qiling. Funksiya ko'rinishi: printStrReverse(str).


// T-4.1 Using string and array methods 

// let str = 'Abdulaziz';
// const printStrReverse = (str) => {
//     return str.split('').reverse().join('');
// }
// console.log(printStrReverse(str));




// T-4.2 Using for-loop 

// let str = 'Abdulaziz';
// const printStrReverse = (str) => {
//     let result = '';
//     for (let i = str.length - 1; i >= 0; i--){
//         result += str[i];
//     }
//     return result;
// }
// const fresult = printStrReverse(str);
// console.log(fresult);









// TASK 5 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Satrning oldi va orqasidan boshqa bir satrni qo'shib qaytaruvchi funksiya hosil qiling. 
// Funksiya ko'rinishi: getNewStr(str1, str2).

// Using string interpolation
// let str = prompt("Enter any word");
// let addition = prompt("Enter what you want to add, to the start and end of the entered word");
// const getNewStr = (str) => {
//     return `${addition}${str}${addition}`;
// }

// console.log(getNewStr(str));




// Using string method .concat() that adds two or more strings together

// let str = prompt("Enter any word");
// let addition = prompt("Enter what you want to add, to the start and end of the entered word");
// const getNewStr = (str) => {
//     return "/".concat(str).concat("/");
// }

// console.log(getNewStr(str));









// TASK 6 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Bir necha sonning o'rta arifmetigini hisoblab qaytaruvchi o'zgaruvchan sondagi parametrlar qabul qila oladigan
//  funksiya yarating. Funksiya quyidagicha ko'rinishda bo'lishi kerak: getMean(a1, a2, a3, ..., an).

// Bir necha sonning o'rta arifmetigi deb, shu sonlar yig'indisining qo'shiluvchilar nisbatiga aytiladi. 
// Masalan, 2, 3, 5 sonlarining o'rta arifmetigi - (2 + 3 + 5) / 3 ifodaning qiymatiga teng bo'ladi.


// let arr = [10, 15, 20];
// const getTheArithmeticMean = (arr) => {
//     let sum = 0;
//     let result;
//     for (let i = 0; i < arr.length; i++){
//         sum += (arr[i]);
//         result = sum / arr.length;
//     }
//     return result;
// }
// console.log(getTheArithmeticMean(arr));









// TASK 7 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Sonli massivning har bir elementini k ga oshirishdan hosil bo'lgan yangi massivni qaytaruvchi funksiya tuzing. 
// Funksiya prototipi: getNewArray(arr, k). Bu yerda arr - array turiga mansub qiymat, k - ixtiyoriy son.

// T-7.1 The way that adds the the last num, to each of the inner elements

// let arr = [[2, 4, 14, 20], 10];
// const addNumToInnerArr = (arr) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++){
//         if (typeof arr[i] == 'object'){
//             for (let k = 0; k < arr[i].length; k++){
//                result.push(arr[i][k] += arr[arr.length - 1])
//             }
//         }
//     }
//     return result;
// }

// console.log(addNumToInnerArr(arr));




// T-7.2 

// let arr = [10, 20, 30];
// let numToAdd = 15;
// const getNewArray = (arr, numToAdd) => {
//     let sum = 0;
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         sum = arr[i] + numToAdd;
//         newArr.push(sum);
//     }
//     return newArr;
// }
// console.log(getNewArray(arr, numToAdd));




// T-7.3 

// let arr = [10, 20, 30];
// let numToAdd = 15;
// const getNewArray = (arr, numToAdd) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         newArr.push(arr[i] + numToAdd);
//     }
//     return newArr;
// }
// console.log(getNewArray(arr, numToAdd));









// TASK 8 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Butun sonni tub yoki tub emaslikka tekshiruvchi funksiya yarating. Agar son tub bo'lsa,
// console`ga "Tub son", aks holda "Tub son emas" kabi matn chiqarilishi kerak.

// let a = +prompt('Son kiriting');

// const isPrime = (a) => {
//     let count = 0;
//     let result;
//     if (a <= 1 || isNaN(a)) {
//         return result = 'Siz tub yoki tub emaslikka ajralmaydigan son kiritdingiz';
//     }
//     for (let i = 1; i <= a; i++) {
//         if (a % i == 0) {
//             count++;
//         }
//     }
//     return count == 2 ? result = 'Tub son' : result = 'Tub son emas';
// }

// console.log(isPrime(a));









// TASK 9 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Sizga sonli massiv berilgan. Uning manfiy elementlarini musbat shaklga aylantiruvchi dastur tuzing.

// let arr = [-3, -2, -1, 0, 1, 2, 3,];

// const converTheNegativeToPositive = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             newArr.push(Math.abs(arr[i]));
//         } else {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }
// console.log(converTheNegativeToPositive(arr));









// TASK 10 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Sizga Obj1 va Obj2 obyektlar berilgan. Obj2 obyektining Obj1da mavjud bo'lmagan xususiyatlarini 
// Obj1 obyektda hosil qiluvchi dastur tuzing. Console`ga Obj1 obyektining yangi tuzilishini chiqaring.


// let obj1 = { a: 1, b: 2, c: 12 };
// let obj2 = { b: 3, d: 4 };

// let keys = Object.keys(obj2); // obj2 ning keylarini oldik [b, d] array sifatida

// for (let i = 0; i < keys.length; i++) { // keys == [b, d]
//     if (obj1[keys[i]] === undefined) {
//         obj1[keys[i]] = obj2[keys[i]]; // obj1 ga qo'shish yo'q qiymatini
//     }
// }
// console.log(obj1);
// Dynamic Access: obj1[keys[i]] uses bracket notation to access or modify properties based on dynamic keys.
// Assignment: obj2[keys[i]] provides the value to be assigned, effectively updating obj1 with missing properties from obj2.
// Context: The line is part of a loop that iterates over the keys of obj2, ensuring that all properties in obj2 are considered
//  and added to obj1 if they are not already present.



// nimaga dot notationdan foydalansam, error chiqyapti
// let obj1 = { a: 1, b: 2, c: 12 };
// let obj2 = { b: 3, d: 4 };

// let keys = Object.keys(obj2); // obj2 ning keylarini oldik (b, d)

// for (let i = 0; i < keys.length; i++) {
//     if (obj1.keys[i] === undefined) {
//         obj1.keys[i] = obj2.keys[i];
//     }
// }
// console.log(obj1);









// TASK 11-1 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Sizga O obyekt berilgan. Obyektda nechta xususiyat borligini aniqlovchi dastur tuzing. Natijani console`ga chiqaring.


// let obj = {
//     username: prompt('Create your username'),
//     password: prompt('Create your password')
// }

// const checkTheLogin = (obj) => {
//     let response;
//     let values = Object.values(obj);
//     if (values[0].length < 3 && values[1].length < 8) {
//         response = `Error! Username should consists of at least 3 characters, 
// Password should consists of at least 8 characters`
//     } else if (values[0].length < 3) {
//         response = 'Username should consists of at least 3 characters';
//     } else if (values[1].length < 8) {
//         response = 'Password should consists of at least 8 characters';
//     } else {
//         response = `You have successfully registered and here are your details: Username: ${obj.username}, Password: ${obj.password}`;
//     }
//     return response;
// }

// console.log(checkTheLogin(obj));









// TASK 11-2 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Sizga O obyekt berilgan. Obyektda nechta xususiyat borligini aniqlovchi dastur tuzing. Natijani console`ga chiqaring.

// Using counter
// let obj = { name: 'Abdulaziz', age: 18 };

// const numberOfProperties = (obj) => {
//     let keys = Object.keys(obj);
//     let numOfProps = 0;
//     for (let i = 0; i < keys.length; i++) {
//         numOfProps++;
//     }
//     return numOfProps;
// }
// console.log(numberOfProperties(obj));




// Using length and Contructor Function (it is also possible to use length in an ordinary object)
// function User(name, age, id){
//     this.name = name;
//     this.age = age;
//     this.id = id;
// }

// const Abdulaziz = new User('Abdulaziz', 18, 23733);
// let properties = Object.keys(Abdulaziz).length;
// console.log(properties);