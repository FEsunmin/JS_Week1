// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다!

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
    // key 값에 올 수 있는 데이터 타입의 형태는 제한이 없다
    name : "홍길동",
    age : 30,
    gender: "남자",
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자");
let person2= new Person("홍길순", 20, "여자");

// 2. 접근하는 방법
console.log('1', person.name);
console.log('2', person.age);
console.log('3', person.gender);

console.log("------------------");

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Oject.~~)
// 3-1. Object.key() : key를 가져오는 메소드
let keys = Object.keys(person);
console.log("keys => ", keys);

// 3-2. values
let values = Object.values(person);
console.log("values => ", values);

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열!! (2차원 배열)
let entries = Object.entries(person);
console.log("entries => ", entries);

console.log("------------------");

// 3-4. assign
// 복사
let newPerson = {};
//Object.assign(어디에다, 뭘 복사할래)
Object.assign(newPerson, person);
console.log("newPerson => ", newPerson);

// 복사 + 변경사항
Object.assign(newPerson, person, {age: 31});
console.log("newPerson => ", newPerson)

// 복사 + 변경사항
Object.assign(newPerson, person, {gender: "여자"});
console.log("newPerson => ", newPerson)

console.log("------------------");

// 객체 비교
let personA = {
    name: "홍길동",
    age: 30,
    gender: "남자",
}
let personB = {
    name: "홍길동",
    age: 30,
    gender: "남자",
}

let str1 = "aaa";
let str2 = "aaa";

// 객체와 배열은 다른 데이터 타입에 비해 큼 -> 메모리에 저장할 때 별도의 공간에 저장
// person1과 person2는 각각 별도 공간에 대한 주소
// 그래서 두 주소를 비교해서 다르기 때문에 객체는 false를 출력
console.log("answer => ", person1 === person2);
console.log("answer2 => ", str1 === str2);

// stringify => 문자열화 시킨다
console.log(JSON.stringify(personA) === JSON.stringify(personB));

// 3-6. 객체 병합
let personC = {
    name: "홍길동",
    age: 30,
}
let personD = {
    gender: "남자",
}

// ... : spread operator
let perfectMan = {...personC, ...personD};
console.log("perfectMan => ", perfectMan);