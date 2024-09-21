

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function homeOnePoint(){
    homeScoreEl.innerText = Number(homeScoreEl.innerText) + 1
    console.log("homeOnePoint")
}

function homeTwoPoint(){
    homeScoreEl.innerText = Number(homeScoreEl.innerText) + 2
    console.log("homeTwoPoint")
}


function homeThreePoint(){
    homeScoreEl.innerText = Number(homeScoreEl.innerText) + 3
    console.log("homeThreePoint")
}


function guestOnePoint(){
    guestScoreEl.innerText = Number(guestScoreEl.innerText) + 1
    console.log("guestOnePoint")
}

function guestTwoPoint(){
    guestScoreEl.innerText = Number(guestScoreEl.innerText) + 2
    console.log("guestTwoPoint")
}


function guestThreePoint(){
    guestScoreEl.innerText = Number(guestScoreEl.innerText) + 3
    console.log("guestThreePoint")
}