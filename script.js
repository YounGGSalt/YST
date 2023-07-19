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
                        setTimeout(() => {
                            loadscreen.classList.add("cl");
                            loadText.classList.add("cl");
                        }, 500)
                    }, 500)
                };
            }, 5)
        }
        
        LoadDiv(0, 200);

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

let PSB = document.getElementById("PSB");
let Password = document.getElementById("password");
let Cancelbt = document.getElementById("cancel");
let Enterbt = document.getElementById("enter");
let passwordstatbt = document.getElementById("passwordstatbt");

let Matches1 = document.getElementById("Matches1");
let Wins1 = document.getElementById("Wins1");
let Loses1 = document.getElementById("Loses1");
let Hours1 = document.getElementById("Hours1");
let InGameDate1 = document.getElementById("InGameDate1");
let MMR1 = document.getElementById("MMR1");
let WinStreak1 = document.getElementById("WinStreak1");
let WinRate1 = document.getElementById("WinRate1");
let BattleCups1 = document.getElementById("BattleCups1");

let Matches11;
let Wins11;
let Loses11;
let Hours11;
let InGameDate11;
let MMR11;
let WinStreak11;
let WinRate11;
let BattleCups11;

let dataupdatebt1 = document.getElementById("dup1");
let CB1 = document.getElementById("CB1");
let Closebt1 = document.getElementById("Closebt1");
let Changebt1 = document.getElementById("Changebt1");

dataupdatebt1.onclick = () => {
    PSB.classList.add("cl");

    passwordstatbt.onclick = function togglePassword1() {
        Password.setAttribute("type", "text");
        Password.classList.add("cl");
        passwordstatbt.classList.add("hover");
        passwordstatbt.innerHTML = '<i class="fa-solid fa-eye"></i>';
        passwordstatbt.onclick = () => {
            passwordstatbt.classList.remove("hover");
            passwordstatbt.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
            Password.classList.remove("cl");
            Password.setAttribute("type", "password");
            passwordstatbt.onclick = () => {
                togglePassword1();
            }
        }
    }

    Cancelbt.onclick = () => {
        PSB.classList.remove("cl");
    }

    Enterbt.onclick = () => {
        if (Password.value === "YSTopOne") {
            PSB.classList.remove("cl");
            CB1.classList.add("cl");
            Closebt1.onclick = () => {
                CB1.classList.remove("cl");
            }

            let ICMatches1 = document.getElementById("ICMatches1");
            let ICWins1 = document.getElementById("ICWins1");
            let ICHours1 = document.getElementById("ICHours1");
            let ICWinStreak1 = document.getElementById("ICWinStreak1");
            let ICMMR1 = document.getElementById("ICMMR1");

            Changebt1.onclick = () => {
                Matches11 = parseInt(ICMatches1.value)+1431;
                localStorage.setItem("Matches111", Matches11);
                Wins11 = parseInt(ICWins1.value)+701;
                localStorage.setItem("Wins111", Wins11);
                Loses11 = Matches11-Wins11;
                localStorage.setItem("Loses111", Loses11);
                Hours11 = parseInt(ICHours1.value)+2130;
                localStorage.setItem("Hours111", Hours11);
                InGameDate11 = "20.10.2021";
                localStorage.setItem("InGameDate111", InGameDate11);
                MMR11 = parseInt(ICMMR1.value)+1;
                localStorage.setItem("MMR111", MMR11);
                WinStreak11 = parseInt(ICWinStreak1.value);
                localStorage.setItem("WinStreak111", WinStreak11);
                WinRate11 = Wins11/Matches11*100;
                PWinRate11 = WinRate11.toFixed(2) + "%";
                localStorage.setItem("WinRate111", PWinRate11);
                BattleCups11 = 0;
                localStorage.setItem("BattleCups111", BattleCups11);

                CB1.classList.remove("cl");

                alert("Changes commited, refresh the page for updates!");
            }
        } else {    
            Hint.classList.add("cl");
            HintMT.innerHTML = "wrong password"
            setTimeout(() => {
                Hint.classList.remove("cl");
            }, 1000)
        }
    }
}


