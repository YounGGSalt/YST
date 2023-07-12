let MT = document.querySelector(".MainText");

window.onload = () => {
    let VBG = document.getElementById("VBG");
    let SRC = document.createElement("source");
    SRC.setAttribute("src", "vids/Windranger.mp4");
    // SRC.setAttribute("src", "vids/Juggernaut.mp4");
    SRC.setAttribute("type", "video/mp4");
    VBG.append(SRC);
}


// setTimeout(() => {
//     MT.innerHTML = "Young Stars Team";
// }, 4700)


let PersonBody = document.querySelector(".PersonBody");
let Showbt = document.getElementById("Show");
let Hidebt = document.getElementById("Hide");
let line = document.getElementById("line");

Showbt.onclick = () => {
    PersonBody.classList.add("cl");
    Showbt.classList.add("cl");
    Hidebt.classList.add("cl");
    line.classList.add("cl");
    MT.classList.add("cl");
}

Hidebt.onclick = () => {
    PersonBody.classList.remove("cl");
    Showbt.classList.remove("cl");
    Hidebt.classList.remove("cl");
    line.classList.remove("cl");
    MT.classList.remove("cl");
}


let Person1 = document.getElementById("Person1");
let INF1 = document.getElementById("INF1");
let STA1 = document.getElementById("STA1");
let INB1 = document.getElementById("INB1");
let PBG1 = document.getElementById("PBG1");

let Person2 = document.getElementById("Person2");
let INF2 = document.getElementById("INF2");
let STA2 = document.getElementById("STA2");
let INB2 = document.getElementById("INB2");
let PBG2 = document.getElementById("PBG2");

let Person3 = document.getElementById("Person3");
let INF3 = document.getElementById("INF3");
let STA3 = document.getElementById("STA3");
let INB3 = document.getElementById("INB3");
let PBG3 = document.getElementById("PBG3");

let Person4 = document.getElementById("Person4");
let INF4 = document.getElementById("INF4");
let STA4 = document.getElementById("STA4");
let INB4 = document.getElementById("INB4");
let PBG4 = document.getElementById("PBG4");

let Person5 = document.getElementById("Person5");
let INF5 = document.getElementById("INF5");
let STA5 = document.getElementById("STA5");
let INB5 = document.getElementById("INB5");
let PBG5 = document.getElementById("PBG5");

let SteamAccount1 = document.querySelector(".SteamAccount1");
let SteamAccount2 = document.querySelector(".SteamAccount2");
let SteamAccount3 = document.querySelector(".SteamAccount3");
let SteamAccount4 = document.querySelector(".SteamAccount4");
let SteamAccount5 = document.querySelector(".SteamAccount5");

let AccountDetails1 = document.querySelector(".AccountDetails1");
let AccountDetails2 = document.querySelector(".AccountDetails2");
let AccountDetails3 = document.querySelector(".AccountDetails3");
let AccountDetails4 = document.querySelector(".AccountDetails4");
let AccountDetails5 = document.querySelector(".AccountDetails5");

