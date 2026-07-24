export default function (eleventyConfig) {
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

  // Newest first
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/blog/**/index.md").sort((a, b) => b.date - a.date)
  );

  // Same posts, grouped into [{ year, posts }] in descending year order
  eleventyConfig.addCollection("postsByYear", (api) => {
    const posts = api
      .getFilteredByGlob("src/blog/**/index.md")
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
