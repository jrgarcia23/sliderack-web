# HowItWorks Specification

## Overview
- **Target file:** `src/components/HowItWorks.tsx`
- **Interaction model:** Static

## DOM Structure
Full-width section with background image + gradient overlay, containing:
1. Left column: H2 heading "How Levrack Works"
2. Right column: GIF/illustration + paragraph text + CTA

## Computed Styles

### Container
- backgroundImage: linear-gradient(90deg, rgba(0,0,0,0.61) 0%, rgba(176,176,176,0) 63%, rgba(255,255,255,0) 100%), url("/images/bg/levracks-in-garage.jpg")
- backgroundSize: cover
- backgroundPosition: 50% 50%
- padding: 115px 0px
- width: 100%

### H2 "How Levrack Works"
- fontSize: 50px
- fontWeight: 700
- fontFamily: Rajdhani
- lineHeight: 55px
- color: #FFFFFF
- textTransform: uppercase

### Paragraph text
- fontFamily: Heebo
- color: #FFFFFF or light color
- fontSize: 18px

### GIF
- levrack-illustration.gif displayed in right column

### CTA "Find Your Levrack"
- White bg, red text style

## Assets
- Background: `public/images/bg/levracks-in-garage.jpg`
- GIF: `public/images/levrack-illustration.gif`

## Text Content
- H2: "How Levrack Works"
- P: "The concept of a mobile aisle shelving system has been around for ages in archives and record storage, but it had never been presented in a way that could be utilized by the masses."
- CTA: "Find Your Levrack"

## Responsive Behavior
- **Desktop:** 2 columns, text left over gradient, GIF+text right
- **Mobile:** Stacked, full-width background
