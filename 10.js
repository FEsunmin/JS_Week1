// 3. 화살표 함수
// ES6 신 문법

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
    return x, y;
}

// 1-2. 한 줄로
function testFunc1(x, y) {
    return x + y;
}

let arrowFunc02 = (x, y) => x + y; // 중괄호 안에 있는 문이 한줄일때만 가능

// 1-3. 매개 변수가 하나일때 한줄로
function testFunc2(x) {
    return x;
}

let arrowFunc03 = x => x;