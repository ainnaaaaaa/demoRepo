
console.log("Hello World!");

var name = "Alice";
let age = 20
const isStudent = true;

console.log("Name: " + name + ", Age: "  +  age +", Is Student? " + isStudent);

/*
OPERATORS: 
ARITHMETIC: + - / *
ASSIGNMENT: = += -=
COMPARISON: > < != == 
LOGICAL: && || !

*/ 

var x = 10;
var y = 5;
console.log( x / y);

var result = (x > y) && (x % y == 0);

console.log(result);

// if-else statements 

var isRaining = false;

if(!isRaining) {
    console.log("You can go outside");
}
else {
    console.log("Stay indoors.")
}


function great(name) {
    console.log("Hello " + name);
}

console.log(great("Alice"));


/*
    DOM - DOCUMENT OBJECT MODEL
*/

var sampleText = document.getElementById('main');

console.log(sampleText);
console.log(sampleText.innerHTML);
console.log(sampleText.textContent = "Text changed!");

sampleText.style.color = "pink";
sampleText.style.fontSize = "20px";
sampleText.style.fontStyle = "italic";

// event handling

document.getElementById('btn').addEventListener("click" , function() {
    alert("Button was clicked!");
    sampleText.style.color = "blue";
});


document.getElementById('darkMode').addEventListener("click", function() {
    document.body.style.backgroundColor = "#000000";
    sampleText.style.color = "#ffffff";
})


document.getElementById('resetbtn').addEventListener("click", function() {
    document.body.style.backgroundColor = "";
    sampleText.style.color = "pink";
})

var colorValue = document.getElementById('choosenColor');

document.getElementById('changeColor').addEventListener("click", function() {
    document.body.style.backgroundColor = colorValue.value;
})


colorValue.addEventListener("input", function() {
    document.body.style.backgroundColor = colorValue.value;
})

document.getElementById('add').addEventListener("click", function() {
    var num_1 =  parseFloat(document.getElementById('firstNum').value);
    var num_2 = parseFloat(document.getElementById('secondNum').value);

    var result = num_1 + num_2;

    document.getElementById('resultContainer').textContent = result;
})


document.getElementById('subtract').addEventListener("click", function() {
    var num_1 =  parseFloat(document.getElementById('firstNum').value);
    var num_2 = parseFloat(document.getElementById('secondNum').value);

    var result = num_1 - num_2;

    document.getElementById('resultContainer').textContent = result;
})


document.getElementById('multiply').addEventListener("click", function() {
    var num_1 =  parseFloat(document.getElementById('firstNum').value);
    var num_2 = parseFloat(document.getElementById('secondNum').value);

    var result = num_1 * num_2;

    document.getElementById('resultContainer').textContent = result;
})

document.getElementById('divide').addEventListener("click", function() {
    var num_1 =  parseFloat(document.getElementById('firstNum').value);
    var num_2 = parseFloat(document.getElementById('secondNum').value);

    var result = num_1 / num_2;

    document.getElementById('resultContainer').textContent = result;
})

