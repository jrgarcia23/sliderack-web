# LevrackAccessories Specification

## Overview
- **Target file:** `src/components/LevrackAccessories.tsx`
- **Interaction model:** Static product grid

## DOM Structure
White bg section with:
1. H2 "Levrack Accessories"
2. 4-column product grid
3. "All accessories" CTA

## Computed Styles

### Container
- backgroundColor: #FFFFFF
- padding: 50px 0px
- maxWidth: ~1200px centered

### Title H2
- fontFamily: Rajdhani, fontWeight: 700
- color: #201F20
- textTransform: uppercase

### Product Cards
- Same style as ExploreLevrack cards
- Image + title below

### CTA
- backgroundColor: #A52430
- color: #FFFFFF

## Assets
- `/images/products/workstation-drawers.png`
- `/images/products/gift-card.jpg`
- `/images/products/grid-system.jpg`
- `/images/products/storage-drawers.jpg`

## Text Content
- Title: "Levrack Accessories"
- Products: "Workstation Drawer Kit", "Levrack Gift Card", "Levrack Grid System", "Storage Drawers"
- CTA: "All accessories"

## Responsive Behavior
- **Desktop:** 4 columns
- **Mobile:** 1-2 columns stacked
