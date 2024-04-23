// 1. 조건부 실행 => and 조건(&&)
let x = 10;

// if (x > 0) {
//     console.log("x는 양수입니다.");
// }

(x > 0) && console.log("x는 양수입니다.");

// 2. 상항 연산자와 단축평가 => or 조건(||)
let y; // y에는 undefined
let z = y || 20; // y가 undefined이면 기본값으로 우측에 있는 20이라는 값으로 세팅해줘
console.log(z)