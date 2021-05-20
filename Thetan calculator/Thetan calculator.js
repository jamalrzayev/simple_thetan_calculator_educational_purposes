alert("ITS FREE");
let numberOne = document.querySelector(".number-one")
let numberTwo = document.querySelector(".number-two")
let result = document.querySelector(".result")

let plusButton = document.querySelector(".plus")
let minusButton = document.querySelector(".minus")
let multiplyButton = document.querySelector(".multiply")
let divideButton = document.querySelector(".divide")
let clearButton = document.querySelector(".clear")

plusButton.addEventListener("click", function(){
    // let firstInput = pasreInt(numberOne.value)
    result.innerText = parseInt(numberOne.value) + parseInt(numberTwo.value)
})
minusButton.addEventListener("click", function(){
    result.innerText = parseInt(numberOne.value) - parseInt(numberTwo.value)
})
multiplyButton.addEventListener("click", function(){
    result.innerText = parseInt(numberOne.value) * parseInt(numberTwo.value)
})
divideButton.addEventListener("click", function(){
    result.innerText = parseInt(numberOne.value) / parseInt(numberTwo.value)
})
clearButton.addEventListener("click", function(){
    result.innerText = ""
    numberOne.value = ""
    numberTwo.value = ""
})