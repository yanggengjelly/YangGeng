//! typeof 연산자
//? typeof 값 을 입력하면  해당하는 자료열을 어떤 (문자열로)자료형인지 돌려줌
// * console.log(typeof 101); = number
// * console.log(typeof "Codeit"); = string
// * console.log(typeof true); = boolean

// NaN : not a number의 약자

//* console.log(typeof 'hello' + 'codeit'); = stringcodeit 문자열이 나와 문자열을 더함
//* console.log(typeof 8 -3); = number - 3으로 출력되서 인식불가 NaN이 나옴

//? 사칙연산자 보다 타입오브를 먼저 계산하게되서 문제가 생김

//? 위에 문제를 처리할려면 어떻게 해야할까?
//* console.log(typeof ('hello' + 'codeit'));
//* console.log(typeof (8 -3));
//? 자료열을 먼저 계산하라고 가로로 닫아줌

//! 형 변화(Type Conversion)
//? String, Number, Boolean
//* console.log("10"+"5"); = 105가 나옴
//* console.log(10 + 5); = 15가 나옴
//?형변환
//* console.log(Number("10") + Number("5")); = 15가 나옴
//*console.log(String(10) + String(5)); = 105가 나옴

//? (===)일치 (!==)불일치  // (==)동등 (!=)부등

//! 템플릿 문자열 (templeate strings)
//! template: 일정한 틀, 형식

let year = 2018;
let month = 3;
let day = 11;

console.log("생년월일은" + year + "년" + month + "월" + day + "일 입니다.");
//* 위 콘솔출력을 템플릿 문자열로 정리하면
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

//!자료형(Data type) null, undefined
//? null, undefined의 뜻은 값이없다.

//*값이 주어지지않는 값엔 기본적으로 undefined으로 나타난다
//*(선언을한다음 값이 지정되지않음,)
//*null은 의도적으로 값이 없다는걸 나타내기위해 (지정하기위해)

/*
?이제 null과 undefined만 비교하면 됩니다. 두 값의 비교 관계를 살펴보면, 
?null과 undefined는 서로 동등하지만, 일치하는 것은 아닙니다.
?console.log(null == undefined)  // true
?console.log(null === undefined)  // false
*/
