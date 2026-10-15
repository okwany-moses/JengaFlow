/**
 * ==========================================================================
 * JengaFlow Solutions — Official Website Script
 * Official Domain: https://jengaflowsolutions.tech
 * ==========================================================================
 * 
 * Centralized Configuration:
 * Update the settings below to configure your business contact details,
 * currency conversion rates, and package information in one place.
 */

const CONFIG = {
  // BUSINESS CONTACT DETAILS
  // --------------------------------------------------------------------------
  // Enter your official business WhatsApp number in international format
  // WITHOUT spaces, dashes, or the '+' sign.
  // Example for Kenya (+254): "254712345678"
  // Set to empty string "" or leave as placeholder to trigger the configuration guide in development.
  WHATSAPP_NUMBER: "254700000000",

  // Official contact email address
  CONTACT_EMAIL: "contact@jengaflowsolutions.tech",

  // Business Phone display format
  PHONE_DISPLAY: "+254 (0) 700 000 000",

  // Physical / Regional Base
  LOCATION: "Nairobi, Kenya & Serving Clients Globally",

  // (Optional) Formspree or custom form submission endpoint.
  // Leave empty "" to use the built-in direct WhatsApp & email dispatch.
  FORMSPREE_ENDPOINT: "",

  // CURRENCY CONVERSION CONFIGURATION
  // --------------------------------------------------------------------------
  // All base prices are strictly stored and maintained in Kenyan Shillings (KES).
  // These exchange rates are administrator-configurable estimates (approx. rates).
  // Note: Converted amounts are displayed as indicative pricing for international clients.
  EXCHANGE_RATES: {
    KES: 1.0,         // Base Currency
    USD: 0.0077,      // 1 USD ~ 130 KES
    EUR: 0.0071,      // 1 EUR ~ 141 KES
    GBP: 0.0059,      // 1 GBP ~ 169 KES
    CAD: 0.0105       // 1 CAD ~ 95 KES
  },

  // Currency display metadata
  CURRENCIES: {
    KES: { label: "KES — Kenyan Shilling", code: "KES", symbol: "KSh ", locale: "en-KE" },
    USD: { label: "USD — US Dollar", code: "USD", symbol: "$", locale: "en-US" },
    EUR: { label: "EUR — Euro", code: "EUR", symbol: "€", locale: "de-DE" },
    GBP: { label: "GBP — British Pound", code: "GBP", symbol: "£", locale: "en-GB" },
    CAD: { label: "CAD — Canadian Dollar", code: "CAD", symbol: "CA$", locale: "en-CA" }
  },

  // PACKAGES DATABASE (Base prices in KES)
  // --------------------------------------------------------------------------
  PACKAGES: {
    // 1. WEBSITE DEVELOPMENT PACKAGES
    website: [
      {
        id: "pkg-basic-website",
        name: "Basic Website",
        category: "website",
        basePriceKES: 14500,
        isStartingPrice: false,
        isFeatured: false,
        description: "A simple, professional online presence for individuals and small businesses.",
        features: [
          "One-page responsive website layout",
          "Home, About, Services, and Contact sections",
          "Professional, modern & lightweight design",
          "Mobile and tablet responsive optimization",
          "WhatsApp direct click-to-chat integration",
          "Company email setup assistance (1 mailbox)",
          "Domain registration and DNS configuration assistance",
          "Basic on-page SEO meta tags",
          "Contact information and social media links",
          "SSL / HTTPS configuration support",
          "Website testing and cloud deployment",
          "1 round of revisions",
          "7 days post-launch technical support"
        ],
        ctaText: "Choose Basic — Get Started"
      },
      {
        id: "pkg-standard-website",
        name: "Standard Website",
        category: "website",
        basePriceKES: 34500,
        isStartingPrice: false,
        isFeatured: false,
        description: "A complete website for growing businesses that need more space to present their services.",
        features: [
          "Up to 5 custom-designed responsive pages",
          "Home, About, Services, Portfolio / Gallery, Contact",
          "Clean visual architecture & mobile responsiveness",
          "WhatsApp direct contact integration",
          "Company email setup assistance (up to 2 mailboxes)",
          "Domain registration and DNS configuration assistance",
          "Contact form with configured submission method",
          "Google Maps embed integration where required",
          "Basic SEO metadata, robots.txt, and XML sitemap",
          "Social media channels integration",
          "SSL / HTTPS configuration support",
          "Deployment and cross-browser testing",
          "2 rounds of revisions",
          "14 days post-launch technical support"
        ],
        ctaText: "Choose Standard — Get Started"
      },
      {
        id: "pkg-professional-website",
        name: "Professional Website",
        category: "website",
        basePriceKES: 49500,
        isStartingPrice: false,
        isFeatured: true, // Highlighted with subtle accent
        badgeText: "Most Popular",
        description: "A polished business website for companies that want stronger branding, a richer portfolio, and extra functionality.",
        features: [
          "Up to 8 custom responsive pages",
          "Premium custom visual styling & layout hierarchy",
          "Advanced service presentations & interactive portfolio showcase",
          "WhatsApp integration with contextual package inquiries",
          "Company email setup assistance (up to 3 mailboxes)",
          "Domain registration and DNS configuration assistance",
          "Functional contact & inquiry forms with field validation",
          "Blog or news section structure where appropriate",
          "Comprehensive on-page SEO and structured metadata",
          "Google Analytics setup (upon client account consent)",
          "Performance, speed & accessibility audit",
          "SSL / HTTPS configuration support",
          "Deployment, security check & launch testing",
          "3 rounds of revisions",
          "30 days post-launch technical support"
        ],
        ctaText: "Choose Professional — Get Started"
      },
      {
        id: "pkg-custom-website",
        name: "Custom Website",
        category: "website",
        basePriceKES: 69500,
        isStartingPrice: true,
        isFeatured: false,
        description: "A tailored website for businesses that require a unique design, specialized workflows, or advanced features.",
        features: [
          "Bespoke website design based on client specifications",
          "Agreed page count and specialized functionality",
          "Custom interactive modules & dynamic components",
          "Responsive mobile-first architecture",
          "Contextual WhatsApp messaging integration",
          "Company email setup assistance (up to 3 mailboxes)",
          "Domain registration and DNS configuration assistance",
          "Contact forms and approved 3rd-party API integrations",
          "Advanced SEO fundamentals & search indexation setup",
          "SSL / HTTPS configuration support",
          "Deployment, staging tests & system handover documentation",
          "Scope-dependent revisions & support agreed in writing"
        ],
        ctaText: "Request a Custom Quote"
      }
    ],

    // 2. BUSINESS MANAGEMENT SOFTWARE PACKAGES
    software: [
      {
        id: "pkg-starter-software",
        name: "Starter Management System",
        category: "software",
        basePriceKES: 25000,
        isStartingPrice: true,
        isFeatured: false,
        description: "Suitable for small businesses with straightforward record-keeping and customer logging needs.",
        features: [
          "Simple operational dashboard & overview",
          "Customer records & directory",
          "Basic product or service catalogue records",
          "Basic transaction or activity log tracking",
          "Keyword search and table filtering",
          "Basic printable summary reports",
          "Mobile-friendly management interface",
          "WhatsApp customer inquiry & contact integration",
          "Domain & deployment configuration assistance",
          "Company email setup assistance (1 mailbox)"
        ],
        ctaText: "Inquire About Starter"
      },
      {
        id: "pkg-business-software",
        name: "Business Management System",
        category: "software",
        basePriceKES: 45000,
        isStartingPrice: true,
        isFeatured: true,
        badgeText: "Recommended",
        description: "Suitable for growing businesses needing a structured operational system with multi-entity records.",
        features: [
          "Executive dashboard and business overview",
          "Customer and supplier records management",
          "Product and inventory stock tracking",
          "Sales, orders, and transaction recording",
          "Advanced search, date filters & status indicators",
          "Summary reports and CSV / Excel export functionality",
          "Secure login and role-based permissions (if scoped)",
          "WhatsApp integration for customer notification / inquiries",
          "Domain and deployment configuration assistance",
          "Company email setup assistance (up to 2 mailboxes)"
        ],
        ctaText: "Inquire About Business"
      },
      {
        id: "pkg-advanced-software",
        name: "Advanced Management System",
        category: "software",
        basePriceKES: 75000,
        isStartingPrice: true,
        isFeatured: false,
        description: "Suitable for businesses needing multiple connected operational functions and user permission levels.",
        features: [
          "Custom operational dashboard & interactive analytics",
          "Integrated inventory, sales, customer & supplier flows",
          "Staff and user account management",
          "Multi-role permissions & security policies",
          "Data bulk import and structured export capabilities",
          "Audit trail & user activity history where required",
          "Selected business workflow automation",
          "WhatsApp integration where supported by chosen method",
          "Domain and deployment configuration assistance",
          "Company email setup assistance (up to 3 mailboxes)"
        ],
        ctaText: "Inquire About Advanced"
      },
      {
        id: "pkg-custom-platform",
        name: "Custom ERP, CRM, or Platform",
        category: "software",
        basePriceKES: 120000,
        isStartingPrice: true,
        isFeatured: false,
        description: "Specialized platforms: ERP, CRM, School, Church, POS, Clinic, Booking, or HR management systems.",
        features: [
          "Comprehensive requirements consultation & technical specification",
          "Tailored business logic (CRM, ERP, School, Church, POS, Booking)",
          "Phased architecture and milestone implementation plan",
          "Custom relational database schema & operational workflows",
          "Optional AI-powered features & automated document processing",
          "Integration with approved third-party APIs and gateways",
          "End-to-end security audit, user documentation & staff training",
          "Agreed ongoing technical maintenance roadmap"
        ],
        ctaText: "Discuss Your Software Project"
      }
    ]
  }
};

