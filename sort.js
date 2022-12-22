const calendarBtn = document.querySelector(".calendar-btn");
const cancelBtn = document.querySelector(".cancelCalendar-btn");
const calendar = document.querySelector(".calendar");

calendarBtn.addEventListener("click", function () {
    calendar.classList.toggle("hidden");
})

cancelBtn.addEventListener("click", function () {
    calendar.classList.toggle("hidden");
})

const popBtn = document.querySelector(".customize-btn");
const cancelPopBtn = document.querySelector(".cancel-pop-btn");
const pop = document.querySelector(".customize-popup");

popBtn.addEventListener("click", function () {
    pop.classList.toggle("hidden");
})

cancelPopBtn.addEventListener("click", function () {
    pop.classList.toggle("hidden");
})

const folderItems = document.querySelectorAll(".folders li");


folderItems.forEach((folderItem) => {
    folderItem.addEventListener("click", function (e) {
        removeActive();
        e.target.classList.add("active-folder")
    })
})

function removeActive () {
    folderItems.forEach((folderItem) => {
        folderItem.classList.remove("active-folder");
    });
}


const chousenColors = document.querySelectorAll(".choose-color");

chousenColors.forEach((chousenColor) => {
    chousenColor.addEventListener("click", function () {
        if (chousenColor.classList.contains("chousen-color")) {
            chousenColor.classList.remove("chousen-color");
        } else {
            chousenColor.classList.add("chousen-color");
        }

    })
})

