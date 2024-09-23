//문자열 타입
const a: string = '';
const b: string = '';
const c: string = ``;

// nunber 타입
let n: number = 100;
let count: number = 10;
let price: number = 9.99;
let tempreture: number = -15;
let distance: number = 3.4e-5;

// number - infinity, NaN
let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

// 불리언
let isOpen: boolean = true;

let isCompleted: boolean = false;

//타입 여러개 지정, null 타입 포함
let user: string | null = null;

function login(userName: string) {
	user = userName;
}

function logout() {
	user = null;
}

// && 연산자
let isAvailable: boolean = isOpen && !isCompleted;

// any 타입
let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
