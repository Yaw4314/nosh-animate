# NOSH Burgers & More - Premium Website

A high-performance, cinematic restaurant website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🍔 Key Features

- **Deconstructed Burger Hero**: A smooth, scroll-driven animation where burger layers separate vertically as you scroll. Uses `useSpring` for physics-based movement and staggered layer timing.
- **Notion CMS Integration**: Menu items are fetched from a Notion database. The site falls back to static data if the API is unavailable.
- **WhatsApp Cart System**: Custom cart slide-over with quantity management, pickup/delivery toggle, and automated WhatsApp message generation with Rs. formatting.
- **Dual Ordering**: Quick access to Foodpanda and WhatsApp ordering via a floating mobile action bar.
- **Performance Optimized**: Meta tags for SEO, lazy-loaded images, and layout shift prevention.
- **Accessible & Inclusive**: Full ARIA support and graceful degradation for users who prefer reduced motion.

## 🛠 Setup & Configuration

### 1. Notion Integration
To manage your menu via Notion:
1. Create a Notion Database with these exact column names and types:
   - **Name** (Title)
   - **Description** (Rich Text)
   - **Category** (Select: `beef`, `chicken`, `special`)
   - **Price** (Number)
   - **Original Price** (Number)
   - **Image URL** (URL)
   - **Popular** (Checkbox)
   - **Available** (Checkbox)
2. Create an internal integration in the [Notion Developers portal](https://www.notion.so/my-integrations) and get your API Key.
3. Share your database with the integration.
4. Copy the Database ID from the URL (the string between `notion.so/` and `?v=`).

### 2. Environment Variables
Create a `.env.local` file:
```bash
NOTION_API_KEY=your_secret_key
NOTION_DATABASE_ID=your_database_id
```

### 3. Installation & Run
```bash
npm install
# npm run dev
```

## 🚀 Deployment
Deploy to Vercel:
1. Push this code to GitHub.
2. Connect the repository to Vercel.
3. Add `NOTION_API_KEY` and `NOTION_DATABASE_ID` to the Environment Variables section in the Vercel dashboard.

## 📞 Update Ordering Links
- **WhatsApp Number**: Update in `components/floating-action-bar.tsx` and `components/whatsapp-cart.tsx`.
- **Foodpanda Link**: Update the `href` in `components/floating-action-bar.tsx`.

Built with ❤️ for NOSH.
