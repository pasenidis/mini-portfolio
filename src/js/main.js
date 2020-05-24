// Card Animation HURR DURR
let isBehind = false;

function swapCards(duration) {
    const icon = document.getElementById('spinner');
    const front = document.getElementById('front');
    const back = document.getElementById('back');
    if (!isBehind) {
        isBehind = true;
        icon.classList.add('fa-spin');
        front.classList.add('toggler');
        front.style.display = 'none';
        back.style.display = 'block';
        back.classList.add('activated');
        setTimeout(() => {
            icon.classList.remove('fa-spin');
        }, duration);
    } else {
        isBehind = false;
        setTimeout(() => {
            icon.classList.add('fa-spin');
        }, duration);
        back.classList.remove('activated');
        back.style.display = 'none';
        front.style.display = 'block';
        front.classList.remove('toggler');
    }
}