//! 할당 연산자 (Assignment operators)
let name = "코드잇";
let x = 5;

x = x - 2;
//* (=)  오른쪽 데이터(기준)으로 왼쪽 x에 새로 할당한다 ,지정한다, 대입한다,
//* x = 5 - 2; 이기에 x는 3이다

//! return문 제대로 이해하기
function square(x) {
  return x * x;
}

console.log(square(3));
// 스퀘어 3이 함수로 들거가 3*3으로 계산후 리턴되어 다시 콘솔로 출력 그래서 9가나옴

function square(x) {
  console.log("return 전");
  return x * x; // ?리턴문으로 함수가 종료되어 그 아래로  코드들은 출력이안됌.
  console.log("return 후"); //? Dead Code
}

console.log("함수 호출 전");
console.log(square(3));
console.log("함수 호출 후");

//? 위에 함수를 출력시

/*
* 함수 호출 전
* return 전
* 9
* 함수 호출 후
? 순으로 나옴
*/

//! return과 console.log의 차이
function printSquare(x) {
  console.log(x * x);
}

function getSquare(x) {
  return x * x;
}

printSquare(3);
//* 출력 되는건 브라우저 콘솔에 9가 나오고 종료가됨.
//* 함수안에 리턴값을 설정하지않고 console.log(printSquare(3));을 출력하면 안에 함수
//* 9가 출력되고 그후 밖에있는 콘솔은 리턴값이 없기때문에 출력이안됌 언드파인이 나옴
getSquare(3);
//* 같은 9가 나오지만 콘솔이나 다른곳에 저장되어 나오지않음

//! 옵셔널 파라미터
function sayHello(name) {
  console.log(`안녕하세요 ${name}님!`);
}

sayHello("코드잇");
sayHello("좋아요");
sayHello("사랑해");
sayHello();
//* 안녕하세요 코드잇님!
//* 안녕하세요 좋아요님!
//* 안녕하세요 사랑해님! 이라고 출력됨,
//? 아무것도 저장하지 않은상태로 출력하면 안녕하세요 undefinde님! 라고 출력됨,

//?
//? 안에있는 옵셔널 파라미터를 맨뒤로 호출해서 맞게 해줘야 생략이 안됨,
function introduce(name, age, nationality = "한국") {
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}

introduce("코드잇", 4, "미국"); //? 값을 모두 전달할 경우
introduce("코드잇", 4); //? 파라미터 값을 생락한 경우

//* 제 이름은 코드잇 입니다. 나이는 4살이고, 국적은 미국입니다.
//* 제 이름은 코드잇 입니다. 나이는 4살이고, 국적은 한국입니다.

//! 변수의 scope : 범위, 영역

//let x = 3; //* 글로벌 변수, 전역 변수

function myFunction() {
  //*블록문
  let x = 5;
  console.log(x); //*블록문 안에 선언된 변수를 로컬변수, 지역변수 (블록문 안에서만 유효)
  //* 블록문 안에 선언된 로컬변수가 있는지 확인후 있으면 사용하게됨 없을경우
  //* 글로벌 변수를 사용하게됨 글로벌 변수도 없으면 오류가 생김
}

myFunction();
console.log(x);

//! 상수 (constant)
//? 아래 원주율 이나 변하지않고 일정한값으 유지하는것을 상수라 함
//? 그래서 let 대신 const라고 선언해주면됨,
//? 상수는 재할당을 하려하면 오류가남 상수의값을 보호할려함

const pi = 3.14; //원주율
const radius = 0; // 반지름 //문자열 일경우 ''; //숫자형일경우 0

// 원의 넓이를 계산하는 함수
function calculateArea() {
  return pi * radius * radius;
}

//반지름에 따른 원의 넓이를 출력하는 함수
function printArea() {
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());

//* 반지름이 4일 때, 원의 넓이는 50.24... 이렇게 출력이됨 7이나 8도
