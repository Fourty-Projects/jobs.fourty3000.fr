export interface Job {
  title: string;
  type: string;
  url: string;
  tallyUrl?: string;
  emoji?: string;
}

export interface Company {
  name: string;
  description: string;
  websiteUrl: string;
  logo: string;
  logoAlt: string;
  jobs: Job[];
  noJobsMessage?: string;
}

export const companies: Company[] = [
  {
    name: "YouTube",
    description: "Les chaînes YouTube de Fourty3000 et de ses partenaires",
    websiteUrl: "https://www.youtube.com/@fourty3000",
    logo: "https://yt3.googleusercontent.com/q-bj-uX-NppyMzHYi97Tf_u_Hr-o5RMIsiL_gM6GjtwxMLD-ER09pfeFy9MkPvApMpO12g1Vrg=s160-c-k-c0x00ffffff-no-rj",
    logoAlt: "Fourty3000 YouTube Logo",
    jobs: [
      // {
      //   title: "Recrutement monteur",
      //   type: "Bénévole",
      //   url: "/postuler/recrutement-monteur",
      //   tallyUrl: "https://tally.so/r/w4qPZA",
      //   emoji: "\u{1F4BB}",
      // },
      {
        title: "Modérateurs YouTube/Twitch/Discord",
        type: "Bénévole",
        url: "/postuler/moderateur-youtube-twitch",
        tallyUrl: "https://tally.so/r/Z95D1V",
        emoji: "\u2696\uFE0F",
      },
      {
        title: "Modérateurs Reddit",
        type: "Bénévole",
        url: "/postuler/moderateur-reddit",
        tallyUrl: "https://tally.so/r/LD1k2O",
        emoji: "\u2696\uFE0F",
      },
    ],
  },
  {
    name: "NationsEmpire",
    description:
      "Notre serveur Minecraft semi-RP sur le thème de la guerre et de la diplomatie.",
    websiteUrl: "https://nationsempire.eminium.ovh",
    logo: "https://nationsempire.eminium.ovh/storage/img/logo.png",
    logoAlt: "NationsEmpire Logo",
    jobs: [
      {
        title: "Découvrez toutes nos offres",
        type: "Bénévole",
        url: "https://nationsempire.eminium.ovh/jobs",
      },
    ],
  },
  {
    name: "WardenAgency",
    description:
      "Notre projet de gestion de talents dans le milieu de l'influence",
    websiteUrl: "https://warden-agency.fourty3000.fr",
    logo: "https://warden-agency.fourty3000.fr/_next/image?url=%2Flogo.png&w=3840&q=75",
    logoAlt: "WardenAgency Logo",
    jobs: [],
    noJobsMessage: "Pas de poste ouvert pour le moment",
  },
  // {
  //   name: "Eminium",
  //   description: "Notre serveur PVP Faction Moddé sur Minecraft",
  //   websiteUrl: "https://eminium.ovh",
  //   logo: "https://eminium.ovh/storage/img/eminium-logo.png",
  //   logoAlt: "Eminium Logo",
  //   jobs: [
  //     {
  //       title: "Développeur JAVA",
  //       type: "Bénévole",
  //       url: "https://jobs.paladium-pvp.fr/formulaire/developpeur-java",
  //       emoji: "\u{1F4BB}",
  //     },
  //     {
  //       title: "Builder",
  //       type: "Bénévole",
  //       url: "https://jobs.paladium-pvp.fr/formulaire/builder",
  //       emoji: "\u{1F9CA}",
  //     },
  //     {
  //       title: "Graphic Model Maker",
  //       type: "Bénévole",
  //       url: "https://jobs.paladium-pvp.fr/formulaire/graphic-model-maker",
  //       emoji: "\u{1F58C}\uFE0F",
  //     },
  //     {
  //       title: "Conception Game Design",
  //       type: "Bénévole",
  //       url: "https://jobs.paladium-pvp.fr/formulaire/conception-game-design",
  //       emoji: "\u270D\uFE0F",
  //     },
  //   ],
  // },
];

export function findJobBySlug(slug: string): Job | undefined {
  for (const company of companies) {
    const job = company.jobs.find((j) => j.url === `/postuler/${slug}`);
    if (job) return job;
  }
  return undefined;
}

export function findCompanyByJobSlug(slug: string): Company | undefined {
  return companies.find((c) =>
    c.jobs.some((j) => j.url === `/postuler/${slug}`)
  );
}

/** Slugs de toutes les pages de postulation gérées en interne (hors liens externes). */
export function getInternalSlugs(): string[] {
  return companies
    .flatMap((c) => c.jobs)
    .map((j) => j.url.match(/^\/postuler\/([^/]+)$/)?.[1])
    .filter((s): s is string => Boolean(s));
}
