// Mirrors the basePath logic in next.config.ts, so plain <img>/<a> asset
// paths (which, unlike next/link, are not rewritten automatically) resolve
// correctly when the site is served from a subpath, e.g. GitHub Pages at
// /personal-website/.
export const BASE_PATH = process.env.GITHUB_PAGES_BUILD === "true" ? "/personal-website" : "";
