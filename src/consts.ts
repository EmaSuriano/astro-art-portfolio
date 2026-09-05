export const ROUTES = [
  { href: "/", label: "Art" },
  { href: "/about", label: "About" },
] as const;

// Icons from https://icon-sets.iconify.design
// Demo social destinations for the theme preview persona (Alex Rivera).
export const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/alexrivera.studio",
    icon: "mdi:instagram",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/alexrivera",
    icon: "mdi:behance",
  },
  {
    label: "Website",
    href: "https://alexrivera.studio",
    icon: "mdi:web",
  },
] as const;

export const PERSONAL_INFO = {
  name: "Alex Rivera",
  title: "Alex Rivera",
  subtitle: "Digital illustration and mixed-media studies",
  role: "Digital artist",
  contact: "mailto:studio@alexrivera.studio",
  avatar:
    "https://api.dicebear.com/9.x/lorelei/svg?seed=AlexRiveraStudio&backgroundColor=b6e3f4,c0aede,d1d4f9",
  about: `I make digital illustrations and mixed-media pieces that sit somewhere between quiet still lifes and saturated dreamscapes.
    Most of the work starts as charcoal or ink, then moves into color studies on screen — texture, light, and a little narrative tension.
    This gallery collects recent prints and commissions; for availability and collabs, reach out at studio@alexrivera.studio.`,
} as const;

export const SEO_INFO = [
  {
    name: "description",
    content:
      "Digital art portfolio of Alex Rivera — illustration, mixed media, and color studies.",
  },
  {
    name: "keywords",
    content: "Alex Rivera, digital art, illustration, mixed media, art portfolio",
  },
  { name: "author", content: PERSONAL_INFO.name },
];
