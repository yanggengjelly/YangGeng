//! 배열 (Array)
let courseRanking = [
  //? 배열 안에 있는 것들을 엘리먼트, 즉 요소라고 불림
  "자바스크립트 프로그래밍 기초",
  "Git으로 배우는 버전 관리",
  "컴퓨터 개론",
  "파이썬 프로그래밍 기초",
];

//? index == PropertyName
//? 배열의 요소를 가져오는법
//! indexing (0~....)
console.log(배열이름[index]);

// let members = ["쿤칼레", "Zerrard66", "우리생각해써", "흙토끼", "End Miracle"];
//? .length 배열안에 몇개의 데이터가 있는지 쉽게 알수있음,
console.log(members.length);
//* 출력시 5가 나옴

//?요소추가
members[5] = "NiceCodeit";
console.log(members[5]);
//*출력시 NiceCodeit 이라고 나오고 멤버스를 호출하면 마지막에 NiceCodeit가 추가됨
//* 그리고 length값은 6으로 추가됨

//?요소변경
members[3] = "달토끼";
console.log(members);
//* 출력시 멤버스안에 요소값 3번이 흙토끼에서 달토끼로 변경되어 출력됨

//!배열의 메소드
//?요소삭제 .splice()
members.splice(4);
console.log(members);
//*출력시 4번 인덱스 흙토끼이후로 다 삭제됨

members.splice(1);
console.log(members);
//* 출력시 쿤칼레 뺴고 나머지 다 삭제가됨 전달된 인덱스 이후로 다 삭제됨,

//? splice(startIndex, deleteCount, item(세번째 파라미터는 삭제한곳에 추가한다는뜻))
//!arr.splice(삭제할index, 삭제할개수, 추가할요소, 추가할요소, ...);
members.splice(1, 2, "NiceCodeit", "HiCodeit");
console.log(members);
//* 출력시 1번 인덱스로 부터 2개가 삭제가되고
//* 그 자리에 세번째 파라미터 "NiceCodeit", "HiCodeit"가 추가됨
//* 하나가 삭제됬지만 두개가 추가되면 추가된거 뒤로 밀림

//!배열 메소드 2
let members = ["쿤칼레", "Zerrard66", "우리생각해써", "흙토끼", "End Miracle"];
console.log(members);

//?배열의 첫 요소를 삭제 : shift()
members.shift();
console.log(members);
//*쿤칼레를 제외하고 나머지가 출력됨

//?배열의 마지막 요소를 삭제 : pop()
members.pop();
console.log(members);
//*배열의 마지막 End Miracle 요소가 제외됨

//?배열의 첫 요소로 값 추가: unshift(value) 추가할값을 입력해야함
members.unshift("NiceCodeit");
console.log(members);
//* 첫요소로 NiceCodeit가 추가됨

//?배열의 마지막 요소로 값 추가: push(value)
members.push("HiCodeit");
console.log(members);
//* 마지막으로 요소값으로  HiCodeit가 추가됨

//! for...of
let influencer = [
  "suwonlog",
  "small.tiger",
  "minam.ludens",
  "cu_convenience24",
];

for (변수 of 배열) {
  동작부분;
}

for (let i = 0; i < influencer.length; i++) {
  console.log(influencer[i]);
}

for (let element of influencer) {
  console.log(element);
}

for (let index of influencer) {
  console.log(influencer[index]);
}

//* 위에 3개가 출력시 동일하게 출력됨
//* "suwonlog",
//* "small.tiger",
//* "minam.ludens",
//* "cu_convenience24",

//!다차원 배열
let twoDimensional = [
  [1, 2],
  [3, 4],
];

console.log(twoDimensional[0]);
//* 위 출력시 [1,2]가 나옴
console.log(twoDimensional[0][1]);
//*위 출력시 2가 나옴
