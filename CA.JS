window.onload = function () {
    var seconds = 00;
    var milseconds = 00;
    var a_sec = document.getElementById('seconds');
    var a_milsec = document.getElementById('milliseconds');
    var buttonstart = document.getElementById('bitton-start');
    var buttonstop = document.getElementById('button-stop');
    var buttonreset = document.getElementById('button-reset');
    var interval;

    buttonstart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    buttonstop.onclick = function () { clearInterval(interval); }

    buttonreset.onclick = function () {
        clearInterval(interval);
        milseconds = "00";
        sec = "00";
        a_milsec.innerHTML = milseconds;
        a_sec.innerHTML = seconds;
    }

    function startTimer() {
        milseconds++;
        if (a_milsec <= 9) {
            (a_milsec.innerHTML = '0' + a_milsec;)
        }
        if (a_milsec > 9) {
            a_milsec.innerHTML = milseconds;
        }
        if (a_milsec > 99) {
            seconds++;
            a_sec.innerHTML = "0" + seconds;
            milseconds = 0;
            a_milsec.innerHTML = "0" + 0;
        }
        if (seconds > 9) { a_sec.innerhtml = seconds; }
    }
}