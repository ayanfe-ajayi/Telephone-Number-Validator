const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const test = ["1 555)555-5555", "555)-555-5555", "(555-555-5555", "1 555-555-5555", "1 (555) 555-5555", "1(555)555-5555", "1 555 555 5555", "5555555555", "555-555-5555", "(555)555-5555"];

const validNumberRegex = /^1?\s?((\([0-9][0-9][0-9]\))|([0-9][0-9][0-9]))([\s\-])?([0-9][0-9][0-9])([\s\-])?([0-9][0-9][0-9][0-9])$/

test.forEach((number) => {
    const match = validNumberRegex.test(number);
    console.log(number, "matched?", match);
});

const checkUserInput = (str) => {
    if (str === "") {
        alert("Please provide a phone number");
    }else if (validNumberRegex.test(str)){
        resultsDiv.innerHTML += `<p class="valid">Valid US number: ${str}</p>`
    } else {
        resultsDiv.innerHTML += `<p class="invalid">Invalid US number: ${str}</p>`
    }
};
const displayResult = () => {
    checkUserInput(userInput.value);
    userInput.value ="";
};
const clearResult = () => {
    resultsDiv.innerHTML = "";

}

checkBtn.addEventListener("click", displayResult);
userInput.addEventListener("keydown", (e) => {
    if (e.key === 'Enter'){
        displayResult()
    }
});
clearBtn.addEventListener("click", clearResult)