Matches1.innerHTML = localStorage.getItem("Matches111");
Wins1.innerHTML = localStorage.getItem("Wins111");
Loses1.innerHTML = localStorage.getItem("Loses111");
Hours1.innerHTML = localStorage.getItem("Hours111");
InGameDate1.innerHTML = localStorage.getItem("InGameDate111");
LS_MMR11 = localStorage.getItem("MMR111");
let RankIMG1 = document.getElementById("RankIMG1");
if (LS_MMR11 <= 610) {
    RankIMG1.style.backgroundImage = "url(img/Ranks/1.png)";
} else if (LS_MMR11 >= 770 && LS_MMR11 <= 1540) {
    RankIMG1.style.backgroundImage = "url(img/Ranks/2.png)";
} else if (LS_MMR11 >= 1540 && LS_MMR11 <= 2310) {
    RankIMG1.style.backgroundImage = "url(img/Ranks/3.png)";
} else if (LS_MMR11 >= 2310 && LS_MMR11 <= 3080) {
    RankIMG1.style.backgroundImage = "url(img/Ranks/4.png)";
} else if (LS_MMR11 >= 3080 && LS_MMR11 <= 3850) {
    RankIMG1.style.backgroundImage = "url(img/Ranks/5.png)";
} else if (LS_MMR11 >= 3850 && LS_MMR11 <= 4620) {
    RankIMG1.style.backgroundImage = "url(img/Ranks/6.png)";
} else if (LS_MMR11 >= 4620 && LS_MMR11 <= 5420) {
    RankIMG1.style.backgroundImage = "url(img/Ranks/7.png)";
} else if (LS_MMR11 === "On calibration") {
    RankIMG1.style.backgroundImage = "url(img/Ranks/0.png)";
}
RankIMG1.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = LS_MMR11-1;
})
RankIMG1.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})
WinStreak1.innerHTML = localStorage.getItem("WinStreak111");
WinRate1.innerHTML = localStorage.getItem("WinRate111");
BattleCups1.innerHTML = localStorage.getItem("BattleCups111");

let Matches2 = document.getElementById("Matches2");
let Wins2 = document.getElementById("Wins2");
let Loses2 = document.getElementById("Loses2");
let Hours2 = document.getElementById("Hours2");
let InGameDate2 = document.getElementById("InGameDate2");
let MMR2 = document.getElementById("MMR2");
let WinStreak2 = document.getElementById("WinStreak2");
let WinRate2 = document.getElementById("WinRate2");
let BattleCups2 = document.getElementById("BattleCups2");

let Matches22;
let Wins22;
let Loses22;
let Hours22;
let InGameDate22;
let MMR22;
let WinStreak22;
let WinRate22;
let BattleCups22;

let dataupdatebt2 = document.getElementById("dup2");
let CB2 = document.getElementById("CB2");
let Closebt2 = document.getElementById("Closebt2");
let Changebt2 = document.getElementById("Changebt2");

