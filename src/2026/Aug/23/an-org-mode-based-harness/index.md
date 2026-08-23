---
title: An org-mode based harness
type: post
tags: [org-mode, emacs, ai-agents, omp]
description: Thinking through using Emacs org-mode files as an interface for driving coding agents, and what to do about forking sessions.
date: 2026-08-23T11:56:37+07:00
---

The more I dig into [OMP](https://andysmith.ai/2026/Aug/21/omp-a-coding-agent-with-the-ide-wired-in/), the more it reminds me of Emacs org-mode (https://orgmode.org/), and specifically its org-babel module (https://orgmode.org/worg/org-contrib/babel/).

I want to try using org-mode files as an interface to agents.

I create a new org file, and that starts a session.

A new heading shows up automatically with a code block of type "agent". Running that block just sends its text to the agent session.

While it works, the agent can create as many subheadings inside that block as it wants, write comments in them, add separate blocks, run them, edit files, call tools, and so on.

When the agent is done, it creates the next heading so I can type the next block.

You end up with a structured, executable playbook.

The file holds the whole session, every tool call and every detail, so you can reuse it as a re-runnable playbook.

I'm not sure what to do about forks, or whether they're even needed. The idea would be to roll back the agent's last action and continue from some earlier state. But that brings a pile of problems right away. You can't just fork the Claude session, you also have to undo the changes the agent made. More on that here: https://andysmith.ai/2026/Aug/20/a-programming-paradigm-for-spatiotemporal-composability/.

If I do the forking through Org itself, it gets muddy where the split is about meaning (by steps, or by logical sections) and where it's an actual fork.

So I could just not bother with forks. Or do it by making a new file that shares the same beginning with the end cut off. Or just use git the way it's meant to be used, roll the file back to the state I need, and keep going.

Even then, there'll probably be odd surprises around undoing the agent's actions. If the agent did something outside the file, the state I'm forking from doesn't know about it.
