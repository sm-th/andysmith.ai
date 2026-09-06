---
title: Ephemeral agents
type: post
tags: [ai-agents, sandboxing, least-privilege, nix, orchestration]
description: My working notes on running automod agents as short-lived, sandboxed processes with least privilege instead of long-running sessions.
date: 2026-09-06T18:16:11+07:00
---

My thinking about the automod agent problem (https://andysmith.ai/2026/Sep/5/the-pain-of-auto-mode-agents-in-omp/) came down to a few hypotheses I want to test.

The main idea is that an agent with physical access to secrets will get at them sooner or later. So least privilege is the first thing you have to build here.

That means every agent should run in a sandbox prepared specifically for it.

At any moment, an agent's state is the state of its sandbox plus the state of the agent itself.

The sandbox has to be reproducible and unchangeable for the duration of the agent's tick. So the sandbox description is either a Docker image or (better) a nix-container config.

The agent's state is the state of its mutable directories (workdir, ~/.claude, and so on).

Ephemerality should come from two things:

1. The agent exists within a single session
2. The agent only lives while it's actually working (its tick)

So I'm dropping the whole notion of a session as it exists in the agents we know today.

Instead, there are two operations:

1. Create a new agent with sandbox **sandbox_description_id** (either a reference to a Docker image at a specific version, or a reference to a nix-flake describing the environment) and send it a message **message**
2. Revive agent **agent_id** with environment **sandbox_description_id** and send it a message **message**

Creating a new session means creating a new agent with a new sandbox, a full copy of all the tooling, completely independent of the other agents (which kills any possible races with parallel edits).

After each tick, the agent's state is backed up as a diff from the initial state it had at launch. That lets you revive an agent to any state (and roll back if you need to, though it's usually a bad idea, since the state of the world may have changed if there were tool calls later on).

Each agent has exactly one working directory with its directories and tools already set up. All the tools and the repos needed for the work are unpacked from the flake or the image.

The agent can also have an MCP tool for requesting changes to its sandbox, to give it more rights or add a new tool. Thanks to

In this setup you need an external orchestrator to create the agent-sessions and pass messages into them from the communication platform.

Until there's an orchestrator like that, you can run the agents yourself, setting the notion of ticks aside but sticking to the rules of describing the sandbox and backing up every state.

That way you can start by describing the environments for the first agents, and then reuse them in fully autonomous mode through an automatic orchestrator.
