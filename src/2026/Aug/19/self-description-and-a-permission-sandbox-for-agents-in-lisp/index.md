---
title: Self-description and a permission sandbox for agents in LISP
type: post
tags: [lisp, ai-agents, sandboxing, programming-languages]
description: Why a language that can describe itself, like LISP, is a good fit for agents, and how it lets you sandbox a sub-agent's permissions.
date: 2026-08-19T20:28:55+07:00
---

I've been listening to Gödel, Escher, Bach, and it feels like it's about exactly what I want to build: systems that describe themselves. You know those Escher drawings, the staircase that keeps going down but never ends, or the waterfall that pours down and somehow feeds itself back at the top. Those self-looping things, systems that describe themselves.

Languages that describe systems like this have a funny property. You can describe more kinds of systems in them than in languages that can't describe themselves, and the descriptions come out cleaner and shorter. LISP is one of those languages. It can describe itself. I don't really get why everyone forgot about LISP. It was built for AI in the first place, the very first AI language, about 70 years ago.

But there's a practical reason this matters for agents too: a permission sandbox. Say an agent wants to call a sub-agent, but the sub-agent has to be limited in what it can do. In normal languages that's almost impossible. You can't say: run any Python you want, except, say, listing a directory. The moment you give a sub-agent access to Python, it has full access to the system, it can do anything. Python and JavaScript just don't have a language-level sandbox. In LISP you can easily say: here are your operations, this one, this one, and this one. Think whatever you want, but the only way you reach the outside world is through those three. And the agent physically can't get around it. For corporate workflows that's exactly what you need. For personal ones it's probably overkill, but for corporate it's a must-have.
