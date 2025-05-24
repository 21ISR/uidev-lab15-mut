const display = document.querySelector('.display');

let batons = document.querySelectorAll('.button');

function handleButton(event) {
    console.log(display);

    if (event.target.textContent === 'AC') {
        display.textContent = 0
    } else if (event.target.textContent === '×') {
        display.textContent += "×"
    } else if (event.target.textContent === '÷') {
        display.textContent += "÷"
    } else if (event.target.textContent === '+/-') {
        display.textContent = eval(display.textContent)
        if (display.textContent < 0) {
            display.textContent = display.textContent.slice(1)
        } else {
            display.textContent = "-" + display.textContent
        }
    } else if (event.target.textContent === '%') {
        display.textContent = eval(display.textContent) + "%"
    } else if (event.target.textContent === '=') {
        const result = eval(display.textContent.replaceAll("×", "*").replaceAll("÷", "/"))
        console.log(result);
        display.textContent = result
    } else {
        if (display.textContent === "0" && event.target.textContent !== ".") {
            display.textContent = event.target.textContent
        } else {
            display.textContent += event.target.textContent
        }
    }

}

batons.forEach(baton => {
    baton.addEventListener('click', handleButton)
})