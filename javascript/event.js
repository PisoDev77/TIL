

const arrowCall = (name, age) => {
    this.name = name;
    this.age = age;
}

function funcCall(name, age){
    this.name = name;
    this.age = age;
}

const arrow = (name, age) => {
    arrowCall.call(this, name, age);
};

function func(name, age){
    funcCall.call(this, name, age);
}

// const a = new arrow("arrow", 1);
const f = new func("func", 2);

console.dir(f)

