# WhoUsesLevrack Specification

## Overview
- **Target file:** `src/components/WhoUsesLevrack.tsx`
- **Interaction model:** Time-driven carousel (auto-slide) + click-driven (prev/next/dots)

## DOM Structure
Dark background section with:
1. H3 "Who Uses Levrack?" centered
2. Logo carousel with prev/next arrows
3. Dot navigation (11 dots)

## Computed Styles

### Container
- backgroundColor: dark/black
- padding: 54px 0px
- Full width

### H3 Title
- fontFamily: Rajdhani
- color: #FFFFFF
- textTransform: uppercase
- text-align: center

### Carousel
- Horizontal slider showing ~6 brand logos at a time
- Auto-advances
- Prev/Next arrow buttons on sides
- 11 dot indicators at bottom

### Brand Logos
- White/light logos on dark background
- Various sizes, vertically centered
- Links to ambassador pages

## States & Behaviors

### Auto-slide
- Carousel auto-advances through slides
- 11 total slides/positions

### Click nav
- Prev/Next buttons cycle through
- Dots jump to specific position

## Assets
- `/images/brands/jay-lenos-garage.png`
- `/images/brands/hv3-foundation.png`
- `/images/brands/tyson-lamb.png`
- `/images/brands/jordan-davis.png`
- `/images/brands/fowlco.png`
- `/images/brands/thomas-rhett.png`
- `/images/brands/emory-motorsports.png`
- `/images/brands/brand-layer-6.png`
- `/images/brands/brand-026cd.png`
- `/images/brands/brand-layer-3.png`
- `/images/brands/brand-layer-4.png`

## Responsive Behavior
- **Desktop:** ~6 logos visible at once
- **Mobile:** 2-3 logos visible, swipeable