/* ==========================================================================
   State Management
   ========================================================================== */
const AppState = {
  currentCurrency: "KES",
  activeCategory: "website" // 'website' or 'software'
};

/* ==========================================================================
   Formatters & Calculation Utilities
   ========================================================================== */

/**
 * Formats a KES base price into the target currency using Intl.NumberFormat
 */
function formatPrice(baseKES, targetCurrencyCode) {
  const rate = CONFIG.EXCHANGE_RATES[targetCurrencyCode] || 1.0;
  const currencyInfo = CONFIG.CURRENCIES[targetCurrencyCode] || CONFIG.CURRENCIES.KES;
  const convertedAmount = Math.round(baseKES * rate);

  try {
    const formatter = new Intl.NumberFormat(currencyInfo.locale, {
      style: "currency",
      currency: currencyInfo.code,
      maximumFractionDigits: 0
    });
    return formatter.format(convertedAmount);
  } catch (e) {
    // Fallback format
    return `${currencyInfo.symbol}${convertedAmount.toLocaleString()}`;
  }
}

/**
 * Format KES directly for prefilled reference strings
 */
function formatKES(amount) {
  return `KSh ${amount.toLocaleString('en-KE')}`;
}

/**
 * Check if the configured WhatsApp number is a valid international phone number
 */
