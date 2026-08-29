export const ROUTES = [
  { href: "/", label: "Art" },
  { href: "/about", label: "About" },
] as const;

// Icons from https://icon-sets.iconify.design
export const SOCIAL = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: "mdi:twitter",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: "mdi:linkedin",
  },
  {
    label: "Website",
    href: "https://example.com",
    icon: "mdi:web",
  },
] as const;

export const PERSONAL_INFO = {
  name: "Alex Rivera",
  title: "Digital Art Portfolio",
  subtitle: "A showcase of original digital artwork",
  role: "Digital Artist",
  contact: "mailto:hello@example.com",
  avatar:
    "https://api.dicebear.com/9.x/lorelei/svg?seed=AlexRivera",
  about: `A digital artist exploring color, texture, and form through illustration and mixed media.
    This portfolio is a sample gallery for the Astro Art theme — swap these details for your own
    name, bio, and work when you use the theme.`,
} as const;

export const SEO_INFO = [
  {
    name: "description",
    content: "A digital art portfolio theme built with Astro",
  },
  { name: "keywords", content: "Art portfolio, Digital art, gallery" },
  { name: "author", content: PERSONAL_INFO.name },
];
