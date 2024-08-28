// upon button click - display random number
function displayMessage() {
    const randomNumber = Math.floor(Math.random()*100);

    const numberDisplay = document.getElementById('advice');
    numberDisplay.textContent = `The number is: ${randomNumber}`
}

const button = document.getElementById('icon-box');
console.log(button);
button.addEventListener('click', displayMessage);