dataupdatebt2.onclick = () => {
    PSB.classList.add("cl");

    passwordstatbt.onclick = function togglePassword2() {
        Password.setAttribute("type", "text");
        Password.classList.add("cl");
        passwordstatbt.classList.add("hover");
        passwordstatbt.innerHTML = '<i class="fa-solid fa-eye"></i>';
        passwordstatbt.onclick = () => {
            passwordstatbt.classList.remove("hover");
            passwordstatbt.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
            Password.classList.remove("cl");
            Password.setAttribute("type", "password");
            passwordstatbt.onclick = () => {
                togglePassword2();
            }
        }
    }

    Cancelbt.onclick = () => {
        PSB.classList.remove("cl");
    }

    Enterbt.onclick = () => {
        if (Password.value === "YSTopOne") {
            PSB.classList.remove("cl");
            CB2.classList.add("cl");
            Closebt2.onclick = () => {
                CB2.classList.remove("cl");
            }

            let ICMatches2 = document.getElementById("ICMatches2");
            let ICWins2 = document.getElementById("ICWins2");
            let ICHours2 = document.getElementById("ICHours2");
            let ICWinStreak2 = document.getElementById("ICWinStreak2");
            let ICMMR2 = document.getElementById("ICMMR2");

            Changebt2.onclick = () => {
                Matches22 = parseInt(ICMatches2.value);
                localStorage.setItem("Matches222", Matches22);
                Wins22 = parseInt(ICWins2.value);
                localStorage.setItem("Wins222", Wins22);
                Loses22 = Matches22-Wins22;
                localStorage.setItem("Loses222", Loses22);
                Hours22 = parseInt(ICHours2.value);
                localStorage.setItem("Hours222", Hours22);
                InGameDate22 = "14.01.2021";
                localStorage.setItem("InGameDate222", InGameDate22);
                MMR22 = parseInt(ICMMR2.value)+1;
                localStorage.setItem("MMR222", MMR22);
                WinStreak22 = parseInt(ICWinStreak2.value);
                localStorage.setItem("WinStreak222", WinStreak22);
                WinRate22 = Wins22/Matches22*100;
                PWinRate22 = WinRate22.toFixed(2) + "%";
                localStorage.setItem("WinRate222", PWinRate22);
                BattleCups22 = 0;
                localStorage.setItem("BattleCups222", BattleCups22);

                CB2.classList.remove("cl");

                alert("Changes commited, refresh the page for updates!");
            }
        } else {    
            Hint.classList.add("cl");
            HintMT.innerHTML = "wrong password"
            setTimeout(() => {
                Hint.classList.remove("cl");
            }, 1000)
        }
    }
}


Matches2.innerHTML = localStorage.getItem("Matches222");
Wins2.innerHTML = localStorage.getItem("Wins222");
Loses2.innerHTML = localStorage.getItem("Loses222");
Hours2.innerHTML = localStorage.getItem("Hours222");
InGameDate2.innerHTML = localStorage.getItem("InGameDate222");
LS_MMR22 = localStorage.getItem("MMR222");
let RankIMG2 = document.getElementById("RankIMG2");
if (LS_MMR22 <= 610) {
    RankIMG2.style.backgroundImage = "url(img/Ranks/1.png)";
} else if (LS_MMR22 >= 770 && LS_MMR22 <= 1540) {
    RankIMG2.style.backgroundImage = "url(img/Ranks/2.png)";
} else if (LS_MMR22 >= 1540 && LS_MMR22 <= 2310) {
    RankIMG2.style.backgroundImage = "url(img/Ranks/3.png)";
} else if (LS_MMR22 >= 2310 && LS_MMR22 <= 3080) {
    RankIMG2.style.backgroundImage = "url(img/Ranks/4.png)";
} else if (LS_MMR22 >= 3080 && LS_MMR22 <= 3850) {
    RankIMG2.style.backgroundImage = "url(img/Ranks/5.png)";
} else if (LS_MMR22 >= 3850 && LS_MMR22 <= 4620) {
    RankIMG2.style.backgroundImage = "url(img/Ranks/6.png)";
} else if (LS_MMR22 >= 4620 && LS_MMR22 <= 5420) {
    RankIMG2.style.backgroundImage = "url(img/Ranks/7.png)";
} else if (LS_MMR22 === "On calibration") {
    RankIMG2.style.backgroundImage = "url(img/Ranks/0.png)";
}
RankIMG2.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = LS_MMR22-1;
})
RankIMG2.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})
WinStreak2.innerHTML = localStorage.getItem("WinStreak222");
WinRate2.innerHTML = localStorage.getItem("WinRate222");
BattleCups2 .innerHTML = localStorage.getItem("BattleCups222");

let Matches3 = document.getElementById("Matches3");
let Wins3 = document.getElementById("Wins3");
let Loses3 = document.getElementById("Loses3");
let Hours3 = document.getElementById("Hours3");
let InGameDate3 = document.getElementById("InGameDate3");
let MMR3 = document.getElementById("MMR3");
let WinStreak3 = document.getElementById("WinStreak3");
let WinRate3 = document.getElementById("WinRate3");
let BattleCups3 = document.getElementById("BattleCups3");

