// 스코프, 전역변수, 지역변수, 화살표함수
// scope(범위) : 범수의 영향 범위
// 전역 변수: 전체 영역에서 영향을 끼친다
// 지역변수 : 함수 내에서만 영향을 끼친다

// 1. 전역 변수
let x = 10;

function printX() {
    console.log(x);
}

console.log(x);
printX();