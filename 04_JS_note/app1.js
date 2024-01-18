/* 
! 자료형 개요

! 숫자(Number)
1.정수
2.소수
기본적으로 사칙연산 가능

문자(string)
?"" , ''에 들어가는 단어 
ex "Hello" + "codeit" = "HelloCodeit"


! 불린(Boolean)
8 > 6  -> true
8 < 6  -> false
*/

//*변수 선언
//*let espressoPrice = 3000;
//*let lattePrice = 4300;
//*let mochaPrice = 4800;
//* = 는 같다는 뜻이아니라 할당연산자, 오른쪽에 의미를 왼쪽에 할당한다라는 의미
//* console.log(espressoPrice);
//*출력시 3000이 출력됨.

/*
!변수 = 값
!함수 = 명령들

!함수선언
?function 함수이름() {
	명령;
	명령;
};

!함수호출
?함수이름();

? Codeit이라는 문자열을 brand라는 변수에 할당한 코드로 알맞은 것을 선택하세요.
? let brand = 'Codeit';
*/

/*
!Parameter (매개변수)

?함수선언
?function 함수이름 (파라미터(값)) {
?	consol.log(파라미터 (값))``	
?};
?함수호출
?함수이름 (값);

ex)
*function welcome(name) {
*	console.log('안녕하세요 ' + name + '님!');
*};

*welcome('코드잇');

콘솔 출력시  = 안녕하세요 코드잇님!

welcome('~~~');
welcome('~~~');
welcome('~~~');
여러개 값을 입력하면 그대로 여러개 출력이됨,

--------------------------------------------------------

?function printSum(a, b){
?	console.log(a + b);
?};
?printSum(10, 5);

?콘솔 출력시 = 15
*/
//----------------------------------------------------------
/*
return 다시 돌려준다, 반환한다

*function getTow(){
*	return 2;  //리턴값이 작성되면 함수가 호출되는 곳에 리턴값이 전달됨
*};

*console.log(getTow()); = console.log(2);
-------------------------------
*function getTwice(number){ //어떤숫자를 받아서 두배로 리턴해주는 값
*	return number * 2;
*};

*console.log(getTwice(5)); // 숫자 5가 파라미터로 전달되어서 5 * 2 가됨 
-------------------------------
*function getTwice(number){
*	return number * 2;
*};

*let x = getTwice(5);   / 파라미터로 전달되어 5 * 2 = 10 이라는 값이 x변수에 저장됨
*let y = getTwice(2);   / 파라미터로 전달되어 2 * 2 = 4 라는 값이 y변수에 저장됨

*console.log(x * y); / 리턴되고 저장된 변수끼리 곱하여 출력하면 40이 나옴 

*/
