---
title: 16:9 screenshots
type: post
tags: [screenshots, wezterm, nix-darwin, macos]
description: How I set up a Safari window and terminal to get screenshots that are exactly 16:9 and all look the same.
date: 2026-09-04T13:24:15+07:00
---

Here's how I make a Safari window 1280x720 (for some reason you have to set it a bit bigger, probably the Mac shadow or something like that).

```sh
osascript -e 'tell application "Safari" to set bounds of front window to {100, 100, 1380, 820}'
```

That gets me screenshots at exactly 16:9.

For terminal screenshots I use WezTerm with the Tokyo Night theme. It has its own config (still tweaking it, but it'll end up in my nix-darwin config, which I'm leaning toward making public).

That way all the screenshots come out the same, lined up like a ruler, just how I like it.
