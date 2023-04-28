const number1 = document.getElementById("inputNumb1");
const result1 = document.getElementById("result1");
const number21 = document.getElementById("inputNumb21");
const number22 = document.getElementById("inputNumb22");
const result2 = document.getElementById("result2");
const number3 = document.getElementById("inputNumb3");
const result3 = document.getElementById("result3");
const number4 = document.getElementById("inputNumb4");
const result4 = document.getElementById("result4");
const number5 = document.getElementById("inputNumb5");
const result5 = document.getElementById("result5");

function getAge(arg){
    arg++;
    return arg.toString();
}

function getRemainder(arg1, arg2){
    return arg1 % arg2
}

function faceControl(arg){
    if(arg >= 18){
        return "Welcome";
    } else {
        return "Отказ";
    }
}

function getNextAge(arg){
    arg++;
    return arg.toString();
}

function canRide(arg){
    return arg >= 140;
}

number1.addEventListener("input", () => {
    result1.textContent = getAge(number1.value);
})

number21.addEventListener("input", () => {
    result2.textContent = getRemainder(number21.value, number22.value);
})

number22.addEventListener("input", () => {
    result2.textContent = getRemainder(number21.value, number22.value);
})

number3.addEventListener("input", () => {
    result3.textContent = faceControl(number3.value);
})

number4.addEventListener("input", () => {
    if(number4.value === ''){
        result4.textContent = 0;
    } else {
        result4.textContent = getNextAge(number4.value);
    }
})

number5.addEventListener("input", () => {
    result5.textContent = canRide(number5.value);
})