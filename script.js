const currencyInputs = document.querySelectorAll(".currency-number");
currencyInputs.forEach((currencyInput) => {
    const currencyInputWrapper = currencyInput.parentElement;
    const saveCurrencyPop = currencyInputWrapper.querySelector(".save-currency");
    const closeButton = currencyInputWrapper.querySelector(".close-save");

    closeButton.addEventListener("click", function () {
        saveCurrencyPop.classList.add("hidden");
    });

    currencyInput.addEventListener("focus", function () {
        saveCurrencyPop.classList.remove("hidden");
    });
})



const keywordsTextarea = document.querySelector(".keywords-textarea");
const productsTextarea = document.querySelector(".products-textarea");

const keywordsTextLink = document.querySelector(".keywords-text-area");
const productsTextLink = document.querySelector(".products-text-area");
const textAreaLinks = document.querySelectorAll(".text-area-link");

const matchType = document.querySelector(".match-type-wrapper");
const filterBy = document.querySelector(".filter-by"); 

const activeTextLink = document.querySelector(".active-text-area");

textAreaLinks.forEach((textAreaLink) => {
    textAreaLink.addEventListener("click", function (e) {

        if (textAreaLink.classList.contains("active-text-area")) {
            return false
        } else {
            e.target.classList.add("active-text-area");

            if (e.target == keywordsTextLink) {
                productsTextLink.classList.remove("active-text-area");
            } else if (e.target == productsTextLink) {
                keywordsTextLink.classList.remove("active-text-area");
            }
        }

        if (textAreaLink.classList.contains("keywords-text-area")) {
            keywordsTextarea.classList.remove("display");
            productsTextarea.classList.add("display");
            matchType.classList.remove("display");
            filterBy.classList.add("display");
        } else if (textAreaLink.classList.contains("products-text-area")) {
            productsTextarea.classList.remove("display");
            keywordsTextarea.classList.add("display");
            matchType.classList.add("display");
            filterBy.classList.remove("display");
        }
        
    })
    
})

const topLabels = document.querySelectorAll(".label-check");

topLabels.forEach((topLabel) => {
    topLabel.addEventListener("click", function () {
        topLabel.classList.toggle("font-semibold");
    })
})


var txs = document.querySelectorAll('textarea');
var tx = document.querySelector('textarea');
for (var i = 0; i < tx.length; i++) {
    txs.forEach((tx) => {
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
        tx[i].addEventListener("input", OnInput, false);
    })

}

function OnInput(e) {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}


const labelForInputs = document.querySelectorAll(".label-for-check");

labelForInputs.forEach((labelForInput) => {
    labelForInput.addEventListener("click", function () {
        labelForInput.classList.toggle("font-semibold");

        wrap = labelForInput.parentElement;
        parentWrap = wrap.parentElement;
        playIcon = parentWrap.querySelector(".fa-play");

        if (labelForInput.classList.contains("font-semibold")) {
            playIcon.classList.remove("hide-arrow");
            parentWrap.classList.add("active-arrow");
        } else {
            parentWrap.classList.remove("active-arrow");
            playIcon.classList.add("hide-arrow");
        }
    
    })
})
