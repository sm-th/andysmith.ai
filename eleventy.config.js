export default function (eleventyConfig) {
  // Make bare URLs in post text clickable without rewriting the source (posts
  // keep links exactly as written, e.g. a plain https://... stays plain text in
  // Markdown but renders as a link).
  eleventyConfig.amendLibrary("md", (md) => md.set({ linkify: true }));

  // Static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  // GitHub Pages custom domain
  eleventyConfig.addPassthroughCopy("src/CNAME");
  // Blog post images (page-bundle relative images + og cards)
  eleventyConfig.addPassthroughCopy("src/blog/**/*.png");
  eleventyConfig.addPassthroughCopy("src/blog/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/blog/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/blog/**/*.gif");

  // "January 14, 2026" — formatted in UTC so the calendar day never shifts
  eleventyConfig.addFilter("readableDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  // Blog-only site: strip dead internal cross-links (e.g. ../../cards/*.md)
  // that point to content types this site doesn't publish. Keep the link text.
  eleventyConfig.addTransform("stripDeadMdLinks", (content) =>
    content.replace(/<a href="[^"]*\.md(?:#[^"]*)?"[^>]*>([\s\S]*?)<\/a>/g, "$1")
  );

  // "May 25" — day within a year group on the home archive
  eleventyConfig.addFilter("monthDay", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  // Post locations: legacy posts under src/blog/**, new posts under a
  // year-first path (src/2026/Aug/11/<slug>/) for short, day-level URLs.
  const POST_GLOBS = [
    "src/blog/**/index.md",
    "src/[0-9][0-9][0-9][0-9]/**/index.md",
  ];

  // Newest first
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob(POST_GLOBS).sort((a, b) => b.date - a.date)
  );

  // Same posts, grouped into [{ year, posts }] in descending year order
  eleventyConfig.addCollection("postsByYear", (api) => {
    const posts = api
      .getFilteredByGlob(POST_GLOBS)
      .sort((a, b) => b.date - a.date);
    const groups = [];
    for (const post of posts) {
      const year = post.date.getUTCFullYear();
      let group = groups[groups.length - 1];
      if (!group || group.year !== year) {
        group = { year, posts: [] };
        groups.push(group);
      }
      group.posts.push(post);
    }
    return groups;
  });

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    // Don't run post markdown through the template engine — content is untrusted
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
