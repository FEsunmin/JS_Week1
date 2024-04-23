// 배열 (index를 가짐, 순서 중요!)

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지"];
console.log(fruits);
console.log(fruits.length);

// 1-2. 크기 지정
let number = new Array(5);
console.log(number); 
console.log(number.length);

console.log("------------------");

// 2. 요소 접근
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3. 배열 메소그
// 3-1. push 
// 배열 마지막에 요소 추가함
let fruits2 = ["사과", "바나나"];
console.log(fruits2);

fruits2.push("오렌지");
console.log(fruits2);

// 3-2. pop
// 배열에 마지막 요소가 사라짐
let fruits3 = ["사과", "바나나"];
console.log(fruits3);

fruits3.pop();
console.log(fruits3);

// 3-3. shift
// 배열에 첫번째 요소가 사라짐
let fruits4 = ["사과", "바나나", "키위"];
console.log(fruits4);

fruits4.shift();
console.log(fruits4);

// 3-4. unshift
// 배열에 첫번쩨 요소가 생김
let fruits5 = ["사과", "바나나", "키위"];
fruits5.unshift("포도");
console.log(fruits5);

// 3-5. splice
// 1번째부터 한개 지우고 "포도"로 바꿔줘
let fruits6 = ["사과", "바나나", "키위"];
fruits6.splice(1, 1, "포도");
console.log(fruits6);

// 3-6. slice
// 1번째 요소부터 2번째 전까지만 반환해줘
let fruits7 = ["사과", "바나나", "키위"];
let sliceFruits = fruits7.slice(1, 2);
console.log(sliceFruits);
