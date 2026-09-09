---
title: Zeno, an always-on orchestrator for ephemeral agents
type: post
tags: [ai-agents, orchestration, lisp, mcp, zeno]
description: How Zeno separates a long-lived orchestrator from short-lived agents, with company processes written in Lisp and agent access limited through a per-agent MCP.
date: 2026-09-09T15:34:51+07:00
---

In https://andysmith.ai/2026/Sep/9/long-lived-agents-vs-ephemeral-agents/ I laid out the problems with long-lived agents.

With Zeno I tried to solve them by pulling the orchestrator out into its own layer. The orchestrator handles talking to the communication layer and the processing logic. The agents themselves can spawn either in their own environments or right next to the orchestrator (depending on the scale of the project). And the agents have access to the orchestrator's methods.

In Zeno every process in a company is described in Lisp. There's no limit on how big a process can be. So you can run one Zeno instance for a team, a department, the whole company, or even a group of companies. How you architect it depends on how autonomous the unit is and how complex its processes are.

The idea is that the process itself is deterministic, but some parts of it can be stochastic (not known ahead of time). In those spots, where there's no deterministic practice worked out yet, you need an LLM or an agent.

An agent can be called at any point in the process. And the code itself (deterministically, or with an agent's help) can decide which agent it needs (and with which environment and which permissions), create it, call it, and accept its work.

The agent gets limited access to the process data (the orchestrator decides how limited). Each agent gets its own MCP, which is how it reaches outside. A simple agent on a cheap model might only get basic read access to errors or GitHub checks, while a more complex one can open a pull request, or ask for more permissions.

The MCP is Lisp CodeAct that runs in the SCI of the main process. That makes it easy to describe interfaces and to limit an agent's access to the whole process's data. So calls from inside an agent are just calls to lisp functions. For example, (ask-user "question") asks the user a question, and it doesn't matter what the company's accepted way of communicating is, buzz, github issues, or email. The agent gets interrupted and comes back to work once the answer arrives. This lets you separate communication from the actual work as cleanly as possible.

I'm testing this setup in my auto-researcher, and I'll publish the zeno sources soon, once I figure out what's core and what's application-specific.
