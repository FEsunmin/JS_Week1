// for, while => ~동안 : 반복문

// 초기값; 조건식; 증감식;
// i라는 변수는 0부터 시작할거야
// i라는 변수가 10에 도달하기 전까지 계속할거야
// i라는 변수는 한 사이클이 돌고나면 1을 더할거야
for (let i = 0; i < 10; i++) {
    console.log("FOR문 돌아가고 있음 => " + i);
}

// 배열과 for문은 짝궁이다.
const arr = ["one", "two", "three", "four", "five"];

for (let j = 0; j < arr.length; j++) {
    console.log(j);
    console.log(arr[j]);
}

console.log("------------------");

// 예시 문제1
for (let i = 0; i <= 10; i++  ) {
    if (i >= 2) {
        if (i % 2 === 0) {
            console.log('i는 2의 배수입니다' + i);
        }
    }
}

console.log("------------------");

// for ~ in문
// 객체의 속성을 출력하는 문법
let person = {
    name: "John",
    age: 30,
    gender: "male",
}

// person['key'];
for (let key in person) {
    console.log(key + ": " + person[key]);
}

