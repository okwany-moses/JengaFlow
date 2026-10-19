# JengaFlow Solutions — Official Business Portfolio Website

**Official Domain:** [https://jengaflowsolutions.tech](https://jengaflowsolutions.tech)  
**Founder & Lead Developer:** Moses Otieno Okwany  
**Tagline:** *We Build Digital Experiences That Grow Businesses.*

---

## 📁 Project Architecture & Files

This is a clean, modern, zero-dependency static web application built with semantic **HTML5**, modern **CSS3**, and vanilla **JavaScript**:

```text
├── index.html       # Primary semantic markup, SEO, OpenGraph, & Schema.org JSON-LD
├── style.css        # Full responsive design system, typography, & layout rules
├── script.js        # Centralized CONFIG, currency engine, WhatsApp integration, & form validation
├── 286812.jpg       # Official JengaFlow Solutions Logo mark (also supports logo.jpg)
├── photo.jpg        # Profile photo of Moses Otieno Okwany (Founder & Lead Developer)
└── README.md        # Deployment and configuration documentation
```

---

## ⚙️ Configuration Guide (`script.js`)

All contact channels, exchange rates, and pricing packages are configured in a single `CONFIG` object at the top of `script.js`:

```javascript
const CONFIG = {
  // 1. WhatsApp Number: International format without '+' or spaces.
  WHATSAPP_NUMBER: "254741067333", // Phone: 0741067333

  // 2. Official Contact Email
  CONTACT_EMAIL: "info@jengaflowsolutions.tech",

  // 3. Location
  LOCATION: "Kadongo, Homa Bay, Kenya & Remotely Worldwide",

  // 4. Founder Photo (place your photo.jpg in the root folder, or set an external image URL)
  FOUNDER_PHOTO_URL: "photo.jpg",

  // 5. Optional Formspree / Backend API Endpoint
  // If left empty "", the form provides direct dispatch via email client or WhatsApp
  FORMSPREE_ENDPOINT: "",

  // 4. Exchange Rates (Base: 1 KES)
  EXCHANGE_RATES: {
    KES: 1.0,
    USD: 0.0077,
    EUR: 0.0071,
    GBP: 0.0059,
    CAD: 0.0105
  }
};
```

---

## 🚀 Running Locally

You can run this website using any standard static file server or by opening `index.html` directly in a browser:

### Option A: Using Python (Instant)
```bash
python3 -m http.server 3000
```
Open `http://localhost:3000` in your browser.

### Option B: Using Node / npx
```bash
npx serve .
```

### Option C: Direct Browser
Double-click `index.html` in your file explorer to open it in Chrome, Safari, Firefox, or Edge.

---

## ☁️ Publishing to Cloudflare Pages & GitHub

### Step 1: Push to your GitHub Repository
```bash
# Initialize git if not already tracked
git init
git add index.html style.css script.js photo.jpg README.md
git commit -m "feat: complete JengaFlow Solutions business portfolio website with founder profile"

# Push to your GitHub repository
git branch -M main
git remote add origin https://github.com/your-username/jengaflow-solutions.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository: `jengaflow-solutions`.
4. Configure the build settings:
   - **Framework preset**: `None` (Static HTML)
   - **Build command**: *(Leave blank)*
   - **Build output directory**: `/` *(Root directory containing index.html)*
5. Click **Save and Deploy**.
6. Cloudflare Pages will build and publish your website instantly with free SSL and edge CDN caching worldwide.

### Step 3: Link Custom Domain (`jengaflowsolutions.tech`)
1. In Cloudflare Pages, go to **Custom domains** > **Set up a domain**.
2. Enter `jengaflowsolutions.tech` (and optionally `www.jengaflowsolutions.tech`).
3. Follow the DNS instructions to add the CNAME record.

---

## 📋 Pre-Launch Verification Checklist

- [x] **WhatsApp Number:** Configured as `254741067333` (Phone: `0741067333`).
- [x] **Contact Email:** Configured as `info@jengaflowsolutions.tech`.
- [x] **Location:** Configured as `Kadongo, Homa Bay, Kenya (and remotely worldwide)`.
- [ ] **Form Backend (Optional):** If using Formspree, create a free form at [formspree.io](https://formspree.io/) and paste the endpoint into `CONFIG.FORMSPREE_ENDPOINT`.
- [ ] **Portfolio Links:** Verify external links open correctly in new tabs:
  - `https://gideonskenya.org`
  - `https://gideonsministry.church/`
  - `https://jengaflowsolutions.tech`
- [ ] **Currency Conversion:** Test the currency selector on desktop and mobile (`KES`, `USD`, `EUR`, `GBP`, `CAD`).
- [ ] **Mobile Responsive Menu:** Test the hamburger menu toggle on mobile screen widths.
- [ ] **Back-to-top Button:** Verify the floating button appears when scrolling down and smoothly scrolls back up.
