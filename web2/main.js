function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerText = '❤️';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);



function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    petal.style.top = Math.random() * 100 + 'vh'; // Random vertical position
    petal.style.animationDuration = Math.random() * 2 + 3 + 's';
    petal.style.backgroundImage = "url('../img/petalo.png')";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 5000);
}

setInterval(createPetal, 300);

document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.volume = 0.25;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('click', function() {
            var overlay = this.querySelector('.overlay');
            overlay.style.animation = 'fadeOut 1s forwards';
            overlay.addEventListener('animationend', function() {
                this.style.display = 'none';
            });
        });
    });
});
