export default function (eleventyConfig) {
  // Make bare URLs in post text clickable without rewriting the source (posts
  // keep links exactly as written, e.g. a plain https://... stays plain text in
  // Markdown but renders as a link).
  eleventyConfig.amendLibrary("md", (md) => md.set({ linkify: true }));

  // Static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  // GitHub Pages custom domain
  eleventyConfig.addPassthroughCopy("src/CNAME");
  // Post images live in the page bundle (src/YYYY/Mon/DD/slug/). URL === path,
  // so they land next to the post output with no remapping.
  eleventyConfig.addPassthroughCopy("src/[0-9][0-9][0-9][0-9]/**/*.png");
  eleventyConfig.addPassthroughCopy("src/[0-9][0-9][0-9][0-9]/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/[0-9][0-9][0-9][0-9]/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/[0-9][0-9][0-9][0-9]/**/*.gif");

  const asDate = (value) => (value instanceof Date ? value : new Date(value));

  // "January 14, 2026" — formatted in UTC so the calendar day never shifts
  eleventyConfig.addFilter("readableDate", (value) =>
    asDate(value).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );

  // "May 25" — day within a year group on the home / archive stream
  eleventyConfig.addFilter("monthDay", (value) =>
    asDate(value).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    })
  );

  // Date parts for legacy-URL redirect generation
  eleventyConfig.addFilter("dateYear", (value) => asDate(value).getUTCFullYear());
  eleventyConfig.addFilter("dateMonthNum", (value) =>
    String(asDate(value).getUTCMonth() + 1).padStart(2, "0")
  );

  // RFC 3339 timestamp for the Atom feed
  eleventyConfig.addFilter("rfc3339", (value) => asDate(value).toISOString());

  // "example.com" — bare host for linkblog attribution
  eleventyConfig.addFilter("hostname", (url) => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  });

  // Blog-only site: strip dead internal cross-links (e.g. ../../cards/*.md)
  // that point to content types this site doesn't publish. Keep the link text.
  eleventyConfig.addTransform("stripDeadMdLinks", (content) =>
    content.replace(/<a href="[^"]*\.md(?:#[^"]*)?"[^>]*>([\s\S]*?)<\/a>/g, "$1")
  );

  // All posts live under a year-first page-bundle path: src/YYYY/Mon/DD/slug/.
  // The type (post / link / quote) is a frontmatter field, not a folder.
  const POST_GLOB = "src/[0-9][0-9][0-9][0-9]/**/index.md";

  // Newest first
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob(POST_GLOB).sort((a, b) => b.date - a.date)
  );

  // Grouped archives. Each entry carries the labels the archive templates and
  // permalinks need (numeric year/day + short month name matching the path).
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const grouped = (api, keyFn, fields) => {
    const posts = api.getFilteredByGlob(POST_GLOB).sort((a, b) => b.date - a.date);
    const groups = [];
    const index = new Map();
    for (const post of posts) {
      const key = keyFn(post.date);
      let group = index.get(key);
      if (!group) {
        group = { ...fields(post.date), posts: [] };
        index.set(key, group);
        groups.push(group);
      }
      group.posts.push(post);
    }
    return groups;
  };

  eleventyConfig.addCollection("postsByYear", (api) =>
    grouped(api, (d) => d.getUTCFullYear(), (d) => ({ year: d.getUTCFullYear() }))
  );

  eleventyConfig.addCollection("postsByMonth", (api) =>
    grouped(
      api,
      (d) => `${d.getUTCFullYear()}-${d.getUTCMonth()}`,
      (d) => ({ year: d.getUTCFullYear(), mon: MONTHS[d.getUTCMonth()] })
    )
  );

  eleventyConfig.addCollection("postsByDay", (api) =>
    grouped(
      api,
      (d) => `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`,
      (d) => ({ year: d.getUTCFullYear(), mon: MONTHS[d.getUTCMonth()], day: d.getUTCDate() })
    )
  );

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    // Don't run post markdown through the template engine — content is untrusted
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
