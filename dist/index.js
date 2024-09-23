"use strict";
//문자열 타입
const a = '';
const b = '';
const c = ``;
// nunber 타입
let n = 100;
let count = 10;
let price = 9.99;
let tempreture = -15;
let distance = 3.4e-5;
// number - infinity, NaN
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
// 불리언
let isOpen = true;
let isCompleted = false;
//타입 여러개 지정, null 타입 포함
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
// && 연산자
let isAvailable = isOpen && !isCompleted;
// any 타입
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
