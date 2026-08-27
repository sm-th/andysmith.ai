---
title: Tauri 2.0
type: link
link: https://tauri.app/
tags: [tauri, electron, desktop-app, rust, web-development]
description: A quick look at Tauri, a lighter alternative to Electron for building desktop and mobile apps from web code.
date: 2026-08-26T19:22:01+07:00
---

<a class="lightbox" href="https://media.andysmith.ai/original/1X/457fe89902665784622c19b48488fe40d71e67ae.jpeg"><img src="https://media.andysmith.ai/optimized/1X/457fe89902665784622c19b48488fe40d71e67ae_2_690x372.jpeg" alt="image" width="690" height="372" loading="lazy" decoding="async"></a>

Tauri is a tool for turning web apps into desktop (and mobile) apps. It's an alternative to Electron.

The upside is size and speed. Tauri doesn't ship Chrome and a whole runtime with every app. It uses the system WebView instead.

One important difference: the backend (the local part of the app, not a remote one) is best written in Rust. You can wire in other languages, but it costs you performance. For most little apps you don't need a specialized backend anyway, so JS/TS is plenty.

I ran into Tauri while poking around [Buzz](https://andysmith.ai/2026/Aug/21/buzz-a-hive-mind-communication-platform/), which uses it for its desktop (and mobile) app.

Looks like 1Password uses Tauri too (at least they're listed as a sponsor on the homepage).

It does feel genuinely faster. I didn't compare resource usage, since comparing different apps isn't really fair.
