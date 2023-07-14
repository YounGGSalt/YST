let stat = false;
let loadscreen = document.getElementById("loadscr");
let loadText = document.querySelector(".LoadText");
let loading = document.querySelector(".loading");

window.onload = function loadscr() {
    stat = !stat;

    if (stat) {
        function LoadDiv(a, b) {
            let int = setInterval(() => {
                loading.style.width = a++ + "px";
                if (a == b) {
                    clearInterval(int);
                    setTimeout(() => {
                        loadText.classList.add("cl1");
                        loadText.innerHTML = "COMPLETED";
                    }, 500)
                };
            }, 5)
        }
        
        LoadDiv(0, 200);

        setTimeout(() => {
            loadscreen.classList.add("cl");
            loadText.classList.add("cl");
        }, 2500)

        if (now.format("HH") >= 0 && now.format("HH") <= 12) {
            let VBG = document.getElementById("VBG");
            let SRC = document.createElement("source");
            SRC.setAttribute("src", "vids/Juggernaut.mp4");
            SRC.setAttribute("type", "video/mp4");
            VBG.append(SRC);
        } else {
            let VBG = document.getElementById("VBG");
            let SRC = document.createElement("source");
            SRC.setAttribute("src", "vids/Windranger.mp4");
            SRC.setAttribute("type", "video/mp4");
            VBG.append(SRC);
        }
    }
}

let Hint = document.getElementById("Hint");
let HintMT = document.getElementById("HintMT");

let MT = document.querySelector(".MainText");

now = moment();

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
    Person1.classList.add("cl1");
    Person2.classList.add("cl1");
    Person3.classList.add("cl1");
    Person4.classList.add("cl1");
    Person5.classList.add("cl1");
}

