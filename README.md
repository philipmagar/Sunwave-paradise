# Sunwave Paradise 🌴

So, here's the deal with this project. I didn't want to build just another "cool" looking template that breaks the moment you try to actually use it. I wanted something that felt like a real business, specifically tailored for the hospitality scene in Kathmandu where Sunwave Paradise is based. It is not true booking website, it is just a mockup of a booking website. There exist no such place as sunwaveparadise my imagination  only .

### The Vision
The goal was simple: make it look expensive (because luxury sells) but keep the booking process dead simple. Most local customers in Nepal don't want to navigate a 10-step checkout; they want to see the room, see the price, and hit someone up on WhatsApp. That's why the WhatsApp button is basically the heart of the site.

### The Tech & The Struggles (Honest Version)
I went with **React 19** and **Vite 7**. It’s fast.
*   **Decision: Tailwind v4 @theme**: I decided to skip the old `tailwind.config.js` and move everything into native CSS using the new `@theme` block. It felt cleaner and more modern, but it meant wrestling with PostCSS configs for a bit until the `@tailwindcss/postcss` plugin behaved. 
*   **Trade-off: Direct Booking vs. Backend**: I chose to keep the booking UI as a "mock" for now. Why? Because connecting a generic booking API usually feels clunky. It's better to have a rock-solid UI first that captures intent, and then the owner can decide if they want a custom backend or if they just want that data sent to their email/phone.
*   **Performance**: I obsessed a bit over images. Hotel sites are basically big picture books. If those photos don't lazy-load or if they aren't optimized, the mobile experience (where 80% of users are) goes to zero. I used Unsplash and Picsum for placeholders, but honestly, real high-res photos are the only way this site keeps its "luxury" status.

### Decisions I Made
**Clean Components**: The room data is centralized. If Sunwave Paradise adds a new penthouse tomorrow, you update one JSON file and the whole site (Home, Rooms, Detail) updates. No hardcoding $50 prices everywhere.

### Lessons Learned
Migrating to the new styling patterns in Vite 7 takes a second to get used to, but once it's set up, it's so much faster than the old way. Also, never underestimate a good "ScrollToTop" component—it's a small detail, but without it, navigating long room lists on mobile is a nightmare.

---

## Getting Started

1.  Clone it.
2.  `npm install` (I used `--legacy-peer-deps` because React 19 is still new to some older helmet packages).
3.  `npm run dev`

Go build something awesome.
