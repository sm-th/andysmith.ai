---
title: Context as a separate stream of events
type: post
tags: [llm, lifelogging, wearables, context-engineering]
description: A sketch of how you might log everything around you as context events and everything you produce as reactions, so you can build context-reaction pairs.
date: 2026-08-16T13:48:29+07:00
---

One way to build context-reaction pairs, while keeping [infinite context](https://andysmith.ai/2026/Aug/15/infinite-context/) in mind, goes like this.

Call everything context: everything I see, hear, and feel. Everything around me is context. Split it into quanta (events) and write them to a separate append-only log. That's pretty hard, because a lot of what I see and hear isn't easy to digitize. Maybe wearables will help with that.

Reactions are the opposite. They're what comes out of me: what I say (publicly or privately), what I write, or whatever I put out some other way. Written stuff is easy to record. It's basically already being recorded anyway. For spoken stuff, wearables again.

You don't need a separate link between a reaction and its context. Every reaction is connected to all the context events near it in time, so you can just use the clock to sync them.

A reaction can be tied directly to one specific context event, or a few, like when I answer an email. But the surrounding events always shape the reaction too. Some rudeness in a reply, say, might come from some outside event, not necessarily from what was in the message I'm replying to.

Which brings up a separate problem: different parts of the context can carry different weight. One context event should be marked as "strongly influential," another as "barely influential." I don't know whether you can label the input context like that when you train an LLM.