let Matches33;
let Wins33;
let Loses33;
let Hours33;
let InGameDate33;
let MMR33;
let WinStreak33;
let WinRate33;
let BattleCups33;

let dataupdatebt3 = document.getElementById("dup3");
let CB3 = document.getElementById("CB3");
let Closebt3 = document.getElementById("Closebt3");
let Changebt3 = document.getElementById("Changebt3");

dataupdatebt3.onclick = () => {
    PSB.classList.add("cl");

    passwordstatbt.onclick = function togglePassword3() {
        Password.setAttribute("type", "text");
        Password.classList.add("cl");
        passwordstatbt.classList.add("hover");
        passwordstatbt.innerHTML = '<i class="fa-solid fa-eye"></i>';
        passwordstatbt.onclick = () => {
            passwordstatbt.classList.remove("hover");
            passwordstatbt.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
            Password.classList.remove("cl");
            Password.setAttribute("type", "password");
            passwordstatbt.onclick = () => {
                togglePassword3();
            }
        }
    }

    Cancelbt.onclick = () => {
        PSB.classList.remove("cl");
    }

    Enterbt.onclick = () => {
        if (Password.value === "YSTopOne") {
            PSB.classList.remove("cl");
            CB3.classList.add("cl");
            Closebt3.onclick = () => {
                CB3.classList.remove("cl");
            }

            let ICMatches3 = document.getElementById("ICMatches3");
            let ICWins3 = document.getElementById("ICWins3");
            let ICHours3 = document.getElementById("ICHours3");
            let ICWinStreak3 = document.getElementById("ICWinStreak3");
            let ICMMR3 = document.getElementById("ICMMR3");

            Changebt3.onclick = () => {
                Matches33 = parseInt(ICMatches3.value);
                localStorage.setItem("Matches333", Matches33);
                Wins33 = parseInt(ICWins3.value);
                localStorage.setItem("Wins333", Wins33);
                Loses33 = Matches33-Wins33;
                localStorage.setItem("Loses333", Loses33);
                Hours33 = parseInt(ICHours3.value);
                localStorage.setItem("Hours333", Hours33);
                InGameDate33 = "10.12.2021";
                localStorage.setItem("InGameDate333", InGameDate33);
                MMR33 = parseInt(ICMMR3.value)+1;
                localStorage.setItem("MMR333", MMR33);
                WinStreak33 = parseInt(ICWinStreak3.value);
                localStorage.setItem("WinStreak333", WinStreak33);
                WinRate33 = Wins33/Matches33*100;
                PWinRate33 = WinRate33.toFixed(2) + "%";
                localStorage.setItem("WinRate333", PWinRate33);
                BattleCups33 = 0;
                localStorage.setItem("BattleCups333", BattleCups33);

                CB3.classList.remove("cl");

                alert("Changes commited, refresh the page for updates!");
            }
        } else {    
            Hint.classList.add("cl");
            HintMT.innerHTML = "wrong password"
            setTimeout(() => {
                Hint.classList.remove("cl");
            }, 1000)
        }
    }
}


Matches3.innerHTML = localStorage.getItem("Matches333");
Wins3.innerHTML = localStorage.getItem("Wins333");
Loses3.innerHTML = localStorage.getItem("Loses333");
Hours3.innerHTML = localStorage.getItem("Hours333");
InGameDate3.innerHTML = localStorage.getItem("InGameDate333");
LS_MMR33 = localStorage.getItem("MMR333");
let RankIMG3 = document.getElementById("RankIMG3");
if (LS_MMR33 <= 610) {
    RankIMG3.style.backgroundImage = "url(img/Ranks/1.png)";
} else if (LS_MMR33 >= 770 && LS_MMR33 <= 1540) {
    RankIMG3.style.backgroundImage = "url(img/Ranks/2.png)";
} else if (LS_MMR33 >= 1540 && LS_MMR33 <= 2310) {
    RankIMG3.style.backgroundImage = "url(img/Ranks/3.png)";
} else if (LS_MMR33 >= 2310 && LS_MMR33 <= 3080) {
    RankIMG3.style.backgroundImage = "url(img/Ranks/4.png)";
} else if (LS_MMR33 >= 3080 && LS_MMR33 <= 3850) {
    RankIMG3.style.backgroundImage = "url(img/Ranks/5.png)";
} else if (LS_MMR33 >= 3850 && LS_MMR33 <= 4620) {
    RankIMG3.style.backgroundImage = "url(img/Ranks/6.png)";
} else if (LS_MMR33 >= 4620 && LS_MMR33 <= 5420) {
    RankIMG3.style.backgroundImage = "url(img/Ranks/7.png)";
} else if (LS_MMR33 === "On calibration") {
    RankIMG3.style.backgroundImage = "url(img/Ranks/0.png)";
}
RankIMG3.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = LS_MMR33-1;
})
RankIMG3.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})
WinStreak3.innerHTML = localStorage.getItem("WinStreak333");
WinRate3.innerHTML = localStorage.getItem("WinRate333");
BattleCups3.innerHTML = localStorage.getItem("BattleCups333");

