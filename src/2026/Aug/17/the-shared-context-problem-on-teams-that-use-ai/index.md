---
title: The shared context problem on teams that use AI
type: post
tags: [ai-agents, context-engineering, team-collaboration, multi-agent]
description: On small teams where everyone runs their own AI agents, mismatched personal context makes agents fight each other, and the fix is treating the team as its own agent with shared context.
date: 2026-08-17T19:25:38+07:00
---

I keep running into this problem on small teams where everyone uses AI.

Person 1 writes code with their agents, which lean on person 1's context. They commit to the repo. Then person 2 makes changes, with agents that lean on person 2's context.

The two contexts are different, because each one can carry that person's personal preferences. So the agents start from different assumptions.

The result is that person 2's agents can land on different decisions than person 1's, and start making big changes to the code from their own point of view. Then person 1's agents, on the next edit, put their own decisions back. This goes on forever and burns tokens for nothing.

A shared context for the whole team only fixes part of this. It sits on top of each person's personal context, it doesn't replace it.

I think the answer is systems like https://andysmith.ai/2026/Aug/15/the-company-as-a-system/.

In other words, a team (even a team of one, for personal projects) is its own thing: its own context, its own set of rules, and probably even its own infrastructure.

So instead of personal agents, you move to agents-as-part-of-a-team. They share one context, run inside a protected perimeter, and don't contradict each other. Usually that's some ensemble of different providers, and the company's AI architect decides exactly how they work together.

And personal agents (what everyone runs on their home laptops right now) are really just one interface into that team of agents. It should take your instructions (maybe filling in and clarifying what you meant) and send them off to run on the company's AI mainframe.