Hidebt.onclick = () => {
    PersonBody.classList.remove("cl");
    Showbt.classList.remove("cl");
    Hidebt.classList.remove("cl");
    line.classList.remove("cl");
    MT.classList.remove("cl");
    Person1.classList.remove("cl1");
    Person2.classList.remove("cl1");
    Person3.classList.remove("cl1");
    Person4.classList.remove("cl1");
    Person5.classList.remove("cl1");
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
    Person1.classList.add("cl2");
})
Person1.addEventListener("mouseout", () => {
    Person1.classList.remove("cl");
    PBG1.classList.remove("cl");
    Person1.classList.remove("cl2");
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
    setTimeout(() => {
        INF1.classList.add("cl");
        INF1.style.cssText = "box-shadow: 0px 0px 10px 5px rgba(255, 0, 85, 0.5);";
    }, 500)
})
Person2.addEventListener("mouseover", () => {
    Person2.classList.add("cl");
    PBG2.classList.add("cl");
    Person2.classList.add("cl2");
})
Person2.addEventListener("mouseout", () => {
    Person2.classList.remove("cl");
    PBG2.classList.remove("cl");
    Person2.classList.remove("cl2");
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
    setTimeout(() => {
        INF2.classList.add("cl");
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
    setTimeout(() => {
        INF2.classList.add("cl");
    }, 500)
})

Person3.addEventListener("mouseover", () => {
    Person3.classList.add("cl");
    PBG3.classList.add("cl");
    Person3.classList.add("cl2");
})
Person3.addEventListener("mouseout", () => {
    Person3.classList.remove("cl");
    PBG3.classList.remove("cl");
    Person3.classList.remove("cl2");
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
    setTimeout(() => {
        INF3.classList.add("cl");
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
    setTimeout(() => {
        INF3.classList.add("cl");
    }, 500)
})

Person4.addEventListener("mouseover", () => {
    Person4.classList.add("cl");
    PBG4.classList.add("cl");
    Person4.classList.add("cl2");
})
Person4.addEventListener("mouseout", () => {
    Person4.classList.remove("cl");
    PBG4.classList.remove("cl");
    Person4.classList.remove("cl2");
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
    setTimeout(() => {
        INF4.classList.add("cl");
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
    setTimeout(() => {
        INF4.classList.add("cl");
    }, 500)
})

Person5.addEventListener("mouseover", () => {
    Person5.classList.add("cl");
    PBG5.classList.add("cl");
    Person5.classList.add("cl2");
})
Person5.addEventListener("mouseout", () => {
    Person5.classList.remove("cl");
    PBG5.classList.remove("cl");
    Person5.classList.remove("cl2");
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
    setTimeout(() => {
        INF5.classList.add("cl");
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
    let MMR = 1280+1;
    let WinStreak = 20;
    let WinRate = Wins/Matches*100;
    let BattleCups = 0;

    Matches1.innerHTML = Matches;
    Wins1.innerHTML = Wins;
    Loses1.innerHTML = Loses;
    Hours1.innerHTML = Hours;
    InGameDate1.innerHTML = InGameDate;
    let RankIMG1 = document.getElementById("RankIMG1");
    if (MMR <= 610) {
        RankIMG1.style.backgroundImage = "url(img/Ranks/1.png)";
    } else if (MMR >= 770 && MMR <= 1540) {
        RankIMG1.style.backgroundImage = "url(img/Ranks/2.png)";
    } else if (MMR >= 1540 && MMR <= 2310) {
        RankIMG1.style.backgroundImage = "url(img/Ranks/3.png)";
    } else if (MMR >= 2310 && MMR <= 3080) {
        RankIMG1.style.backgroundImage = "url(img/Ranks/4.png)";
    } else if (MMR >= 3080 && MMR <= 3850) {
        RankIMG1.style.backgroundImage = "url(img/Ranks/5.png)";
    } else if (MMR >= 3850 && MMR <= 4620) {
        RankIMG1.style.backgroundImage = "url(img/Ranks/6.png)";
    } else if (MMR >= 4620 && MMR <= 5420) {
        RankIMG1.style.backgroundImage = "url(img/Ranks/7.png)";
    } else if (MMR === "On calibration") {
        RankIMG1.style.backgroundImage = "url(img/Ranks/0.png)";
    }
    RankIMG1.addEventListener("mouseover", () => {
        Hint.classList.add("cl");
        HintMT.innerHTML = MMR-1;
    })
    RankIMG1.addEventListener("mouseout", () => {
        Hint.classList.remove("cl");
        HintMT.innerHTML = MMR-1;
    })
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
    let MMR = 1390+1;
    let WinStreak = 7;
    let WinRate = Wins/Matches*100;
    let BattleCups = 0;

    Matches2.innerHTML = Matches;
    Wins2.innerHTML = Wins;
    Loses2.innerHTML = Loses;
    Hours2.innerHTML = Hours;
    InGameDate2.innerHTML = InGameDate;
    let RankIMG2 = document.getElementById("RankIMG2");
    if (MMR <= 610) {
        RankIMG2.style.backgroundImage = "url(img/Ranks/1.png)";
    } else if (MMR >= 770 && MMR <= 1540) {
        RankIMG2.style.backgroundImage = "url(img/Ranks/2.png)";
    } else if (MMR >= 1540 && MMR <= 2310) {
        RankIMG2.style.backgroundImage = "url(img/Ranks/3.png)";
    } else if (MMR >= 2310 && MMR <= 3080) {
        RankIMG2.style.backgroundImage = "url(img/Ranks/4.png)";
    } else if (MMR >= 3080 && MMR <= 3850) {
        RankIMG2.style.backgroundImage = "url(img/Ranks/5.png)";
    } else if (MMR >= 3850 && MMR <= 4620) {
        RankIMG2.style.backgroundImage = "url(img/Ranks/6.png)";
    } else if (MMR >= 4620 && MMR <= 5420) {
        RankIMG2.style.backgroundImage = "url(img/Ranks/7.png)";
    } else if (MMR === "On calibration") {
        RankIMG2.style.backgroundImage = "url(img/Ranks/0.png)";
    }
    RankIMG2.addEventListener("mouseover", () => {
        Hint.classList.add("cl");
        HintMT.innerHTML = MMR-1;
    })
    RankIMG2.addEventListener("mouseout", () => {
        Hint.classList.remove("cl");
        HintMT.innerHTML = MMR-1;
    })
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
    let Matches = 767;
    let Wins = 354;
    let Loses = Matches-Wins;
    let Hours = 890;
    let InGameDate = "10.12.2021";
    let MMR = "On calibration";
    let WinStreak = 6;
    let WinRate = Wins/Matches*100;
    let BattleCups = 0;

    Matches3.innerHTML = Matches;
    Wins3.innerHTML = Wins;
    Loses3.innerHTML = Loses;
    Hours3.innerHTML = Hours;
    InGameDate3.innerHTML = InGameDate;
    let RankIMG3 = document.getElementById("RankIMG3");
    if (MMR <= 610) {
        RankIMG3.style.backgroundImage = "url(img/Ranks/1.png)";
    } else if (MMR >= 770 && MMR <= 1540) {
        RankIMG3.style.backgroundImage = "url(img/Ranks/2.png)";
    } else if (MMR >= 1540 && MMR <= 2310) {
        RankIMG3.style.backgroundImage = "url(img/Ranks/3.png)";
    } else if (MMR >= 2310 && MMR <= 3080) {
        RankIMG3.style.backgroundImage = "url(img/Ranks/4.png)";
    } else if (MMR >= 3080 && MMR <= 3850) {
        RankIMG3.style.backgroundImage = "url(img/Ranks/5.png)";
    } else if (MMR >= 3850 && MMR <= 4620) {
        RankIMG3.style.backgroundImage = "url(img/Ranks/6.png)";
    } else if (MMR >= 4620 && MMR <= 5420) {
        RankIMG3.style.backgroundImage = "url(img/Ranks/7.png)";
    } else if (MMR === "On calibration") {
        RankIMG3.style.backgroundImage = "url(img/Ranks/0.png)";
    }
    RankIMG3.addEventListener("mouseover", () => {
        Hint.classList.add("cl");
        HintMT.innerHTML = MMR;
    })
    RankIMG3.addEventListener("mouseout", () => {
        Hint.classList.remove("cl");
        HintMT.innerHTML = MMR;
    })
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
    let MMR = 1540+1;
    let WinStreak = 7;
    let WinRate = Wins/Matches*100;
    let BattleCups = 0;

    Matches4.innerHTML = Matches;
    Wins4.innerHTML = Wins;
    Loses4.innerHTML = Loses;
    Hours4.innerHTML = Hours;
    InGameDate4.innerHTML = InGameDate;
    let RankIMG4 = document.getElementById("RankIMG4");
    if (MMR <= 610) {
        RankIMG4.style.backgroundImage = "url(img/Ranks/1.png)";
    } else if (MMR >= 770 && MMR <= 1540) {
        RankIMG4.style.backgroundImage = "url(img/Ranks/2.png)";
    } else if (MMR >= 1540 && MMR <= 2310) {
        RankIMG4.style.backgroundImage = "url(img/Ranks/3.png)";
    } else if (MMR >= 2310 && MMR <= 3080) {
        RankIMG4.style.backgroundImage = "url(img/Ranks/4.png)";
    } else if (MMR >= 3080 && MMR <= 3850) {
        RankIMG4.style.backgroundImage = "url(img/Ranks/5.png)";
    } else if (MMR >= 3850 && MMR <= 4620) {
        RankIMG4.style.backgroundImage = "url(img/Ranks/6.png)";
    } else if (MMR >= 4620 && MMR <= 5420) {
        RankIMG4.style.backgroundImage = "url(img/Ranks/0.png)";
    } else if (MMR === "On calibration") {
        RankIMG4.style.backgroundImage = "url(img/Ranks/0.png)";
    }
    RankIMG4.addEventListener("mouseover", () => {
        Hint.classList.add("cl");
        HintMT.innerHTML = MMR-1;
    })
    RankIMG4.addEventListener("mouseout", () => {
        Hint.classList.remove("cl");
        HintMT.innerHTML = MMR-1;
    })
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
    let Matches = 174;
    let Wins = 73;
    let Loses = Matches-Wins;
    let Hours = 260;
    let InGameDate = "23.10.2022";
    let MMR = "On calibration";
    let WinStreak = 5;
    let WinRate = Wins/Matches*100;
    let BattleCups = 0;

    Matches5.innerHTML = Matches;
    Wins5.innerHTML = Wins;
    Loses5.innerHTML = Loses;
    Hours5.innerHTML = Hours;
    InGameDate5.innerHTML = InGameDate;
    let RankIMG5 = document.getElementById("RankIMG5");
    if (MMR <= 610) {
        RankIMG5.style.backgroundImage = "url(img/Ranks/1.png)";
    } else if (MMR >= 770 && MMR <= 1540) {
        RankIMG5.style.backgroundImage = "url(img/Ranks/2.png)";
    } else if (MMR >= 1540 && MMR <= 2310) {
        RankIMG5.style.backgroundImage = "url(img/Ranks/3.png)";
    } else if (MMR >= 2310 && MMR <= 3080) {
        RankIMG5.style.backgroundImage = "url(img/Ranks/4.png)";
    } else if (MMR >= 3080 && MMR <= 3850) {
        RankIMG5.style.backgroundImage = "url(img/Ranks/5.png)";
    } else if (MMR >= 3850 && MMR <= 4620) {
        RankIMG5.style.backgroundImage = "url(img/Ranks/6.png)";
    } else if (MMR >= 4620 && MMR <= 5420) {
        RankIMG5.style.backgroundImage = "url(img/Ranks/7.png)";
    } else if (MMR === "On calibration") {
        RankIMG5.style.backgroundImage = "url(img/Ranks/0.png)";
    }
    RankIMG5.addEventListener("mouseover", () => {
        Hint.classList.add("cl");
        HintMT.innerHTML = MMR;
    })
    RankIMG5.addEventListener("mouseout", () => {
        Hint.classList.remove("cl");
        HintMT.innerHTML = MMR;
    })
    WinStreak5.innerHTML = WinStreak;
    WinRate5.innerHTML = WinRate.toFixed(2) + "%";
    BattleCups5.innerHTML = BattleCups;
}



let UpdateDateNum = "13.07.2023";

let UpdateDateBt1 = document.querySelector(".UpdateDateBt1");
let UpdateDate1 = document.querySelector(".UpdateDate1");
    UpdateDate1.innerHTML = "Last update <br>" + UpdateDateNum;

UpdateDateBt1.onclick = () => {
    UpdateDateBt1.classList.toggle("hover");
    UpdateDate1.classList.toggle("cl");
}

let UpdateDateBt2 = document.querySelector(".UpdateDateBt2");
let UpdateDate2 = document.querySelector(".UpdateDate2");
    UpdateDate2.innerHTML = "Last update <br>" + UpdateDateNum;

UpdateDateBt2.onclick = () => {
    UpdateDateBt2.classList.toggle("hover");
    UpdateDate2.classList.toggle("cl");
}

let UpdateDateBt3 = document.querySelector(".UpdateDateBt3");
let UpdateDate3 = document.querySelector(".UpdateDate3");
    UpdateDate3.innerHTML = "Last update <br>" + UpdateDateNum;

UpdateDateBt3.onclick = () => {
    UpdateDateBt3.classList.toggle("hover");
    UpdateDate3.classList.toggle("cl");
}

let UpdateDateBt4 = document.querySelector(".UpdateDateBt4");
let UpdateDate4 = document.querySelector(".UpdateDate4");
    UpdateDate4.innerHTML = "Last update <br>" + UpdateDateNum;

UpdateDateBt4.onclick = () => {
    UpdateDateBt4.classList.toggle("hover");
    UpdateDate4.classList.toggle("cl");
}

let UpdateDateBt5 = document.querySelector(".UpdateDateBt5");
let UpdateDate5 = document.querySelector(".UpdateDate5");
    UpdateDate5.innerHTML = "Last update <br>" + UpdateDateNum;

UpdateDateBt5.onclick = () => {
    UpdateDateBt5.classList.toggle("hover");
    UpdateDate5.classList.toggle("cl");
}

let closebt1 = document.getElementById("closebt1");
closebt1.onclick = () => {
    INFB1.classList.remove("cl");
    INF1.classList.remove("cl");
    STA1.classList.remove("cl");
    STA2.classList.remove("cl");
    STA3.classList.remove("cl");
    STA4.classList.remove("cl");
    STA5.classList.remove("cl");
    INB1.classList.remove("cl");
    INB2.classList.remove("cl");
    INB3.classList.remove("cl");
    INB4.classList.remove("cl");
    INB5.classList.remove("cl");
    SteamAccount1.classList.remove("cl");
    SteamAccount2.classList.remove("cl");
    SteamAccount3.classList.remove("cl");
    SteamAccount4.classList.remove("cl");
    SteamAccount5.classList.remove("cl");
    AccountDetails1.classList.remove("cl");
    AccountDetails2.classList.remove("cl");
    AccountDetails3.classList.remove("cl");
    AccountDetails4.classList.remove("cl");
    AccountDetails5.classList.remove("cl");
    setTimeout(() => {
        Hidebt.classList.add("cl");
    }, 200)
}
let closebt2 = document.getElementById("closebt2");
closebt2.onclick = () => {
    INFB2.classList.remove("cl");
    INF2.classList.remove("cl");
    STA1.classList.remove("cl");
    STA2.classList.remove("cl");
    STA3.classList.remove("cl");
    STA4.classList.remove("cl");
    STA5.classList.remove("cl");
    INB1.classList.remove("cl");
    INB2.classList.remove("cl");
    INB3.classList.remove("cl");
    INB4.classList.remove("cl");
    INB5.classList.remove("cl");
    SteamAccount1.classList.remove("cl");
    SteamAccount2.classList.remove("cl");
    SteamAccount3.classList.remove("cl");
    SteamAccount4.classList.remove("cl");
    SteamAccount5.classList.remove("cl");
    AccountDetails1.classList.remove("cl");
    AccountDetails2.classList.remove("cl");
    AccountDetails3.classList.remove("cl");
    AccountDetails4.classList.remove("cl");
    AccountDetails5.classList.remove("cl");
    setTimeout(() => {
        Hidebt.classList.add("cl");
    }, 200)
}
let closebt3 = document.getElementById("closebt3");
closebt3.onclick = () => {
    INFB3.classList.remove("cl");
    INF3.classList.remove("cl");
    STA1.classList.remove("cl");
    STA2.classList.remove("cl");
    STA3.classList.remove("cl");
    STA4.classList.remove("cl");
    STA5.classList.remove("cl");
    INB1.classList.remove("cl");
    INB2.classList.remove("cl");
    INB3.classList.remove("cl");
    INB4.classList.remove("cl");
    INB5.classList.remove("cl");
    SteamAccount1.classList.remove("cl");
    SteamAccount2.classList.remove("cl");
    SteamAccount3.classList.remove("cl");
    SteamAccount4.classList.remove("cl");
    SteamAccount5.classList.remove("cl");
    AccountDetails1.classList.remove("cl");
    AccountDetails2.classList.remove("cl");
    AccountDetails3.classList.remove("cl");
    AccountDetails4.classList.remove("cl");
    AccountDetails5.classList.remove("cl");
    setTimeout(() => {
        Hidebt.classList.add("cl");
    }, 200)
}
let closebt4 = document.getElementById("closebt4");
closebt4.onclick = () => {
    INFB4.classList.remove("cl");
    INF4.classList.remove("cl");
    STA1.classList.remove("cl");
    STA2.classList.remove("cl");
    STA3.classList.remove("cl");
    STA4.classList.remove("cl");
    STA5.classList.remove("cl");
    INB1.classList.remove("cl");
    INB2.classList.remove("cl");
    INB3.classList.remove("cl");
    INB4.classList.remove("cl");
    INB5.classList.remove("cl");
    SteamAccount1.classList.remove("cl");
    SteamAccount2.classList.remove("cl");
    SteamAccount3.classList.remove("cl");
    SteamAccount4.classList.remove("cl");
    SteamAccount5.classList.remove("cl");
    AccountDetails1.classList.remove("cl");
    AccountDetails2.classList.remove("cl");
    AccountDetails3.classList.remove("cl");
    AccountDetails4.classList.remove("cl");
    AccountDetails5.classList.remove("cl");
    setTimeout(() => {
        Hidebt.classList.add("cl");
    }, 200)
}
let closebt5 = document.getElementById("closebt5");
closebt5.onclick = () => {
    INFB5.classList.remove("cl");
    INF5.classList.remove("cl");
    STA1.classList.remove("cl");
    STA2.classList.remove("cl");
    STA3.classList.remove("cl");
    STA4.classList.remove("cl");
    STA5.classList.remove("cl");
    INB1.classList.remove("cl");
    INB2.classList.remove("cl");
    INB3.classList.remove("cl");
    INB4.classList.remove("cl");
    INB5.classList.remove("cl");
    SteamAccount1.classList.remove("cl");
    SteamAccount2.classList.remove("cl");
    SteamAccount3.classList.remove("cl");
    SteamAccount4.classList.remove("cl");
    SteamAccount5.classList.remove("cl");
    AccountDetails1.classList.remove("cl");
    AccountDetails2.classList.remove("cl");
    AccountDetails3.classList.remove("cl");
    AccountDetails4.classList.remove("cl");
    AccountDetails5.classList.remove("cl");
    setTimeout(() => {
        Hidebt.classList.add("cl");
    }, 200)
}

let MH1_1 = document.querySelector(".MH1_1");
let MH1_2 = document.querySelector(".MH1_2");
let MH1_3 = document.querySelector(".MH1_3");

MH1_1.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Invoker";
})

MH1_1.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

MH1_2.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Meepo";
})

MH1_2.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

MH1_3.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Anti-Mage";
})

MH1_3.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

let MH2_1 = document.querySelector(".MH2_1");
let MH2_2 = document.querySelector(".MH2_2");
let MH2_3 = document.querySelector(".MH2_3");

MH2_1.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Techies";
})

MH2_1.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

MH2_2.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Undying";
})

