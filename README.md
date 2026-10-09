# Two Years of Us — Mitu ❤️ Ayu (2nd Anniversary Website)

A luxury, romantic, cinematic 2nd Anniversary website created for **Mitu & Ayu (Madaniyu)** celebrating two unforgettable years together since **10 October 2024**.

---

## 🌹 Architecture Overview: 100% Static on GitHub Pages

This project is designed to be hosted **entirely on GitHub Pages** through a single GitHub repository, with **zero backend servers** to maintain:

```
┌───────────────────────────────────────────────┐
│          GITHUB PAGES (Static Host)           │
│   https://<your-username>.github.io/<repo>/   │
│   (index.html, images, styles, audio synth)   │
└──────────────────────┬────────────────────────┘
                       │ Client-side EmailJS
                       ▼
┌───────────────────────────────────────────────┐
│        Gmail Inbox (maitrepatel1805.5@gmail.com)│
│   Subject: 💌 Ayu Has Made a Wish for Year Three!│
└───────────────────────────────────────────────┘
```

- **Frontend & Storage:** Hosted on GitHub Pages. Wishes are backed up in browser storage (`localStorage`).
- **Email Delivery:** Direct client-side delivery via the official EmailJS Browser SDK (already included in `index.html`).
- **Privacy:** Recipient email (`maitrepatel1805.5@gmail.com`) is configured as the default recipient and is **never displayed in the public website UI**.

---

## 💌 Step 1: Set Up EmailJS (Takes 2–3 Minutes)

EmailJS allows your static website to send emails directly to `maitrepatel1805.5@gmail.com` without needing a server.

1. **Sign Up (Free):** Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account.
2. **Add Email Service:**
   - Go to **Email Services** → Click **Add New Service**.
   - Choose **Gmail**.
   - Connect your Gmail account (`maitrepatel1805.5@gmail.com`) and click **Create Service**.
   - Copy your **Service ID** (e.g. `service_xxxxxxx`).
3. **Create Email Template:**
   - Go to **Email Templates** → Click **Create New Template**.
   - **Subject:** `💌 Ayu Has Made a Wish for Year Three!`
   - **Content:**
     ```text
     Feature: {{feature_name}}
     From: {{sender_name}}
     To: {{recipient_name}}
     Date & Time: {{submission_date}}

     Secret Wish:
     "{{wish_text}}"

     Milestone: {{anniversary_year}}
     ```
   - In the template **Settings** tab:
     - Set **To Email** to: `maitrepatel1805.5@gmail.com` (or `{{to_email}}`).
   - Click **Save** (top right) and copy your **Template ID** (e.g. `template_xxxxxxx`).
4. **Get Public Key:**
   - Go to **Account** (left sidebar) → **API Keys** tab.
   - Copy your **Public Key** (e.g. `xxxxxxxxxxxxxxxxxxxx`).
5. **Paste into `email.config.js`:**
   Open `email.config.js` in this folder and enter the 3 keys:
   ```javascript
   window.LOVE_VAULT_CONFIG = {
     serviceId: "YOUR_SERVICE_ID",
     templateId: "YOUR_TEMPLATE_ID",
     publicKey: "YOUR_PUBLIC_KEY",
     recipientEmail: "maitrepatel1805.5@gmail.com",
     senderEmail: "maitrepatel1805.5@gmail.com"
   };
   ```

---

## 🚀 Step 2: Deploy to GitHub Pages (One Repository)

1. Open **PowerShell** or terminal in this project folder (`E:\AYU\Ayu 2`):
   ```bash
   git init
   git add .
   git commit -m "Deploy 2nd Anniversary website for Mitu and Ayu"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. On GitHub, open your repository:
   - Click **Settings** (top navigation tab) → **Pages** (left sidebar under "Code and automation").
   - Under **Build and deployment**:
     - **Source:** Deploy from a branch
     - **Branch:** `main`
     - **Folder:** `/ (root)`
     - Click **Save**.
3. In about 60 seconds, your site is live at:
   `https://<your-username>.github.io/<your-repo-name>/`

---

## ✨ Features & User Experience

- **Opening Screen:** Cinematic burgundy & gold sequenced reveal with radiant glowing infinity symbol (`∞`) and romantic music synthesizer.
- **Hero & Clock:** Real-time relationship counter ticking every second together since **10 October 2024**.
- **Four Chapters:** High-fashion editorial relationship story with photos.
- **Gallery & Lightbox:** All 22 original photographs with filterable memory categories.
- **Why I Love You:** 12 luxury 3D flippable confession cards.
- **22 Promises, One Heart ❤️:** Interactive vows with gold glow.
- **Love Letter Keepsake:** 3D unsealing envelope with wax seal modal and print feature.
- **Love Vault Wish:** When Ayu writes her secret wish and clicks **“Lock My Wish ❤️”**:
  - The wish is backed up in browser storage.
  - Email is dispatched directly to `maitrepatel1805.5@gmail.com`.
  - Romantic fireworks celebration burst animates.
  - Confirmation displays:
    - **Header:** `✨ Your wish has been sealed in our Love Vault, Madaniyu! ✨`
    - **Message:** `Wish submitted successfully! ❤️`
  - Recipient email address is never exposed in the UI.

---

*Crafted with infinite love for Ayu (Madaniyu) — Two Years of Us ❤️*
