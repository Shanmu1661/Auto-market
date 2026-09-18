# AutoMarket - Used Car Market & Automotive Services HTML Template

A modern, responsive, multi-page HTML5/CSS3 template engineered specifically for the **Used Car Market, Dealership Portals, Vehicle Brokerages, and Automotive Inspection Services**. Suitable for direct client deployment or selling on digital marketplaces (ThemeForest, TemplateMonster).

---

## 🚀 Key Features

- **Strict Vanilla Stack**: Built exclusively using **HTML5, CSS3, JavaScript (ES6+), and Bootstrap 5.3.3**. No heavy node runtime or bundlers required to run.
- **First-Class Dark & Light Modes**: Seamless theme toggle with automatic OS preference detection (`prefers-color-scheme`) and persistent `localStorage`.
- **Complete RTL Support**: Full right-to-left layout compatibility for Arabic, Hebrew, and Persian languages with dedicated `rtl.css` and live LTR/RTL toggle.
- **Dual Dedicated Dashboards**:
  - **Buyer Dashboard (`dashboard.html`)**: Saved vehicles wishlist, 200-point inspection dossiers, active test drive bookings, dealer chat messaging, and profile management.
  - **Seller / Dealership Hub (`seller-dashboard.html`)**: Dealership KPI stats ($485,000 inventory volume, active leads, conversion rates), active inventory manager with instant Delete & "Mark as Sold" toggles, interactive "Add New Car" listing wizard, buyer offer negotiation responder, and dealership escrow settings.
- **Strict Role-Based Registration & Login**:
  - **Registration (`register.html`)**: Explicit Buyer vs Seller choice cards. Ticking "Seller" strictly routes to `seller-dashboard.html`; ticking "Buyer" strictly routes to `dashboard.html`.
  - **Login (`login.html`)**: Two prominent destination options (Buyer Portal vs Seller Portal) with 1-click demo fill and strict role-based destination gating.
- **Consistent Common Header & Dynamic Auth**: Unified "Login" button across all pages that automatically transforms into a user profile dropdown with role badges, direct dashboard link, and logout once signed in.
- **Interactive Automotive Tools**:
  - **Live Loan & EMI Financing Calculator**: Dynamic monthly payment, interest, and principal recalculation on slider input.
  - **Interactive 200-Point Inspection Matrix**: Checklist with digital report preview.
  - **Instant Trade-In Valuation Calculator**: Step-by-step appraisal tool.
  - **Skeleton Loading Simulation**: Shimmer card animation transitioning to real inventory.
  - **Grid & List View Switcher**: Dynamic layout change for car listings.
- **100% Unique & Relevant Imagery**: Curated high-resolution vehicle photography (SUVs, sedans, trucks, sports cars, EVs) with zero repetitive pictures.
- **Accessibility & SEO**: WCAG 2.1 AA compliant colors, 44px+ touch targets, semantic markup, unique `<title>` and `<meta>` descriptions, JSON-LD structured data (`AutoDealer`, `Car`), `sitemap.xml`, and `robots.txt`.

---

## 📁 File Structure

```
usedcar-market/
├── assets/
│   ├── css/
│   │   ├── style.css           # Core styling, variables, components & responsive grid
│   │   ├── dark-mode.css       # Obsidian dark mode overrides & contrast variables
│   │   └── rtl.css             # Right-to-Left layout support
│   ├── js/
│   │   ├── main.js             # Theme toggle, RTL engine, loan calculator, auth session
│   │   └── dashboard.js        # Buyer dashboard wishlist, profile & chat logic
│   └── images/
│       └── logo.svg            # Responsive brand vector logo
├── index.html                  # Home 1 - Modern Used Car Marketplace
├── index-2.html                # Home 2 - Dealership & Auto Brokerage Concierge
├── inventory.html              # Used Car Inventory (Grid/List switcher, skeleton loaders)
├── car-details.html            # Car Listing Showcase (Gallery, Specs, 200-Pt Inspection)
├── services.html               # Automotive Services Overview
├── service-details.html        # 200-Point Pre-Purchase Inspection Deep Dive
├── service-financing.html      # Low APR Auto Financing & Live Loan Calculator
├── service-tradein.html        # Instant Trade-In & Cash Buyout Appraisal
├── service-warranty.html       # Certified Extended Warranty Plans
├── service-logistics.html      # Enclosed & Open Home Delivery Logistics
├── service-escrow.html         # Clean Title & Bank-Grade DMV Escrow
├── service-sourcing.html       # Bespoke Off-Market Sourcing & Concierge
├── about.html                  # About Us, Mission, Timeline & Executive Team
├── pricing.html                # Seller Listing Packages & Inspection Tiers
├── blog.html                   # Used Car Buying Blog (Search & Filter)
├── blog-details.html           # In-Depth Article with Sidebar & Comments
├── contact.html                # Contact Page with Form & Google Maps Placeholder
├── dashboard.html              # Buyer Dashboard (Profile, Saved Cars, Inquiries, Bookings)
├── seller-dashboard.html       # Seller Dashboard & Dealership Hub (CRUD, Leads, Add Listing)
├── login.html                  # Sign In Page with Dual Buyer / Seller Dashboard Portals
├── register.html               # Register Page with Strict Buyer / Seller Role Routing
├── 404.html                    # 404 Not Found Page with Vehicle Search
├── coming-soon.html            # Launch Countdown Maintenance Page
├── documentation/
│   └── index.html              # Developer & User Documentation
├── sitemap.xml                 # Search Engine XML Sitemap
├── robots.txt                  # Production Robots File
└── README.md                   # Quickstart instructions
```

---

## 🔌 Placeholder Integrations

1. **Contact Form**: Ready for Formspree (`action="https://formspree.io/f/{your-id}"`) or Netlify Forms (`netlify`).
2. **Newsletter Subscription**: Form action ready for Mailchimp, ConvertKit, or Brevo.
3. **Showroom Map**: Embedded responsive Google Maps iframe placeholder in `contact.html`.
4. **Appointment & Test Drive Booking**: Built-in modal dialog with date/time pickers and client validation.
5. **Payment Buttons**: Stripe and PayPal escrow button placeholders in `pricing.html` and `car-details.html`.

---

## 🎨 Customizing Brand Colors

Edit the CSS custom properties in `assets/css/style.css`:

```css
:root {
  --primary: #2563eb;          /* Change to your brand primary color */
  --secondary: #f97316;        /* Accent / CTA color */
  --accent: #10b981;           /* Certified badge green */
}
```

---

## 📜 Credits & Licenses

- **Framework**: [Bootstrap 5.3.3](https://getbootstrap.com) (MIT License)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com) (MIT License)
- **Fonts**: [Google Fonts](https://fonts.google.com) - *Plus Jakarta Sans* & *Inter* (OFL)
- **Photos**: [Unsplash](https://unsplash.com) (Free commercial license)

---

&copy; 2026 AutoMarket Inc. All rights reserved.
