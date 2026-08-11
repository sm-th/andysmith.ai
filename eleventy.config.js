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

  // Dates/times render in the POST's own timezone (its `timezone` frontmatter —
  // the author's zone when written), so the day and time are the author's local
  // values, matching the post's URL/path day. Falls back to UTC for posts with
  // no timezone. The client-side enhancement (assets/time.js) later re-localizes
  // the *time* into each reader's own zone on hover / as "N ago".
  // "January 14, 2026"
  eleventyConfig.addFilter("readableDate", (value, zone) =>
    asDate(value).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: zone || "UTC",
    })
  );

  // "May 25" — day within a year group on the home / archive stream
  eleventyConfig.addFilter("monthDay", (value, zone) =>
    asDate(value).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: zone || "UTC",
    })
  );

  // "7:57 am +07" — author-local time with a zone label (the no-JS fallback)
  eleventyConfig.addFilter("time", (value, zone) =>
    asDate(value)
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: zone || "UTC",
        timeZoneName: zone ? "shortOffset" : undefined,
      })
      .toLowerCase()
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

  // First N items of an array (e.g. "Recent posts" in the sidebar)
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

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
  // Group by the post's LOCAL day, taken from its year-first path
  // (src/YYYY/Mon/D/slug/) — that path is the author's local day, so archives
  // match the post URLs and never drift to a UTC day. Legacy posts without the
  // path fall back to the date's UTC parts.
  const dayParts = (post) => {
    const m = (post.filePathStem || "").match(/\/(\d{4})\/([A-Za-z]{3})\/(\d{1,2})\//);
    if (m) return { year: Number(m[1]), mon: m[2], day: Number(m[3]) };
    const d = post.date;
    return { year: d.getUTCFullYear(), mon: MONTHS[d.getUTCMonth()], day: d.getUTCDate() };
  };
  const grouped = (api, keyFn, fields) => {
    const posts = api.getFilteredByGlob(POST_GLOB).sort((a, b) => b.date - a.date);
    const groups = [];
    const index = new Map();
    for (const post of posts) {
      const p = dayParts(post);
      const key = keyFn(p);
      let group = index.get(key);
      if (!group) {
        group = { ...fields(p), posts: [] };
        index.set(key, group);
        groups.push(group);
      }
      group.posts.push(post);
    }
    return groups;
  };

  eleventyConfig.addCollection("postsByYear", (api) =>
    grouped(api, (p) => p.year, (p) => ({ year: p.year }))
  );

  eleventyConfig.addCollection("postsByMonth", (api) =>
    grouped(api, (p) => `${p.year}-${p.mon}`, (p) => ({ year: p.year, mon: p.mon }))
  );

  eleventyConfig.addCollection("postsByDay", (api) =>
    grouped(api, (p) => `${p.year}-${p.mon}-${p.day}`, (p) => ({ year: p.year, mon: p.mon, day: p.day }))
  );

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    // Don't run post markdown through the template engine — content is untrusted
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
