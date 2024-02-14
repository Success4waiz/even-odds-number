function checkNumber() {
    let number1 = number.value
    if (number1 % 2 !== 0) {
        result.innerHTML ="number is odd"
    } else {
        result.innerHTML ="number isnt odd"
    }
}
function checkNumber2() {
    let number2 = number1.value
    if (number2 % 2 === 0) {
        result2.innerHTML ="number is even"
    } else {
        result2.innerHTML ="number isnt even"
    }
}
function checkNumber3(){
    let number3 = num2.value
    if (number3 % 3 === 0) {
        result3.innerHTML ="number is fizz"
    } else {
        result3.innerHTML ="number is not fizz"
    }
    
}
function checkNumber4(){
    let number4 = num3.value
    if (number4 % 5 === 0) {
        result4.innerHTML ="number is buzz"
    }else{
        result4.innerHTML ="number is not buzz"
    }
}