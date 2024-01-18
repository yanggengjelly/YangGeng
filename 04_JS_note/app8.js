//!숫자 표기법
let millionaire = 1000000000;
let myNumber = 1e9; //? 지수 표기법

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

//*출력시
//* 1000000000
//* 1000000000
//* true 가 나온다

console.log(25e5 === 250000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);

console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

//* 모두 출력시 투르가 나온다

//!String
let myString = "Hi Codeit";

//? 부분 문자열 접근 slice(start,end)
console.log(myString.slice(0, 2)); //* Hi가 출력됨
console.log(myString.slice(3)); //* Codeit이 출력됨
console.log(myString.slice()); //*

//? 양 끝 공백 제거
console.log(myString.trim()); // * ""안에 양쪽 끝 공백 제거후 출력된다

//? 대소문자 변환
console.log(myString.toUpperCase()); // * 요소다 대문자로 출력
console.log(myString.toLowerCase()); // * 요소다 소문자로 출력

//? 요소 탐색
console.log(myString.indexOf("a")); // * 앞 부터 찾는데 없으면 -1이 나오는듯
console.log(myString.lastIndexOf("i")); // * 뒤부터 요소를 찾음 0부터 시작 결과는 7

//? 요소 접근
console.log(myString[3]); // * 대괄호 표기법 결과는 C가 나옴
console.log(myString.charAt(3)); //* charAt 메소드 결과는 C가 나옴

//? 문자열 길이
console.log(myString.length); // * length  프로퍼티 결과는 9가 나옴
