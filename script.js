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
let INFB1 = document.querySelector(".INFB1");
let PBG1 = document.getElementById("PBG1");

let Person2 = document.getElementById("Person2");
let INF2 = document.getElementById("INF2");
let STA2 = document.getElementById("STA2");
let INB2 = document.getElementById("INB2");
let INFB2 = document.querySelector(".INFB2");
let PBG2 = document.getElementById("PBG2");

let Person3 = document.getElementById("Person3");
let INF3 = document.getElementById("INF3");
let STA3 = document.getElementById("STA3");
let INB3 = document.getElementById("INB3");
let INFB3 = document.querySelector(".INFB3");
let PBG3 = document.getElementById("PBG3");

let Person4 = document.getElementById("Person4");
let INF4 = document.getElementById("INF4");
let STA4 = document.getElementById("STA4");
let INB4 = document.getElementById("INB4");
let INFB4 = document.querySelector(".INFB4");
let PBG4 = document.getElementById("PBG4");

let Person5 = document.getElementById("Person5");
let INF5 = document.getElementById("INF5");
let STA5 = document.getElementById("STA5");
let INB5 = document.getElementById("INB5");
let INFB5 = document.querySelector(".INFB5");
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
    INFB1.classList.add("cl");
    Showbt.classList.add("cl");
    Hidebt.classList.remove("cl");
    setTimeout(() => {
        INF1.classList.add("cl");
        INF1.style.cssText = "box-shadow: 0px 0px 10px 3px rgba(255, 0, 85, 0.5);";
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
    INFB1.classList.add("cl");
    Showbt.classList.add("cl");
    Hidebt.classList.remove("cl");
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
    INFB2.classList.add("cl");
    Showbt.classList.add("cl");
    Hidebt.classList.remove("cl");
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
    INFB2.classList.add("cl");
    Showbt.classList.add("cl");
    Hidebt.classList.remove("cl");
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
    INFB3.classList.add("cl");
    Showbt.classList.add("cl");
    Hidebt.classList.remove("cl");
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
    INFB3.classList.add("cl");
    Showbt.classList.add("cl");
    Hidebt.classList.remove("cl");
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
    INFB4.classList.add("cl");
    Showbt.classList.add("cl");
    Hidebt.classList.remove("cl");
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
    INFB4.classList.add("cl");
    Showbt.classList.add("cl");
    Hidebt.classList.remove("cl");
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
    INFB5.classList.add("cl");
    Showbt.classList.add("cl");
    Hidebt.classList.remove("cl");
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
    INFB5.classList.add("cl");
    Showbt.classList.add("cl");
    Hidebt.classList.remove("cl");
    setTimeout(() => {
        INF5.classList.add("cl");
        INF5.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})



let DotaInfo = true;

let Matches1 = document.getElementById("Matches1");
let Wins1 = document.getElementById("Wins1");
let Loses1 = document.getElementById("Loses1");
let Hours1 = document.getElementById("Hours1");
let InGameDate1 = document.getElementById("InGameDate1");
let MMR1 = document.getElementById("MMR1");
let WinStreak1 = document.getElementById("WinStreak1");
let WinRate1 = document.getElementById("WinRate1");
let BattleCups1 = document.getElementById("BattleCups1");

if (DotaInfo === true) {
    let Matches = 1431+420;
    let Wins = 701+201;
    let Loses = Matches-Wins;
    let Hours = 2130+525;
    let InGameDate = "20.10.2021";
    let MMR = 1280;
    let WinStreak = 14;
    let WinRate = Wins/Matches*100;
    let BattleCups = 0;

    Matches1.innerHTML = Matches;
    Wins1.innerHTML = Wins;
    Loses1.innerHTML = Loses;
    Hours1.innerHTML = Hours;
    InGameDate1.innerHTML = InGameDate;
    MMR1.innerHTML = MMR;
    WinStreak1.innerHTML = WinStreak;
    WinRate1.innerHTML = WinRate.toFixed(2) + "%";
    BattleCups1.innerHTML = BattleCups;
}



let Matches2 = document.getElementById("Matches2");
let Wins2 = document.getElementById("Wins2");
let Loses2 = document.getElementById("Loses2");
let Hours2 = document.getElementById("Hours2");
let InGameDate2 = document.getElementById("InGameDate2");
let MMR2 = document.getElementById("MMR2");
let WinStreak2 = document.getElementById("WinStreak2");
let WinRate2 = document.getElementById("WinRate2");
let BattleCups2 = document.getElementById("BattleCups2");

if (DotaInfo === true) {
    let Matches = 364;
    let Wins = 176;
    let Loses = Matches-Wins;
    let Hours = 533;
    let InGameDate = "14.01.2021";
    let MMR = 1390;
    let WinStreak = 7;
    let WinRate = Wins/Matches*100;
    let BattleCups = 0;

    Matches2.innerHTML = Matches;
    Wins2.innerHTML = Wins;
    Loses2.innerHTML = Loses;
    Hours2.innerHTML = Hours;
    InGameDate2.innerHTML = InGameDate;
    MMR2.innerHTML = MMR;
    WinStreak2.innerHTML = WinStreak;
    WinRate2.innerHTML = WinRate.toFixed(2) + "%";
    BattleCups2.innerHTML = BattleCups;
}



let Matches3 = document.getElementById("Matches3");
let Wins3 = document.getElementById("Wins3");
let Loses3 = document.getElementById("Loses3");
let Hours3 = document.getElementById("Hours3");
let InGameDate3 = document.getElementById("InGameDate3");
let MMR3 = document.getElementById("MMR3");
let WinStreak3 = document.getElementById("WinStreak3");
let WinRate3 = document.getElementById("WinRate3");
let BattleCups3 = document.getElementById("BattleCups3");

if (DotaInfo === true) {
    let Matches = "";
    let Wins = "";
    let Loses = Matches-Wins;
    let Hours = "";
    let InGameDate = "";
    let MMR = "";
    let WinStreak = "";
    let WinRate = Wins/Matches*100;
    let BattleCups = 0;

    Matches3.innerHTML = Matches;
    Wins3.innerHTML = Wins;
    Loses3.innerHTML = Loses;
    Hours3.innerHTML = Hours;
    InGameDate3.innerHTML = InGameDate;
    MMR3.innerHTML = MMR;
    WinStreak3.innerHTML = WinStreak;
    WinRate3.innerHTML = WinRate.toFixed(2) + "%";
    BattleCups3.innerHTML = BattleCups;
}



let Matches4 = document.getElementById("Matches4");
let Wins4 = document.getElementById("Wins4");
let Loses4 = document.getElementById("Loses4");
let Hours4 = document.getElementById("Hours4");
let InGameDate4 = document.getElementById("InGameDate4");
let MMR4 = document.getElementById("MMR4");
let WinStreak4 = document.getElementById("WinStreak4");
let WinRate4 = document.getElementById("WinRate4");
let BattleCups4 = document.getElementById("BattleCups4");

if (DotaInfo === true) {
    let Matches = 205+334;
    let Wins = 96+151;
    let Loses = Matches-Wins;
    let Hours = 313+383;
    let InGameDate = "23.10.2022";
    let MMR = 1530;
    let WinStreak = 7;
    let WinRate = Wins/Matches*100;
    let BattleCups = 0;

    Matches4.innerHTML = Matches;
    Wins4.innerHTML = Wins;
    Loses4.innerHTML = Loses;
    Hours4.innerHTML = Hours;
    InGameDate4.innerHTML = InGameDate;
    MMR4.innerHTML = MMR;
    WinStreak4.innerHTML = WinStreak;
    WinRate4.innerHTML = WinRate.toFixed(2) + "%";
    BattleCups4.innerHTML = BattleCups;
}



let Matches5 = document.getElementById("Matches5");
let Wins5 = document.getElementById("Wins5");
let Loses5 = document.getElementById("Loses5");
let Hours5 = document.getElementById("Hours5");
let InGameDate5 = document.getElementById("InGameDate5");
let MMR5 = document.getElementById("MMR5");
let WinStreak5 = document.getElementById("WinStreak5");
let WinRate5 = document.getElementById("WinRate5");
let BattleCups5 = document.getElementById("BattleCups5");

if (DotaInfo === true) {
    let Matches = "";
    let Wins = "";
    let Loses = Matches-Wins;
    let Hours = "";
    let InGameDate = "";
    let MMR = "";
    let WinStreak = "";
    let WinRate = Wins/Matches*100;
    let BattleCups = "";

    Matches5.innerHTML = Matches;
    Wins5.innerHTML = Wins;
    Loses5.innerHTML = Loses;
    Hours5.innerHTML = Hours;
    InGameDate5.innerHTML = InGameDate;
    MMR5.innerHTML = MMR;
    WinStreak5.innerHTML = WinStreak;
    WinRate5.innerHTML = WinRate.toFixed(2) + "%";
    BattleCups5.innerHTML = BattleCups;
}
