# GitHub Pages Deployment Troubleshooting

## Common Issues and Solutions

### 1. GitHub Pages Not Configured

Make sure GitHub Pages is set to use **GitHub Actions** as the source:

- Go to your repository: https://github.com/Aleemath/portfolio
- Click **Settings** → **Pages**
- Under **Source**, select **"GitHub Actions"** (not "Deploy from a branch")
- Save

### 2. Check GitHub Actions Workflow Status

- Go to **Actions** tab in your repository
- Check if the workflow ran successfully
- If it failed, check the error logs

### 3. Verify Base Path

The base path is set to `/portfolio/` in `vite.config.ts` which matches your repository name.

### 4. Manual Deployment (Alternative)

If GitHub Actions isn't working, you can deploy manually:

```bash
npm install --save-dev gh-pages
npm run deploy
```

Then in GitHub Settings → Pages, select `gh-pages` branch as source.

### 5. Check URL

Your site should be available at:

- https://aleemath.github.io/portfolio/

Make sure you're using the `/portfolio/` path (with trailing slash).

### 6. Clear Cache

Sometimes browsers cache the 404 page. Try:

- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Open in incognito/private window
- Clear browser cache

### 7. Wait for Deployment

GitHub Pages deployments can take a few minutes. Check the Actions tab to see if deployment is still in progress.
