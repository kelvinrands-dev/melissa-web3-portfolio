/* =============================================
   STARS.JS
   Creates a canvas star animation inside
   any element passed to addStars().
   Reusable — called on multiple sections.
============================================= */


/* ── Core function ── */
function addStars(element, starCount = 120) {

    /* Create and inject canvas */
    const canvas = document.createElement('canvas');
    canvas.classList.add('stars__canvas');
    element.prepend(canvas);

    const ctx = canvas.getContext('2d');

    /* Resize canvas to always fill its parent */
    function resizeCanvas() {
        canvas.width  = element.offsetWidth;
        canvas.height = element.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    /* Create stars */
    const stars = [];

    function createStar() {
        return {
            x:          Math.random() * canvas.width,
            y:          Math.random() * canvas.height,
            radius:     Math.random() * 1.2 + 0.2,
            opacity:    Math.random() * 0.6 + 0.1,
            speed:      Math.random() * 0.25 + 0.05,
            twinkle:    Math.random() * 0.005 + 0.001,
            twinkleDir: Math.random() > 0.5 ? 1 : -1,
        };
    }

    for (let i = 0; i < starCount; i++) {
        stars.push(createStar());
    }

    /* Animate */
    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {

            /* Twinkle */
            star.opacity += star.twinkle * star.twinkleDir;
            if (star.opacity >= 0.8) star.twinkleDir = -1;
            if (star.opacity <= 0.1) star.twinkleDir =  1;

            /* Drift upward */
            star.y -= star.speed;

            /* Reset to bottom when exits top */
            if (star.y < 0) {
                star.y       = canvas.height;
                star.x       = Math.random() * canvas.width;
                star.opacity = Math.random() * 0.3 + 0.1;
            }

            /* Draw */
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();

        });

        requestAnimationFrame(animate);
    }

    animate();
}


/* =============================================
   ATTACH TO SECTIONS
   Pass each section element and star count.
   Fewer stars for smaller sections.
============================================= */
addStars(document.querySelector('.hero'),       160);
/*addStars(document.querySelector('.stats-wrap'), 60);
addStars(document.querySelector('.pow'),        100);*/
addStars(document.querySelector('.contact'),    60);