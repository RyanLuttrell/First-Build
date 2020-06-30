// Getting the buttons and converting them into variables
const facebookSubmit = document.getElementById('facebookSubmit');
const googleSubmit = document.getElementById('googleSubmit');
const instagramSubmit = document.getElementById('instagramSubmit');

//Adding the event listeners for each of the buttons
facebookSubmit.addEventListener('click', facebook);
googleSubmit.addEventListener('click', google);
instagramSubmit.addEventListener('click', instagram);

function facebook(){
    let facebookKey = document.getElementById('facebookInput').value;
    return facebookKey;
}
function google(){
    let googleKey = document.getElementById('googleInput').value;
    return googleKey;
}
function instagram(){
    let instagramKey = document.getElementById('instagramInput').value;
    return instagramKey;
}


