let LoadingBody = document.querySelector(".LoadingBody");

window.onload = () => {
        setTimeout(() => {
            LoadingBody.classList.add("cl");
        }, 500);
}

function inModel(TID, BID, ICON, MB) {
    let ModalTitle = document.getElementById(TID);
    let ModalBody = document.getElementById(BID);

    if (ICON === "0") {
        ModalTitle.innerHTML = MT;
    } else if (ICON === "1") {
        ModalTitle.innerHTML = '<i class="fa-solid fa-circle-check ICON1"></i> ' + "Success";
    } else if (ICON === "2") {
        ModalTitle.innerHTML = '<i class="fa-solid fa-circle-exclamation ICON2"></i> ' + "Exclamation";
    } else if (ICON === "3") {
        ModalTitle.innerHTML = '<i class="fa-solid fa-circle-xmark ICON3"></i> ' + "Error";
    }

    ModalBody.innerHTML = MB;
}

let RD = document.querySelectorAll(".RoleDiv");
let RD1 = document.getElementById("RD1");
let RD2 = document.getElementById("RD2");
let RD3 = document.getElementById("RD3");
let RD4 = document.getElementById("RD4");
let RD5 = document.getElementById("RD5");
let RD6 = document.getElementById("RD6");

RD1.onmouseover = () => {
    Hint.classList.add("cl");
    MT.innerHTML = "Easy line";
}

RD1.onmouseout = () => {
    Hint.classList.remove("cl");
}

RD2.onmouseover = () => {
    Hint.classList.add("cl");
    MT.innerHTML = "Support";
}

RD2.onmouseout = () => {
    Hint.classList.remove("cl");
}

RD3.onmouseover = () => {
    Hint.classList.add("cl");
    MT.innerHTML = "Mid line";
}

RD3.onmouseout = () => {
    Hint.classList.remove("cl");
}

RD4.onmouseover = () => {
    Hint.classList.add("cl");
    MT.innerHTML = "Hard line";
}

RD4.onmouseout = () => {
    Hint.classList.remove("cl");
}

RD5.onmouseover = () => {
    Hint.classList.add("cl");
    MT.innerHTML = "Support";
}

RD5.onmouseout = () => {
    Hint.classList.remove("cl");
}

RD6.onmouseover = () => {
    Hint.classList.add("cl");
    MT.innerHTML = "Team captain";
}

RD6.onmouseout = () => {
    Hint.classList.remove("cl");
}

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
let NWBody = document.querySelector(".NWBody");
let NetWorksBt = document.querySelector(".NetWorks");
    NetWorksBt.onclick = () => {
        NWBody.classList.toggle("cl");
    }
let underLine = document.querySelector(".underLine");
let Person = document.querySelectorAll(".Person");
let NWBT = document.querySelectorAll(".NWBT");
let Hint = document.getElementById("Hint");
let MT = document.getElementById("MainText");
let ST = document.querySelector(".StartText");
let ChatBt = document.querySelector(".Chat");
let MContent = document.querySelectorAll(".modal-content");
let MTitle = document.querySelectorAll(".modal-title");
let MBody = document.querySelectorAll(".modal-body");

function DarkChanges() {
    PL1.classList.add("dark");
    NetWorksBt.classList.add("dark");
    Person.forEach(i => {
        i.classList.add("dark");
    });
    OCbt.classList.add("dark");
    NWBody.classList.add("dark");
    underLine.classList.add("dark");
    NWBT.forEach(i => {
        i.classList.add("dark");
    });
    Hint.classList.add("dark");
    RD.forEach(i => {
        i.classList.add("dark");
    });
    ST.classList.add("dark");
    ChatBt.classList.add("dark");
    MContent.forEach(i => {
        i.classList.add("content-dark");
    });
    MTitle.forEach(i => {
        i.classList.add("title-dark");
    });
    MBody.forEach(i => {
        i.classList.add("body-dark");
    });
    document.querySelector(".textarea").classList.add("textarea-dark");

}

function LightChanges() {
    PL1.classList.remove("dark");
    NetWorksBt.classList.remove("dark");
    Person.forEach(i => {
        i.classList.remove("dark");
    });
    OCbt.classList.remove("dark");
    NWBody.classList.remove("dark");
    underLine.classList.remove("dark");
    NWBT.forEach(i => {
        i.classList.remove("dark");
    });
    Hint.classList.remove("dark");
    RD.forEach(i => {
        i.classList.remove("dark");
    });
    ST.classList.remove("dark");
    ChatBt.classList.remove("dark");
    MContent.forEach(i => {
        i.classList.remove("content-dark");
    });
    MTitle.forEach(i => {
        i.classList.remove("title-dark");
    });
    MBody.forEach(i => {
        i.classList.remove("body-dark");
    });
    document.querySelector(".textarea").classList.remove("textarea-dark");

}

