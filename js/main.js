const diteEl = document.getElementById("dite");
const oreEl = document.getElementById("ore");
const minutaEl = document.getElementById("minuta");
const sekondaEl = document.getElementById("sekonda");

const fundiOfertes = new Date("October 29, 2023 00:00:00").getTime();

var finishEl = setInterval(updateCountdown());

updateCountdown();


function updateCountdown() {
    const tani = new Date().getTime();
    const kohaMbetur = fundiOfertes - tani;

    const sekonda = 1000;
    const minuta = sekonda * 60;
    const ore = minuta * 60;
    const dite = ore * 24;
    
    const countDownDay = Math.floor(kohaMbetur / dite);  //math.floor : rrumbullakos nr >=<    
    const countDownHour = Math.floor((kohaMbetur % dite) / ore);  // %: mbetjet
    const countDownMinute = Math.floor((kohaMbetur % ore) / minuta);
    const countDownSecond = Math.floor((kohaMbetur %minuta) / sekonda); 


    diteEl.innerText = countDownDay;
    oreEl.innerText = countDownHour;
    minutaEl.innerText = countDownMinute;
    sekondaEl.innerText = countDownSecond;
    

       if (kohaMbetur < 0) {
        document.getElementById("fshi").style.display = "none";
        document.getElementById("off-info").style.display = "none";
        document.getElementById("clear-x").style.display = "block";}


    setInterval(updateCountdown, 1000);
    setTimeout(updateCountdown, Infinity);

}
