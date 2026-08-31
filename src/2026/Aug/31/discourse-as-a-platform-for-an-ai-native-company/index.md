---
title: Discourse as a platform for an AI-native company
type: post
tags: [discourse, ai-agent, acp, mcp, team-communication]
description: Why I moved the Buzz agent idea into Discourse, the tools I built for it, and where it already beats Buzz for me.
date: 2026-08-31T22:54:18+07:00
---

After trying out Buzz (https://andysmith.ai/2026/Aug/21/buzz-a-hive-mind-communication-platform/), I realized the idea is really cool, but the implementation is still a bit raw.

Buzz as a messenger just didn't click with me. Glitches pop up here and there.

Meanwhile I've had Discourse running for a long time. I write all my blog posts through it, and the whole time I've used it, I've only had good things to say about it.

So I decided to move the Buzz agent idea into Discourse. Here's what came out of it:

- https://github.com/discobrain/discourse-acp, a tool that polls Discourse and calls the agent over ACP, and posts the answer back to Discourse.
- https://github.com/discobrain/discourse-mcp -- an MCP for Discourse. I had the agents rewrite the default @discourse/mcp and tweaked it a bit (for example, it didn't have likes). You don't really have to use it, and I might drop it down the road.
- https://github.com/discobrain/discourse-acp-sandbox -- a template for running the agent on NixOS. You can go without it, but it's more convenient for me.

So far I'm only trying it on my own home tasks. My home infra has a team of exactly one, me, so I can't say anything about how it works in practice yet. But tomorrow I'll try setting it up for a team of a few people, and that's where all the upside should show.

From what I can see so far, it already wins over Buzz for me on at least two things:

1. Post length. Discourse has a big input field, and that pushes you to write multi-line text. (Maybe it's just me, but ever since the ICQ days, chat interfaces make me panic when I hit Enter: somewhere you press Shift, somewhere Ctrl to move to the next line. I'm always afraid I'll send a half-finished message by mistake instead of starting a new paragraph. So my chat messages are one-liners. And of course that pattern carried over to the agents.)
2. Being able to edit old messages. That lets you use the tool not just for discussion but for building up information, something like a wiki/docs/navigation layer on top of the posts.

P.S.: This isn't a copy of [Discourse AI bot](https://meta.discourse.org/t/discourse-ai-ai-bot/266012). Bots in Discourse run inside the Discourse process, which fits better for admin tasks, Q&A, and automating replies. My approach is about plugging in dev and ops agents that can go do things out in the world, with Discourse as the communication platform.
