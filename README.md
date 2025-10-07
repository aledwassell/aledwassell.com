# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

## Setup Instructions

1. **Install the static adapter dependency:**
   ```bash
   npm install --save-dev @sveltejs/adapter-static
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

3. **Push your changes:**
   - The deployment will automatically trigger when you push to the main branch
   - You can monitor the deployment progress in the "Actions" tab

## Configuration Notes

- The app is configured to use the repository name as the base path (`/aledwassell.com`)
- Static files are built to the `build` directory
- The deployment uses Node.js 20 and npm for building
- The workflow includes proper permissions for GitHub Pages deployment

## Local Development

For local development, the base path is empty, so the app runs normally. For production builds, the base path is set to match your repository name.
