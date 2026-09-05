import type { NextConfig } from "next";

// Only the GitHub Pages workflow sets this. `vinext` (the Cloudflare Worker
// build used by `npm run build`) also reads `output`, so static-export mode
// must stay opt-in — otherwise it would silently change that deployment too.
const isGithubPagesBuild = process.env.GITHUB_PAGES_BUILD === "true";

const nextConfig: NextConfig = {
  basePath: isGithubPagesBuild ? "/personal-website" : "",
  ...(isGithubPagesBuild ? { output: "export" as const, trailingSlash: true } : {}),
};

export default nextConfig;
