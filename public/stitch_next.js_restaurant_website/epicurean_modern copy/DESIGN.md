---
name: Epicurean Modern
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c19'
  on-tertiary-container: '#848480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The design system embodies a sophisticated, high-end culinary experience that balances traditional hospitality with modern digital precision. It is designed to evoke a sense of "quiet luxury"—exclusive yet approachable. 

The aesthetic leans into **Minimalism** with a **Corporate/Modern** structure, utilizing generous whitespace to allow food photography to serve as the primary visual driver. Subtle influences of **Glassmorphism** are applied to overlays to maintain a sense of depth without cluttering the editorial feel. The target audience is discerning diners seeking an elevated, seamless booking and browsing experience.

## Colors
The palette is anchored by "Deep Charcoal" (#1A1A1A) for high-contrast text and backgrounds, providing a solid foundation of prestige. "Warm Gold" (#C5A059) is used sparingly as an accent for calls to action, active states, and ornamental flourishes to convey a premium feel. 

The background relies on "Crisp Cream" (#F9F7F2) in light mode to provide a softer, more organic feel than pure white. In dark mode, the hierarchy inverts, utilizing charcoal as the base with gold and cream accents to maintain legibility and elegance. Use mid-tone neutrals for borders and secondary text to maintain a low-friction visual hierarchy.

## Typography
The typographic system creates an editorial rhythm. **Libre Caslon Text** is used for headlines, providing a classic, literary authority that mirrors a high-end physical menu. **Hanken Grotesk** serves as the functional counterpart, offering exceptional legibility for menu descriptions, contact details, and interface labels.

Display styles use tighter letter-spacing and substantial line heights to command attention. Small labels and utility text are set in all-caps with generous letter-spacing to emphasize the professional, curated nature of the design system.

## Layout & Spacing
This design system employs a **Fixed Grid** model for desktop to maintain a controlled, editorial composition, while transitioning to a **Fluid Grid** for mobile devices. 

A 12-column grid is standard for desktop (1280px max-width), utilizing wide margins (64px) to create the "generous whitespace" required by the brand. Vertical rhythm is driven by large section gaps (120px) to encourage a slow, intentional browsing pace. On mobile, margins reduce to 20px, and content reflows to a single column with increased padding within cards to maintain a sense of airiness.

## Elevation & Depth
Depth is expressed through **Tonal Layers** and **Low-contrast outlines** rather than heavy shadows. 

Surface containers use subtle shifts in background color (e.g., a slightly darker cream or a lighter charcoal) to indicate hierarchy. Borders are 1px thick and use low-opacity versions of the primary or secondary colors. For interactive elements like modals or dropdowns, a soft, diffused "ambient shadow" (15% opacity, 20px blur) is permitted to provide a slight lift from the page, but the primary indicator of depth remains the layered arrangement of shapes and subtle border treatments.

## Shapes
The shape language is defined as **Rounded**, providing a balance between the architectural sharpness of luxury and the warmth of hospitality. All standard UI containers and buttons use a 0.5rem (8px) corner radius. This choice softens the "Deep Charcoal" elements, making the interface feel more inviting. Interactive images and featured food photography should utilize `rounded-lg` (16px) or `rounded-xl` (24px) to create a premium, framed appearance.

## Components
- **Buttons:** Primary buttons are solid Deep Charcoal with Cream text, using the standard 8px corner radius. Secondary buttons use a Warm Gold outline (1px) with Gold text. Transitions for hover states must be elegant and slow (300ms ease-out), typically involving a subtle background color shift or a slight scaling effect.
- **Input Fields:** Use a minimalist approach—1px bottom border only, or a fully enclosed box with a very light cream/charcoal fill. Focus states are indicated by the border color changing to Warm Gold.
- **Cards:** Used for menu items and articles. Cards feature a subtle 1px border and no shadow. Photography within cards should fill the top half, with text content centered or left-aligned with ample padding.
- **Chips/Tags:** Used for dietary requirements (e.g., Vegan, Gluten-Free). These are small, pill-shaped elements with a Warm Gold background at 10% opacity and Gold text.
- **Navigation:** A persistent top bar with a glassmorphism backdrop blur (20px) and a semi-transparent background to allow photography to bleed through during scroll.
- **Checkboxes/Radios:** Custom-styled to use Warm Gold for the "checked" state, maintaining the sophisticated color story even in utility elements.