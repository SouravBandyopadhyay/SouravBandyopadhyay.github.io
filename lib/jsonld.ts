import { PERSON_DESCRIPTION, PUBLIC_EMAIL } from "@/lib/agent-content";
import { getSiteUrl } from "@/lib/site";

export function getJsonLdGraph() {
  const siteUrl = getSiteUrl();
  return [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Sourav Bandyopadhyay",
      description: PERSON_DESCRIPTION,
      url: siteUrl,
      image: `${siteUrl}/profile_img.jpg`,
      jobTitle: "Software Developer",
      email: PUBLIC_EMAIL,
      sameAs: [
        "https://github.com/SouravBandyopadhyay",
        "https://www.linkedin.com/in/souravbandyopadhyay/",
        "https://corecraft.substack.com/",
        "https://leetcode.com/u/Sourav_280598/",
        "https://uiverse.io/profile/SouravBandyopadhyay",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Sourav Bandyopadhyay — Portfolio",
      url: siteUrl,
      description: "Portfolio of Sourav Bandyopadhyay, full-stack software developer.",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ];
}
