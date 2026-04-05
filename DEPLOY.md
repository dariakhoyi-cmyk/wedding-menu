# Daria & Andrew · Wedding Menu Site
## Deploy Guide

---

### STEP 1 — Set up Google Sheets

1. Go to **sheets.google.com** → create a new blank sheet
2. Name it: `Wedding RSVPs`
3. Click **Extensions → Apps Script**
4. Delete everything in the editor
5. Paste the entire contents of **`google-apps-script.js`**
6. Click **Save** (floppy disk icon)
7. Click **Deploy → New deployment**
8. Settings:
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
9. Click **Deploy** → authorize when prompted → copy the **Web App URL**

---

### STEP 2 — Add the URL to your project

1. In the project folder, duplicate `.env.example` and rename it `.env`
2. Replace `YOUR_SCRIPT_ID_HERE` with the URL you just copied
3. It should look like:
   ```
   VITE_SHEETS_URL=https://script.google.com/macros/s/ABC123.../exec
   ```

---

### STEP 3 — Push to GitHub

1. Go to **github.com** → New repository → name it `wedding-menu` → Create
2. In your terminal (or use GitHub Desktop):
   ```bash
   cd wedding-menu
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/wedding-menu.git
   git push -u origin main
   ```

---

### STEP 4 — Deploy on Vercel

1. Go to **vercel.com** → Add New Project
2. Import your `wedding-menu` GitHub repo
3. Framework preset: **Vite** (auto-detected)
4. Click **Environment Variables** → add:
   - Key: `VITE_SHEETS_URL`
   - Value: your Google Apps Script URL
5. Click **Deploy**
6. Vercel gives you a URL like `wedding-menu-abc.vercel.app`

---

### STEP 5 — Custom domain (optional)

In Vercel → your project → Settings → Domains → add your domain.

---

### Viewing responses

Open your Google Sheet at any time — every RSVP appears as a new row with timestamp, name, meal, and dietary notes. You can sort, filter, or export anytime.
