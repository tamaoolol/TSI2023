const number1 = document.getElementById("inputNumb1");
const result1 = document.getElementById("result1");
const number2 = document.getElementById("inputNumb2");
const result2 = document.getElementById("result2");
const number31 = document.getElementById("inputNumb31");
const number32 = document.getElementById("inputNumb32");
const result3 = document.getElementById("result3");
const number41 = document.getElementById("inputNumb41");
const number42 = document.getElementById("inputNumb42");
const result4 = document.getElementById("result4");
const number5 = document.getElementById("inputNumb5");
const result5 = document.getElementById("result5");
const number6 = document.getElementById("inputNumb6");
const result6 = document.getElementById("result6");
const number81= document.getElementById("inputNumb81");
const number82 = document.getElementById("inputNumb82");
const result8 = document.getElementById("result8");
const number9 = document.getElementById("inputNumb9");
const result9 = document.getElementById("result9");
const number10 = document.getElementById("inputNumb10");
const result10 = document.getElementById("result10");

function sumArray(arg){
    arg = arg.split(",");
    let ans = 0;
    arg.forEach(element => {
        ans += parseInt(element);
    });
    return ans.toString();
}

function getAboveZero(arg){
    arg = arg.split(",");
    let ans = [];
    arg.forEach(element => {
        if(parseInt(element) >= 0){
            ans.push(parseInt(element));
        }
    });
    return ans.toString();
}

function getPonies(arg1, arg2){
    arg1 = arg1.split(",");
    let found = false;
    arg1.forEach(element => {
        if(element === arg2){
            found = true;
        }
    });
    if (found){
        return arg2;
    } else {
        return false;
    }
}

function isTxIncluded(arg1, arg2){
    arg1 = arg1.split(",");
    let found = false;
    arg1.forEach(element => {
        if(element === arg2){
            found = true;
        }
    });
    if (found){
        return true;
    } else {
        return false;
    }
}

function getSizes(arg){
    arg = arg.split(",");
    let ans = [];
    arg.forEach(element => {
        if(element.length >= 6){
            ans.push(element.length);
        }
    });
    return ans.toString();
}

function getWithSpaces(arg){
    arg = arg.split(",");
    let ans = "";
    let leng = 0;
    arg.forEach(element => {
        leng += element.length;
        ans += element + ' ';
    });
    return ans + leng;
}

function getEpisodes(arg){
    return "Аниме " + arg.title + " включает в себя " + arg.episodes + " эпизодов";
}

const triple = (arg) =>{
    return arg * 3;
}

const getAvgGlucose = (arg) =>{
    arg = arg.split(",");
    ans = 0;
    arg.forEach(element =>{
        ans += parseFloat(element);
    })
    return (ans / arg.length).toString();
}

number1.addEventListener("input", () => {
    result1.textContent = sumArray(number1.value);
})

number2.addEventListener("input", () => {
    result2.textContent = getAboveZero(number2.value);
})

number31.addEventListener("input", () => {
    result3.textContent = getPonies(number31.value, number32.value);
})

number32.addEventListener("input", () => {
    result3.textContent = getPonies(number31.value, number32.value);
})

number41.addEventListener("input", () => {
    result4.textContent = isTxIncluded(number41.value, number42.value);
})

number42.addEventListener("input", () => {
    result4.textContent = isTxIncluded(number41.value, number42.value);
})

number5.addEventListener("input", () => {
    result5.textContent = getSizes(number5.value);
})

number6.addEventListener("input", () => {
    result6.textContent = getWithSpaces(number6.value);
})

number81.addEventListener("input", () => {
    result8.textContent = getEpisodes({title: number81.value, episodes: number82.value});
})

number82.addEventListener("input", () => {
    result8.textContent = getEpisodes({title: number81.value, episodes: number82.value});
})

number9.addEventListener("input", () => {
    result9.textContent = triple(number9.value);
})

number10.addEventListener("input", () => {
    result10.textContent = getAvgGlucose(number10.value);
})