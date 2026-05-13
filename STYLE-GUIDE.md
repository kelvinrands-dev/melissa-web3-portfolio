# MELISSA PORTFOLIO — STYLE GUIDE
Your complete reference for building this site. Keep this open in VS Code while you work.

---

## FONTS

Two fonts. Both from Google Fonts. Already linked in the HTML head.

```
Syne        → All headings, name, big titles, nav logo, card titles
Outfit      → Body text, paragraphs, nav links, buttons, small text
```

### How to use them in CSS
```css
font-family: 'Syne', sans-serif;    /* headings */
font-family: 'Outfit', sans-serif;  /* body */
```

### Font Weights
```
Syne:   400 (regular)  600 (semibold)  700 (bold)  800 (extrabold)
Outfit: 300 (light)    400 (regular)   500 (medium) 600 (semibold)
```

### Font Sizes (use clamp for responsive)
```css
/* Hero name */
font-size: clamp(76px, 14vw, 168px);

/* Section headings */
font-size: clamp(38px, 5.2vw, 66px);

/* Hero cycling roles */
font-size: clamp(18px, 2.8vw, 30px);

/* Stat numbers */
font-size: clamp(44px, 5.5vw, 70px);

/* Body text */
font-size: clamp(15px, 1.5vw, 17px);

/* Small labels / tags */
font-size: 0.72rem;

/* Nav links */
font-size: 0.8rem;

/* Footer / tiny text */
font-size: 0.78rem;
```

---

## COLORS

All defined as CSS variables in :root {}. Use var(--name) everywhere.

### Backgrounds
```css
--bg:    #0a0a0f   /* main page background — deepest dark */
--bg-1:  #0e0e18   /* alternate sections background */
--bg-2:  #13131f   /* cards, photo bg, slightly lighter */
```

### Purple (primary accent)
```css
--purple:       #7c3aed   /* buttons, borders, highlights */
--purple-light: #9d5ff5   /* text on dark, hover states */
--purple-dim:   rgba(124, 58, 237, 0.18)   /* subtle backgrounds */
--purple-glow:  rgba(124, 58, 237, 0.35)   /* box-shadow glow */
```

### Cyan (secondary accent)
```css
--cyan:       #06b6d4   /* secondary highlights */
--cyan-light: #22d3ee   /* text on dark, hover states */
--cyan-dim:   rgba(6, 182, 212, 0.14)   /* subtle backgrounds */
--cyan-glow:  rgba(6, 182, 212, 0.30)   /* box-shadow glow */
```

### Status Colors
```css
--green: #34d399   /* completed status, success */
--amber: #fbbf24   /* memecoin category tag */
```

### White Opacities (use these instead of plain white)
```css
--w:    #ffffff           /* pure white — only for hero name */
--w80:  rgba(255,255,255,0.80)   /* body text, main readable text */
--w50:  rgba(255,255,255,0.50)   /* secondary text, descriptions */
--w20:  rgba(255,255,255,0.20)   /* borders on hover, faint text */
--w10:  rgba(255,255,255,0.10)   /* very subtle elements */
--w06:  rgba(255,255,255,0.06)   /* card hover background */
--w03:  rgba(255,255,255,0.03)   /* default card background */
```

### Borders
```css
--border: rgba(255,255,255,0.08)   /* default border on all cards and sections */
```

---

## SPACING SYSTEM

Be consistent. Stick to these values.

```
4px   — tiny gaps (between icon and text)
8px   — small gaps (badge padding, small elements)
10px  — pill gaps, small padding
14px  — button gaps, small margin
18px  — grid gaps between cards
20px  — paragraph margin bottom
24px  — border radius on cards
28px  — medium margin
32px  — card internal padding
36px  — medium section padding
40px  — tablet side padding
48px  — medium section element spacing
52px  — card padding on stats
56px  — section sub-element margin bottom
64px  — desktop side padding (main)
80px  — tablet section vertical padding
84px  — about grid gap desktop
120px — desktop section vertical padding
```

---

## BORDER RADIUS

```css
4px    — tiny pill tags inside text
14px   — service icons, small icons
18px   — footer wallet cards
22px   — proof of work cards, service cards
24px   — stats grid, about photo
100px  — all buttons, all pills, nav hire button, badges
```

---

## GLASSMORPHISM RECIPE

Use this for cards that need the glass effect:

```css
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 22px;
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
```

For stronger glass (modals, overlays):
```css
background: rgba(10, 10, 15, 0.88);
backdrop-filter: blur(24px);
-webkit-backdrop-filter: blur(24px);
```

---

