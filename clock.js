setInterval(() => {
    d =new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    document.getElementById("date").innerHTML = d.getFullYear();
    document.getElementById("month").innerHTML = d.getMonth()+1;
    document.getElementById("year").innerHTML = d.getDate();
    hrotation= 30*htime + (mtime/2);
    mrotation= 6*mtime;
    srotation= 6*stime;
    hours.style.transform=`rotate(${hrotation}deg)`;
    minutes.style.transform=`rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;
}, 1000);
