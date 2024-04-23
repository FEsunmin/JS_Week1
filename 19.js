// while, do while, break, continue

// 1. while
let i = 0;

while (i < 10) {
    // 메인 로직
    // 증감
    // console.log(i);
    i++;
}

console.log("------------------");

// 1-2. while문을 활용해서, 3 초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
let j = 3;
while (j < 100) {
    if (j % 5 === 0 && i >= 5) {
        console.log(j + '는 5의 배수입니다!');
    }
    j++
}

console.log("------------------");

// 2. do ~ while
let a = 0;
do {
    console.log(a);
    a++;
} while (a < 10);

console.log("------------------");

// 3. break continue : for문과 같이 쓰인다

// 3-1. break
for(let i = 0; i <= 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

console.log("------------------");

// 3-2. continue 
// 조건에 만족했을때 아래로 넘어가지말고 작업을 건너뛰고 다음순서로 넘어간다
for(let i = 0; i <= 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}