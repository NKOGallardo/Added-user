# React + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)


## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Added-user

React + Vite app configured for deployment on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

Import this repository into Vercel. The default settings are correct:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The `vercel.json` rewrite keeps the app working when a route is opened directly.