function isConfiguredWhatsApp() {
  const num = CONFIG.WHATSAPP_NUMBER ? String(CONFIG.WHATSAPP_NUMBER).trim() : "";
  return num.length >= 9 && !num.includes("00000000");
}

/* ==========================================================================
   DOM Renderers
   ========================================================================== */

/**
 * Render pricing cards for the active category
 */
function renderPricingCards() {
  const gridContainer = document.getElementById("pricing-cards-grid");
  if (!gridContainer) return;

  const packages = CONFIG.PACKAGES[AppState.activeCategory] || [];
  gridContainer.innerHTML = "";

  packages.forEach((pkg) => {
    const card = document.createElement("article");
    card.className = `pricing-card ${pkg.isFeatured ? "is-featured" : ""}`;
    card.setAttribute("data-package-id", pkg.id);

    // Formatted price in selected currency
    const formattedPrice = formatPrice(pkg.basePriceKES, AppState.currentCurrency);
    const kesPriceFormatted = formatKES(pkg.basePriceKES);

    const prefixText = pkg.isStartingPrice ? "Starting from" : "Standard investment";
    const baseHint = AppState.currentCurrency !== "KES" 
      ? `<span class="price-base-hint">Base price: ${kesPriceFormatted} (KES)</span>`
      : "";

    // Featured badge
    const featuredBadge = pkg.isFeatured && pkg.badgeText 
      ? `<div class="featured-kicker">${pkg.badgeText}</div>`
      : "";

    // Feature items with clean SVG checkmark
    const featureItemsHtml = pkg.features
      .map(feat => `
        <li class="pricing-feature-item">
          <svg class="pricing-check-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
          <span>${feat}</span>
        </li>
      `).join("");

    card.innerHTML = `
      ${featuredBadge}
      <div class="pricing-card-header">
        <h3 class="pricing-package-name">${pkg.name}</h3>
        <p class="pricing-package-desc">${pkg.description}</p>
      </div>

      <div class="pricing-price-block">
        <span class="price-prefix">${prefixText}</span>
        <div class="price-main">
          <span class="price-val">${formattedPrice}</span>
        </div>
        ${baseHint}
      </div>

      <ul class="pricing-features-list">
        ${featureItemsHtml}
      </ul>

      <div class="pricing-card-footer">
        <button type="button" class="btn ${pkg.isFeatured ? 'btn-primary' : 'btn-secondary'} btn-full js-package-cta" data-package-id="${pkg.id}">
          ${pkg.ctaText}
        </button>
      </div>
    `;

    gridContainer.appendChild(card);
  });

  // Re-bind CTA click listeners
  bindPackageCtaButtons();
}

