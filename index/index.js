document.addEventListener('DOMContentLoaded', function() {
    // Particle animation (no changes)
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 50; i++) createParticle();
    setTimeout(() => {
        const container = document.querySelector('.splash-container');
        container.style.animation = 'fadeOut 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        setTimeout(() => window.location.href = '../html/home.html', 800);
    }, 3500);

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 2 + 1;
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${Math.random() > 0.5 ? '#f89406' : '#ffffff'};
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            opacity: 0;
            animation: particleFloat ${duration}s ease-in-out infinite;
        `;
        particlesContainer.appendChild(particle);
    }

    // Inject keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut { from { opacity: 1; transform: scale(1);} to { opacity: 0; transform: scale(1.1);} }
        @keyframes particleFloat { 0%,100%{opacity:0;transform:translateY(0)translateX(0);} 50%{opacity:.5;transform:translateY(-20px)translateX(10px);} }
        .particle { pointer-events: none; }
    `;
    document.head.appendChild(style);

    // --- MUSIC SECTION FIXED ---
    const bgMusic = document.getElementById('bgMusic');
    const soundToggle = document.getElementById('soundToggle');
    let isMuted = false; // Start with sound ON

    bgMusic.volume = 0.3;
    soundToggle.classList.remove('muted');

    // Try to play music immediately
    function tryPlayMusic() {
        bgMusic.play().then(() => {
            isMuted = false;
            soundToggle.classList.remove('muted');
        }).catch(() => {
            // If autoplay is blocked, set to muted UI
            isMuted = true;
            soundToggle.classList.add('muted');
        });
    }
    tryPlayMusic();

    // If autoplay fails, listen for first user gesture to play
    document.addEventListener('click', function playOnUserGesture() {
        if (isMuted) {
            bgMusic.play();
            isMuted = false;
            soundToggle.classList.remove('muted');
        }
        document.removeEventListener('click', playOnUserGesture);
    }, { once: true });

    // Sound toggle button
    soundToggle.addEventListener('click', () => {
        if (isMuted) {
            bgMusic.play();
            bgMusic.volume = 0.3;
            soundToggle.classList.remove('muted');
            isMuted = false;
        } else {
            bgMusic.pause();
            soundToggle.classList.add('muted');
            isMuted = true;
        }
    });

    // Pause music when leaving, resume on return (if not muted)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (!isMuted) bgMusic.pause();
        } else {
            if (!isMuted) bgMusic.play();
        }
    });

    // Stop sound and redirect after animation
    setTimeout(() => {
        bgMusic.pause();
        const container = document.querySelector('.splash-container');
        container.style.animation = 'fadeOut 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        setTimeout(() => window.location.href = 'html/home.html', 800);
    }, 3500);
});