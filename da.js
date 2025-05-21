const display = document.querySelectorAll('.display');

let batons = document.querySelectorAll('.button');


// batons.map((button) => {
//     button.addEventListener("click", () => {
//         if (button === 'AC') {

//         }


//     });
// });

function handleButton(event) {
    console.log(event.target.textContent);

    if (event === 'AC') {
        display.textContent = 0
    } else if (event === '+') {
        display.textContent = eval(number1 + number2)
    } else if (event === '-') {
         display.textContent = eval(number1 - number2)
    }
}

batons.forEach(baton => {
    baton.addEventListener('click', handleButton)
})