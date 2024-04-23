// forEach, map, filter, find
let numbers = [1, 2, 3, 4, 5];

// 1. forEach
// 매개변수 자리에 함수를 넣는 것 : 콜벡 함수
numbers.forEach(function(item) {
    console.log('item입니다 => ' + item);
});

console.log("------------------");


// 2. map : 반드시 원본 길이 만큼의 return이 된다. (값을 안넣어도 undefined로 배열 길이 만큼 반환)
// 반드시 return문을 가져야함
// -> map의 역할 : 기존에 있었던 배열을 가공해서 새로운 배열을 생산해 내는 것
// -> 그래서 map을 거치고 나면 반드시 새로운 배열이 나옴 -> return 필요
let newNumbers = numbers.map(function(items) {

    return items * 2;
})
console.log(newNumbers);

console.log("------------------");

// 3. filter : 원본 길이와 상관없이 조건에 해당하는 값만 반환
let filterNumbers = numbers.filter(function(item) {
    
    return item > 3;
});

console.log(filterNumbers);

// 4. find 
let findNumbers = numbers.find(function(item) {
    
    return item > 3;
});

console.log(findNumbers);