document.addEventListener('DOMContentLoaded', () => {
    const girl = document.querySelector('.girl');
    const cactus = document.querySelector('.cactus');

    document.addEventListener('keydown', jump);
    let isJumping = false;

    function jump(event) {
        if (event.code === 'Space' && !isJumping) {
            isJumping = true;
            let jumpCount = 0;
            const jumpInterval = setInterval(() => {
                const jumpHeight = 10;
                girl.style.bottom = (jumpCount * jumpHeight) + 'px';
                jumpCount++;

                if (jumpCount > 15) {
                    clearInterval(jumpInterval);
                    let fallCount = 15;
                    const fallInterval = setInterval(() => {
                        const fallHeight = 10;
                        girl.style.bottom = (fallCount * fallHeight) + 'px';
                        fallCount--;

                        if (fallCount < 0) {
                            clearInterval(fallInterval);
                            isJumping = false;
                        }
                    }, 20);
                }
            }, 20);
        }
    }

    function moveCactus() {
        let cactusPosition = 400;

        const moveCactusInterval = setInterval(() => {
            cactusPosition -= 5;
            cactus.style.left = cactusPosition + 'px';

            if (cactusPosition < -20) {
                cactusPosition = 400;
            }

            if (
                cactusPosition > 0 &&
                cactusPosition < 50 &&
                girl.style.bottom === '0px'
            ) {
                alert('Game over! Refresh the page for a new game.');
                document.location.reload();
            }
        }, 20);
    }

    moveCactus();
});
