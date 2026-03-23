import React, { useState } from 'react';
import './styles.css';
import adultImage from './assets/adult.png';
import bottomLogoImage from './assets/Bottom logo.png';
import businessesImage from './assets/BusinessesImg.png';
import buttonsIcon from './assets/Buttons.png';
import childImage from './assets/child.png';
import childMobileImage from './assets/childMobile.png';
import communitiesImage from './assets/CommunitiesImg.png';
import employersImage from './assets/EmployersImg.png';
import empowerIcon from './assets/Empower.png';
import facebookIcon from './assets/facebook.png';
import onboardIcon from './assets/Icon.png';
import storeIconsImage from './assets/Icons.png';
import instagramIcon from './assets/Instagram.png';
import linkedInIcon from './assets/LinkedIn.png';
import brandLogoImage from './assets/Logo (1).png';
import lovelyIcon from './assets/lovely.png';
import mobileIcon from './assets/mobile.png';
import moneyIcon from './assets/moneys.png';
import phoneMockupImage from './assets/Phone mockup (1).png';
import profileUsersIcon from './assets/profile-2user.png';
import shareIcon from './assets/Share.png';
import socialClubImage from './assets/SocialClubImg.png';
import stepTabImage from './assets/Tab.png';
import teensMobileImage from './assets/teensMobile.png';
import tiktokIcon from './assets/Tiktok.png';
import heroCenterImage from './assets/voucher code 2.png';
import xIcon from './assets/X.png';
import youtubeIcon from './assets/YouTube.png';

const stats = [
  { tone: 'green', value: '\u20A610,000', label: 'Maximum voucher value', icon: moneyIcon },
  { tone: 'violet', value: '100%', label: 'Digital - zero paperwork', icon: mobileIcon },
  { tone: 'blue', value: '0-19', label: 'Age range supported', icon: profileUsersIcon },
  { tone: 'pink', value: '5,000+', label: 'Lives impacted', icon: lovelyIcon },
];

const steps = [
  {
    title: 'Onboard',
    icon: onboardIcon,
    text: "Partner with MinieMoney to set up your organisation's incentive program. No complexity, just purpose.",
  },
  {
    title: 'Share',
    icon: shareIcon,
    text: 'Receive a unique link tailored to your organisation and distribute it to your beneficiaries instantly.',
  },
  {
    title: 'Empower',
    icon: empowerIcon,
    text: 'Beneficiaries enter their details via your link and receive their savings voucher instantly via email.',
  },
];

const impactCards = [
  {
    tone: 'lime',
    title: 'Employers',
    text: "Support your employees' children by giving them a financial head start. A benefit that stands out and lasts.",
    image: employersImage,
    type: 'content',
  },
  {
    tone: 'orange',
    title: 'Businesses',
    text: 'Reward loyal customers with something more meaningful than a discount voucher. Build lasting brand goodwill.',
    image: businessesImage,
    type: 'content',
  },
  {
    tone: 'purple',
    title: 'Social Clubs',
    text: "Invest in your members' families and friends, and strengthen community bonds through financial empowerment.",
    image: socialClubImage,
    type: 'content',
  },
  {
    tone: 'mint',
    title: 'Communities',
    text: "Build generational impact by giving today's children the tools and head start to become tomorrow's leaders.",
    image: communitiesImage,
    type: 'content',
  },
];

const returningRedeemCards = [
  {
    tone: 'cyan',
    title: 'Trust Fund Account',
    subtitle: 'Managed entirely by the parent or guardian',
    buttonText: 'Open a Trust Fund Account',
    visual: 'child',
    steps: [
      'Open the MinieMoney app',
      'Create a Trust Fund Account for your child',
      "Redeem voucher into your child's account",
      "Start saving towards your child's goals",
    ],
  },
  {
    tone: 'violet',
    title: 'Teens Account',
    subtitle: 'Designed to give teens financial autonomy',
    ages: 'Ages 10-20',
    buttonText: 'Open a Teens Account',
    visual: 'teens',
    steps: [
      'Simply send the voucher code to your teen to redeem directly on their MinieMoney account.',
    ],
  },
];