let Matches4 = document.getElementById("Matches4");
let Wins4 = document.getElementById("Wins4");
let Loses4 = document.getElementById("Loses4");
let Hours4 = document.getElementById("Hours4");
let InGameDate4 = document.getElementById("InGameDate4");
let MMR4 = document.getElementById("MMR4");
let WinStreak4 = document.getElementById("WinStreak4");
let WinRate4 = document.getElementById("WinRate4");
let BattleCups4 = document.getElementById("BattleCups4");

let Matches44;
let Wins44;
let Loses44;
let Hours44;
let InGameDate44;
let MMR44;
let WinStreak44;
let WinRate44;
let BattleCups44;

let dataupdatebt4 = document.getElementById("dup4");
let CB4 = document.getElementById("CB4");
let Closebt4 = document.getElementById("Closebt4");
let Changebt4 = document.getElementById("Changebt4");

dataupdatebt4.onclick = () => {
    PSB.classList.add("cl");

    passwordstatbt.onclick = function togglePassword4() {
        Password.setAttribute("type", "text");
        Password.classList.add("cl");
        passwordstatbt.classList.add("hover");
        passwordstatbt.innerHTML = '<i class="fa-solid fa-eye"></i>';
        passwordstatbt.onclick = () => {
            passwordstatbt.classList.remove("hover");
            passwordstatbt.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
            Password.classList.remove("cl");
            Password.setAttribute("type", "password");
            passwordstatbt.onclick = () => {
                togglePassword4();
            }
        }
    }

    Cancelbt.onclick = () => {
        PSB.classList.remove("cl");
    }

    Enterbt.onclick = () => {
        if (Password.value === "YSTopOne") {
            PSB.classList.remove("cl");
            CB4.classList.add("cl");
            Closebt4.onclick = () => {
                CB4.classList.remove("cl");
            }

            let ICMatches4 = document.getElementById("ICMatches4");
            let ICWins4 = document.getElementById("ICWins4");
            let ICHours4 = document.getElementById("ICHours4");
            let ICWinStreak4 = document.getElementById("ICWinStreak4");
            let ICMMR4 = document.getElementById("ICMMR4");

            Changebt4.onclick = () => {
                Matches44 = parseInt(ICMatches4.value)+1431;
                localStorage.setItem("Matches444", Matches44);
                Wins44 = parseInt(ICWins4.value)+701;
                localStorage.setItem("Wins444", Wins44);
                Loses44 = Matches44-Wins44;
                localStorage.setItem("Loses444", Loses44);
                Hours44 = parseInt(ICHours4.value)+2130;
                localStorage.setItem("Hours444", Hours44);
                InGameDate44 = "20.10.2021";
                localStorage.setItem("InGameDate444", InGameDate44);
                MMR44 = parseInt(ICMMR4.value)+1;
                localStorage.setItem("MMR444", MMR44);
                WinStreak44 = parseInt(ICWinStreak4.value);
                localStorage.setItem("WinStreak444", WinStreak44);
                WinRate44 = Wins44/Matches44*100;
                PWinRate44 = WinRate44.toFixed(2) + "%";
                localStorage.setItem("WinRate444", PWinRate44);
                BattleCups44 = 0;
                localStorage.setItem("BattleCups444", BattleCups44);

                CB4.classList.remove("cl");

                alert("Changes commited, refresh the page for updates!");
            }
        } else {    
            Hint.classList.add("cl");
            HintMT.innerHTML = "wrong password"
            setTimeout(() => {
                Hint.classList.remove("cl");
            }, 1000)
        }
    }
}


