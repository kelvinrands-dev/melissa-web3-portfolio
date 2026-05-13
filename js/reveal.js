/* =============================================
   REVEAL.JS
   Handles scroll reveal animations.
   Every element with class "reveal" starts
   invisible and shifted down (set in reset.css).
   When it enters the viewport, we add class "on"
   which triggers the CSS transition to visible.

   We use IntersectionObserver instead of scroll
   events — much better for performance.
============================================= */


/* =============================================
   INTERSECTION OBSERVER SETUP
   threshold: 0.1 = trigger when 10% of element
   is visible in the viewport.
   rootMargin bottom = trigger slightly before
   element fully enters viewport — feels natural.
============================================= */
const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        /* If element is in viewport */
        if (entry.isIntersecting) {

            /* Add "on" class — CSS does the animation */
            entry.target.classList.add('on');

            /* Stop watching this element once revealed */
            /* No point watching it after it's already shown */
            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.1,
    rootMargin: '0px 0px -48px 0px'
});


/* =============================================
   ATTACH OBSERVER TO ALL REVEAL ELEMENTS
   Grabs every element with class "reveal"
   and tells the observer to watch it.
============================================= */
const revealElements = document.querySelectorAll('.reveal');

revealElements.forEach(element => {
    revealObserver.observe(element);
});