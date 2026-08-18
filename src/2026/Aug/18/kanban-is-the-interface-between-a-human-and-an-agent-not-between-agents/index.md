---
title: Kanban is the interface between a human and an agent, not between agents
type: post
tags: [ai-agents, kanban, human-in-the-loop, workflow]
description: Why I'm building a kanban board for humans to answer agents' questions, not for agents to talk to each other.
date: 2026-08-18T16:59:45+07:00
---

The kanban I'm working on is mainly for communication between a human and an agent. Between agents you don't need a kanban at all. That part can be whatever. But for a person, moving little cards around a board is just handy.

The idea is this. You start a session with an agent. It does its thing, and at some point it figures out that it needs you. It can't keep going without you. So it files a task for you and goes to sleep. You read what the task says and you do it. And doing the task usually just means writing a comment, because the agent asked you something.

So in that sense the kanban isn't even for the agents, it's for you. It's a way to answer the agents' questions without losing your mind over how async they are, and to put some order to the whole thing. That's roughly how I see it.
