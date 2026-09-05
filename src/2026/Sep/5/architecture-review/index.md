---
title: Architecture review
type: post
tags: [ai-agents, software-architecture, code-review, adr, architecture-testing]
description: How to keep quality high when agents write most of the code, by moving human review up to the architecture level.
date: 2026-09-05T18:07:02+07:00
---

Agents do things, and we don't always understand what exactly.

Human teams can't keep up anymore. There's too much to understand and approve every change by hand.

So how do you guarantee quality under these conditions?

The answer is clear. Move the checking up to the higher levels of the system, and trust the LLM with the lower ones.

A human makes the architectural decisions. A human manually approves the ADRs and the architecture tests the LLM writes. Those tests run on every commit, and they can't be changed without a human explicitly involved.

Better yet, generate prose from those tests and approve the prose. Literally a few sentences for the whole system.

That way the human stays irreplaceable for the core architectural decisions, while the routine ones can be made and built by agents. And any agent decision along the lines of "I decided to do it all differently" gets rejected automatically, no appeal.