/**
 * Handle package CTA button click: triggers contextual WhatsApp inquiry or fallback modal
 */
function handlePackageCtaClick(packageId) {
  const allPackages = [...CONFIG.PACKAGES.website, ...CONFIG.PACKAGES.software];
  const pkg = allPackages.find(p => p.id === packageId);
  if (!pkg) return;

  const kesFormatted = formatKES(pkg.basePriceKES);
  const selectedFormatted = formatPrice(pkg.basePriceKES, AppState.currentCurrency);
  const priceDisplay = AppState.currentCurrency === "KES" 
    ? kesFormatted 
    : `${selectedFormatted} (approx. base ${kesFormatted})`;

  // Construct message as specified in prompt
  const messageText = `Hello JengaFlow Solutions. I am interested in the ${pkg.name} package listed at ${priceDisplay}. Please share the requirements, delivery timeline, and next steps.`;

  if (isConfiguredWhatsApp()) {
    const encoded = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  } else {
    // Open inquiry modal or fill contact form
    showInquiryFallbackModal(pkg, messageText);
  }
}

/**
 * Show helpful modal when WhatsApp number is in configuration mode or directly populates contact form
 */
function showInquiryFallbackModal(pkg, messageText) {
  const modal = document.getElementById("inquiry-modal");
  const modalTitle = document.getElementById("modal-package-title");
  const modalText = document.getElementById("modal-prefilled-text");
  const modalFormBtn = document.getElementById("modal-to-form-btn");
  const modalEmailBtn = document.getElementById("modal-email-btn");

  if (!modal) {
    // If modal element doesn't exist, scroll directly to contact form
    prefillContactForm(pkg.name, messageText);
    return;
  }

  if (modalTitle) modalTitle.textContent = pkg.name;
  if (modalText) modalText.textContent = `"${messageText}"`;

  // Hook up button to scroll to contact form with this service preselected
  if (modalFormBtn) {
    modalFormBtn.onclick = () => {
      closeModal();
      prefillContactForm(pkg.name, messageText);
    };
  }

  // Hook up email button
  if (modalEmailBtn) {
    const subject = encodeURIComponent(`Inquiry: ${pkg.name} — JengaFlow Solutions`);
    const body = encodeURIComponent(messageText);
    modalEmailBtn.href = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("inquiry-modal");
  if (modal) {
    modal.classList.remove("is-active");
    document.body.style.overflow = "";
  }
}

/**
 * Pre-fill contact form and smooth scroll to it
 */
function prefillContactForm(serviceName, messageDetails) {
  const contactSection = document.getElementById("contact");
  const serviceSelect = document.getElementById("contact-service");
  const messageTextarea = document.getElementById("contact-message");

  if (serviceSelect) {
    // Check if an option matches or set to custom
    let matched = false;
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
        serviceSelect.selectedIndex = i;
        matched = true;
        break;
      }
    }
    if (!matched) {
      serviceSelect.value = "other";
    }
  }

  if (messageTextarea && (!messageTextarea.value || messageTextarea.value.length < 5)) {
    messageTextarea.value = messageDetails;
  }

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
    if (messageTextarea) {
      setTimeout(() => messageTextarea.focus(), 600);
    }
  }
}

/**
 * Bind click listeners to rendered package buttons
 */
function bindPackageCtaButtons() {
  const buttons = document.querySelectorAll(".js-package-cta");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const packageId = e.currentTarget.getAttribute("data-package-id");
      handlePackageCtaClick(packageId);
    });
  });
}

