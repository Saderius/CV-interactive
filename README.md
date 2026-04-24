# Resume | Patryk Mroziński

This is a printable, interactive CV/resume created as a web application. 
It uses React and Tailwind CSS for styling, specifically configured so that when printed (via browser 'Print' dialogue `Ctrl+P`), it formats cleanly on an A4 page without any unnecessary UI elements like buttons or website styling.

## Technologies Used
- React
- Vite
- Tailwind CSS
- Lucide React (Icons)

## Deployment to GitHub Pages

Since this is a React/Vite application, it requires a build step. You cannot deploy directly from the source code branch. Instead, GitHub Pages needs to serve the compiled output from the `dist` folder. 

The easiest way to set this up is using **GitHub Actions**:

1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment**, change the **Source** dropdown to **GitHub Actions**.
3. Create a new file in your repository at `.github/workflows/deploy.yml` with the following content:

```yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install and Build
        run: |
          npm ci
          npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

Once committed, GitHub will automatically build your app and deploy it gracefully!
Note: The project is already configured with `base: './'` in `vite.config.ts` so all assets will load correctly regardless of your repository name.
