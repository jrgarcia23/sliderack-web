# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** Static

## DOM Structure
Black background footer with:
1. Top row: 4 columns (Logo+description, Contact Us, Quick Links, Distributors)
2. Bottom row: Copyright + social media icons

## Computed Styles

### Container
- backgroundColor: #000000
- padding: 25px 0px 26px
- color: #FFFFFF
- fontFamily: Heebo

### Logo Column
- Reversed logo image
- Description paragraph in small text

### Contact Us Column
- H3 heading
- Email links: info@levrack.com, sales@levrack.com, support@levrack.com
- Phone: (402) 875-9466

### Quick Links Column
- H3 heading
- Links: Shop, Cart, My Account, Contact, Privacy Policy, Returns & Terms of Service

### Distributors Column
- H3 heading
- Links: Become a Distributor, Distributor Login

### Bottom Bar
- "© 2026 Levrack" left
- Social icons right: Facebook, Instagram, YouTube, LinkedIn

### H3 headings
- fontFamily: Rajdhani
- color: #FFFFFF
- textTransform: uppercase

### Links
- color: rgba(255,255,255,0.7) or #FFFFFF
- fontSize: 14-16px

### Social Icons
- FontAwesome icons (Facebook, Instagram, YouTube, LinkedIn)
- Circular or plain icons, red bg or transparent

## Assets
- Logo: `public/images/levrack-logo-reversed.png`

## Text Content
- See DOM structure above for all text

## Responsive Behavior
- **Desktop:** 4 columns
- **Mobile:** Stacked vertically
