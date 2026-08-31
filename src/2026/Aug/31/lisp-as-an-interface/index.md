---
title: Lisp as an interface
type: post
tags: [lisp, ai-agents, human-computer-interaction, llm]
description: The idea of writing an agent's logic in Lisp, where the functions it uses to talk to the user can be overridden or shipped as plugins.
date: 2026-08-31T19:38:23+07:00
---

The idea: I write my agent's logic in Lisp, using primitives like (say "message") and (ask-y-n "question"). The interface for talking to the user, those same say and ask functions and maybe a few others, can be overridden by the user or shipped as plugins.

Some people like to work by voice, some through Telegram or WhatsApp or whatever else. Easy. Just override the functions you need.

You could standardize this set of functions and call it something like HAI (Human-Agents Interface), with reference implementations for different tools that you can reuse. Really, an LLM only needs a couple of interfaces to a human.

I'm curious to see where this goes as neural interfaces get better.
