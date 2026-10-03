# Yehin Shado Hotel

Production website for Yehin Shado Hotel — a boutique hotel and Moroccan-inspired wellness spa in Jemo 1, Addis Ababa.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion, React Hook Form, Zod, Resend

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Forms send email only when `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, and `BOOKING_EMAIL_TO` are set. Without them, the API returns a calm 503 so the rest of the site still runs.

## Pages

- `/` Home
- `/rooms` Rooms
- `/spa` Spa & Wellness
- `/dining` Restaurant & Bar
- `/contact` Inquiry + booking (tabs)

Privacy and Terms open as footer modals. Copy lives in `/data`. Images are listed in `data/gallery.ts`.

## Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel (default Next.js preset — no build overrides).
3. Add environment variables from `.env.example`.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
5. Verify a sending domain in Resend. `onboarding@resend.dev` only delivers to the Resend account email.

## Notes

- No live payments — inquiries only.
- Testimonials and legal copy are marked `[PLACEHOLDER — replace with legal review]`.
- Dining stills were not in the client folder; those sections use a green placeholder plus the celebration video until restaurant/bar photos are added to `public/images/yihen-shado/dining/` and `data/gallery.ts`.
