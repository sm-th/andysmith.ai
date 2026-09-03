---
title: How and why to keep agent logs
type: post
tags: [ai-agents, logging, observability, claude-code, self-hosting]
description: Why I think agent conversation logs are worth keeping, and how I settled on compressing and encrypting session files into R2.
date: 2026-09-03T20:01:43+07:00
---

Once again I keep landing on the same thought: one way or another, the conversations with agents are the key artifact of this era.

From the logs you can pull out thinking patterns, mistakes, ideas. It's raw material for self-reflection. In the end, I believe the audit of the future is an audit of thinking, not of results (meaning a pull request should come with the log of the conversation with the agents).

It's important to start saving them as early as possible.

There are two ways to do it:

1. Save the interactions with the LLM (LangFuse and the like)
2. Save some kind of processed material based on the sessions
3. Save the Claude Code sessions (or equivalents)

The first one: LLM logs are harder to collect. They don't have the agents' internal operations or the tool call results (or they do, but in a sanitized form). They'll also have duplication (since the harness sends the whole conversation every time), and you'll have to clean that up.

The second is the most obvious: ask the agent to save some summary, a digest of the sessions. It might work, it might not. The problem is that when you're collecting, you don't know how you'll use the data, so you can't guarantee you've collected everything you need. Maybe later you'll want some other kind of statistics.

So I lean toward collecting and saving all the Claude Code logs (or in my case omp, or whatever I use later). And not just the agents I talk to, but the ones my agents talk to.

The next question is how to store this data.

For a second I thought the communication platform I'm building on Discourse (or Buzz/Zulip) would be enough: https://andysmith.ai/2026/Aug/31/discourse-as-a-platform-for-an-ai-native-company/, https://andysmith.ai/2026/Sep/1/rethinking-the-vision-for-reflection-castle/

But I noticed almost right away that this is option 2. Only part of the work result makes it into the agent's comment, not all of it. So something gets filtered out, and that something might turn out to be really important later.

So I decided to just compress, encrypt, and drop the session files into R2 (since it's append only, I can just keep appending the files that changed since the last write).

This seems to echo the experience lake: https://andysmith.ai/2026/Aug/19/an-experience-lake-and-keeping-personal-data-safe/.

But it's not quite that either. The experience lake should hold only my experience, and the agents aren't only my experience (given that most of the agents are spawned by other agents, not by me).

So this layer needs to be separate, but it can (and should) be used to build the experience lake.
