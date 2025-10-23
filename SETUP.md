# Setup Instructions

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/cla
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation with mobile menu
│   ├── Hero.tsx          # Hero section with animations
│   ├── FeaturedIn.tsx    # Media mentions
│   ├── VideoSection.tsx  # Video player section
│   ├── Faculty.tsx       # Faculty showcase with hover effects
│   ├── Testimonials.tsx  # Student testimonials grid
│   ├── WhyAugment.tsx    # Feature highlights
│   ├── Certificate.tsx   # Certificate showcase
│   ├── Comparison.tsx    # Traditional vs Augment comparison
│   ├── MoneyBackGuarantee.tsx # Guarantee section
│   ├── FAQ.tsx           # Accordion FAQ section
│   ├── BookACall.tsx     # CTA for booking calls
│   └── Footer.tsx        # Footer with links and social
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Features Implemented

✅ **Fully Responsive Design**
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly navigation

✅ **Smooth Animations**
- Framer Motion integration
- Scroll-triggered animations
- Hover effects and transitions

✅ **Modern Components**
- Reusable, modular components
- TypeScript for type safety
- Clean, maintainable code

✅ **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

## Customization

### Colors
Edit `tailwind.config.ts`:
- Primary: `#000000` (Black)
- Accent: `#D6FD3A` (Golden Fizz)
- Background: `#FFFFFF` (White)
- Gray: `#F3F4F6` (Light Gray)

### Content
Update text content directly in component files:
- Hero section: `components/Hero.tsx`
- Faculty data: `components/Faculty.tsx`
- Testimonials: `components/Testimonials.tsx`
- FAQ questions: `components/FAQ.tsx`

### Animations
Adjust animation settings in components using Framer Motion:
- Duration: Change `duration` values
- Delays: Adjust `delay` values
- Easing: Modify transition curves

## Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Performance Tips

1. **Images**: Add real images to replace placeholders
2. **Fonts**: Already optimized with Next.js Font optimization
3. **Code Splitting**: Automatic with Next.js
4. **Lazy Loading**: Images and components lazy-loaded by default

## Next Steps

1. Replace placeholder images with real faculty photos
2. Add actual video content to VideoSection
3. Connect contact forms to backend
4. Add analytics tracking
5. Implement actual enrollment flow
6. Set up SEO meta tags for specific pages

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

