const etherium = {
    usd: 2811,
    rub: 200612,
    eur: 2666
}

const ex2 = {
    lang: "JavaScript", 
    course: "third"
}

const street = 'Lenina';
const building = 1;
const flat = 40;

const address = {
    street,
    building,
    flat
}

const obj1 = {
    id: 1,
    num: 1
}

const obj2 = {
    asd: 'asd',
    zxc: 'zxc'
}

class user {
    constructor(_name, _email){
        this.name = _name;
        this.email = _email;
    }
}

class user6 {
    constructor(_id, _type) {
        this.id = _id;
        this.type = _type;
    }

    getId(){
        return this.id;
    }

    isAdmin(){
        if(this.type === "isAdmin") {
            return true;
        } else {
            return false;
        }
    }
}

class AreaOfCircle {
    constructor(_area) {
        this.area = _area;
    }
        
    get area() {
        return this._area;
    }
    
    set area(value) {
        this._area = Number.parseInt(value, 10);
    }
}

class Course {
    getCertificate(arg) {
        if(arg){
            return "Выдать сертификат";
        } else {
            return "Курс не пройден"
        }
    }

    getGrade(arg) {
        if(arg > 3 && arg <= 5){
            return this.getCertificate(true);
        } else {
            return this.getCertificate(false);
        }
    }
}

const number1 = document.getElementById("inputNumb1");
const select1 = document.getElementById("select1");
const result1 = document.getElementById("result1");
const button2 = document.getElementById("exercise2");
const result2 = document.getElementById("result2");
const button3 = document.getElementById("exercise3");
const result3 = document.getElementById("result3");
const button4 = document.getElementById("exercise4");
const result4 = document.getElementById("result4");
const number51 = document.getElementById("inputNumb51");
const number52 = document.getElementById("inputNumb52");
const result5 = document.getElementById("result5");
const number61 = document.getElementById("inputNumb61");
const number62 = document.getElementById("inputNumb62");
const button61 = document.getElementById("exercise61");
const button62 = document.getElementById("exercise62");
const result61 = document.getElementById("result61");
const result62 = document.getElementById("result62");
const number7 = document.getElementById("inputNumb7");
const button71 = document.getElementById("exercise71");
const button72 = document.getElementById("exercise72");
const result7 = document.getElementById("result7");
const number8 = document.getElementById("inputNumb8");
const result8 = document.getElementById("result8");

const circle = new AreaOfCircle("10");

function getRate(arg){
    return (etherium[select1.value] * arg).toString();
}

function getValues(arg){
    const obj = Object.values(arg);
    return JSON.stringify(obj);
}

function getInfo(arg){
    return JSON.stringify(arg);
}

function joinArrays(arg1, arg2){
    const newObj = {...arg1, ...arg2};
    return JSON.stringify(newObj);
}

function createUser(arg1, arg2){
    let newUser = new user(arg1, arg2);
    return JSON.stringify(newUser);
}

function User6getId(arg1, arg2){
    let newUser = new user5(arg1, arg2);
    return newUser.getId();
}

function User6isAdmin(arg1, arg2){
    let newUser = new user5(arg1, arg2);
    return newUser.isAdmin();
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
    result1.textContent = getRate(number1.value);
})

select1.addEventListener("change", () => {
    result1.textContent = getRate(number1.value);
})

button2.addEventListener("click", () => {
    result2.textContent = getValues(ex2);
})

button3.addEventListener("click", () => {
    result3.textContent = getInfo(address);
})

button4.addEventListener("click", () => {
    result4.textContent = joinArrays(obj1, obj2);
})

number51.addEventListener("input", () => {
    result5.textContent = createUser(number51.value, number52.value);
})

number52.addEventListener("input", () => {
    result5.textContent = createUser(number51.value, number52.value);
})

button61.addEventListener("click", () => {
    result61.textContent = User6getId(number61.value, number62.value);
})

button62.addEventListener("click", () => {
    result62.textContent = User6isAdmin(number61.value, number62.value);
})

button71.addEventListener("click", () => {
    circle.area = number7.value;
})

button72.addEventListener("click", () => {
    result7.textContent = circle.area;
})

number8.addEventListener("input", () => {
    const cours = new Course();
    result8.textContent = cours.getGrade(number8.value);
})