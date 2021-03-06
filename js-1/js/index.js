window.addEventListener("load", () => {
    let myName = document.getElementById("myName");
    let name;
    name = prompt("Lütfen adınızı giriniz", "");
    if (!name.length) {
        name = "Dünyalı";
    }
    myName.innerHTML = name;
    showTime();
});

const showTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    let days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
    ];
    let day = days[today.getDay()];

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("myClock").innerHTML =
        h + ":" + m + ":" + s + "          " + day;
    setTimeout(showTime, 1000);
};

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}
