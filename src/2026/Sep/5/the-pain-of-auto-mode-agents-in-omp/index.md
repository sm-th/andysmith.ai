---
title: The pain of auto-mode agents in OMP
type: post
tags: [ai-agents, claude-code, omp, agent-security, sandboxing]
description: Why OMP's advisor can't stop an auto-mode agent from leaking secrets or running a destructive command, and my plan to add an LLM classifier like Claude Code's.
date: 2026-09-05T16:05:26+07:00
---

A few months ago, using an agent meant I read and approved every single action by hand.

Then the agents got smarter and the rejection rate dropped, so I ended up hitting Enter on autopilot, with rare exceptions.

Then I switched to auto-mode, where Claude Code used a classifier model to decide whether a given external operation was legit, and only pulled me into the session when the automatic check blocked something.

But later I moved to omp.sh and ran into problems.

For example, the agent might try to read secrets that are available from the same environment it runs in, or run a destructive command on a server it can reach over SSH.

OMP has no built-in LLM classifier, just an advisor. It doesn't block a request. It can only cut it off after the fact, once it's already run, when the secrets have already leaked.

The obvious fix, running it in a sandbox, only works in a limited set of cases. The problem is you don't always know up front what the agent will need, so you can't grant all the right sandbox permissions ahead of time. Sometimes it really does need access to the secrets, and sometimes it needs to log into the server and do something too. And there's no way to figure out the full range of legit operations in advance.

So that leaves copying Claude Code's approach in OMP. I couldn't find anything ready-made, so I'm writing an OMP extension that does LLM classification of external calls (like Claude Code does), and trying it on my own tasks. If it works better, I'll share it.
