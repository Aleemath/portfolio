# Aleemath Ranseena - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full Stack Developer. Built with React, TypeScript, Tailwind CSS, and daisyUI.

## 🚀 About Me

I'm **Aleemath Ranseena**, a Full Stack Developer with **3+ years** of experience in building scalable web applications. I specialize in developing enterprise-level solutions including:

- School Management Systems
- Therapy Center Systems
- ERP and CRM Solutions
- Full Stack Web Applications

## 🛠️ Technologies Used

- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **daisyUI** - Component library for Tailwind CSS
- **React Icons** - Icon library

## 📋 Features

- ✅ Responsive design (mobile-first approach)
- ✅ Modern UI with green and white color scheme
- ✅ Smooth scrolling navigation
- ✅ Interactive carousels for Portfolio and Testimonials
- ✅ WhatsApp integration for contact form
- ✅ Downloadable CV
- ✅ Social media integration
- ✅ Accessible components with ARIA labels
- ✅ SEO optimized with meta tags

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

## 🌐 Deployment

This project is configured for GitHub Pages deployment with two options:

### Option 1: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys your site when you push to the `main` branch.

1. **Update repository name** in `vite.config.ts`:

   ```typescript
   const repoName = "your-repo-name"; // Change this to your GitHub repository name
   ```

2. **Enable GitHub Pages**:

   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on push to `main`

3. **Push your code**:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. Your site will be available at `https://<username>.github.io/<repo-name>/`

### Option 2: Manual Deployment

If you prefer manual deployment:

1. **Install gh-pages** (if not already installed):

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update repository name** in `vite.config.ts` (same as above)

3. **Deploy**:

   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**:
   - Go to Settings → Pages
   - Select `gh-pages` branch as source
   - Your site will be live at `https://<username>.github.io/<repo-name>/`

### Important Notes

- Make sure to update the `repoName` variable in `vite.config.ts` to match your GitHub repository name
- If your repository name is different from `portfolio`, update it accordingly
- The `.nojekyll` file in the `public` folder ensures GitHub Pages doesn't process the site with Jekyll

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, PDFs, etc.
│   ├── components/     # React components
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Skills.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   └── WelcomeBanner.tsx
│   ├── data/
│   │   └── constants.ts  # Centralized data
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/constants.ts` to update:

- Personal information (name, role, contact details)
- Social media links
- Portfolio images
- Skills and testimonials
- Stats

### Change Theme Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
themes: [
  {
    portfolio: {
      primary: '#22C55E', // Change this color
      // ... other colors
    },
  },
],
```

## 📞 Contact

- **Email:** aleemathranseenakk@gmail.com
- **Phone:** +971 527989668
- **Location:** Wasl Village, Al Qusais Industrial Area 5, Dubai
- **LinkedIn:** [linkedin.com/in/aleemath-ranseena](https://www.linkedin.com/in/aleemath-ranseena/)
- **Instagram:** [@aleemath\_\_](https://www.instagram.com/aleemath__/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

© 2025 Aleemath Ranseena. All Rights Reserved.
