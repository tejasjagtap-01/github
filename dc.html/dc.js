function updateClock(){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12? 'PM' : 'AM';

    hours = hours % 12 || 12;
    hours = hours < 10 ?'0'+ hours : hours;
    minutes = minutes < 10 ?'0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds:seconds; 

    const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;

    document.getElementById('clock').textContent=timeString;

    const options={weekday: 'long',year:'numeric',month:'long',day:'numeric'};
    const dataString=now.toLocaleDateString('en-US',options);
    document.getElementById('date').textContent=dataString;
}

function toggleTheme(){
    document.body.classList.toggle('light-mode');
}
setInterval(updateClock,1000);
updateClock();
