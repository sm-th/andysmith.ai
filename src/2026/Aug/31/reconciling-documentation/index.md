---
title: Reconciling documentation
type: post
tags: [ai-agents, documentation, kubernetes, software-development, developer-workflow]
description: I'm testing a way to build software where agents keep the docs in sync with our discussions and the code follows the docs, so I barely have to read the AI's output.
date: 2026-08-31T19:38:13+07:00
---

Instead of relying on chat context and separate frameworks for long-term memory, I'm testing a way of building software based on the reconciliation pattern from Kubernetes.

The idea is to read as little of the AI's output as possible while keeping the quality of the development process, and ideally improving it.

Here's how it works. Our team discusses a project in buzz. The agents don't write code right away. Instead they update the project's documentation as if the features we want were already built, and they give us links to the updates.

We read the docs and judge how well the agents understood our decisions, and give feedback when we need to.

So the first stage of reconciliation is that the docs are always kept in sync with the discussions. Changes go in at the same time as the discussions.

Keeping the docs and the code in sync is handled separately. Any change to the docs leads to a change in the code. Since the docs have already been reviewed, the code should match what's described in the chats too.

The idea is to not look at the code at all. To have the review and the fixes happen entirely through the docs, done by the agents. This assumes the docs are complete and unambiguous enough, but that's almost never true, so the process isn't perfect yet.
