let canCreateFirework = true;

document.getElementById('fireworks-container').addEventListener('mousemove', function(e) {
    if (!canCreateFirework) return;

    canCreateFirework = false;
    setTimeout(() => { canCreateFirework = true; }, 100);

    for (let i = 0; i < 20; i++) { 
        let particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = (e.pageX ) + 'px';
        particle.style.top = (e.pageY) + 'px';
        particle.style.backgroundColor = getRandomColor();

        let angle = Math.random() * Math.PI * 2;
        let speed = Math.random() * 5 + 5;
        let vx = Math.cos(angle) * speed;
        console.log(vx)
        let vy = Math.sin(angle) * speed;
        console.log(vy)
        this.appendChild(particle);
        moveAndFade(particle, vx, vy);
    }
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function moveAndFade(particle, vx, vy) {
    let opacity = 1;
    let fadeInterval = setInterval(() => {
        opacity -= 0.05;
        if (opacity <= 0) {
            clearInterval(fadeInterval);
            particle.remove();
        }
        particle.style.opacity = opacity;
        particle.style.left = (particle.offsetLeft + vx) + 'px';
        particle.style.top = (particle.offsetTop + vy) + 'px';
    }, 50);
}