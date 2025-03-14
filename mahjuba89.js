window.onload=function()
{var sec=0;
    var milsec=0;
    var a_sec=document.getElementById('seconds');
    var a_milsec = document.getElementById('milliseconds');
    var start= document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    var interval;

    start.onclick=function()
    {clearInterval(interval);
        interval=setInterval(startTimer,10)
    }
    stop.onclick = function() 
    { clearInterval(interval);}

   reset.onclick = function()
 { clearInterval(interval);
    milsec='00';
    sec='00';
       a_milsec.innerHTML = milsec;
       a_sec.innerHTML = sec;
 } 

 function startTimer()
    {milsec++;
        if(milsec<=9)
            (a_milsec.innerHTML='0'+milsec;)
    if (milsec >9)
        (a_milsec.innerHTML =milsec;)
   if (milsec>99)
   {sec++;
    a_sec.innerHTML='0'+sec;
    milsec=0;
    a_milsec.innerHTML='0'+0;
   }
if (sec>9) (a_sec.innerhtml=sec;)
    }
}