
let email = document.getElementById('footerEmail');
let emailSubmit = document.getElementById('footerButton');
let req = new XMLHttpRequest();
emailSubmit.addEventListener('click', () => {
    if (validateEmail(email.value)) {
        req.open("POST", "https://houseroots-bd087.firebaseio.com/houseroots-bd087.json");
        req.send(JSON.stringify(email.value));
        email.value = "subscribed to newsletter";
    } else {
        email.value = "please submit valid email";
    }
});

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}