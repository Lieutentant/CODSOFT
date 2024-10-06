function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay(){
    const display = document.getElementById("display");
    display.value ='';
}

function goBack() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr (0, value.length - 1);
}
function calculateResult(){
    const display = document.getElementById('display');
    
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}