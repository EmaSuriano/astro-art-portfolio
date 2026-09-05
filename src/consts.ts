export const ROUTES = [
  { href: "/", label: "Art" },
  { href: "/about", label: "About" },
] as const;

// Icons from https://icon-sets.iconify.design
// Plausible fictional profiles for the theme-submission persona (Alex Rivera).
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
  subtitle:
    "Digital paintings and illustrations exploring color, light, and quiet worlds.",
  role: "Digital artist",
  contact: "mailto:hello@alexrivera.art",
  contactLabel: "Say hello",
  avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=AlexRivera",
  about: `Alex Rivera is a digital artist working in illustration and mixed media — layering texture, saturated color, and soft atmosphere into scenes that feel half-remembered. This gallery collects recent work spanning portraiture, landscape, and speculative worlds.`,
} as const;

export const SEO_INFO = [
  {
    name: "description",
    content:
      "Digital art portfolio of Alex Rivera — illustration, mixed media, and quiet painted worlds.",
  },
  {
    name: "keywords",
    content: "Alex Rivera, digital art, illustration, mixed media, art portfolio",
  },
  { name: "author", content: PERSONAL_INFO.name },
];
