# Fortuna Assets — Quick Reference

## 📁 WHERE ARE THE FILES?

### **Visual Assets** (Logos, Icons)
```
/home/node/.openclaw/workspace/givefortuna/public/

- logo.svg                    Main logo (400x120)
- logo-white.svg              For dark backgrounds
- logo-dark.svg               For light backgrounds
- logo-compact.svg            Small spaces (nav, footer)
- favicon.svg                 Browser icon
- twitter-header.svg          Twitter banner (1500x500)
- twitter-profile-photo.svg   Twitter profile pic (400x400)
```

### **Documentation** (Strategy, Templates)
```
/home/node/.openclaw/workspace/

- FORTUNA_BRAND_GUIDE.md           Brand guidelines
- SOCIAL_MEDIA_TEMPLATES.md        Post templates (Twitter, Telegram, etc.)
- FORTUNA_BUILD_PLAN.md            23-day roadmap
- FORTUNA_SMART_CONTRACT.md        Contract architecture
- FORTUNA_BUSINESS_MODEL.md        Revenue & tokenomics
- FORTUNA_DAY1_COMPLETE.md         Day 1 summary
```

---

## 🎨 VISUAL ASSETS

### 1. **Main Logo** (`logo.svg`)
- **Usage:** Homepage hero, landing pages
- **Background:** Dark (transparent SVG)
- **Size:** 400x120px
- **Style:** YSL-inspired serif, thin dividing line

### 2. **Logo White** (`logo-white.svg`)
- **Usage:** Dark backgrounds, videos, prints
- **Background:** Dark (#0f172a or darker)
- **Color:** White text + line

### 3. **Logo Dark** (`logo-dark.svg`)
- **Usage:** Light backgrounds, documents
- **Background:** White or light gray
- **Color:** Dark text + line

### 4. **Logo Compact** (`logo-compact.svg`)
- **Usage:** Navigation bar, footer, small spaces
- **Size:** Smaller footprint, just "FORTUNA"
- **No:** Tagline (givefortuna.io)

### 5. **Favicon** (`favicon.svg`)
- **Usage:** Browser tab icon
- **Size:** 32x32px recommended
- **Design:** "F" monogram or compact logo

### 6. **Twitter Profile Photo** (`twitter-profile-photo.svg`)
- **Size:** 400x400px (circular crop)
- **Design:** Purple/pink gradient + white "F"
- **Usage:** Twitter, Discord, Telegram profile pics

### 7. **Twitter Header** (`twitter-header.svg`)
- **Size:** 1500x500px
- **Design:** Dark gradient, "FORTUNA" logo, launch date
- **Features:** Trust indicators at bottom

---

## 📝 SOCIAL MEDIA TEMPLATES

### Twitter/X
- Launch announcement
- Cause announcements
- Winner announcements
- Daily stats
- Countdown posts
- Engagement questions

### Telegram
- Welcome message
- Daily updates
- Draw countdowns
- Winner announcements

### Discord
- Server welcome
- Draw announcements
- Community updates

### Instagram
- Story templates
- Post captions
- Reel scripts

### LinkedIn
- Company updates
- Thought leadership

### YouTube
- Platform overview (2-min script)
- How-to videos

### Email
- Donation receipts
- Winner notifications
- Weekly newsletter

---

## 📊 DOCUMENTATION

### 1. **FORTUNA_BRAND_GUIDE.md**
**Contains:**
- Logo usage guidelines
- Color palette (purple/pink gradients)
- Typography (serif for logo, sans for UI)
- Tone of voice (minimal, confident, elegant)
- Do's and Don'ts

**Read this before:** Creating any branded content

---

### 2. **SOCIAL_MEDIA_TEMPLATES.md**
**Contains:**
- Copy-paste ready templates for all platforms
- Hashtag strategy
- Content calendar (Week 1 pre-launch)
- Visual guidelines for each platform
- Posting schedule recommendations

**Use when:** Creating social posts

---

### 3. **FORTUNA_BUILD_PLAN.md**
**Contains:**
- 23-day roadmap (April 8 → May 1)
- Daily tasks broken down
- Dependencies & blockers
- Milestones (testnet, demo, launch)

**Use for:** Project planning, progress tracking

---

### 4. **FORTUNA_SMART_CONTRACT.md**
**Contains:**
- Contract architecture
- Function documentation
- Security considerations
- Deployment instructions
- Testing procedures

**Use for:** Technical understanding, deployment

---

### 5. **FORTUNA_BUSINESS_MODEL.md**
**Contains:**
- Revenue model (10% platform fee)
- Fee distribution (charity, stakers, ops)
- Token utility ($FORT)
- Grant opportunities
- Competitive analysis

**Use for:** Investor pitches, strategy

---

## 🚀 HOW TO VIEW

### Option 1: Preview HTML (Easiest)

If you have the Next.js dev server running:

```bash
cd /home/node/.openclaw/workspace/givefortuna
npm run dev
```

Then open: http://localhost:3000/ASSET_PREVIEW.html

---

### Option 2: Direct File Access

**View logos:**
```bash
# Open SVG files in browser
open /home/node/.openclaw/workspace/givefortuna/public/logo.svg
```

**Read docs:**
```bash
# Read markdown files
cat /home/node/.openclaw/workspace/FORTUNA_BRAND_GUIDE.md
cat /home/node/.openclaw/workspace/SOCIAL_MEDIA_TEMPLATES.md
```

---

### Option 3: VS Code / Editor

```bash
code /home/node/.openclaw/workspace/givefortuna
```

Navigate to `public/` folder and click on SVG files to preview.

---

## 📦 DOWNLOAD ALL ASSETS

**Create a zip:**

```bash
cd /home/node/.openclaw/workspace/givefortuna
zip -r fortuna-assets.zip public/*.svg ../*.md
```

**Or copy specific files:**

```bash
# Copy logos to desktop
cp public/logo*.svg ~/Desktop/

# Copy docs to desktop
cp ../*FORTUNA*.md ~/Desktop/
```

---

## 🎯 QUICK LINKS

**View in GitHub (if pushed):**
- Logos: `/public/*.svg`
- Docs: `/*.md`

**View in Vercel (once deployed):**
- Homepage: givefortuna.vercel.app
- Assets: givefortuna.vercel.app/logo.svg

---

## ✅ CHECKLIST

Before launch, ensure:
- [ ] All logos reviewed and approved
- [ ] Twitter assets uploaded
- [ ] Social templates customized
- [ ] Brand guide read by team
- [ ] Assets backed up (GitHub + local)

---

## 🆘 NEED CHANGES?

**To modify logos:**
1. Edit SVG files in `/public/`
2. Maintain aspect ratios
3. Keep YSL-inspired minimal style
4. Test on dark + light backgrounds

**To add templates:**
1. Edit `SOCIAL_MEDIA_TEMPLATES.md`
2. Follow existing format
3. Include character counts (Twitter = 280 max)

**To update brand:**
1. Edit `FORTUNA_BRAND_GUIDE.md`
2. Update color codes, fonts, tone
3. Regenerate assets if needed

---

**All assets created by MAVONE on Day 1** 🚀
