const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolarToday = 5.2

    const convertdValue = inputCurrencyValue / dolarToday

    console.log(convertdValue)
}

convertButton.addEventListener("click" , convertValues)