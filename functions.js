// 1) створити функцію яка приймає масив та виводить його
// let arr1 = [4, 10, 24, true, 'array'];
// function printArr(arr) {
//     console.log(arr)
// }
// printArr(arr1);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// let emptyArr = []
// function randomArray(randarr, min, max) {
//     for (let i = 0; i < 10; i++) {
//         randarr[i] = Math.floor(Math.random() * (max - min) + min);
//     }
// }
// randomArray(emptyArr, 10, 20);
// printArr(emptyArr);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNum(a,b,c) {
//     if(a < b && a < c)  {
//         console.log('Найменше число - ',a);
//     }
//     else if (b < a && b < c) {
//         console.log('Найменше число - ',b)
//     }
//     else if (c < a && c < b) {
//         console.log('Найменше число - ',c);
//     }
// }
//
// minNum(10,15,22)

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNum(a,b,c) {
//     if(a > b && a > c)  {
//         console.log('Найбільше число - ',a);
//     }
//     else if (b > a && b > c) {
//         console.log('Найбільше число - ',b)
//     }
//     else if (c > a && c > b) {
//         console.log('Найбільше число - ',c);
//     }
// }
//
// maxNum(10,20, 22)

// 5) створити функцію яка повертає найбільше число з масиву
// function maxNumArr(array) {
//     let max = array[0]
//     for (let item of array) {
//         if(item > max) {
//             max = item;
//         }
//     }
//     return max;
// }
//
// console.log(maxNumArr([12, 25, 45, 12, 56, 245, 1245, 242, 2222]));

// 6) створити функцію яка повертає найменьше число з масиву
// function minNumArr(array) {
//     let min = array[0]
//     for (let item of array) {
//         if(item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
// console.log(minNumArr([12, 25, 45, 11, 56, 245, 1245, 242, 2222]));


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function sumArr(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// const sum = sumArr([12, 25, 45, 11, 56, 245, 1245, 242, 2222]);
// console.log(sum)


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function avgArr(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     avg = sum / array.length;
//     return avg;
//
// }
//
// let avgres = avgArr([23, 56, 23, 53, 11, 11]);
// console.log(avgres)

// function avgArr() {
//     sum = 0;
//     for (const argument of arguments) {
//         sum += argument;
//     }
//     avg = sum / arguments.length;
//     return avg;
// }
//
// let avgres = avgArr(23, 56, 23, 53, 11, 11, 23, 54);
// console.log(avgres)


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// function keysObj(array) {
//     1 спосіб
//     let emptyArr = []
//     for (let i = 0; i < array.length; i++) {
//         emptyArr[i] = Object.keys(array[i]);
//     }
//     return emptyArr
// }
//     2 спосіб
//     let emptyArr = []
//     for (let item of array) {
//        for (let key in item) {
//            emptyArr.push(key)
//        }
//     }
//     return emptyArr;
// }


// let keys = keysObj([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(keys)


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// function valueArr(array) {
//     let emptyArr = []
//     for (let key of array) {
//         for (let keyElement in key) {
//             emptyArr.push(key[keyElement])
//         }
//     }
//     return emptyArr
// }



// let keys = valueArr([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(keys);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function sumArr (arr1, arr2) {
//     sumArray = []
//     console.log(arr1);
//     console.log(arr2);
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (i == j) {
//                 sumArray[j] = arr1[i] + arr2[j]
//             }
//         }
//
//     }
//     return sumArray
// }
//
// let result = sumArr([2,6,3,10],[2,3,4,5]);
// console.log(result)

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function maxMinFun() {
//     let min = arguments[0]
//     let max = arguments[0]
//     for (let item of arguments) {
//         if (item < min) min = item;
//         if (item > max) max = item;
//     }
//     console.log('max', max)
//     return min
// }
// let minFun = maxMinFun(2, 4, 10, 15, 1, 6, 8);
// console.log(minFun);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// function keyOrValues(arr) {
//     let a = prompt('Масив ключів чи масив значень???');
//     let emptyArr = []
//     if (a === 'ключів') {
//         for (let item of arr) {
//             for (let key in item) {
//                 emptyArr.push(key)
//             }
//         }
//     }
//     if (a === 'значень') {
//         for (let key of arr) {
//             for (let keyElement in key) {
//                 emptyArr.push(key[keyElement])
//             }
//         }
//     }
//     return emptyArr
// }
//
// let a = keyOrValues([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(a);


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// EXAMPLE:
// foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// function offset(arr,i) {
//     arr[i] = arr.splice(i+1,1,arr[i])[0];
//     console.log(arr)
// }
// offset([9, 8, 0, 4],0);
// offset([9, 8, 0, 4],1);
// offset([9, 8, 0, 4],2);



//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function endArr(arr) {
//     let arr1 = [];
//     let arr2 = [];
//     for (const arrelem of arr) {
//         if (arrelem == 0) {
//             arr1.push(0);
//         } else {
//             arr2.push(arrelem)
//         }
//     }
//     return arr2.concat(arr1)
// }
//
// console.log(endArr([1, 0, 6, 0, 3]));
// console.log(endArr([0,0,1,0]));


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// function normalName(user) {
//     trimUser = user.trim();
//     console.log(trimUser.replace(/\s+/g, ' '))
// }
//
//
// normalName(n2)

// ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
    // - Додає в боді блок з текстом "Hello owu"

// function addDiv (text = "Hello owu") {
//     let divElem = document.createElement('div')
//     divElem.innerText = text
//     document.body.appendChild(divElem)
// }
//
// addDiv()

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function createElmentArg(text,type) {
//     let divElem = document.createElement(type)
//     divElem.innerText = text
//     document.body.appendChild(divElem)
// }
//
// createElmentArg('Hello', 'h1')





