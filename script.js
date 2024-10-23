const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

yesBtn.addEventListener('click', () => {
    modal.style.display = 'block';

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


const moveNoButton = () => {
    const isMobile = window.innerWidth < 768;
    const randomX = isMobile 
        ? Math.floor(Math.random() * (window.innerWidth / 2 - noBtn.clientWidth))
        : Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    
    const randomY = isMobile
        ? Math.floor(Math.random() * (window.innerHeight / 2 - noBtn.clientHeight))
        : Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
};

noBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el clic en el botón
    moveNoButton();
});

noBtn.addEventListener('mouseover', moveNoButton);
