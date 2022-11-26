function closeSubmit(){
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    window.location.href = "mailto:jakestevenwood.com?subject="+subject+"&body="+message;
    location.href = 'https://jakestevenwood.github.io/';
}