function iChange() {
    DarkChanges();
    localStorage.setItem("theme", "dark");
    iC.innerHTML = '<i class="fa-solid fa-moon"></i>';
    iC.classList.add("dark");
    iC.onclick = () => {
        LightChanges();
        localStorage.setItem("theme", "light");
        iC.innerHTML = '<i class="fa-solid fa-sun"></i>';
        iC.classList.remove("dark");
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
    LightChanges();
    iC.innerHTML = '<i class="fa-solid fa-sun"></i>';
    iC.classList.remove("cl");
    iC.classList.remove("dark");
    iC.onclick = () => {
        iChange();
    }
}

if (theme === "dark") {
    DarkChanges();
    iC.innerHTML = '<i class="fa-solid fa-moon"></i>';
    iC.classList.add("cl");
    iC.classList.add("dark");
    iC.onclick = () => {
        LightChanges();
        localStorage.setItem("theme", "light");
        iC.innerHTML = '<i class="fa-solid fa-sun"></i>';
        iC.classList.remove("cl");
        iC.classList.remove("dark");
        iC.onclick = () => {
            iChange();
        }
    }
}

let steamBt = document.querySelectorAll(".steamBt");

steamBt.forEach(i => {
    i.onclick = () => {
        LoadingBody.classList.remove("cl");
    }
})

ChatBt.onclick = function msgF() {
    setInterval(() => {
        let words = document.getElementById("MsgInput").value.toString();
        let wordsTrimmed = words.trim().split(" ");
        document.getElementById("messageWords").innerHTML = "Text (" + wordsTrimmed.length + "/180)";
    }, 500)
    document.getElementById("sendBt").onclick = () => {
        let words = document.getElementById("MsgInput").value.toString();
        let wordsTrimmed = words.trim().split(" ");
        if (wordsTrimmed.length > 180) {
            document.getElementById("MsgInput").classList.add("cl");
        } else if (wordsTrimmed.length <= 1) {
            document.getElementById("MsgInput").classList.add("cl");
        } else if (wordsTrimmed.length > 1 && wordsTrimmed.length <= 180) {
            document.getElementById("MsgInput").classList.add("cl1");
            document.getElementById("sendBt").setAttribute("data-bs-dismiss", "modal");
            document.getElementById("sendBt").setAttribute("aria-label", "Close");
            document.getElementById("sendBt").setAttribute("data-bs-toggle", "modal");
            document.getElementById("sendBt").setAttribute("data-bs-target", "#success");
            document.getElementById("sendBt").classList.remove("btn-outline-primary");
            document.getElementById("sendBt").classList.add("btn-primary");
            document.getElementById("sendBt").innerHTML = "Send";
            // Send message
            document.getElementById("sendBt").onclick = () => {
                console.log(document.getElementById("MsgInput").value);
                inModel("successTitle", "successBody", "1", "Message sent");
            }

            document.getElementById("MsgInput").onfocus = () => {
                document.getElementById("MsgInput").classList.remove("cl");
                document.getElementById("MsgInput").classList.remove("cl1");
                document.getElementById("sendBt").removeAttribute("data-bs-dismiss", "modal");
                document.getElementById("sendBt").removeAttribute("aria-label", "Close");
                document.getElementById("sendBt").removeAttribute("data-bs-toggle");
                document.getElementById("sendBt").removeAttribute("data-bs-target");
                document.getElementById("sendBt").classList.add("btn-outline-primary");
                document.getElementById("sendBt").classList.remove("btn-primary");
                document.getElementById("sendBt").innerHTML = "Check";
                msgF();
            }
        }
    }
    document.getElementById("closeBt").onclick = () => {
        setTimeout(() => {
            document.getElementById("MsgInput").classList.remove("cl");
            document.getElementById("MsgInput").classList.remove("cl1");
            document.getElementById("sendBt").removeAttribute("data-bs-dismiss", "modal");
            document.getElementById("sendBt").removeAttribute("aria-label", "Close");
            document.getElementById("sendBt").classList.add("btn-outline-primary");
            document.getElementById("sendBt").classList.remove("btn-primary");
            document.getElementById("sendBt").innerHTML = "Check";
            document.getElementById("MsgInput").value = "";
        }, 500)
    }
}
