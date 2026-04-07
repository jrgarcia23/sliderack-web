# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** Static (no sticky, no scroll change). Click-driven dropdowns on nav items.

## DOM Structure
Header has 2 rows:
1. TopBar (red bg): My Account | Checkout links on left, "0 Items" cart on right, phone number
2. NavBar (dark bg): Logo on left, nav links on right (Shop, Build a Levrack, About, Resources, Industries, Contact, Levrack UK)

## Computed Styles

### TopBar Row
- backgroundColor: rgb(165, 36, 48) = #A52430
- padding: 11px 0px 0px
- height: 48px
- width: 100%

### TopBar Links
- fontSize: 14px
- fontFamily: Rajdhani
- fontWeight: 700
- color: #FFFFFF
- textTransform: uppercase
- letterSpacing: normal

### NavBar Row
- backgroundColor: #A52430
- padding: 11px 0px 0px
- height: ~84px

### Logo
- Image: `/images/levrack-logo.png` (649x124px)
- Located left side of nav

### Nav Links
- fontSize: 14px
- fontWeight: 700
- fontFamily: Rajdhani
- color: #FFFFFF
- textTransform: uppercase
- transition: 0.4s ease-in-out
- paddingBottom: 8px
- display: inline-block in horizontal list

### Nav Items
- Shop, Build a Levrack, About, Resources, Industries, Contact, Levrack UK
- Items with "3" suffix have dropdown indicators (Shop, About, Resources, Industries)

## States & Behaviors

### Hover on nav links
- transition: 0.4s ease-in-out (opacity/color change)

## Assets
- Logo: `public/images/levrack-logo.png`

## Text Content
- Top bar left: "My Account" | "Checkout"
- Top bar right: "0 Items"
- Nav links: Shop, Build a Levrack, About, Resources, Industries, Contact, Levrack UK

## Responsive Behavior
- **Desktop (1440px):** Full horizontal nav with all links visible
- **Mobile (390px):** Hamburger menu, logo centered/left, top bar hidden or collapsed
