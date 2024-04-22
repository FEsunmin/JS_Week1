// 변수, 상수
// 메모리에 저장한다. 읽어들여서 재사용한다. -> 변수

// [변수의 5가지 주요 개념]
// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조  : 변수에 할당된 값을 읽어오는 것

var myVar = "Hello World";
var myVar = "Hello my World" // 재선언 가능
myVar = "GoodBye"; // 재할당 가능
console.log(myVar);

// 재선언 가능
// var myVar2;
// myVar2 = "Hello World1";
// console.log(myVar2);

// let은 재선언 불가
let myLet = "Hello World2";
myLet = "GoodBye2" // 재할당 가능
console.log(myLet);

// const는 재선언 불가
// const는 재할당 불가
const myConst = "Hello World3";
console.log(myConst);