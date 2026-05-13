/* =============================================
   COUNTER.JS
   Animates the stat numbers counting up
   from 0 to their target value.

   How it works:
   - Every stat number has data-target and
     data-suffix attributes in the HTML
   - We watch each number with IntersectionObserver
   - When it enters viewport we run the animation
   - requestAnimationFrame keeps it smooth
   - Cubic easing makes it decelerate naturally
============================================= */


/* =============================================
   runCounter()
   Takes one stat element and animates it
   from 0 up to its data-target value.

   el         = the stat__num element
   target     = the final number to count to
   suffix     = text after the number e.g "+ Yrs"
   duration   = how long the animation runs (ms)
   startTime  = timestamp when animation began
============================================= */
function runCounter(el) {

    const target   = parseInt(el.dataset.target);
    const suffix   = el.dataset.suffix || '';
    const duration = 1800;
    const startTime = performance.now();

    /* ── Animation Loop ── */
    function tick(currentTime) {

        /* How far through the animation are we? 0 to 1 */
        const elapsed  = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        /* Cubic ease out — starts fast, slows down at end */
        /* Makes the counter feel natural not robotic */
        const eased = 1 - Math.pow(1 - progress, 3);

        /* Update the number on screen */
        el.textContent = Math.round(eased * target) + suffix;

        /* Keep going until progress reaches 1 */
        if (progress < 1) {
            requestAnimationFrame(tick);
        }

    }

    /* Kick off the animation loop */
    requestAnimationFrame(tick);

}


/* =============================================
   INTERSECTION OBSERVER SETUP
   Watches each stat number.
   Runs counter animation when it enters viewport.
   data-done flag stops it running twice if user
   scrolls back up and down again.
============================================= */
const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        /* If element is visible AND not already animated */
        if (entry.isIntersecting && !entry.target.dataset.done) {

            /* Mark as done so it never runs again */
            entry.target.dataset.done = '1';

            /* Run the counter animation */
            runCounter(entry.target);

        }

    });

}, { threshold: 0.5 });


/* =============================================
   ATTACH OBSERVER TO ALL STAT NUMBERS
   Grabs every element with data-target attribute
   and tells the observer to watch it.
============================================= */
const statNumbers = document.querySelectorAll('[data-target]');

statNumbers.forEach(stat => {
    counterObserver.observe(stat);
});