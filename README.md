# VersualRL project website

Static project page for **VersualRL: Closed-Loop Verbal Reinforcement Learning with Visual Execution Feedback for Task-Level Robot Planning**.

## Publish on GitHub Pages

1. Create a GitHub repository. For a user site, name it `<username>.github.io`; for a project site, any repository name works.
2. Upload the full contents of this folder and push them to the `main` branch.
3. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
4. The included workflow publishes the `dist/` folder automatically.

All page links are relative, so the site works both at the root of `<username>.github.io` and under a project path.

## Preview locally

```bash
python3 -m http.server 8000 --directory dist
```

Then open `http://localhost:8000`.
