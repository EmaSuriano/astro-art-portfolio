export const ROUTES = [
  { href: "/", label: "Art" },
  { href: "/about", label: "About" },
] as const;

// Icons from https://icon-sets.iconify.design
export const SOCIAL = [
  {
    label: "Twitter",
    href: "https://twitter.com/EmaSuriano",
    icon: "mdi:twitter",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emanuel-suriano/",
    icon: "mdi:linkedin",
  },
  {
    label: "Website",
    href: "https://emasuriano.com",
    icon: "mdi:web",
  },
] as const;

export const PERSONAL_INFO = {
  name: "Astro Art",
  title: "Galactic Canvas 🌌",
  subtitle: "Where the Universe Meets Digital Art",
  role: "Cosmic Digital Artist",
  contact: "mailto:galactic.canvas@example.com",
  avatar:
    "https://github.com/user-attachments/assets/a543b428-3c52-421d-a5d5-32bcd97b1e6e",
  about: `Step into Galactic Canvas, a realm where the cosmos and creativity collide.
    Using the power of Astro.js, we bring you an interstellar collection of digital art
    that transcends the ordinary. Embark on a journey through our curated gallery
    and experience the future of art in the digital age.`,
} as const;

export const SEO_INFO = [
  {
    name: "description",
    content: "Art portfolio made by Ema Suriano in his free time",
  },
  { name: "keywords", content: "Art portfolio, Digital art, gallery" },
  { name: "author", content: PERSONAL_INFO.name },
];
