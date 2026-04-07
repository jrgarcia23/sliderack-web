# ExploreLevrack Specification

## Overview
- **Target file:** `src/components/ExploreLevrack.tsx`
- **Interaction model:** Static product grid

## DOM Structure
White section with:
1. H2 title "Explore Levrack"
2. 4-column product grid (12ft, 10ft, 8ft, 7ft)
3. "Shop Levracks" CTA button

## Computed Styles

### Container
- backgroundColor: #FFFFFF
- padding: 150px 0px
- maxWidth: ~1200px centered

### Title H2
- fontSize: 34px (from shelvingH2 which is the pattern for section h2s)
- fontWeight: 700
- fontFamily: Rajdhani
- color: #201F20
- textTransform: uppercase
- paddingBottom: 10px

### Product Grid
- display: flex or grid, 4 columns
- gap: between cards

### Product Card
- width: ~254px
- height: ~311px
- Image container with gray product image on white bg
- Product title below image
- fontSize: 18px
- fontFamily: Heebo
- color: #201F20

### Product Image
- ~1025x1025px source, displayed smaller
- objectFit: contain
- Gray product on white/transparent background

### CTA Button "Shop Levracks"
- Same style as global CTA: white bg on dark, or red bg with white text
- backgroundColor: #A52430
- color: #FFFFFF
- fontFamily: Rajdhani
- fontSize: 18px
- fontWeight: 700
- textTransform: uppercase
- letterSpacing: 2px
- borderRadius: 4px
- padding: 5.4px 18px

## Assets
- `/images/products/12ft-gray.png`
- `/images/products/10ft-gray.png`
- `/images/products/8ft-gray.png`
- `/images/products/7ft-gray.png`

## Text Content
- Title: "Explore Levrack"
- Products: "12ft Levrack", "10ft Levrack", "8ft Levrack", "7ft Levrack"
- CTA: "Shop Levracks"

## Responsive Behavior
- **Desktop:** 4 columns
- **Tablet:** 2 columns
- **Mobile:** 1-2 columns, stacked
