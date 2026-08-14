---
title: A stream of reactions as a user profile
type: post
tags: [data-ownership, blockchain, zk-rollup, llm, personalization]
description: An idea for treating your stream of reactions to content as a personal, self-owned interest profile you could store on a blockchain and train an LLM on.
date: 2026-08-14T12:50:43+07:00
---

Thought through an idea from https://andysmith.ai/2026/Aug/13/training-a-personal-llm-on-what-you-actually-do/ a bit more.

The thing you store and process isn't an "event" or an "active action." It's a reaction to some stimulus. The stimulus here is context, a description of the state of the world around the user. The reaction is what the person does in that context.

For example, the context could be a specific social media post, a song, a YouTube video, or even some situation in the real world. The reaction: scrolled past it in 0.1 seconds, turned it off after 2 seconds, skipped ahead, liked it, wrote a comment. Ideally you'd also ask the user why they didn't like the video, but that's probably not realistic.

Anyone can collect and store their own interest profile on their own, as a stream of reactions to one context or another. You could offer a handy, secure tool for this and sell it.

A person's digital shadow, which is basically the sum of these actions, is the most valuable thing they have. You can't leave it up to corporations and store it who knows where (with the risk of a leak or losing it).

It's worth thinking about launching an L2/L3 blockchain that stores all the reactions. Each event is stored in a ZK-Rollup.

You could also build in interfaces for partial disclosure. For example, a company is willing to pay for all the reactions to some specific content (a post, say). It posts an offer, and people can accept it and disclose their reactions for some reward.

And of course, you can train your own personal LLM on this to predict future reactions as accurately as possible.
