$(document).ready(function() {
    chrome.tabs.getSelected(null, function(tab){
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: tab.url,
            colorDark : "#000",
            colorLight : "#fffef2",
            correctLevel : QRCode.CorrectLevel.H
        });
    });
})