const newRedeemCards = [
  {
    tone: 'cyan',
    title: 'Trust Fund Account',
    subtitle: 'Managed entirely by the parent or guardian',
    buttonText: 'Open a Trust Fund Account',
    visual: 'child',
    steps: [
      'Download the MinieMoney app',
      'Open a MinieMoney Personal Account',
      'Create a Trust Fund Account for your child',
      "Redeem voucher into your child's account",
      "Start saving towards your child's goals",
    ],
  },
  {
    tone: 'violet',
    title: 'Teens Account',
    subtitle: 'Designed to give teens financial autonomy',
    ages: 'Ages 10-20',
    buttonText: 'Open a Teens Account',
    visual: 'teens',
    steps: [
      'Download the MinieMoney app',
      'Open a MinieMoney Personal Account',
      'Invite your teen to download, open a Teens Account, and link their NIN',
      'Send the voucher code to your teen to redeem on their own account',
    ],
  },
];

const orgCards = [
  {
    tone: 'blue',
    title: 'A Benefit That Lasts',
    text: 'Unlike gift cards, this voucher goes into structured savings - creating long-term value for families.',
  },
  {
    tone: 'violet',
    title: 'Zero Operational Burden',
    text: 'Fully digital setup, distribution, and redemption. No paperwork, no logistics, no friction.',
  },
  {
    tone: 'pink',
    title: 'Stronger Trust & Loyalty',
    text: 'Support financial literacy and deepen goodwill within your community in a tangible way.',
  },
  {
    tone: 'green',
    title: 'Measurable Impact',
    text: "Track voucher claims and redemptions with clear reporting - see the difference you're making.",
  },
];