Person1.addEventListener("mouseover", () => {
    Person1.classList.add("cl");
    PBG1.classList.add("cl");
})
Person1.addEventListener("mouseout", () => {
    Person1.classList.remove("cl");
    PBG1.classList.remove("cl");
})
Person1.addEventListener("click", () => {
    STA1.classList.add("cl");
    STA2.classList.add("cl");
    STA3.classList.add("cl");
    STA4.classList.add("cl");
    STA5.classList.add("cl");
    INB1.classList.add("cl");
    INB2.classList.add("cl");
    INB3.classList.add("cl");
    INB4.classList.add("cl");
    INB5.classList.add("cl");
    SteamAccount1.classList.add("cl");
    SteamAccount2.classList.add("cl");
    SteamAccount3.classList.add("cl");
    SteamAccount4.classList.add("cl");
    SteamAccount5.classList.add("cl");
    AccountDetails1.classList.add("cl");
    AccountDetails2.classList.add("cl");
    AccountDetails3.classList.add("cl");
    AccountDetails4.classList.add("cl");
    AccountDetails5.classList.add("cl");
    setTimeout(() => {
        INF1.classList.add("cl");
        INF1.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})
INB1.addEventListener("click", () => {
    STA1.classList.add("cl");
    STA2.classList.add("cl");
    STA3.classList.add("cl");
    STA4.classList.add("cl");
    STA5.classList.add("cl");
    INB1.classList.add("cl");
    INB2.classList.add("cl");
    INB3.classList.add("cl");
    INB4.classList.add("cl");
    INB5.classList.add("cl");
    SteamAccount1.classList.add("cl");
    SteamAccount2.classList.add("cl");
    SteamAccount3.classList.add("cl");
    SteamAccount4.classList.add("cl");
    SteamAccount5.classList.add("cl");
    AccountDetails1.classList.add("cl");
    AccountDetails2.classList.add("cl");
    AccountDetails3.classList.add("cl");
    AccountDetails4.classList.add("cl");
    AccountDetails5.classList.add("cl");
    setTimeout(() => {
        INF1.classList.add("cl");
        INF1.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})

Person2.addEventListener("mouseover", () => {
    Person2.classList.add("cl");
    PBG2.classList.add("cl");
})
Person2.addEventListener("mouseout", () => {
    Person2.classList.remove("cl");
    PBG2.classList.remove("cl");
})
Person2.addEventListener("click", () => {
    STA1.classList.add("cl");
    STA2.classList.add("cl");
    STA3.classList.add("cl");
    STA4.classList.add("cl");
    STA5.classList.add("cl");
    INB1.classList.add("cl");
    INB2.classList.add("cl");
    INB3.classList.add("cl");
    INB4.classList.add("cl");
    INB5.classList.add("cl");
    SteamAccount1.classList.add("cl");
    SteamAccount2.classList.add("cl");
    SteamAccount3.classList.add("cl");
    SteamAccount4.classList.add("cl");
    SteamAccount5.classList.add("cl");
    AccountDetails1.classList.add("cl");
    AccountDetails2.classList.add("cl");
    AccountDetails3.classList.add("cl");
    AccountDetails4.classList.add("cl");
    AccountDetails5.classList.add("cl");
    setTimeout(() => {
        INF2.classList.add("cl");
        INF2.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})
INB2.addEventListener("click", () => {
    STA1.classList.add("cl");
    STA2.classList.add("cl");
    STA3.classList.add("cl");
    STA4.classList.add("cl");
    STA5.classList.add("cl");
    INB1.classList.add("cl");
    INB2.classList.add("cl");
    INB3.classList.add("cl");
    INB4.classList.add("cl");
    INB5.classList.add("cl");
    SteamAccount1.classList.add("cl");
    SteamAccount2.classList.add("cl");
    SteamAccount3.classList.add("cl");
    SteamAccount4.classList.add("cl");
    SteamAccount5.classList.add("cl");
    AccountDetails1.classList.add("cl");
    AccountDetails2.classList.add("cl");
    AccountDetails3.classList.add("cl");
    AccountDetails4.classList.add("cl");
    AccountDetails5.classList.add("cl");
    setTimeout(() => {
        INF2.classList.add("cl");
        INF2.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})

Person3.addEventListener("mouseover", () => {
    Person3.classList.add("cl");
    PBG3.classList.add("cl");
})
Person3.addEventListener("mouseout", () => {
    Person3.classList.remove("cl");
    PBG3.classList.remove("cl");
})
Person3.addEventListener("click", () => {
    STA1.classList.add("cl");
    STA2.classList.add("cl");
    STA3.classList.add("cl");
    STA4.classList.add("cl");
    STA5.classList.add("cl");
    INB1.classList.add("cl");
    INB2.classList.add("cl");
    INB3.classList.add("cl");
    INB4.classList.add("cl");
    INB5.classList.add("cl");
    SteamAccount1.classList.add("cl");
    SteamAccount2.classList.add("cl");
    SteamAccount3.classList.add("cl");
    SteamAccount4.classList.add("cl");
    SteamAccount5.classList.add("cl");
    AccountDetails1.classList.add("cl");
    AccountDetails2.classList.add("cl");
    AccountDetails3.classList.add("cl");
    AccountDetails4.classList.add("cl");
    AccountDetails5.classList.add("cl");
    setTimeout(() => {
        INF3.classList.add("cl");
        INF3.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})
INB3.addEventListener("click", () => {
    STA1.classList.add("cl");
    STA2.classList.add("cl");
    STA3.classList.add("cl");
    STA4.classList.add("cl");
    STA5.classList.add("cl");
    INB1.classList.add("cl");
    INB2.classList.add("cl");
    INB3.classList.add("cl");
    INB4.classList.add("cl");
    INB5.classList.add("cl");
    SteamAccount1.classList.add("cl");
    SteamAccount2.classList.add("cl");
    SteamAccount3.classList.add("cl");
    SteamAccount4.classList.add("cl");
    SteamAccount5.classList.add("cl");
    AccountDetails1.classList.add("cl");
    AccountDetails2.classList.add("cl");
    AccountDetails3.classList.add("cl");
    AccountDetails4.classList.add("cl");
    AccountDetails5.classList.add("cl");
    setTimeout(() => {
        INF3.classList.add("cl");
        INF3.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})

Person4.addEventListener("mouseover", () => {
    Person4.classList.add("cl");
    PBG4.classList.add("cl");
})
Person4.addEventListener("mouseout", () => {
    Person4.classList.remove("cl");
    PBG4.classList.remove("cl");
})
Person4.addEventListener("click", () => {
    STA1.classList.add("cl");
    STA2.classList.add("cl");
    STA3.classList.add("cl");
    STA4.classList.add("cl");
    STA5.classList.add("cl");
    INB1.classList.add("cl");
    INB2.classList.add("cl");
    INB3.classList.add("cl");
    INB4.classList.add("cl");
    INB5.classList.add("cl");
    SteamAccount1.classList.add("cl");
    SteamAccount2.classList.add("cl");
    SteamAccount3.classList.add("cl");
    SteamAccount4.classList.add("cl");
    SteamAccount5.classList.add("cl");
    AccountDetails1.classList.add("cl");
    AccountDetails2.classList.add("cl");
    AccountDetails3.classList.add("cl");
    AccountDetails4.classList.add("cl");
    AccountDetails5.classList.add("cl");
    setTimeout(() => {
        INF4.classList.add("cl");
        INF4.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})
INB4.addEventListener("click", () => {
    STA1.classList.add("cl");
    STA2.classList.add("cl");
    STA3.classList.add("cl");
    STA4.classList.add("cl");
    STA5.classList.add("cl");
    INB1.classList.add("cl");
    INB2.classList.add("cl");
    INB3.classList.add("cl");
    INB4.classList.add("cl");
    INB5.classList.add("cl");
    SteamAccount1.classList.add("cl");
    SteamAccount2.classList.add("cl");
    SteamAccount3.classList.add("cl");
    SteamAccount4.classList.add("cl");
    SteamAccount5.classList.add("cl");
    AccountDetails1.classList.add("cl");
    AccountDetails2.classList.add("cl");
    AccountDetails3.classList.add("cl");
    AccountDetails4.classList.add("cl");
    AccountDetails5.classList.add("cl");
    setTimeout(() => {
        INF4.classList.add("cl");
        INF4.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})

Person5.addEventListener("mouseover", () => {
    Person5.classList.add("cl");
    PBG5.classList.add("cl");
})
Person5.addEventListener("mouseout", () => {
    Person5.classList.remove("cl");
    PBG5.classList.remove("cl");
})
Person5.addEventListener("click", () => {
    STA1.classList.add("cl");
    STA2.classList.add("cl");
    STA3.classList.add("cl");
    STA4.classList.add("cl");
    STA5.classList.add("cl");
    INB1.classList.add("cl");
    INB2.classList.add("cl");
    INB3.classList.add("cl");
    INB4.classList.add("cl");
    INB5.classList.add("cl");
    SteamAccount1.classList.add("cl");
    SteamAccount2.classList.add("cl");
    SteamAccount3.classList.add("cl");
    SteamAccount4.classList.add("cl");
    SteamAccount5.classList.add("cl");
    AccountDetails1.classList.add("cl");
    AccountDetails2.classList.add("cl");
    AccountDetails3.classList.add("cl");
    AccountDetails4.classList.add("cl");
    AccountDetails5.classList.add("cl");
    setTimeout(() => {
        INF5.classList.add("cl");
        INF5.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})
INB5.addEventListener("click", () => {
    STA1.classList.add("cl");
    STA2.classList.add("cl");
    STA3.classList.add("cl");
    STA4.classList.add("cl");
    STA5.classList.add("cl");
    INB1.classList.add("cl");
    INB2.classList.add("cl");
    INB3.classList.add("cl");
    INB4.classList.add("cl");
    INB5.classList.add("cl");
    SteamAccount1.classList.add("cl");
    SteamAccount2.classList.add("cl");
    SteamAccount3.classList.add("cl");
    SteamAccount4.classList.add("cl");
    SteamAccount5.classList.add("cl");
    AccountDetails1.classList.add("cl");
    AccountDetails2.classList.add("cl");
    AccountDetails3.classList.add("cl");
    AccountDetails4.classList.add("cl");
    AccountDetails5.classList.add("cl");
    setTimeout(() => {
        INF5.classList.add("cl");
        INF5.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})