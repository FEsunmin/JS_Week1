// 연산자(+, -, *, /, %)

// 1. 더하기 연산자
console.log(1 + 1);
console.log(1 + "1");

// 2. 빼기 연산자
console.log(1 - "2"); // -1
console.log(1 - 2); // -1

// 더하기 빼고 모든 연산자는 숫자가 우선순위

// 3. 곱하기 연산자(*)
console.log(2 * 3) // 6
console.log(2 * "3") // 6

// 4. 나누기 연산자 (/)
console.log(4 / 2); // 2
console.log("4" / 2); // 2

// 5. 나누기 연산자 (/)
console.log(5 / 2) // 2.5
console.log(5 % 2) // 1

console.log("------------------");

// 6. 할당 연산자(assignment)
// 6-1. 등호 연산자(=)
let x = 10; // x라는 변수를 선언하고 값을 할당
console.log(x);

// 6-2. 더하기 등호 연산자(+=)
x += 5; // x = x + 5
console.log(x);

// 6-3. 빼기 등호 연산자(-=)
x -= 5;
console.log(x);

// 6-4. 곱하기 등호 연산자(*=)
let a = 10
a *= 2;
console.log(a)

console.log("------------------");

// 7. 비교 연산자 ( ---> true 또는 false를 반환하는 연산자 )
// 7-1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환하는 연산자

console.log(2 === 2); // true
console.log("2" === 2); // false

// 7-2. 불일치 연산자 (!==)
// 타입까지 일치해야 false를 반환하는 연산자
// 일치 연산자의 반대값이 나온다

console.log(2 != 2); // false
console.log("2" !== 2); // true
console.log(2 !== "2"); // true

console.log("------------------");

// 7-3. 작다 연산자 (<)
console.log(2 < 3);

// 7-4. 작거나 같다 연산자 (<=)
console.log(2 <= 3);
console.log(3 <= 3);
console.log(4 < 3);

// 7-5. 크다 연산자 (>)
console.log(2 < 3);

// 7-6. 크거나 같다 연산자 (>=)
console.log(2 <= 3);
console.log(3 <= 3);
console.log(4 < 3);

console.log("------------------");

// 8. 논리 연산자
// 8-1. 논리곱 연산자(&&) : 모두 true일 때 true 반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log("------------------");

// 8-2. 논리합 연산자(||) : 두 값 중 하나라도 true인 경우 true
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("------------------");

// 8-3. 논리부정 연산자(!) : 값을 반대로 바꿈
console.log(!true);
let b = false;
console.log(!b)

console.log("------------------");

// 9. 삼항 연산자(중요!!)
// 조건에 따라 값을 선택한다
let y = 10;
let result = (x > 5) ? "크다" : "작다";
console.log(result);

let z = 20;
let result2 = (y < 10) ? "작다" : "크다";
console.log(result2);

console.log("------------------");

// 10. 타입연산자(typeof)
console.log(typeof "5");