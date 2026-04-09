# Ajuda Corona — Product Vision

## What This Is

Ajuda Corona is a solidarity web platform by MetflixLabs that lets visitors donate their device's processing power to mine cryptocurrency (Monero) for COVID-19 relief. Users visit the site, click a "power" button, and their browser's CPU is used for mining — all proceeds are donated in full to institutions fighting the pandemic. There is zero profit motive; the project is entirely voluntary and open source.

The platform displays real-time stats (online users, mined balance) via WebSocket, Brazilian COVID-19 case data via an external API, and gives users full control over their contribution level via a throttle slider.

## Tech Stack

- **Frontend**: React 16 + Gatsby 2 (static site generation)
- **Styling**: Styled Components + custom color/media utilities
- **Real-time**: Socket.io-client connected to `gretchenless-cloud.xyz` backend
- **HTTP**: Axios (COVID stats from coronavirus-tracker-api)
- **Miner**: In-browser CoinHive-compatible miner injected via script
- **Analytics**: Google Analytics via gatsby-plugin-gtag
- **UI**: Nuka Carousel, rc-slider, react-compound-timer, Moment.js
- **Fonts**: Roboto via gatsby-plugin-google-fonts
- **Deployment**: Gatsby static build (Netlify / ZEIT Now)

## Current State

- Homepage (`/`) with hero section, data carousel, throttle control, and power button
- Real-time server stats (balance, online users) via Socket.io
- Brazilian COVID-19 case data displayed via external API
- Ad-blocker detection page (`/ad-block`) that blocks mining if ad-blocker is detected
- Contribution level slider (MineBar) with throttle control (1–100%)
- Mining session timer and current power display
- Google Analytics event tracking for start/stop interactions
- Layout, SEO, Header, Card, Carousel components built out
- Responsive design with media query utilities

## What's Missing

- No information page about which charities receive donations
- No donation history or transparency report page
- No total raised counter visible on the homepage hero
- No social sharing features to encourage virality
- No multilingual support (site is Portuguese-only)
- No PWA offline mode (plugin commented out)
- No unit tests (test script is a placeholder)
- Privacy policy linked as PDF — no dedicated page

## Roadmap

### Milestone 1 — Trust & Transparency
- Add a dedicated charity/donation destination page listing recipient organizations
- Add a "total raised so far" counter to the homepage hero section
- Create a `/how-it-works` page with a visual step-by-step explanation
- Replace the PDF privacy policy with a proper `/politica-de-privacidade` page

### Milestone 2 — Growth & Virality
- Add social share buttons (Twitter, WhatsApp) to encourage sharing
- Add a referral/invite link system so users can track their network's contribution
- Add a leaderboard page showing top contributors by session time

### Milestone 3 — Polish & PWA
- Enable gatsby-plugin-offline for full PWA support
- Add a loading skeleton for the COVID stats carousel
- Add error boundary and fallback UI when Socket.io disconnects
- Set up Jest + React Testing Library for component tests
