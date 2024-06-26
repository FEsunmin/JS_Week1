// 함수 = function(기능)
// input과 output을 가지고 있는 어떤 기능의 단위
// Js에 기능의 단위로 묶은 후 재활용을 한다

// 1. 함수 선언문
// function add (매개변수) {
//     // 함수 내부에서 실행 할 로직
// };

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add (x, y) {
    return x + y;
}

// 2. 함수 표현식
let add2 = function (x, y) {
    return x + y;
}

// 3. 함수 호출한다(=사용한다)
// 함수명() -> add(입력값)
console.log(add(2, 3))

let functionResult =  add(3, 4);
console.log(functionResult);

console.log(add2(10, 20));

let functionResult2 = add2(10, 20);
console.log(functionResult2)

// input : 함수의 input 부분 ->  매개변수(매개체가 되는 변수!)
// output :return문 뒤에 오는 값 -> 반환값