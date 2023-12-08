let nowClock = document.querySelector("h4#nowClock");

function getClock() {
    const date = new Date();
    const years = String(date.getFullYear());
    const months = String(date.getMonth() + 1);
    const days = String(date.getDate());
    const seconds = String(date.getSeconds());
    const minutes = String(date.getMinutes());
    const hours = String(date.getHours());
    nowClock.innerText = `현재 시각 ${years.padStart(2,"0")}/${months.padStart(2,"0")}/${days.padStart(2,"0")} ${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`;
}

getClock();
setInterval(getClock, 1000);