MH2_2.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

MH2_3.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Shadow Shaman";
})

MH2_3.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

let MH3_1 = document.querySelector(".MH3_1");
let MH3_2 = document.querySelector(".MH3_2");
let MH3_3 = document.querySelector(".MH3_3");

MH3_1.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Clinkz";
})

MH3_1.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

MH3_2.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Pugna";
})

MH3_2.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

MH3_3.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Timbersaw";
})

MH3_3.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

let MH4_1 = document.querySelector(".MH4_1");
let MH4_2 = document.querySelector(".MH4_2");
let MH4_3 = document.querySelector(".MH4_3");

MH4_1.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Arc Warden";
})

MH4_1.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

MH4_2.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Naga Siren";
})

MH4_2.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

MH4_3.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "HoodWink";
})

MH4_3.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

let MH5_1 = document.querySelector(".MH5_1");
let MH5_2 = document.querySelector(".MH5_2");
let MH5_3 = document.querySelector(".MH5_3");

MH5_1.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Naga Siren";
})

MH5_1.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

MH5_2.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Riki";
})

MH5_2.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

MH5_3.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = "Lion";
})

MH5_3.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})

let RB1 = document.getElementById("rem1");
    RB1.onclick = function Rbt1() {
        INF1.classList.add("cl1");
        RB1.classList.add("hover");
        setTimeout(() => {
            INF1.classList.remove("cl1");
            INF1.classList.add("cl2");
        }, 200)
        RB1.onclick = () => {
            RB1.classList.remove("hover");
            INF1.classList.remove("cl2");
            INF1.classList.add("cl1");
            setTimeout(() => {
                INF1.classList.remove("cl1");
            }, 200)
            RB1.onclick = () => {
                Rbt1();
            }
        }
    }
