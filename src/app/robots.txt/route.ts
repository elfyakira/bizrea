const BASE_URL = "https://www.bizrea.net";

export function GET(): Response {
  const robotsTxt = `# Robots.txt for Bizrea

User-agent: *
Allow: /
Disallow: /api/

# AI クローラー(LLMO 対応)— すべて許可
# 個別に User-agent を指定したクローラーは * のルールを引き継がないため、/api/ の除外もここに書く
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: OAI-SearchBot
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: Claude-Web
User-agent: Google-Extended
User-agent: anthropic-ai
User-agent: Applebot-Extended
User-agent: PerplexityBot
User-agent: Bytespider
Allow: /
Disallow: /api/

Sitemap: ${BASE_URL}/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
