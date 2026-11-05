# AL ARBAZ CRUISE – Premium Luxury Cruise Website

Official website for **AL ARBAZ CRUISE** – Luxury Cruise Tour and Trips Since 2013, operating at Kemari Port, Karachi, Pakistan.

---

## ⚓ Brand Identity & Credentials

- **Brand Name**: AL ARBAZ CRUISE
- **Tagline**: Make Your Weekends Unforgettable!
- **Heritage**: Luxury Cruise Tour and Trips Since 2013
- **Port Location**: Kemari Port, Karachi, Pakistan
- **Official WhatsApp / Booking**: `0309-3611116` (`+923093611116`)
- **Official Email**: `alarbazcruise.best@gmail.com`
- **Facebook**: https://www.facebook.com/profile.php?id=61578834463306
- **Instagram**: https://www.instagram.com/al_arbaz_cruise/
- **Official Logo**: https://i.postimg.cc/zBxtgj5N/Al-Arbaz-Luxury-Cruise-Logo.png

---

## 🌟 Key Features

1. **Animated Announcement Marquee**: Displays departure schedules, Kemari Port notices, and weekend booking reminders.
2. **Sticky Header & Mobile Drawer**: 3-zone contract with brand wordmark, quick links, active section indicator, and WhatsApp booking action.
3. **Cinematic Hero Slider**: 3 distinct slides featuring auto-advance, touch swipe, manual navigation arrows, pagination dots, and animated text entrances.
4. **Weekend Social Cruise Package**:
   - 3 Hours Duration | Kemari Port | 30–60 Guests
   - Adults: Rs. 5,999 | Kids 4–12: Rs. 2,999 | Kids under 4: FREE
   - Live interactive fare estimator and direct WhatsApp pre-filled booking generator.
5. **Five Signature Cruise Experiences**:
   - Cruise Ride, Live Food & Dining, Fishing Activities, Music & Entertainment, and Sunset Views.
6. **Delightful Dining Experience**:
   - Tabbed menu showcase featuring the complete Hi-Tea Menu (4 items) and Grand Pakistani Buffet Menu (11 items) with authentic buffet photography.
7. **Official Video Showcase**:
   - Streamable HD cruise footage embed + Facebook Reel integration with safe controls and direct link fallbacks.
8. **Premium Image Gallery with Lightbox**:
   - 7 filter categories, hover zoom, and full-featured Lightbox modal with next/previous keyboard navigation.
9. **Why Choose Al Arbaz Cruise**:
   - 7 verified pillars based on authentic business credentials since 2013.
10. **Interactive WhatsApp Reservation Form**:
    - Validates guest details, computes estimate, and constructs formatted WhatsApp message sent directly to `+923093611116`.
11. **Contact & Port Location**:
    - Responsive Google Maps embed for Kemari Port, Karachi with one-click directions.
12. **Floating WhatsApp Button & Desktop Custom Cursor**:
    - Pulsing beacon with tooltip and subtle non-intrusive desktop luxury cursor.

---

## 🚀 Development & Build Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
This produces optimized production files in the `/dist` directory.

---

## 🌐 Deployment to Hostinger or Any Web Hosting

1. Run `npm run build` to generate the production build in the `dist/` folder.
2. In Hostinger hPanel:
   - Navigate to **Files > File Manager** or connect via **FTP**.
   - Open your website root directory (`public_html/`).
   - Upload all contents from the local `dist/` folder into `public_html/`.
3. If using Apache/LiteSpeed, ensure `.htaccess` is present for SPA routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
4. Your website is now live!
