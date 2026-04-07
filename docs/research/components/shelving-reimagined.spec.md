# ShelvingReimagined Specification

## Overview
- **Target file:** `src/components/ShelvingReimagined.tsx`
- **Interaction model:** Static

## DOM Structure
White bg section with 2 columns:
1. Left: GIF animation of Levrack shelving
2. Right: Text content with heading and subheading + CTA

## Computed Styles

### Container
- backgroundColor: #FFFFFF
- padding: 100px 0px
- maxWidth: ~1200px centered
- display: flex, 2 columns

### H2 "Shelving Reimagined"
- fontSize: 34px
- fontWeight: 700
- fontFamily: Rajdhani
- color: #A52430
- textTransform: uppercase

### H5 (mission statement)
- fontSize: ~18px
- fontWeight: 400-600
- fontFamily: Rajdhani or Heebo
- color: #201F20

### CTA "Find Your Levrack"
- Same global CTA style
- backgroundColor: #A52430
- color: #FFFFFF

## Assets
- GIF: `public/images/levrack-illustration.gif`

## Text Content
- H2: "Shelving Reimagined"
- H5: "Our mission is to provide a storage system that will hold up over time, maximize your available space, and look badass doing it."
- CTA: "Find Your Levrack"

## Responsive Behavior
- **Desktop:** 2 columns side by side
- **Mobile:** Stacked, GIF on top, text below
