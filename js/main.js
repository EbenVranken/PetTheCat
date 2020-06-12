let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;

sentences = ["I would recommend getting a dog...", "Wow, poor cat...", "He's in a better place now.", "How do you sleep at night?", "You should be ashamed of yourself!"];

setInterval(setTime, 1000);

endmessage = sentences[Math.floor(Math.random() * sentences.length)];

function setTime() {
    if (!dead) {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
}

function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

let health = document.getElementById("happiness")
let count = 0;
let dead = false;

function refreshData() {
    x = 0.05;  // 5 Seconds
    if (health.value > 0) {
        health.value -= 1;
    } else {
        document.getElementById("counter").innerHTML = "Cat is ded, you are failure";
        dead = true;
        lose();
    }
    setTimeout(refreshData, x * 1000);
}
refreshData(); // execute function

function pet() {
    if (!dead) {
        count++;
        document.getElementById("counter").innerHTML = "You have pet the cat: " + count + " times!";
        health.value += 5;
    }
}

function lose(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("score").innerHTML = "Your cat lived for: " + minutesLabel.innerHTML + " minutes and " + 
    secondsLabel.innerHTML + " seconds. " + endmessage.toString();
}

function reload(){
    health.value = 100;
    document.getElementById("overlay").style.display = "none";
    dead = false;
    minutesLabel.innerHTML = "00";
    secondsLabel.innerHTML = "00";
    totalSeconds = 0;
    endmessage = sentences[Math.floor(Math.random() * sentences.length)];
    document.getElementById("counter").innerHTML = "You have pet the cat 0 times! :(";
}