const OCbt = document.querySelector(".OCbt");
const Cbt = document.querySelector(".Cbt");
const PersonBody = document.querySelector(".PersonBody");

OCbt.onclick = () => {
    PersonBody.classList.add("cl");
    Cbt.classList.add("cl");
    OCbt.classList.add("cl");
    NWBody.classList.remove("cl");
}

Cbt.onclick = () => {
    PersonBody.classList.remove("cl");
    Cbt.classList.remove("cl");
    OCbt.classList.remove("cl");
}

const PL1 = document.querySelector(".PL1");

let iC = document.getElementById("iC");
let NetWorksBt = document.querySelector(".NetWorks");
let NWBody = document.querySelector(".NWBody");
let underLine = document.querySelector(".underLine");
    NetWorksBt.onclick = () => {
        NWBody.classList.toggle("cl");
    }
let P1 = document.querySelector(".P1");
let P2 = document.querySelector(".P2");
let P3 = document.querySelector(".P3");
let P4 = document.querySelector(".P4");
let P5 = document.querySelector(".P5");
let P6 = document.querySelector(".P6");

function iChange() {
    localStorage.setItem("theme", "dark");
    iC.innerHTML = '<i class="fa-solid fa-moon"></i>';
    // Changes (Dark)
    PL1.classList.add("dark");
    iC.classList.add("dark");
    NetWorksBt.classList.add("dark");
    P1.classList.add("dark");
    P2.classList.add("dark");
    P3.classList.add("dark");
    P4.classList.add("dark");
    P5.classList.add("dark");
    P6.classList.add("dark");
    OCbt.classList.add("dark");
    NWBody.classList.add("dark");
    underLine.classList.add("dark");
    iC.onclick = () => {
        localStorage.setItem("theme", "light");
        iC.innerHTML = '<i class="fa-solid fa-sun"></i>';
        // Changes (Light)
        PL1.classList.remove("dark");
        iC.classList.remove("dark");
        NetWorksBt.classList.remove("dark");
        P1.classList.remove("dark");
        P2.classList.remove("dark");
        P3.classList.remove("dark");
        P4.classList.remove("dark");
        P5.classList.remove("dark");
        P6.classList.remove("dark");
        OCbt.classList.remove("dark");
        NWBody.classList.remove("dark");
        underLine.classList.remove("dark");
        iC.onclick = () => {
            iChange();
        }
    }
}

iC.onclick = () => {
    iChange();
}

let theme = localStorage.getItem("theme");

if (theme === "light") {
    iC.innerHTML = '<i class="fa-solid fa-sun"></i>';
    iC.classList.remove("cl");
    // Changes (Light)
    PL1.classList.remove("dark");
    iC.classList.remove("dark");
    NetWorksBt.classList.remove("dark");
    P1.classList.remove("dark");
    P2.classList.remove("dark");
    P3.classList.remove("dark");
    P4.classList.remove("dark");
    P5.classList.remove("dark");
    P6.classList.remove("dark");
    OCbt.classList.remove("dark");
    NWBody.classList.remove("dark");
    underLine.classList.remove("dark");
    iC.onclick = () => {
        iChange();
    }
}

if (theme === "dark") {
    iC.innerHTML = '<i class="fa-solid fa-moon"></i>';
    iC.classList.add("cl");
    // Changes (Dark)
    PL1.classList.add("dark");
    iC.classList.add("dark");
    NetWorksBt.classList.add("dark");
    P1.classList.add("dark");
    P2.classList.add("dark");
    P3.classList.add("dark");
    P4.classList.add("dark");
    P5.classList.add("dark");
    P6.classList.add("dark");
    OCbt.classList.add("dark");
    NWBody.classList.add("dark");
    underLine.classList.add("dark");
    iC.onclick = () => {
        localStorage.setItem("theme", "light");
        iC.innerHTML = '<i class="fa-solid fa-sun"></i>';
        iC.classList.remove("cl");
        // Changes (Light)
        PL1.classList.remove("dark");
        iC.classList.remove("dark");
        NetWorksBt.classList.remove("dark");
        P1.classList.remove("dark");
        P2.classList.remove("dark");
        P3.classList.remove("dark");
        P4.classList.remove("dark");
        P5.classList.remove("dark");
        P6.classList.remove("dark");
        OCbt.classList.remove("dark");
        NWBody.classList.remove("dark");
        underLine.classList.remove("dark");
        iC.onclick = () => {
            iChange();
        }
    }
}
