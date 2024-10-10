
const inputField = document.getElementById("username");
const buttons = document.querySelectorAll("button");
let currentInput = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;
        if (button.classList.contains("ac")) {

            currentInput = "";
            inputField.value = "";
        } else if (button.classList.contains("can")) {
            currentInput = currentInput.slice(0, -1);
            inputField.value = currentInput;
        } else if (buttonValue === "=") {
            try {
                currentInput = eval(currentInput); 
                inputField.value = currentInput;
            } catch (error) {
                inputField.value = "Error"; 
            }
        } 
        else if (buttonValue === "%") {
            currentInput = (eval(currentInput) / 100).toString();
            inputField.value = currentInput;
        }
         else {
            currentInput += buttonValue;
            inputField.value = currentInput;
        }
    });
});
