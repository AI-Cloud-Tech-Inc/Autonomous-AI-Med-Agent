# Deployment: GitHub Pages

This project is configured for deployment to GitHub Pages at:
https://ai-cloud-tech-inc.github.io/Autonomous-AI-Med-Agent/

## Steps

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Build and deploy:
   ```bash
   npm run deploy
   ```

## Notes
- The `homepage` field in `package.json` is set for GitHub Pages.
- The `gh-pages` package handles deployment.
- All static assets will be available under `/Autonomous-AI-Med-Agent/`.

For more, see the official [GitHub Pages deployment guide for React](https://create-react-app.dev/docs/deployment/#github-pages).
