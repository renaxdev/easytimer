function setDarkmode() {
    var img1 = "assets/moon.png"
    var img2 = "assets/sun.png"

    if(document.getElementById("toggleImage").src == "assets/moon.png"){
        document.getElementById("toggleImage").src = "assets/sun.png";
    }
    else {
        document.getElementById("toggleImage").src = "assets/moon.png";
    }


    var element = document.body;
    element.classList.toggle("dark-mode");
}

var started = false;
var audio = new Audio('assets/beep.wav');
function get_time() {
    if (started == false) {
        submitted_time = document.getElementById("input").value 
        timer.innerHTML = submitted_time
    }

    else {
        alert("Please wait until the countdown finished")
    }
}

function start() {
    if(started == false){
        expired.innerHTML = ""
        var submitted_time_parsed = submitted_time.split(":");
        let sub_minutes = submitted_time_parsed[0];
        let sub_seconds = submitted_time_parsed[1];

        let startTime = new Date().getTime();
        let countdown = 1000 * 60 * sub_minutes + 1000 * sub_seconds; 
        let endTime = startTime + countdown;

        var interval = setInterval(function() {
            let timeLeft = endTime - new Date().getTime();

            if(timeLeft > 0){
                let minutes = timeLeft / (1000 * 60);
                minutes = Math.floor(minutes);
                let seconds = (timeLeft / 1000) % 60;
                seconds = Math.round(seconds);
                seconds = ('0' + seconds).slice(-2);
                let text = '0' + minutes + ' : ' + seconds;
                timer.innerHTML = text;
            }
            else {
            timer.innerHTML = "00:00"
            audio.play();
            timer.innerHTML = submitted_time
            expired.innerHTML= "Countdown expired"
            clearInterval(interval);
            started = false;
            }
        }, 1000);
        started = true;
    }
}