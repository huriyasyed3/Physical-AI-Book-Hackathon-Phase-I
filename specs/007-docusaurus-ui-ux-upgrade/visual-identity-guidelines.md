# Visual Identity Guidelines for Physical AI Book

## Color Palette

### Primary Colors
- Primary: #1a73e8 (modern blue)
- Primary Dark: #1557b0
- Primary Light: #3b8cff
- Primary Lighter: #8ab4f8
- Primary Lightest: #d3e3fd

### Secondary Colors
- Secondary: #5f6368 (neutral gray)
- Secondary Dark: #444746
- Secondary Light: #80868b
- Secondary Lighter: #dadce0
- Secondary Lightest: #f1f3f4

### Background Colors
- Background: #ffffff
- Surface Background: #f8f9fa
- Footer Background: #f8f9fa

### Text Colors
- Text Primary: #202124
- Text Secondary: #5f6368
- Text Disabled: #80868b

## Typography

### Font Stack
- Primary: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif

### Font Sizes
- H1: 2.3rem
- H2: 1.75rem
- H3: 1.5rem
- H4: 1.25rem
- H5: 1.1rem
- H6: 1rem
- Body: 1rem (16px base)

### Line Height
- Base: 1.65 for optimal readability

## Spacing System

### Base Spacing Unit
- Global Spacing: 0.75rem
- Vertical Spacing: 1.5rem
- Horizontal Spacing: 1.5rem

### Common Spacing Values
- Small: 0.5rem
- Medium: 1rem
- Large: 1.5rem
- Extra Large: 2rem
- Extra Extra Large: 3rem

## Border Radius

### Radius System
- Global Radius: 8px
- Input Radius: 8px
- Hero Radius: 8px

## Shadows

### Shadow System
- Global Shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- Lifted Shadow: 0 4px 12px rgba(0, 0, 0, 0.08)
- Card Shadow: Same as Global Shadow

## Component Guidelines

### Buttons
- Border Radius: 8px
- Font Weight: 500
- Hover Effect: translateY(-1px) with lifted shadow
- Transitions: 0.2s ease

### Cards
- Border Radius: 8px
- Shadow: Global shadow
- Hover Effect: Lifted shadow on hover
- Transitions: 0.2s ease

### Navigation
- Navbar: Subtle shadow (0 1px 2px 0 rgba(0, 0, 0, 0.03))
- Sidebar Links: 8px border radius, 0.5rem 1rem padding
- Active Links: Bold font weight (600)

### Code Blocks
- Background: #f6f8fa (light) / #2d333b (dark)
- Border Radius: 4px
- Padding: 1.2rem 1.5rem
- Font Size: 90% of base

### Tables
- Border Radius: 8px
- Overflow: Hidden
- Shadow: Global shadow
- Cell Padding: 0.75rem 1rem

## Responsive Breakpoints

### Breakpoints
- Mobile: Up to 600px
- Small Tablet: 601px to 768px
- Large Tablet: 769px to 996px
- Desktop: 997px and above

### Responsive Adjustments
- H1 font size reduces to 1.75rem on mobile
- H2 font size reduces to 1.5rem on mobile
- H3 font size reduces to 1.25rem on mobile
- Buttons become full-width on extra small devices
- Feature cards stack vertically on mobile

## Dark Mode Considerations

### Dark Mode Colors
- Primary: #8ab4f8
- Background: #202124
- Surface Background: #303134
- Text Primary: #e8eaed
- Code Background: #2d333b

### Dark Mode Text
- Higher contrast ratios maintained
- Code highlighting optimized for readability

## Accessibility Standards

### Contrast Ratios
- All text meets WCAG 2.1 AA standards
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text

### Touch Targets
- Minimum 44px touch targets on mobile devices
- Adequate spacing between interactive elements

## Implementation Notes

### CSS Custom Properties
All color and spacing values are defined as CSS custom properties for easy maintenance and consistency.

### Component Classes
- Use consistent class names across the site
- Follow BEM methodology where applicable
- Leverage Docusaurus' built-in classes where possible

This visual identity system ensures a consistent, professional appearance across all pages of the Physical AI Book, supporting the goal of providing an improved learning experience for students, developers, and educators.