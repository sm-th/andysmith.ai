---
title: Setting up an open-source reading stack
type: post
tags: [reading, self-hosting, open-source, zotero, bookorbit]
description: Trying open-source backends and an iOS reader to keep PDFs, web pages, and books in one place, with synced annotations and reading stats.
date: 2026-08-15T17:15:46+07:00
---

I try to read not just through agents, but the original sources too.

I want to read everything in one place: PDF papers, web pages, books.

I used to do all of this in Zotero (annotations too), but the problem is the server is closed and paid, and WebDAV plays badly with the API. I never managed to give agents proper access to add a new source over WebDAV.

What I want is simple to state: an open-source backend to store the library (with an API for adding sources, plus annotations and reading stats), and a nice iOS client for the actual reading, with offline support.

Turned out to be a bit trickier than that.

First I set up Kavita (https://github.com/Kareadita/Kavita). It does OPDS, so a ton of reader apps work with it, but it doesn't sync reading progress or annotations, so it's out. I want to see the stats.

Then I tried BookOrbit (https://github.com/bookorbit/bookorbit). Pretty much the same features, but it can also sync progress and annotations over the KoReader protocol. Paired with the Readest reader, it does what I need. It can also read text out loud (it calls Azure's AI, though I still haven't figured out who's paying for that. It's free to use.)
