/* =============================================
   UTILS.JS
   Handles two utility functions:
   1. Wallet copy — copies address to clipboard
      when user clicks a wallet card in footer
   2. Photo fallback — hides broken image and
      shows placeholder if photo fails to load
============================================= */


/* =============================================
   1. WALLET COPY
   Called directly from onclick in index.html.
   Takes the wallet address string and the
   card element that was clicked.

   Steps:
   - Copy address to clipboard
   - Show "Copied!" feedback on the card
   - Reset back to original after 2 seconds
============================================= */
function copyWallet(address, card) {

    /* Grab the address element inside the card */
    const addrEl = card.querySelector('.wallet__addr');

    /* Save original address text so we can restore it */
    const originalText = addrEl.textContent;

    /* Copy address to clipboard */
    navigator.clipboard.writeText(address)

        .then(() => {

            /* Show success feedback */
            addrEl.textContent = '✓ Copied!';
            addrEl.style.color = 'var(--green)';

            /* Reset after 2 seconds */
            setTimeout(() => {
                addrEl.textContent = originalText;
                addrEl.style.color = '';
            }, 2000);

        })

        .catch(() => {

            /* Clipboard failed — show error feedback */
            addrEl.textContent = 'Copy failed. Try manually.';
            addrEl.style.color = 'var(--amber)';

            /* Reset after 2 seconds */
            setTimeout(() => {
                addrEl.textContent = originalText;
                addrEl.style.color = '';
            }, 2000);

        });

}


/* =============================================
   2. PHOTO FALLBACK
   If Melissa's photo fails to load —
   broken image path, wrong filename etc —
   we hide the broken img tag and show
   the placeholder div instead.
============================================= */
const melissaPhoto    = document.getElementById('melissaPhoto');
const photoPlaceholder = document.getElementById('photoPlaceholder');


if (melissaPhoto) {

    /* Photo loaded successfully — hide placeholder */
    melissaPhoto.addEventListener('load', () => {
        if (photoPlaceholder) {
            photoPlaceholder.style.display = 'none';
        }
    });

    /* Photo failed to load — hide img, show placeholder */
    melissaPhoto.addEventListener('error', () => {
        melissaPhoto.style.display    = 'none';
        if (photoPlaceholder) {
            photoPlaceholder.style.display = 'flex';
        }
    });

}