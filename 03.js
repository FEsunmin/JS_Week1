// [ 2. 문자 : string(문자열 = 문자의 나열) ] -> ' ' / " "

// 2-1. 문자열 길이 확인하기
let str = "Hello World"
// console.log(str);
// console.log(typeof str); 
console.log(str.length);

// 2-2. 문자열 결합하기
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!"
console.log(str3.substr(7, 5)); // 시작 위치부터 몇자까지 자를거냐
console.log(str3.slice(7, 12)); // 몇번째 부터 몇번째 글자까지 자를거냐

// 2-4. 문자열 검색
let str4 = "Hello, World";
console.log(str4.search("World"));

// 2-5. 문자열 대체
let str5 = "Hello, World!";
let result5 = str5.replace("World", "JavaScript");
console.log(result5);

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result6 = str6.split(",");
console.log(result6);

