function solution(s) {
    var answer = true;

    s = s.toUpperCase();

    var num = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'P') {
            num++;
        }
        if(s[i] === 'Y') {
            num--;
        }
    }

    if (num === 0) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}

var str1 = 'pPoooyY';
var str2 = 'Pyy';
console.log(solution(str1));