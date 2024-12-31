# Landing UI

Build stunning landing pages with our React component library. Think shadcn/ui, but specifically crafted for landing pages.

## Features

- 🎨 Professional design system
- ⚡️ Powered by Tailwind CSS
- 📦 Easy-to-use components
- 🌙 Dark mode support
- 🔒 Type-safe with TypeScript
- 📱 Responsive by default

## Packages

- `ui.landing`: Core component library
- `docs`: Documentation site
- `@landing/eslint-config`: ESLint configuration
- `@landing/typescript-config`: TypeScript configuration

## Quick Start

```bash
# Install dependencies
pnpm install ui.landing

# Add to tailwind.config.ts
import { withLanding } from 'ui.landing/config'

export default withLanding({
  content: ['./src/**/*.{ts,tsx}']
})
```

## Development

```bash
# Clone repository
git clone https://github.com/landing-ui/landing-ui.git

# Install dependencies
pnpm install

# Start development
pnpm dev
```

## Available Scripts

- `pnpm build`: Build all packages
- `pnpm dev`: Start development environment
- `pnpm lint`: Run ESLint
- `pnpm test`: Run tests
- `pnpm changeset`: Create a changeset

## Documentation

Visit [docs.landing-ui.com](https://docs.landing-ui.com) to view the documentation.

## License

MIT © [Landing UI](https://landing-ui.com)
