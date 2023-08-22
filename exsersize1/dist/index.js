"use strict";
console.log("hello");
const greatNumber = (x, y) => {
    if ((x = y))
        return x;
    if ((y = x))
        return y;
    return x;
};
const logGreatNumber = (x, y) => {
    if (x > y)
        console.log(x);
    if (y > x)
        console.log(y);
};
const isDual = (num) => {
    if (num % 2 === 0)
        return "dual";
    return "not dual";
};
const stringLength = (s) => {
    return s.length;
};
const numbersArray = (num) => {
    const array = [];
    for (let i = 0; i < num; i++) {
        array.push(i);
    }
    return array;
};
const maxInArray = (array) => {
    let max = 0;
    array.forEach((num) => {
        if (num > max)
            max = num;
    });
    return max;
};
const printPerson = (person) => {
    const { name, age, isStudent } = person;
    console.log(`name: ${name} age: ${age} is student: ${isStudent}`);
};
const person = {
    name: "avi",
    age: 45,
    isStudent: false,
};
printPerson(person);
const isMinor = (person) => {
    const { age } = person;
    if (age >= 18)
        return true;
    return false;
};
const oldestReader = (array) => {
    const reader = array.reduce((reader1, reader2) => {
        if (reader2.person.age > reader1.person.age)
            return reader2;
        return reader1;
    });
    const { person } = reader;
    return person;
};
const oldestBook = (array) => {
    const reader = array.reduce((reader1, reader2) => {
        if (reader2.favoriteBook.year < reader1.favoriteBook.year)
            return reader2;
        return reader1;
    });
    const { favoriteBook } = reader;
    return favoriteBook;
};
const reader1 = {
    person: {
        name: "avi",
        age: 43,
        isStudent: false,
    },
    favoriteBook: {
        title: "bka",
        author: "asa",
        year: 467,
    },
};
const reader2 = {
    person: {
        name: "avi",
        age: 65,
        isStudent: false,
    },
    favoriteBook: {
        title: "bka",
        author: "asa",
        year: 4677,
    },
};
const reader3 = {
    person: {
        name: "avi",
        age: 4,
        isStudent: false,
    },
    favoriteBook: {
        title: "bka",
        author: "asa",
        year: 46477,
    },
};
const result1 = greatNumber(4, 5);
logGreatNumber(4, 7);
const result2 = isDual(8);
console.log(result2);
const result3 = stringLength("yyyyyy");
console.log(result3);
const result4 = numbersArray(34);
console.log(result4);
const result5 = maxInArray(result4);
console.log(result5);
const readersArray = [reader1, reader2, reader3];
const result6 = oldestReader(readersArray);
console.log(result6);
const result7 = oldestBook(readersArray);
console.log(result7);
