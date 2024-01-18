//! 객체와 프로퍼티 (자바스크립트의 모든 것이 다 객체다!)
//? 값의 이름 key , 값은 value
//!propertyName 주의사항
//? 1.첫번째 글자는 반드시 문자,밑줄(_),달러기호($)중 하나로 시작
//? 2. 띄어쓰기 금지!
//? 3. 하이픈(-)금지!

//! 객체 (Object)
// let codeit = {
//   name: "코드잇",
//   bornYear: 2017, //? 'born Year': 2017, 이라고 되어있으면
//   isVeryNice: true,
//   worstCourse: null,
//   bestCourse: {
//     title: "자바스크립트 프로그래밍 기초",
//     language: "JavaScript",
//   },
// };

//* 점 표기법 (objectName.PropertyName)
console.log(codeit.bornYear); //?console.log(codeit.['born Year']); 이라고 표현함
//* 출력하면 2017이 출력됨,

let propertyName = "name";
console.log(codeit[propertyName]);
//? 변수에 프로퍼티 네임에 네임이라는 할당을 해줘서 '코드잇'을 출력가능

// //! 객체 다루기
// let codeit = {
//   name: "코드잇",
//   bornYear: 2017,
//   isVeryNice: true,
//   worstCourse: null,
//   bestCourse: {
//     title: "자바스크립트 프로그래밍 기초",
//     language: "JavaScript",
//   },
// };

console.log(codeit.ceo); //* 언더파인이 나오고
codeit.ceo = "강영훈"; //* 이렇게 화면 객체에 추가됨
console.log(codeit.ceo); //* 강영훈이 나옴

//! 객체 다루기
// let codeit = {
//   name: "코드잇",
//   bornYear: 2017,
//   isVeryNice: true,
//   worstCourse: null,
//   bestCourse: {
//     title: "자바스크립트 프로그래밍 기초",
//     language: "JavaScript",
//   },
// };

console.log(codeit.worstCourse); //* 출력이 null이였다가
delete codeit.worstCourse; //* 삭제 당하고
console.log(codeit.worstCourse); //* 언더파인으로 출력됨

if ("name" in codeit) {
  console.log(`name 값은 ${codeit.name}입니다.`);
} else {
  console.log("name 프로퍼티는 존재하지 않습니다.");
}
//? 위에 로직을 출력시 name 값은 코드잇입니다. 출력이됨

//!메소드 (Meyhod) // 어떤 객체의 고유한 동작으로서 함수의 의미를 부여할수있음,
let greetings = {
  sayHello: function (name) {
    //* 파라미터가 필요하면 사용도가능
    console.log(`Hello ${name}!`);
  },
  sayHi: function () {
    console.log("Hi!");
  },
  sayBye: function () {
    console.log("Bye!");
  },
};
//? 함수이름은 프로퍼티로 대체함 ex)sayHello 그렇게하여 greetings안에 3가지 메소드가
//? 정의됨

greetings.sayHello();
//* 을 출력하면 Hello! 가 나옴
greetings.sayHello("Codeit");
//* 을 출력하면 Hello Codeit! 가 나옴
greetings[sayHello]("Codeit");
//* 을 출력하면 Hello Codeit! 가 나옴 위에랑 같음

//! for...in 반복문
for (변수 in 객체) {
  동작부분;
}

let codeit = {
  name: "코드잇",
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: "자바스크립트 프로그래밍 기초",
};

for (let key in codeit) {
  console.log(key);
  //? 출력하면 각 codeit에 프로퍼티(key)네임들이 출력이됨
  console.log(codeit[key]);
  //? 각객체의 값도 출력됨,
}

//! 내장 객체
