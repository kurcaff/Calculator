var prevVal = []
var operatorVal = []
var newVal = []
var resultVal = []


$("button").click(function(){
    var input = this.innerText;
    var inputId = this.id;
    numbers(input);
    operators(input, inputId);
    logic(input, inputId);
    clear(input);
    cleanText(input, inputId);
    backspace(inputId);
})

//Converting All Strings Into Numbers
function numbers(input) {
    if(input == "1"){
        newVal += ("1")
    } else if(input == "2"){
        newVal += ("2")
    } else if(input == "3"){
        newVal += ("3")
    } else if(input == "4"){
        newVal += ("4")
    } else if(input == "5"){
        newVal += ("5")
    } else if(input == "6"){
        newVal += ("6")
    } else if(input == "7"){
        newVal += ("7")
    } else if(input == "8"){
        newVal += ("8")
    } else if(input == "9"){
        newVal += ("9")
    } else if(input == "0"){
        newVal += ("0")
    } else if(input == "."){
        newVal += (".")
    }
}

//Creating Operators
function operators(input, inputId) {
    if(input == "+") {
        operatorVal.push("+")
        if (prevVal == 0 ){
            prevVal = newVal;
            newVal = []
        }
    } else if(input == "-") {
        operatorVal.push("-")
        if (prevVal == 0 ){
            prevVal = newVal;
            newVal = []
        }
    } else if(input == "x") {
        operatorVal.push("x")
        if (prevVal == 0 ){
            prevVal = newVal;
            newVal = []
        }
    } else if(inputId == "divide") {
        operatorVal.push("/")
        if (prevVal == 0 ){
            prevVal = newVal;
            newVal = []
        }
    } else if(inputId == "modulo") {
        operatorVal.push("%")
        if (prevVal == 0 ){
            prevVal = newVal;
            newVal = []
        }
    }
}

//Getting Result
function logic(input) {
    if(input == "=" && prevVal.length >= 1 && newVal.length >= 1) {
        if (operatorVal[operatorVal.length -1] == "+") {
            resultVal.push(Number(prevVal) + Number(newVal))
            emptying()
        } else if (operatorVal[operatorVal.length -1] == "-") {
            resultVal.push(Number(prevVal) - Number(newVal))
            emptying()
        } else if (operatorVal[operatorVal.length -1] == "x") {
            resultVal.push(Number(prevVal) * Number(newVal))
            emptying()
        } else if (operatorVal[operatorVal.length -1] == "/") {
            resultVal.push(Number(prevVal) / Number(newVal))
            emptying()
        } else if (operatorVal[operatorVal.length -1] == "%") {
            resultVal.push(Number(prevVal) % Number(newVal))
            emptying()
        }
    }
}

// C button
function clear(input) {
    if (input == "C") {
        $("h1").text(0)
        $("p").text("")
        prevVal = []
        newVal = []
        operatorVal = []
        resultVal = []
    }
}

// Emptying All Arrays After Result
function emptying() {
    $("h1").text(resultVal)
    prevVal = resultVal
    operatorVal = []
    newVal = []
    resultVal = []
}

// Removing Unnecessary Text From Display

function cleanText(input, inputId) {
    if (prevVal.length >= 1 && newVal.length >= 1 && operatorVal.length >= 1) {
        $("p").text(prevVal + " " + operatorVal[operatorVal.length - 1] + " " + newVal)
    } else if(prevVal.length >= 1) {
        $("p").text(prevVal)
    }

    if (input != "=" && input != "C") {

        if (input == 0) {
            if (input == "0") {
                $("h1").text(newVal);  
            }
            else if (inputId == "modulo") {
                $("h1").text("%");
            } else if(inputId == "divide") {
                $("h1").text("/");
            }  
        
        } else if(inputId == "multiply") {
            $("h1").text("x");
        } else if(inputId == "subtract") {
            $("h1").text("-");
        } else if(inputId == "add") {
            $("h1").text("+");
        } else {
                $("h1").text(newVal);  
        }
    }
}

//Backspace Button
function backspace (inputId) {
    if (inputId == "backspace"){
        var str = newVal.toString();;
        newVal = str.substring(0, str.length - 1);
        console.log(newVal)
        if (newVal == "") {
            $("h1").text("0");
            $("p").text("0");
        } else {
            $("h1").text(newVal);
        }
    }
}
