# Code Standards

## Tech Stack

- **Language**: JavaScript (ES6+) — no TypeScript
- **Framework**: React 16 (functional components + hooks) + Gatsby 2
- **Styling**: Styled Components — no CSS modules, no inline styles
- **Package manager**: Yarn

## Scripts

```bash
yarn develop    # Dev server at http://localhost:8000
yarn build      # Production build
yarn serve      # Serve production build
yarn clean      # Clear Gatsby cache
yarn format     # Prettier auto-format (JS, JSX, JSON, MD)
```

## Component Patterns

- Always use **functional components** with React hooks — no class components
- Co-locate styled components at the **bottom of the file** that uses them
- Import shared tokens from `src/components/utils/colors.js` and `src/components/utils/media.js`
- Use `media.large\`...\`` template literal for responsive breakpoints

## SSR Safety

Gatsby renders server-side — always guard browser globals:

```js
// CORRECT
typeof window !== 'undefined' && window.miner.start()

// WRONG — crashes SSR build
window.miner.start()
```

## Analytics

Always use the optional-chaining pattern — `window.gtag` may not be loaded:

```js
window.gtag && window.gtag('event', 'click', { event_label: '...' })
```

## Real-time / Socket.io

Socket URL is determined at module load time using `window.location.href`. Only connect once at module scope — do NOT create new socket connections inside components or hooks.

## File Naming

- Pages: lowercase with hyphens (`ad-block.js`)
- Components: PascalCase (`MineBar.js`, `Card.js`)
- Utilities: camelCase (`colors.js`, `media.js`)

## Formatting

Prettier is configured — run `yarn format` before committing. Do not introduce manual formatting that contradicts Prettier output.
