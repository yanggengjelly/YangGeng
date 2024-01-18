// ! 사칙연산 + 외
/*
* 기본적인 사칙연산이 가능함 + - * /

?나머지 연산 %
*console.log(7 % 3); 7을 3으로 나눈 나머지 숫자를 구하는 뜻 
* 그럼 3 * 2 = (6-(7)) 이기 때문에 나머지는 1

?거듭제곱 ** 
* console.log(2 ** 3); 2의 3제곱 즉, 2x2x2를 출력하라는것 = 8
*/

//! 문자열 기본
// ex) console.log로 출력할때 숫자값이아니라 문자라면 어떻게 표현해야할까? (출력안됌)

// * "코드잇" <-따옴표 안에 사용하여 안에 문자를 입력하면 문자열이라는 값이라고
// * 출력이 가능해짐

//console.log("코드잇"); //* 따옴표는 문자열을 구분하기위해 쓰임 따옴표는 출력안됌,

//! 문자열 활용
//? 문자열 안에 작은 따옴표도있어야 하고 큰따옴표도 있어야 할때  \ 역슬래시를 쓰면됨
//* ex) console.log("He said \"I'm iron man\"");
//* 따옴표 앞에 역슬래시를 입력해주면 됨
//* ex2) console.log(``);
//? 백틱을 이용해서 사용가능함 ` <-
//문자열 덧셈은 문자열을 연결하라는 뜻
// ex) console.log ("hello" + "codeit"); 는 hellowcodeit
//숫자도 따옴표 안에 감싸면 문자열로 들어감, 그래서 덧셈이 안먹고 문자열로 나열됨,

//! 불 대수 (일상적인 논리를 수학적으로 표현한것.)
//? AND연산 x 와 y가 모두 참일 떄만 x AND y는 참
//? OR 연산 x 와 y중 하나라도 참이면 x OR y는 참
//? NOT 연산은 참이면 거짓으로 만들고 거짓이면 참으로 만드는것,
//* NOT ex)  not 대한민국 수도는 서울 (대한민국의 수도는 서울이 아니다) =  참이나옴
//* not을 붙쳐기때문에

//! 불린형 (자바스크립트에서 참과 거짓을 나타내것을 불린이라함)
//* console.log(2 > 1); = true
//* console.log(2 < 1); = false

//* console.log(3 >= 2); = 3은 2보다 크거나 같다, = true
//* console.log(3 <= 3); = 3은 3보다 작거나 같다, = true
//* console.log(3 === 3); = 값이 일치하다 = true
//* console.log(3 !== 3); = 값이 불일치하다. = talse

//? 문자열 비교
//* console.log("Codeit" === "Codeit");  = true
//* console.log("Codeit" !== "Codeeit"); = true

//? 불린(Boolean)
//* && AND연산자
//* || OR연산자
//* ! NOT연산자
//* !! NOT의 반대의 반대

//! 불린형 정리
/*
지난 시간에 불린형에 대해서 알아봤는데요. 
이번 시간에는 지난 시간에 배운 것들을 다양한 방식으로 활용해 볼게요.

// 불린 (Boolean)
console.log(2 < 1 && 'Codeit' !== 'Codeit');
2 < 1는 false고, 'Codeit' !== 'Codeit'도 false이기 때문에 
이 코드는 false && false가 되어서 실행했을 때 false가 출력됩니다.

사실, AND 연산을 할 때 왼쪽이 false일 경우 오른쪽은 볼 필요도 없이 
결과는 false입니다. AND 연산은 양쪽이 모두 true인 
경우에만 true가 리턴되기 때문입니다. 그래서 불린 연산자가 
하나만 있을 때는 연산자를 기준으로 왼쪽부터 순서대로 확인하면 됩니다.

그럼 이 코드는 어떨까요?

// 불린(Boolean)
console.log(7 !== 7 || 4 < 3);
이번에는 OR 연산인데요. OR 연산의 경우에는 AND 연산과 
반대로 왼쪽이 true라면, 오른쪽은 볼 필요도 없이 true가 됩니다.

그런데 OR 연산의 왼쪽, 그러니까 7 !== 7이 false이기
때문에 오른편도 확인해야 하네요. 4 < 3은 false이기 
때문에 결과적으로 위 연산은 false OR false가 돼서 코드를 실행하면 false가 출력됩니다.

마지막으로 하나만 더 볼까요?

// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
이번에는 변수까지 활용해서 첫 번째 x라는 변수에 3이라는
값을 저장했습니다. 이번에는 조금 복잡해 보이니까 코드를
하나 더 복사해서 같이 수정하면서 확인해 봅시다.

// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(x > 4 || !(x > 2));
순서대로 왼쪽의 비교 연산부터 정리해 봅시다. x > 4는 3 > 4가 되죠?

// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(3 > 4 || !(x > 2));
3 > 4는 false이기 때문에 오른쪽도 살펴봐야 합니다.

// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !(x > 2));
다음은 NOT 연산이 있는데요. 그런데 어떤 값을 NOT 연산 
해야되는지 아직 모르니까, 괄호 안의 비교 연산을 먼저 정리해 봅시다.

x > 2는 3 > 2가 되죠?

let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !(3 > 2));
3 > 2는 true입니다.

let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !true);
그럼 이제 NOT 연산도 정리해 줍시다.

let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || false);
결과적으로 위 연산은 false || false가 되고, 코드를 실행하면
false가 두 번 출력되는 것을 확인할 수 있습니다.

let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false);
false
false
*/
