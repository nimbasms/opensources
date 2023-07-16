const CONFIG = {
  // profile setting (required)
  profile: {
    name: "nimbasms",
    image: "/apple-touch-icon.png",
    role: "opensource developer",
    bio: "Nimba SMS.",
    email: "morethanmin.dev@gmail.com",
    linkedin: "nimbasms",
    github: "nimbasms",
    instagram: "",
  },
  projects: [
    {
      name: `nimbasms`,
      href: "https://github.com/nimbasms/nimbasms",
    },
  ],
  // blog setting (required)
  blog: {
    title: "nimbasms",
    description: "welcome to nimbasms!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://nimbasms.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Opensource", "nimbasms"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production",
}

module.exports = { CONFIG }