## GLOW EFFECTS

### Button glow on hover
```css
box-shadow: 0 10px 36px rgba(124, 58, 237, 0.5);   /* purple */
box-shadow: 0 10px 36px rgba(6, 182, 212, 0.4);    /* cyan */
```

### Card glow on hover
```css
box-shadow: 0 24px 64px rgba(124, 58, 237, 0.22);  /* purple card */
box-shadow: 0 24px 64px rgba(6, 182, 212, 0.17);   /* cyan card */
```

### Text glow (hero name)
```css
text-shadow: 0 0 100px rgba(124, 58, 237, 0.25);
```

### Ambient orb glow
```css
background: radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 65%);
```

---

## GRADIENT TEXT

For purple-to-cyan gradient text (cycling roles, section tags):
```css
background: linear-gradient(90deg, var(--purple-light), var(--cyan-light));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

For white-to-purple gradient text (nav logo):
```css
background: linear-gradient(90deg, #ffffff 40%, var(--purple-light));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## TRANSITIONS & ANIMATIONS

### Standard hover transition
```css
transition: all 0.3s ease;
```

### Smooth elastic transition (cards lifting up)
```css
transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.4s,
            box-shadow 0.4s;
```

### Scroll reveal transition
```css
transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
```

### Card hover lift
```css
transform: translateY(-7px);   /* proof of work cards */
transform: translateY(-5px);   /* service cards */
transform: translateY(-3px);   /* buttons */
```

---

## DOT GRID BACKGROUND (Hero)

```css
background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
background-size: 44px 44px;
mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, black 0%, transparent 100%);
-webkit-mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, black 0%, transparent 100%);
```

---

## CATEGORY TAG COLORS

Each project category has its own color:

```css
/* Memecoin */
background: rgba(251, 191, 36, 0.13);
color: #fbbf24;

/* DeFi */
background: rgba(6, 182, 212, 0.13);
color: #22d3ee;

/* NFT */
background: rgba(139, 92, 246, 0.13);
color: #a78bfa;

/* Gaming */
background: rgba(52, 211, 153, 0.13);
color: #34d399;

/* Infrastructure */
background: rgba(249, 115, 22, 0.13);
color: #fb923c;

/* Exchange */
background: rgba(6, 182, 212, 0.13);
color: #22d3ee;
```

---

## STATUS BADGE COLORS

```css
/* Completed */
background: rgba(52, 211, 153, 0.10);
color: #34d399;
border: 1px solid rgba(52, 211, 153, 0.20);

/* Ongoing / Live */
background: rgba(124, 58, 237, 0.10);
color: #9d5ff5;
border: 1px solid rgba(124, 58, 237, 0.20);
```

---

## BREAKPOINTS

```css
/* Tablet */
@media (max-width: 1100px) { ... }

/* Mobile */
@media (max-width: 768px)  { ... }

/* Small mobile */
@media (max-width: 480px)  { ... }
```

### Key responsive changes at 768px
- Nav links hide, burger menu shows
- Hero padding reduces
- Stats grid becomes 2 columns
- About grid becomes 1 column (photo on top)
- Proof of work grid becomes 1 column
- Services grid becomes 1 column
- Side padding drops from 64px to 24px
- Section padding drops from 120px to 64px

---

## SECTION STRUCTURE

Every section follows this pattern:
```
section padding:  120px top/bottom,  64px left/right  (desktop)
                   80px top/bottom,  40px left/right  (tablet)
                   64px top/bottom,  24px left/right  (mobile)

max-width: 1240px, centered with margin: 0 auto
```

---

## PERFORMANCE TIPS

- Always add `will-change: transform` on animated elements (orbs, cards)
- Use `transform: translateY()` for hover lifts — never move with `top/left`
- Use `opacity + transform` for reveal animations — never `display` toggle
- Add `{ passive: true }` to scroll event listeners
- Use `IntersectionObserver` for scroll reveals — never scroll event listeners

---

## QUICK REFERENCE CARD

```
Primary font:     Syne (headings)
Secondary font:   Outfit (body)
Background:       #0a0a0f
Primary accent:   #7c3aed (purple)
Secondary accent: #06b6d4 (cyan)
Success:          #34d399 (green)
Warning:          #fbbf24 (amber)
Default border:   rgba(255,255,255,0.08)
Card background:  rgba(255,255,255,0.03)
Body text:        rgba(255,255,255,0.80)
Muted text:       rgba(255,255,255,0.50)
Border radius:    22px cards / 100px pills
Grid gap:         18px
Desktop padding:  64px sides / 120px vertical
```
