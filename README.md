# 🏢 Brigade Lumina — Premium Residential Website

A modern, responsive real estate website built for **Brigade Lumina**, a premium residential project located on Tumkur Main Road, West Bangalore.

This project was refactored from a static HTML website into a scalable **Next.js App Router architecture** with reusable components and a clean UI structure.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui components**
- **PostCSS**
- **Lucide Icons**
- **Responsive Design (Mobile-first)**

---

## ✨ Key Features

### 🏠 Homepage
- Premium Hero section with elegant typography
- About section with optimized layout
- Project Snapshot section
- Amenities section with modern card design
- Location Advantage section with structured UI
- Shared Navbar & Footer across all pages

### 📞 Contact Page
- Integrated `Contact2` component (shadcn-based)
- Responsive 2-column form layout
- Clean spacing and premium styling
- Google Maps integration
- Fully modular component architecture

### 🧩 Architecture Improvements
- Migrated from static HTML to **Next.js App Router**
- Shared layout using `layout.tsx`
- Modular component structure
- UI primitives organized under `/components/ui`
- Tailwind CSS configuration centralized
- Legacy HTML backed up in `/temp_backup`

---

## 📁 Project Structure

Brigade-Lumina/
│
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── contact/
│ │ └── page.tsx
│ └── globals.css
│
├── components/
│ ├── navbar.tsx
│ ├── footer.tsx
│ └── ui/
│ ├── contact-2.tsx
│ ├── button.tsx
│ ├── input.tsx
│ ├── textarea.tsx
│ └── label.tsx
│
├── lib/
│ └── utils.ts
│
├── public/
│ └── images/
│
├── temp_backup/
│ └── original HTML files
│
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── package.json
└── tsconfig.json