function App() {
  const [activeRedeemTab, setActiveRedeemTab] = useState('new');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="page-shell">
      <main className="page">
        <section className="hero">
          <header className="topbar">
            <a className="brand" href="#top" aria-label="MinieMoney">
              <img className="brand-logo" src={brandLogoImage} alt="MinieMoney" />
            </a>
            <nav className="nav" aria-label="Primary">
              <a href="#company">Company</a>
              <a href="#product">Product</a>
              <a href="#resources">Resources</a>
            </nav>
            <a className="download-button desktop-download-button" href="#download">
              <img className="store-icons" src={storeIconsImage} alt="" aria-hidden="true" />
              <span>Download now</span>
            </a>
            <button
              className="sidebar-button"
              type="button"
              aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
              aria-expanded={isSidebarOpen}
              aria-controls="mobile-sidebar"
              onClick={() => setIsSidebarOpen((open) => !open)}
            >
              <img className="sidebar-button-icon" src={buttonsIcon} alt="" aria-hidden="true" />
            </button>
          </header>

          <div
            className={`sidebar-overlay ${isSidebarOpen ? 'sidebar-overlay-open' : ''}`}
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden={!isSidebarOpen}
          />

          <aside
            id="mobile-sidebar"
            className={`mobile-sidebar ${isSidebarOpen ? 'mobile-sidebar-open' : ''}`}
            aria-hidden={!isSidebarOpen}
          >
            <div className="mobile-sidebar-header">
              <img className="brand-logo" src={brandLogoImage} alt="MinieMoney" />
              <button
                className="sidebar-close"
                type="button"
                aria-label="Close sidebar"
                onClick={() => setIsSidebarOpen(false)}
              >
                ×
              </button>
            </div>

            <nav className="mobile-sidebar-nav" aria-label="Mobile">
              <a href="#company" onClick={() => setIsSidebarOpen(false)}>
                Company
              </a>
              <a href="#product" onClick={() => setIsSidebarOpen(false)}>
                Product
              </a>
              <a href="#resources" onClick={() => setIsSidebarOpen(false)}>
                Resources
              </a>
            </nav>

            <a className="download-button mobile-sidebar-download" href="#download">
              <img className="store-icons" src={storeIconsImage} alt="" aria-hidden="true" />
              <span>Download now</span>
            </a>
          </aside>

          <div className="hero-copy">
            <div className="promo-badge">{'\uD83C\uDF81 Up to \u20A610,000 per voucher'}</div>
            <h1>
              Give Your <span className="text-highlight">Employees</span> Up to {'\u20A610,000'}
              <br />
              in MinieMoney Savings Vouchers
            </h1>
            <p className="hero-subtext">
              MinieMoney Savings Vouchers help employees, customers, and members invest in their
              children&apos;s financial future instantly, digitally, meaningfully.
            </p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#partner">
                How It Works
              </a>
              <a className="button button-secondary" href="#redeem">
                Become a Partner
              </a>
            </div>
          </div>

          <div className="hero-stage">
            <article className="hero-side-card hero-side-card-left" aria-hidden="true">
              <div className="hero-form-card">
                <div className="hero-form-banner">
                  MinieMoney Voucher is in partnership with Wakanow
                </div>
                <div className="hero-form-fields">
                  <div className="hero-form-field">
                    <span>Full Name</span>
                    <div className="hero-form-input">Paul Mike</div>
                  </div>
                  <div className="hero-form-field">
                    <span>Work Email</span>
                    <div className="hero-form-input">paulm@company.com</div>
                  </div>
                  <div className="hero-form-field">
                    <span>Phone number</span>
                    <div className="hero-form-input">081 2345 6789</div>
                  </div>
                </div>
                <button className="hero-form-button" type="button">
                  Claim Voucher
                </button>
              </div>
            </article>

            <article className="hero-stage-card">
              <div className="hero-stage-card-media">
                <img src={heroCenterImage} alt="Voucher code illustration" />
              </div>
              <div className="hero-stage-card-content">
                <h2>Your voucher is ready</h2>
                <p>
                  We&apos;ve emailed your voucher code and simple steps to redeem it in the
                  MinieMoney app.
                </p>
                <p>Check your inbox and enjoy your reward.</p>
                <button className="hero-stage-card-button" type="button">
                  Got it
                </button>
              </div>
            </article>

            <article className="hero-side-card hero-side-card-right" aria-hidden="true">
              <div className="hero-form-card hero-form-card-right">
                <div className="hero-form-banner">
                  MinieMoney Voucher is in partnership with Pizza Hut
                </div>
                <div className="hero-form-fields">
                  <div className="hero-form-field">
                    <span>Full Name</span>
                    <div className="hero-form-input">Paul Mike</div>
                  </div>
                  <div className="hero-form-field">
                    <span>Email</span>
                    <div className="hero-form-input">paulmike@gmail.com</div>
                  </div>
                  <div className="hero-form-field">
                    <span>Phone number</span>
                    <div className="hero-form-input">081 2345 6789</div>
                  </div>
                  <div className="hero-form-field">
                    <span>Order ID</span>
                    <div className="hero-form-input">HD729409</div>
                  </div>
                </div>
                <button className="hero-form-button" type="button">
                  Claim Voucher
                </button>
              </div>
            </article>
          </div>
        </section>

        <section className="section foundations-section">
          <div className="section-heading centered">
            <h2>A Digital Gift That Builds Financial Foundations</h2>
            <p>
              MinieMoney Savings Voucher is a digital reward that&apos;s redeemed directly into a
              child&apos;s savings account giving kids and teens a head start in building smart
              financial habits and a stronger financial future.
              <br />
              <br />
              Reward with purpose. Invest in tomorrow.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <article className={`stat-card stat-${item.tone}`} key={item.label}>
                <div className="stat-card-header">
                  {item.icon ? (
                    <>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <img
                          className={`stat-icon-image ${index > 0 ? 'stat-icon-image-plain' : ''}`}
                          src={item.icon}
                          alt=""
                          aria-hidden="true"
                          key={`${item.label}-${index}`}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      <span className="stat-dot" />
                      <span className="stat-pill" />
                      <span className="stat-pill short" />
                    </>
                  )}
                </div>
                <div className="stat-card-body">
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section partners-section" id="partner">
          <div className="partners-copy">
            <h2>How It Works for Partners</h2>
            <p>Fully digital, trackable, simple, purposeful and impactful.</p>
          </div>

          <div className="steps-list">
            {steps.map((step, index) => (
              <article
                className={`step-card ${
                  step.title === 'Onboard' || step.title === 'Share' || step.title === 'Empower'
                    ? 'step-card-narrow'
                    : ''
                }`}
                key={step.title}
              >
                <div className="step-card-top">
                  {step.icon ? (
                    <img className="step-icon-image" src={step.icon} alt="" aria-hidden="true" />
                  ) : (
                    <span className="step-icon" />
                  )}
                  <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="step-card-body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
            <img className="step-card-tab" src={stepTabImage} alt="" aria-hidden="true" />
          </div>
        </section>

        <section className="section impact-section">
          <div className="section-heading">
            <h2>The MinieMoney Impact Platform</h2>
            <p>
              A smarter way for organisations to create meaningful value instead of generic
              rewards, give families something that grows.
            </p>
          </div>

          <div className="impact-grid">
            {impactCards.map((card) => (
              <article className={`impact-card impact-${card.tone}`} key={card.title}>
                <div
                  className={`impact-content-card ${
                    card.tone === 'purple' || card.tone === 'mint'
                      ? 'impact-content-card-reverse'
                      : ''
                  }`}
                >
                  <div className="impact-media impact-media-content">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="impact-copy">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section redeem-section" id="redeem">
          <div className="redeem-copy">
            <h2>How to Redeem Your Voucher</h2>
            <p>
              Claimed and received a voucher? You&apos;re one step closer to building your
              child&apos;s financial foundation. Follow the steps based on your child&apos;s age.
            </p>
          </div>

          <div className="redeem-flow">
            <div className="redeem-tabs">
              <button
                className={`tab ${activeRedeemTab === 'new' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveRedeemTab('new')}
              >
                For New Users
              </button>
              <button
                className={`tab ${activeRedeemTab === 'returning' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveRedeemTab('returning')}
              >
                For Returning Users
              </button>
            </div>

            <div className="redeem-returning-list">
              {(activeRedeemTab === 'new' ? newRedeemCards : returningRedeemCards).map((card) => (
                <article className={`returning-card returning-card-${card.tone}`} key={card.title}>
                  <div className="returning-card-main">
                    <header className={`returning-card-header returning-card-header-${card.tone}`}>
                      <h3>{card.title}</h3>
                      <p>{card.subtitle}</p>
                    </header>

                    <div className="returning-card-steps">
                      {card.steps.map((step) => (
                        <div className="returning-card-step" key={step}>
                          {step}
                        </div>
                      ))}
                    </div>

                    <button
                      className={`returning-card-button returning-card-button-${card.tone}`}
                      type="button"
                    >
                      {card.buttonText}
                    </button>
                  </div>

                  <aside className={`returning-card-side returning-card-side-${card.visual}`}>
                    {card.ages ? <span className="returning-card-age">{card.ages}</span> : null}
                    {card.visual === 'child' ? (
                      <picture>
                        <source media="(max-width: 640px)" srcSet={childMobileImage} />
                        <img
                          className="returning-card-photo"
                          src={childImage}
                          alt=""
                          aria-hidden="true"
                        />
                      </picture>
                    ) : (
                      <picture>
                        <source media="(max-width: 640px)" srcSet={teensMobileImage} />
                        <img
                          className="returning-card-photo"
                          src={adultImage}
                          alt=""
                          aria-hidden="true"
                        />
                      </picture>
                    )}
                  </aside>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section org-section">
          <div className="org-copy">
            <h2>What This Means for Your Organization</h2>
            <p>
              More than a reward - a strategic benefit that builds trust, loyalty, and measurable
              impact.
            </p>
          </div>

          <div className="org-grid">
            {orgCards.map((card, index) => (
              <article
                className={`org-card org-card-${card.tone} ${
                  index === 0 || index === 2 ? 'org-card-offset-left' : ''
                } ${index === 1 || index === 3 ? 'org-card-offset-right' : ''}`}
                key={card.title}
              >
                <div className="org-card-inner">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div className="cta-card">
            <div className="cta-decorative-bar" />
            <div className="cta-copy">
              <h2>
                A Small Gift Today.
                <br />
                A Stronger Financial Future Tomorrow.
              </h2>
            </div>

            <div className="cta-phone">
              <img
                src={phoneMockupImage}
                alt="Phone mockup"
                style={{ maxWidth: '280px', display: 'block' }}
              />
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-top">
            <div className="footer-brand">
              <img className="brand-logo footer-logo" src={brandLogoImage} alt="MinieMoney" />
              <p>
                One money app for
                <br />
                the whole family.
              </p>
            </div>

            <div className="footer-download">
              <a className="download-button download-button-white" href="#download">
                <img className="store-icons" src={storeIconsImage} alt="" aria-hidden="true" />
                <span>Download now</span>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h3>Company</h3>
              <a href="#about">About us</a>
              <a href="#career">Career</a>
            </div>
            <div>
              <h3>Products</h3>
              <a href="#minielink">MinieLink</a>
              <a href="#gifting">Gifting</a>
            </div>
            <div>
              <h3>Resources</h3>
              <a href="#faqs">FAQs</a>
              <a href="#blog">Blog</a>
              <a href="#press">Press Kit</a>
            </div>
            <div>
              <h3>Legal</h3>
              <a href="#terms">Terms of Service</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#aml">AML Policy</a>
            </div>
            <div>
              <h3>Contact</h3>
              <a href="tel:+2349137093414">+234 913 709 3414</a>
              <a href="mailto:hello@miniemoney.com">hello@miniemoney.com</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 MinieMoney. All rights reserved.</p>
            <div className="social-icons" aria-hidden="true">
              <img src={facebookIcon} alt="Facebook" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={linkedInIcon} alt="LinkedIn" />
              <img src={xIcon} alt="X" />
              <img src={tiktokIcon} alt="TikTok" />
              <img src={youtubeIcon} alt="YouTube" />
            </div>
          </div>

          <div
            className="footer-hero-logo"
            style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={bottomLogoImage}
              alt="MinieMoney"
              style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
