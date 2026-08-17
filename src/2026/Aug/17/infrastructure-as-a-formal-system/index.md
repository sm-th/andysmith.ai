---
title: Infrastructure as a formal system
type: post
tags: [infrastructure, formal-methods, security, ai-agents]
description: A rough idea about modeling infrastructure as a formal system whose theorems are the secure configurations, so the inference rules only ever produce more secure infrastructure.
date: 2026-08-17T14:45:50+07:00
---

I'm reading (well, listening to) Gödel, Escher, Bach by Douglas Hofstadter.

The chapter on formal systems caught my eye, because you might be able to apply it to infrastructure.

The goal: infrastructure that's guaranteed to be secure.

The idea is to describe infrastructure as a formal system where the theorems are the set of things that count as "secure infrastructure".

Then we can set up the inference rules so that starting from infrastructure that's already secure, we only ever get infrastructure that's still secure. In other words, we never add a new security hole.

I've been chewing on this for a long time, but it used to be impossible: there are too many inference rules and they're too hard to build. Now, with AI, it feels a bit more doable.