/* ==========================================================================
   Contact Form Validation & Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("project-contact-form");
  const statusBanner = document.getElementById("form-status-banner");
  const whatsappSubmitBtn = document.getElementById("btn-send-whatsapp");

  if (!form) return;

  // Real-time error clearance on input
  const inputs = form.querySelectorAll(".form-input, .form-textarea, .form-select");
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      input.classList.remove("has-error");
      const errEl = document.getElementById(`${input.id}-error`);
      if (errEl) errEl.classList.remove("is-visible");
      if (statusBanner) statusBanner.style.display = "none";
    });
  });

  // Direct WhatsApp dispatch from form
  if (whatsappSubmitBtn) {
    whatsappSubmitBtn.addEventListener("click", () => {
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const business = document.getElementById("contact-business").value.trim();
      const service = document.getElementById("contact-service").value;
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !message) {
        showFormStatus("Please fill in your Name, Email, and Project Details before opening WhatsApp.", "error");
        return;
      }

      const waMsg = `Hello JengaFlow Solutions,\n\nName: ${name}\nEmail: ${email}\nBusiness: ${business || "N/A"}\nService: ${service}\n\nProject Details:\n${message}`;
      
      if (isConfiguredWhatsApp()) {
        const encoded = encodeURIComponent(waMsg);
        window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encoded}`, "_blank", "noopener,noreferrer");
      } else {
        const subject = encodeURIComponent(`Project Inquiry: ${name} (${business || 'Business'})`);
        const body = encodeURIComponent(waMsg);
        window.location.href = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      }
    });
  }

  // Standard form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");
    const serviceInput = document.getElementById("contact-service");
    const businessInput = document.getElementById("contact-business");

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showFieldError("contact-name", "Please enter your full name.");
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showFieldError("contact-email", "Please enter a valid email address.");
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showFieldError("contact-message", "Please share a brief description of your project (at least 10 characters).");
      isValid = false;
    }

    if (!isValid) return;

    // Check if external form backend is configured
    if (CONFIG.FORMSPREE_ENDPOINT && CONFIG.FORMSPREE_ENDPOINT.startsWith("http")) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending inquiry...";

      try {
        const formData = new FormData(form);
        const res = await fetch(CONFIG.FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          showFormStatus("Thank you! Your project inquiry has been received. JengaFlow Solutions will review your requirements and respond within 24 business hours.", "success");
          form.reset();
        } else {
          showFormStatus("There was a temporary problem sending your message. Please reach us directly via WhatsApp or email.", "error");
        }
      } catch (err) {
        showFormStatus("Network error. Please use direct WhatsApp or email us at " + CONFIG.CONTACT_EMAIL, "error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    } else {
      // Functional fallback with honest feedback (no fake success!)
      const summaryMsg = `Hello JengaFlow Solutions,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\nBusiness: ${businessInput.value.trim() || "N/A"}\nService: ${serviceInput.value}\n\nProject Details:\n${messageInput.value.trim()}`;
      
      const subject = encodeURIComponent(`Project Inquiry from ${nameInput.value.trim()}`);
      const body = encodeURIComponent(summaryMsg);
      const mailtoUrl = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      showFormStatus(
        `Inquiry ready! Click below to send via your email client or WhatsApp. We respond promptly within 24 business hours.`,
        "info",
        `
        <div style="margin-top: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
          <a href="${mailtoUrl}" class="btn btn-primary btn-sm">Send via Email App</a>
          <button type="button" class="btn btn-secondary btn-sm" id="fallback-wa-btn">Send via WhatsApp</button>
        </div>
        `
      );

      const fallbackWaBtn = document.getElementById("fallback-wa-btn");
      if (fallbackWaBtn) {
        fallbackWaBtn.onclick = () => {
          if (isConfiguredWhatsApp()) {
            window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(summaryMsg)}`, "_blank");
          } else {
            alert(`Administrator Note: Please set your WhatsApp number in script.js (CONFIG.WHATSAPP_NUMBER). Currently routing to email: ${CONFIG.CONTACT_EMAIL}`);
            window.location.href = mailtoUrl;
          }
        };
      }
    }
  });
}

function showFieldError(fieldId, errorText) {
  const field = document.getElementById(fieldId);
  const errEl = document.getElementById(`${fieldId}-error`);
  if (field) field.classList.add("has-error");
  if (errEl) {
    errEl.textContent = errorText;
    errEl.classList.add("is-visible");
  }
}

function showFormStatus(message, type, extraHtml = "") {
  const statusBanner = document.getElementById("form-status-banner");
  if (!statusBanner) return;

  statusBanner.className = `form-status-banner is-${type}`;
  statusBanner.innerHTML = `<div>${message}</div>${extraHtml}`;
  statusBanner.style.display = "block";
  statusBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ==========================================================================
   Interactive UI Components (Tabs, FAQ, Mobile Menu, Floating Buttons)
   ========================================================================== */

