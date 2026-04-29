const BASE_URL = "https://bizrea.singgroup.biz";

export function GET(): Response {
  const robotsTxt = `# Robots.txt for Bizrea

User-agent: *
Allow: /
Disallow: /api/

# AI クローラー(LLMO 対応)— すべて許可
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
