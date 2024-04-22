// [ 형 변환 ]
// 형태 -> 바꾼다
// 명시적(의도) 형 변환 & 암시적(의도 X) 형 변환

// 1. 암시적

// 1-1. 문자열
// 문자열과 다른 데이터 타입이 "+"로 만났을 때 문자열로 형변환이 된다
// 더하지 않아도 {}, null, undefined 가 문자열과 함께 만나면 문자열이 된다
let result1 = 1 + "2";
console.log(result1);
console.log(typeof result1);

let result2 = "1" + true;
console.log(result2);
console.log(typeof result2)

// 1-2. 숫자
// 더하기 연산자가 아닌 빼기 나누기 등 다른 연산자가 나올 경우 숫자로 변환
// 문자랑 문자가 만나도 숫자로 변환
let result3 = 1 - "2"
console.log(result3);
console.log(typeof result3);

let result4 = "2" * "3";
console.log(result4);
console.log(typeof result4);


// 2. 명시적 형 변환

// 2-1. Boolean
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log("------------------");
console.log(Boolean("false")); // 문자열은 안에 값이 영향을 미치치 않고 값이 있는 문자열은 무조건 true가 나온다
console.log(Boolean({})); // 객체는 안에 값이 비어있어도 true가 나온다

// 2-2. 문자열
console.log("------------------");

let result5 = String(123);
console.log(result5);
console.log(typeof result5);

let result6 = String(true);
console.log(result6);
console.log(typeof result6);

let result7 = String(false);
console.log(result7);
console.log(typeof result7);

let result8 = String(null);
console.log(result8);
console.log(typeof result8);

let result9 = String(undefined);
console.log(result9);
console.log(typeof result9);


// 2-3. Number
console.log("------------------");

let result10 = Number("123");
console.log(result10);
console.log(typeof result10)