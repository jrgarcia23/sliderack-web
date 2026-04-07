# ExploreWorkstations Specification

## Overview
- **Target file:** `src/components/ExploreWorkstations.tsx`
- **Interaction model:** Static product grid

## DOM Structure
Black rounded card section containing:
1. H2 title "Explore Workstations"
2. 5-column product grid (horizontal scroll possible)
3. "All Workstations" CTA button

## Computed Styles

### Container
- backgroundColor: #000000
- padding: 20px 0px 5px
- margin: 75px 100px 0px (inset from page edges)
- borderRadius: 10px
- transition: margin 0.3s

### Title H2
- fontFamily: Rajdhani
- fontWeight: 700
- color: #FFFFFF
- textTransform: uppercase

### Product Grid
- 5 items in a row (may horizontal scroll on smaller screens)
- Products: cards with image + title

### Product Card
- White product image on dark background
- Title below: white text, Heebo font

### CTA "All Workstations"
- backgroundColor: #A52430
- color: #FFFFFF
- Same global CTA style

## Assets
- `/images/products/workstation-4ft.webp`
- `/images/products/workstation-plus-4ft.webp`
- `/images/products/mobile-workstation-4ft.jpg`
- `/images/products/mobile-workstation-8ft.jpg`
- `/images/products/mobile-workstation-perf-4ft.png`

## Text Content
- Title: "Explore Workstations"
- Products: "Levrack Workstation", "Levrack Workstation PLUS", "Mobile Workstation (4-Foot)", "Mobile Workstation (8-Foot)", "Mobile Workstation (4-Foot) Perforated Top"
- CTA: "All Workstations"

## Responsive Behavior
- **Desktop:** 5 columns in rounded black container
- **Mobile:** Cards stack or scroll horizontally, container loses side margins
