const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
audioStart = new Audio('./midia/audio_theme.mp3');
audioGameOver = new Audio('./midia/smb_gameover.wav');


const jump = () => {
    audioStart.play();
    
    mario.classList.add('jump');

    setTimeout (() => {
        mario.classList.remove('jump');
    }, 500);
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');

    if (pipePosition  < 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagem/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);


    function stopAudioStart(){
    audioStart.pause();
    }stopAudioStart();

        audioGameOver.play();

    function stopAudio(){
    audioGameOver.pause();
    }setTimeout(stopAudio, 8000);
        
    }
}, 10);

document.addEventListener('keydown', jump);