/**
 * Currency Selector Initializer & LocalStorage Persistence
 */
function initCurrencySelector() {
  const currencySelect = document.getElementById("currency-select");
  if (!currencySelect) return;

  // Load persisted currency if available
  try {
    const saved = localStorage.getItem("jengaflow_currency");
    if (saved && CONFIG.CURRENCIES[saved]) {
      AppState.currentCurrency = saved;
      currencySelect.value = saved;
    }
  } catch (e) {
    // localStorage unavailable
  }

  currencySelect.addEventListener("change", (e) => {
    AppState.currentCurrency = e.target.value;
    try {
      localStorage.setItem("jengaflow_currency", AppState.currentCurrency);
    } catch (e) {}

    // Update prices in view
    renderPricingCards();
  });
}

/**
 * Pricing Category Tabs (Website vs Software)
 */
function initPricingTabs() {
  const tabButtons = document.querySelectorAll(".js-pricing-tab");
  const subHeading = document.getElementById("pricing-category-desc");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      if (category === AppState.activeCategory) return;

      AppState.activeCategory = category;

      tabButtons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      if (subHeading) {
        if (category === "website") {
          subHeading.textContent = "Modern, high-performance websites built for small businesses, company profiles, and digital growth.";
        } else {
          subHeading.textContent = "Practical operational systems: inventory, customer records, transactions, staff management, and workflows.";
        }
      }

      renderPricingCards();
    });
  });
}

/**
 * FAQ Accordion Handlers
 */
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll(".js-faq-toggle");

  faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const faqItem = btn.closest(".faq-item");
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      // Close all others
      document.querySelectorAll(".faq-item").forEach(item => {
        if (item !== faqItem) {
          item.classList.remove("is-open");
          const otherBtn = item.querySelector(".js-faq-toggle");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      // Toggle current
      if (isExpanded) {
        faqItem.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      } else {
        faqItem.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .js-close-mobile-nav");

  if (!toggleBtn || !drawer) return;

  function toggleMenu(isOpen) {
    const currentState = drawer.classList.contains("is-open");
    const nextState = typeof isOpen === "boolean" ? isOpen : !currentState;

    if (nextState) {
      drawer.classList.add("is-open");
      toggleBtn.setAttribute("aria-expanded", "true");
      toggleBtn.setAttribute("aria-label", "Close navigation menu");
    } else {
      drawer.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.setAttribute("aria-label", "Open navigation menu");
    }
  }

  toggleBtn.addEventListener("click", () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      toggleMenu(false);
    }
  });
}

/**
 * Header Scroll & Back-to-Top Button
 */
function initScrollBehaviors() {
  const header = document.querySelector(".site-header");
  const topBtn = document.getElementById("floating-top-btn");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    // Header sticky shadow
    if (header) {
      if (scrollPos > 30) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }

    // Floating top button visibility (threshold 350px)
    if (topBtn) {
      if (scrollPos > 350) {
        topBtn.classList.add("is-visible");
      } else {
        topBtn.classList.remove("is-visible");
      }
    }
  }, { passive: true });

  if (topBtn) {
    topBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/**
 * General Floating WhatsApp Button
 */
function initFloatingWhatsApp() {
  const floatingBtn = document.getElementById("floating-whatsapp-btn");
  if (!floatingBtn) return;

  floatingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const generalMsg = "Hello JengaFlow Solutions. I am visiting your website (jengaflowsolutions.tech) and would like to inquire about your web design and digital services.";
    
    if (isConfiguredWhatsApp()) {
      window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMsg)}`, "_blank", "noopener,noreferrer");
    } else {
      // Fallback
      showInquiryFallbackModal({
        name: "General Inquiry",
        basePriceKES: 14500
      }, generalMsg);
    }
  });
}

/**
 * Modal Close Listeners
 */
function initModalListeners() {
  const modal = document.getElementById("inquiry-modal");
  const closeBtns = document.querySelectorAll(".js-modal-close");

  closeBtns.forEach(btn => btn.addEventListener("click", closeModal));

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/**
 * Dynamic Copyright Year
 */
function initDynamicYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   Application Initialization
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initDynamicYear();
  initCurrencySelector();
  initPricingTabs();
  renderPricingCards();
  initFaqAccordion();
  initContactForm();
  initMobileNavigation();
  initScrollBehaviors();
  initFloatingWhatsApp();
  initModalListeners();
});
