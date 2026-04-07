# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** Static display with autoplay video background

## DOM Structure
Full-width section with:
1. Announcement bar at top: "Check out the WeatherTech x Levrack Shelf Mat" + CTA button
2. Video background (autoplay, loop, muted)
3. Overlay text: "LEVRACK" label, "Made In America. Proven Everywhere." heading
4. "Shop Levrack" CTA button

## Computed Styles

### Announcement Bar
- backgroundColor: #A52430
- padding: 20px 0px
- Text: white, Rajdhani, 24px, 800 weight, uppercase
- CTA button: white bg, red text, inline

### Video Container
- Full width, covers section
- Video: autoplay, loop, muted
- Dark overlay on left side for text readability

### Hero Heading "LEVRACK" label
- fontSize: small, uppercase tracking
- color: white

### Hero H2 "Made In America. Proven Everywhere."
- fontSize: 85px (from exploreTitle extraction which matched hero heading pattern)
- fontWeight: 700
- fontFamily: Rajdhani
- lineHeight: 76.5px
- color: #FFFFFF
- textTransform: uppercase

### Shop Levrack Button
- fontSize: 18px
- fontWeight: 700
- fontFamily: Rajdhani
- letterSpacing: 2px
- color: #A52430
- backgroundColor: #FFFFFF
- textTransform: uppercase
- padding: 5.4px 18px
- borderRadius: 4px
- transition: 0.3s
- display: inline-block

## Assets
- Video: `public/videos/homepage.mp4`
- No poster image

## Text Content
- Announcement: "Check out the WeatherTech x Levrack Shelf Mat"
- Announcement CTA: "Show Me the Mats"
- Label: "LEVRACK"
- Heading: "Made In America.\nProven Everywhere."
- CTA: "Shop Levrack"

## Responsive Behavior
- **Desktop:** Full-width video, text overlaid on left
- **Mobile:** Video may be hidden or scaled, text stacks vertically, announcement bar wraps