let RB2 = document.getElementById("rem2");
    RB2.onclick = function Rbt2() {
        INF2.classList.add("cl1");
        RB2.classList.add("hover");
        setTimeout(() => {
            INF2.classList.remove("cl1");
            INF2.classList.add("cl2");
        }, 200)
        RB2.onclick = () => {
            RB2.classList.remove("hover");
            INF2.classList.remove("cl2");
            INF2.classList.add("cl1");
            setTimeout(() => {
                INF2.classList.remove("cl1");
            }, 200)
            RB2.onclick = () => {
                Rbt2();
            }
        }
    }
let RB3 = document.getElementById("rem3");
    RB3.onclick = function Rbt3() {
        INF3.classList.add("cl1");
        RB3.classList.add("hover");
        setTimeout(() => {
            INF3.classList.remove("cl1");
            INF3.classList.add("cl2");
        }, 200)
        RB3.onclick = () => {
            RB3.classList.remove("hover");
            INF3.classList.remove("cl2");
            INF3.classList.add("cl1");
            setTimeout(() => {
                INF3.classList.remove("cl1");
            }, 200)
            RB3.onclick = () => {
                Rbt3();
            }
        }
    }
let RB4 = document.getElementById("rem4");
    RB4.onclick = function Rbt4() {
        INF4.classList.add("cl1");
        RB4.classList.add("hover");
        setTimeout(() => {
            INF4.classList.remove("cl1");
            INF4.classList.add("cl2");
        }, 200)
        RB4.onclick = () => {
            RB4.classList.add("hover");
            INF4.classList.remove("cl2");
            INF4.classList.add("cl1");
            setTimeout(() => {
                INF4.classList.remove("cl1");
            }, 200)
            RB4.onclick = () => {
                Rbt4();
            }
        }
    }
let RB5 = document.getElementById("rem5");
    RB5.onclick = function Rbt5() {
        INF5.classList.add("cl1");
        RB5.classList.add("hover");
        setTimeout(() => {
            INF5.classList.remove("cl1");
            INF5.classList.add("cl2");
        }, 200)
        RB5.onclick = () => {
            RB5.classList.add("hover");
            INF5.classList.remove("cl2");
            INF5.classList.add("cl1");
            setTimeout(() => {
                INF5.classList.remove("cl1");
            }, 200)
            RB5.onclick = () => {
                Rbt5();
            }
        }
    }
