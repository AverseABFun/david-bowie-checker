var interval = -1;
var latestLP = window.localStorage.getItem("latestLP") | 88;
var latestCD = window.localStorage.getItem("latestCD") | 84;

function startCheck() {
    if (interval>-1) {
        clearInterval(interval);
    }
    if (document.getElementById("check-time").value*86400000>2147483647) {
        alert("Sorry, this number of days in milliseconds is too high to be properly represented in javascript. Please pick a lower interval.");
        return;
    }
    interval = setInterval(async ()=>{
        if (document.getElementById("lp-checkbox").value) {
            let response = (await fetch(`https://static.musictoday.com/store/bands/4586/product_large/X3LPDB${(latestLP+1).toString().padStart(3,"0")}.jpg`)).statusText;
            if (response == "OK") {
                latestLP = latestLP+1;
                window.localStorage.setItem("latestLP",latestLP);
                alert(`New David Bowie LP just got uploaded! ID X3LPDB${(latestLP).toString().padStart(3,"0")}`);
            }
        }
        if (document.getElementById("cd-checkbox").value) {
            let response = (await fetch(`https://static.musictoday.com/store/bands/4586/product_large/X3CDDB${(latestCD+1).toString().padStart(3,"0")}.jpg`)).statusText;
            if (response == "OK") {
                latestCD = latestCD+1;
                window.localStorage.setItem("latestCD",latestCD);
                alert(`New David Bowie CD just got uploaded! ID X3CDDB${(latestCD).toString().padStart(3,"0")}`);
            }
        }
    },document.getElementById("check-time").value*86400000);
}