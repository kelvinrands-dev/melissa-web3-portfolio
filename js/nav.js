/* =============================================
   NAV.JS
   Handles two things:
   1. Sticky nav — adds "scrolled" class when
      user scrolls past 40px
   2. Mobile menu — opens and closes the
      overlay when burger is clicked
============================================= */


/* ── Grab Elements ── */
const nav         = document.getElementById('nav');
const burger      = document.getElementById('burger');
const mobileNav   = document.getElementById('mobileNav');
const navClose    = document.getElementById('navClose');
const navLinks    = document.querySelectorAll('.nav__overlay-link');


/* =============================================
   1. STICKY NAV
   Listens for scroll events.
   Adds "scrolled" class past 40px —
   triggers frosted glass background in CSS.
   passive: true = better scroll performance.
============================================= */
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}, { passive: true });


/* =============================================
   2. MOBILE MENU — OPEN
   Clicking burger adds "open" class to overlay.
   CSS handles the show/hide via display: flex.
   Body overflow hidden stops background scroll.
============================================= */
burger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
   burger.classList.add("hide-nav");
});


/* =============================================
   2. MOBILE MENU — CLOSE
   Close button removes "open" class.
   Restores body scroll.
============================================= */
navClose.addEventListener('click', closeMobileNav);

navLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
});


/* =============================================
   closeMobileNav()
   Called by close button AND by the overlay
   links in index.html via onclick="closeMobileNav()"
   So clicking any nav link also closes the menu.
============================================= */


function closeMobileNav() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    burger.classList.remove("hide-nav");
}

mobileNav.addEventListener("click", (e)=>{
   if(e.target!==navLinks){
      mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    burger.classList.remove("hide-nav");
   }
})

