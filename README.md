# Synapserra Web Spark

A modern, responsive website built with React, Vite, and Tailwind CSS, featuring international presence, testimonials, services, and interactive UI elements.

## Features
- Multi-page layout: Home, Services, About, Testimonials, Contact, Get Quote
- Responsive design for desktop and mobile
- Dark mode toggle
- Enhanced headings and gradients
- Interactive testimonials carousel with ratings
- Global presence section with interactive world map and Google Maps embeds
- Full-screen, visually prominent forms for Contact and Get Quote
- Modern UI components (accordion, cards, buttons, etc.)

## Tech Stack
- **React** (with functional components)
- **Vite** (for fast development and build)
- **Tailwind CSS** (utility-first styling)
- **Lucide Icons** (SVG icons)
- **Google Maps Embed** (for location sections)

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or bun

### Installation
```sh
npm install
```
Or, if using bun:
```sh
bun install
```

### Running the App
```sh
npm run dev
```
Or, if using bun:
```sh
bun run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Building for Production
```sh
npm run build
```
Or, if using bun:
```sh
bun run build
```

### Linting
```sh
npm run lint
```
Or, if using bun:
```sh
bun run lint
```

## Project Structure
```
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── lovable-uploads/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   └── ui/ ... (UI components)
│   ├── hooks/
│   ├── lib/
│   └── pages/
│       ├── Index.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       └── GetQuote.tsx
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

## Customization
- Update company info, addresses, and testimonials in the respective page files under `src/pages/`
- Add or modify UI components in `src/components/ui/`
- Adjust Tailwind theme in `tailwind.config.ts`

## License
MIT

---

For any issues or feature requests, please open an issue or contact the maintainer.
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/974da367-d1c3-4a15-8a7a-9d0cf51f7711) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
