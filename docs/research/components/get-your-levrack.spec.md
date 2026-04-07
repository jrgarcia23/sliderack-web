# GetYourLevrack Specification

## Overview
- **Target file:** `src/components/GetYourLevrack.tsx`
- **Interaction model:** Static

## DOM Structure
Full-width section with background image, containing:
1. Left column: H2 "Get Your Levrack" + description + CTA
2. Right column: 3 blurb cards (Standard Build, Custom Build, Consultation)

## Computed Styles

### Container
- backgroundImage: url("/images/bg/jay-leno-motorcycle.jpg")
- backgroundSize: cover
- backgroundPosition: 50% 18%
- backgroundColor: #A52430 (fallback)
- padding: 72px 0px

### H2 "Get Your Levrack"
- fontFamily: Rajdhani
- fontWeight: 700
- color: #FFFFFF
- textTransform: uppercase

### Description paragraph
- fontFamily: Heebo
- color: #FFFFFF
- fontSize: 18px

### CTA "Let's Do This"
- White bg, red text style

### Blurb Cards (3 cards stacked vertically on right)
Each card has:
- Icon/number indicator
- H3 title (Standard Build / Custom Build / Consultation)
- Description paragraph
- Dark semi-transparent background or glass effect

### H3 in blurb cards
- fontFamily: Rajdhani
- fontWeight: 700
- color: #FFFFFF
- textTransform: uppercase

## Assets
- Background: `public/images/bg/jay-leno-motorcycle.jpg`

## Text Content
- H2: "Get Your Levrack"
- Description: "We've got a few different options. Whether it's a ready-to-deliver model, a custom build, or a special project, we can handle almost anything. Just let us know what you're looking for."
- CTA: "Let's Do This"
- Card 1: "Standard Build" - "We've got these standard Levrack sizes, Workstations and Accessories ready to go."
- Card 2: "Custom Build" - "Got something special in mind? Try our 3D Builder on your desktop or just give us a shout."
- Card 3: "Consultation" - "Are you looking for a specialized Levrack, or have questions about a new project? We love it. Let's talk."

## Responsive Behavior
- **Desktop:** 2 columns (text left, cards right)
- **Mobile:** Stacked, full-width
