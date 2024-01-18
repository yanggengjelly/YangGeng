//! if문 (if statement) + else
//*if (조건부분) {
//? 만약 조건부분이 충족되면 동작부분을 수행해라
//*  동작부분;
//*}

// let temperature = 0; //온도  0대신 1을 넣으면 조건부분이 충족되지않아 출력이 안됌

// if (temperature <= 0) {
//   // if 온도가 0도 이거나 이하 일때
//   console.log("물이 업니다.");
// } else {
//   // else 위에 조건부분이 아니면
//   console.log("물이 얼지 않습니다. ");
// }

//! else if문

let temperature = 105; //온도가 105도 이기때문에 물이 끓습니다 출력.

if (temperature <= 0) {
  // if 온도가 0도 이거나 이하 일때
  console.log("물이 업니다.");
} else if (temperature < 100) {
  // 100도 미만일때 물이 얼지도 끓지도 않습니다.
  console.log("물이 얼지도 끓지도 않습니다.");
} else if (temperature < 150) {
  //나머지 100도 이상일때 물이 끓습니다 출력
  console.log("물이 끓습니다.");
} else {
  //나머지 , 필요에따라 생략가능
  console.log("물이 모두 수증기가 되었습니다.");
}

//! swich문 (switch statement)
/*
 *당신은 등산을 하던 중 갑작스레 산불이 발생해 대피 중 입니다.
 * 그러던 중 산중턱에서 다친 동물 4마리를 만났습니다.
 * 이미 체력이 많이 떨어진 당신,
 * 이 동물 중 단 한 마리만 구출할 수 있습니다.
 * 과연 당신의 선택은?
 * 1.토끼 2.고양이 3.코알라 4.강아지
 */
//? 이런 심리테스트 예시가 있다.

switch (비교할_값) {
  case 조건값_1: //?조건값이 맞고 동작부분이 실행되면 break로 빠져나옴
    동작부분;
    break;
  case 조건값_2: //? 조건이 더 필요할 경우
    동작부분;
    break;
  default: //? default 모든 조건값이 일치하지 않을경우 동작 필요에따라 생략가능
    동작부분;
}

//? 위에 심리테스트 스위치값 생성
let myChoice = 2; //* 선택할수있는 변수를 만들기

switch (myChoice) {
  case 1:
    console.log("토끼를 선택한 당신, ...");
    break;
  case 2:
    console.log("고양이를 선택한 당신, ...");
    break;
  case 3:
    console.log("코알라를 선택한 당신, ...");
    break;
  case 4:
    console.log("강아지를 선택한 당신, ...");
    break; //브레이크가 없으면 다 출력됨,,
  default:
    console.log("1에서 4사이의 숫자를 선택해 주세요.");
}

//! for 반복문 (loop statment)
//? 코드잇 최고! x 10개를 출력하고싶으면,,?
//* 초기화 부분은 딱 한번만 먼저 실행되는 부분
//* 두번째 조건부분은 불린형태로 표현해여 true가 된다면 동작부분 실행 false가되면 멈춤
//* 추가동작부분은 조건부분이 true로 판명되면 동작부분을 실행하고 추가로 실행되는 부분
for (초기화부분; 조건부분; 추가동작부분) {
  동작부분;
}

//? i는 반복의 횟수를 저장하는 변수 (불린쪽 i가 10보다 이상이거나 같을때)
for (let i = 1; i <= 10; i++) {
  console.log(`${i}코드잇 최고!`);
}
//* 출력시 코드잇 최고! 열번 출력됨 + ${1~10}까지 같이 출력됨

/*
?실습 설명
?주어진 높이(height)에 맞게 *로 삼각형을 그리는 함수 printTriangle()을 완성해 봅시다.

?실습 결과
?높이: 1
*
?높이: 3
*
**
***
?높이: 5
*
**
***
****
*****

function printTriangle(height) {
  let message = '';
  for (let i = 0; i < height; i++) {
    message += '*';
    console.log(message);
	}
}

console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);
*/

//! while문 (wile statement)
while (조건부분) {
  동작부분;
}

//? 비교하자면
let i = 1;

while (i <= 10) {
  console.log(`${i} 코드잇 최고!`);
  i++;
}
//? =
for (let i = 1; i <= 10; i++) {
  console.log(`${i} 코드잇 최고!`);
}

let x = 30;

while (x % 7 !== 0) {
  i++;
}

console.log(x);
//* 출력시 35가 나옴, 30나머지 7했을때 7*4=28 에서 나머지 2나오고
//* 2는 0 이랑 다르기에 true가 나오고
//* i++가 동작된다 그후 x는 31이 되고 다시 조건부분에 삽입되어 반복함
//* 그후 35가되고 7*5=35 라 맞아서 0!==0 은 false기 때문에 콘솔로 출력이됨
//* 그러므로 콘솔x은 35가 된다.
//? 반복문이 종료되고도 x를 사용할려면 while문이 좋음

//! break와 continue
let y = 1;

while (y <= 10) {
  console.log(y);
  if (y === 7) {
    break;
  }
  i++;
}
//? 이렇게 진행할 경우 7까지 나오고 if문 조건에 충족되어 브레이크에 걸림

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
//? 이렇게 진행할경우 1,3,5,7,9가 출력된다 if문 조건이 성립되면 출력되지않음

//?실습 구구단 만들기
/*
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let i = 1;
while (i <= 9) {
  let j = 1;
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}
*/
