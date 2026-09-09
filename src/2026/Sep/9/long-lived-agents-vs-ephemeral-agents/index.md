---
title: Long-lived agents vs ephemeral agents
type: post
tags: [ai-agents, sandboxing, prompt-injection]
description: A comparison of agents that run continuously against ephemeral agents you spin up per session, and the tradeoffs of the long-lived kind.
date: 2026-09-09T15:33:04+07:00
---

Ephemeral agents (https://andysmith.ai/2026/Sep/6/ephemeral-agents/) are handy for running by hand. When I want to get something done (and I don't want to give the agent full access to my machine), I can describe a sandbox, create a session, do the work (and rebuild the sandbox mid-way if I need to add something), then delete it all once the session ends. So an ephemeral agent only carries state between sessions in external artifacts. It holds no state of its own.

The opposite of that is a long-lived agent.

These start once, restart fairly rarely, and run the whole agent loop themselves (either on their own or with some wrapper code).

buzz-agents are an example. The agent itself has the tools it needs to long-poll for external events, call the harness, handle errors, and return the result to the communication layer.

So in practice, each harness call is an ephemeral agent, but with a few limits:
1. Every agent needs its own polling. With a lot of agents, the polling eats a lot of resources.
2. Every agent call has all of the container's access, including talking to the communication layer. In theory that access could be compromised through prompt injection.
3. The agent's environment and config are hard to change while it's running. And since communication and work live in one image, updating the config for a single session means fully restarting the agent, which cuts off any parallel sessions already running.
