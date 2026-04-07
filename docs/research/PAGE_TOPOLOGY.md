# Levrack.com Page Topology

## Page Layout
- Standard vertical scroll page (no Lenis, no scroll-snap)
- Divi Theme Builder (WordPress)
- No smooth scroll library

## Sections (top to bottom)

| # | Working Name | Type | BG Color | Interaction Model |
|---|-------------|------|----------|-------------------|
| 1 | TopBar | Header (flow) | #A52430 (red) | Static |
| 2 | NavBar | Header (flow) | #A52430 (red) | Click-driven (dropdowns) |
| 3 | AnnouncementBar | Flow | #A52430 (red) | Static |
| 4 | HeroSection | Flow | Video bg + dark overlay | Static + popup form |
| 5 | ExploreLevrack | Flow | #FFFFFF | Static (product grid) |
| 6 | ShelvingReimagined | Flow | #FFFFFF | Static |
| 7 | HowItWorks | Flow | BG image + gradient overlay | Static |
| 8 | ExploreWorkstations | Flow | #000000 (rounded card) | Static (product grid) |
| 9 | LevrackAccessories | Flow | #FFFFFF | Static |
| 10 | WhoUsesLevrack | Flow | Dark bg | Time-driven (carousel auto-slide) |
| 11 | GetYourLevrack | Flow | BG image (motorcycle) | Static (3 blurb cards) |
| 12 | BecomeDistributor | Flow | White/dark red | Static |
| 13 | Footer | Footer | #000000 | Static |
| 14 | PopupForm | Overlay (fixed) | White + dark red | Click-driven (close btn) |

## Z-Index Layers
- PopupForm: highest (overlay with backdrop)
- Header (TopBar + NavBar): standard flow, NOT sticky/fixed
- All content sections: normal flow

## Key Dependencies
- PopupForm is a site-wide overlay (Bloom plugin), appears on page load
- WhoUsesLevrack carousel has prev/next buttons and dot navigation
- Video in HeroSection is autoplay, loop, muted
