// Global computed data — applied to every template in the site.
//
// The content-type system lives here: any page whose SOURCE file sits under a
// year folder (src/YYYY/...) is a post, and gets a layout chosen from its
// `type` field. `type` defaults to "post", so existing posts need no frontmatter
// change. Adding a new content type is: create _includes/layouts/<type>.njk,
// add a branch to _includes/stream.njk, and write posts with `type: <type>`.
//
// Non-post templates (home, archives, feed, redirects) don't match the guard,
// so their own `layout`/permalink is left untouched.
const isPostStem = (data) =>
  /^\/\d{4}\//.test((data.page && data.page.filePathStem) || "");

export default {
  layout: (data) => {
    if (data.layout) return data.layout; // explicit frontmatter wins
    if (isPostStem(data)) return `layouts/${data.type || "post"}.njk`;
    return undefined;
  },
  // A post is any template whose SOURCE sits under a year folder (src/YYYY/...).
  // Computed here so it lives in the top-level cascade and reaches base.njk — a
  // layout's own `isPost` front matter doesn't propagate to parent layouts.
  isPost: (data) => isPostStem(data),
};
