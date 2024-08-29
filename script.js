//html한것들 가져오기
const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const btn0 = document.getElementById("btn-0");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
//계산기화면지우기!
function clearDisplay() {
    display.innerText = '0';
}

//숫자를 누르면 숫자넣기
function appendCharacter(character) {
    //0누를때 예외
    if (display.innerText == '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function calculateResult() {
    //사용자 입력을 eval로 쉽게 계산하고 결과표시, ÷와 × 는 /와 *로 변환
    display.innerText = eval(display.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
}

//계산, 초기화 버튼 이벤트
clearButton.addEventListener("click", clearDisplay);
plusButton.addEventListener("click", () => appendCharacter('+'));
minusButton.addEventListener("click", () => appendCharacter('-'));
multiplyButton.addEventListener("click", () => appendCharacter('×'));
divideButton.addEventListener("click", () => appendCharacter('÷'));
equalsButton.addEventListener("click", calculateResult);

//숫자버튼 이밴트
btn0.addEventListener("click", () => appendCharacter('0'));
btn1.addEventListener("click", () => appendCharacter('1'));
btn2.addEventListener("click", () => appendCharacter('2'));
btn3.addEventListener("click", () => appendCharacter('3'));
btn4.addEventListener("click", () => appendCharacter('4'));
btn5.addEventListener("click", () => appendCharacter('5'));
btn6.addEventListener("click", () => appendCharacter('6'));
btn7.addEventListener("click", () => appendCharacter('7'));
btn8.addEventListener("click", () => appendCharacter('8'));
btn9.addEventListener("click", () => appendCharacter('9'));