Matches4.innerHTML = localStorage.getItem("Matches444");
Wins4.innerHTML = localStorage.getItem("Wins444");
Loses4.innerHTML = localStorage.getItem("Loses444");
Hours4.innerHTML = localStorage.getItem("Hours444");
InGameDate4.innerHTML = localStorage.getItem("InGameDate444");
LS_MMR44 = localStorage.getItem("MMR444");
let RankIMG4 = document.getElementById("RankIMG4");
if (LS_MMR44 <= 610) {
    RankIMG4.style.backgroundImage = "url(img/Ranks/1.png)";
} else if (LS_MMR44 >= 770 && LS_MMR44 <= 1540) {
    RankIMG4.style.backgroundImage = "url(img/Ranks/2.png)";
} else if (LS_MMR44 >= 1540 && LS_MMR44 <= 2310) {
    RankIMG4.style.backgroundImage = "url(img/Ranks/3.png)";
} else if (LS_MMR44 >= 2310 && LS_MMR44 <= 3080) {
    RankIMG4.style.backgroundImage = "url(img/Ranks/4.png)";
} else if (LS_MMR44 >= 3080 && LS_MMR44 <= 3850) {
    RankIMG4.style.backgroundImage = "url(img/Ranks/5.png)";
} else if (LS_MMR44 >= 3850 && LS_MMR44 <= 4620) {
    RankIMG4.style.backgroundImage = "url(img/Ranks/6.png)";
} else if (LS_MMR44 >= 4620 && LS_MMR44 <= 5420) {
    RankIMG4.style.backgroundImage = "url(img/Ranks/7.png)";
} else if (LS_MMR44 === "On calibration") {
    RankIMG4.style.backgroundImage = "url(img/Ranks/0.png)";
}
RankIMG4.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = LS_MMR44-1;
})
RankIMG4.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})
WinStreak4.innerHTML = localStorage.getItem("WinStreak44");
WinRate4.innerHTML = localStorage.getItem("WinRate444");
BattleCups4.innerHTML = localStorage.getItem("BattleCups444");

let Matches5 = document.getElementById("Matches5");
let Wins5 = document.getElementById("Wins5");
let Loses5 = document.getElementById("Loses5");
let Hours5 = document.getElementById("Hours5");
let InGameDate5 = document.getElementById("InGameDate5");
let MMR5 = document.getElementById("MMR5");
let WinStreak5 = document.getElementById("WinStreak5");
let WinRate5 = document.getElementById("WinRate5");
let BattleCups5 = document.getElementById("BattleCups5");

let Matches55;
let Wins55;
let Loses55;
let Hours55;
let InGameDate55;
let MMR55;
let WinStreak55;
let WinRate55;
let BattleCups55;

let dataupdatebt5 = document.getElementById("dup5");
let CB5 = document.getElementById("CB5");
let Closebt5 = document.getElementById("Closebt5");
let Changebt5 = document.getElementById("Changebt5");

