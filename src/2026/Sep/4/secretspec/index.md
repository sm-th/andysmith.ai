---
title: SecretSpec
type: link
link: https://secretspec.dev
tags: [secretspec, secrets-management, nix, cachix, devenv]
description: A quick look at cachix's SecretSpec, a tool for declaring secrets without keeping them in the repo.
date: 2026-09-04T22:48:41+07:00
---

<a class="lightbox" href="https://files.andysmith.ai/img/5dae3836ede00b432f69e2276a0bd280da2d9feb/secretspec.png"><img src="https://files.andysmith.ai/img/5dae3836ede00b432f69e2276a0bd280da2d9feb/secretspec.webp" alt="SCR-20260904-rnrc" width="1280" height="765" loading="lazy" decoding="async"></a>

A tool from [cachix](https://github.com/cachix) that I'm slowly moving all my projects over to.

It lets you declare your secrets without keeping them in the repo.

So it's kind of a replacement for .env.example and .env at the same time.

You can describe pretty flexibly which environment secrets an app needs (including overlap, like one of two options: DATABASE_URI, or the values passed separately).

And you can store the actual values wherever you want. It supports 30+ providers for that. Locally that might be 1Password or the system keychain, and in production HashiCorp Vault or Google Secrets.

It's integrated into devenv.

I was hoping it was integrated into NixOS too, so I could use it for deployment instead of [sops-nix](https://github.com/mic92/sops-nix), but that's not possible yet. I'm sure they'll get there in time and you'll be able to describe secrets for servers the same way you do for apps.
