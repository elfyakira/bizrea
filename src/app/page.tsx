import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/seo";
import { seo } from "@/lib/site";

export const metadata = pageMetadata({
  description: seo.defaultDescription,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
