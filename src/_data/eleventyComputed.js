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
export default {
  layout: (data) => {
    if (data.layout) return data.layout; // explicit frontmatter wins
    const stem = (data.page && data.page.filePathStem) || "";
    if (/^\/\d{4}\//.test(stem)) return `layouts/${data.type || "post"}.njk`;
    return undefined;
  },
};
