accordion1 = document.getElementById("accordion-1")
accordion2 = document.getElementById("accordion-2")
accordion3 = document.getElementById("accordion-3")

arrow1 = document.getElementById("product-mobile")
arrow2 = document.getElementById("company-mobile")
arrow3 = document.getElementById("connect-mobile")

function openNav() {
    document.getElementById("sidebar").style.display = "block";
    document.querySelector(".icon-hamburger").style.opacity = "0"
    document.querySelector(".icon-close").style.opacity = "1"
}

function closeNav() {
    document.getElementById("sidebar").style.display = "none";
    document.querySelector(".icon-hamburger").style.opacity = "1"
    document.querySelector(".icon-close").style.opacity = "0"
}

function toggleFirstAccordion() {
    accordion1.classList.toggle("active")

    if (accordion1.classList.contains("active")) {
        accordion2.classList.remove("active")
        accordion3.classList.remove("active")
        arrow2.classList.remove("active")
        arrow3.classList.remove("active")
    }
}


function toggleSecondAccordion() {
    accordion2.classList.toggle("active")
    
    if (accordion2.classList.contains("active")) {
        accordion3.classList.remove("active")
        arrow3.classList.remove("active")
    }
}

function toggleThirdAccordion() {
    accordion3.classList.toggle("active")
}


function turnArrow1() {
    arrow1.classList.toggle("active") 
}

function turnArrow2() {
    arrow2.classList.toggle("active")
}
function turnArrow3() {
    arrow3.classList.toggle("active")
}


