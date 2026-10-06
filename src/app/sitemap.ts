import type { MetadataRoute } from "next";
import { companies } from "@data/companies";

const BASE_URL = "https://www.bizrea.net";

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified はアクセスのたびに「今日」になると Google に信用されなくなるため指定しない
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/magazine`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/video`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const companyPages: MetadataRoute.Sitemap = companies
    .filter((c) => !c.hidden)
    .map((c) => ({
      url: `${BASE_URL}/cases/${c.id}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticPages, ...companyPages];
}