dataupdatebt5.onclick = () => {
    PSB.classList.add("cl");

    passwordstatbt.onclick = function togglePassword5() {
        Password.setAttribute("type", "text");
        Password.classList.add("cl");
        passwordstatbt.classList.add("hover");
        passwordstatbt.innerHTML = '<i class="fa-solid fa-eye"></i>';
        passwordstatbt.onclick = () => {
            passwordstatbt.classList.remove("hover");
            passwordstatbt.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
            Password.classList.remove("cl");
            Password.setAttribute("type", "password");
            passwordstatbt.onclick = () => {
                togglePassword5();
            }
        }
    }

    Cancelbt.onclick = () => {
        PSB.classList.remove("cl");
    }

    Enterbt.onclick = () => {
        if (Password.value === "YSTopOne") {
            PSB.classList.remove("cl");
            CB5.classList.add("cl");
            Closebt5.onclick = () => {
                CB5.classList.remove("cl");
            }

            let ICMatches5 = document.getElementById("ICMatches5");
            let ICWins5 = document.getElementById("ICWins5");
            let ICHours5 = document.getElementById("ICHours5");
            let ICWinStreak5 = document.getElementById("ICWinStreak5");
            let ICMMR5 = document.getElementById("ICMMR5");

            Changebt5.onclick = () => {
                Matches55 = parseInt(ICMatches5.value)+1431;
                localStorage.setItem("Matches555", Matches55);
                Wins55 = parseInt(ICWins5.value)+701;
                localStorage.setItem("Wins555", Wins55);
                Loses55 = Matches55-Wins55;
                localStorage.setItem("Loses555", Loses55);
                Hours55 = parseInt(ICHours5.value)+2130;
                localStorage.setItem("Hours555", Hours55);
                InGameDate55 = "20.10.2021";
                localStorage.setItem("InGameDate555", InGameDate55);
                MMR55 = parseInt(ICMMR5.value)+1;
                localStorage.setItem("MMR555", MMR55);
                WinStreak55 = parseInt(ICWinStreak5.value);
                localStorage.setItem("WinStreak555", WinStreak55);
                WinRate55 = Wins55/Matches55*100;
                PWinRate55 = WinRate55.toFixed(2) + "%";
                localStorage.setItem("WinRate555", PWinRate55);
                BattleCups55 = 0;
                localStorage.setItem("BattleCups555", BattleCups55);

                CB5.classList.remove("cl");

                alert("Changes commited, refresh the page for updates!");
            }
        } else {    
            Hint.classList.add("cl");
            HintMT.innerHTML = "wrong password"
            setTimeout(() => {
                Hint.classList.remove("cl");
            }, 1000)
        }
    }
}


Matches5.innerHTML = localStorage.getItem("Matches555");
Wins5.innerHTML = localStorage.getItem("Wins555");
Loses5.innerHTML = localStorage.getItem("Loses555");
Hours5.innerHTML = localStorage.getItem("Hours555");
InGameDate5.innerHTML = localStorage.getItem("InGameDate555");
LS_MMR55 = localStorage.getItem("MMR555");
let RankIMG5 = document.getElementById("RankIMG5");
if (LS_MMR55 <= 610) {
    RankIMG5.style.backgroundImage = "url(img/Ranks/1.png)";
} else if (LS_MMR55 >= 770 && LS_MMR55 <= 1540) {
    RankIMG5.style.backgroundImage = "url(img/Ranks/2.png)";
} else if (LS_MMR55 >= 1540 && LS_MMR55 <= 2310) {
    RankIMG5.style.backgroundImage = "url(img/Ranks/3.png)";
} else if (LS_MMR55 >= 2310 && LS_MMR55 <= 3080) {
    RankIMG5.style.backgroundImage = "url(img/Ranks/4.png)";
} else if (LS_MMR55 >= 3080 && LS_MMR55 <= 3850) {
    RankIMG5.style.backgroundImage = "url(img/Ranks/5.png)";
} else if (LS_MMR55 >= 3850 && LS_MMR55 <= 4620) {
    RankIMG5.style.backgroundImage = "url(img/Ranks/6.png)";
} else if (LS_MMR55 >= 4620 && LS_MMR55 <= 5420) {
    RankIMG5.style.backgroundImage = "url(img/Ranks/7.png)";
} else if (LS_MMR55 === "On calibration") {
    RankIMG5.style.backgroundImage = "url(img/Ranks/0.png)";
}
RankIMG5.addEventListener("mouseover", () => {
    Hint.classList.add("cl");
    HintMT.innerHTML = LS_MMR55-1;
})
RankIMG5.addEventListener("mouseout", () => {
    Hint.classList.remove("cl");
})
WinStreak5.innerHTML = localStorage.getItem("WinStreak555");
WinRate5.innerHTML = localStorage.getItem("WinRate555");
BattleCups5.innerHTML = localStorage.getItem("BattleCups555");

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
