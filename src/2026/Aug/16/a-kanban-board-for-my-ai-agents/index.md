---
title: A kanban board for my AI agents
type: post
tags: [ai-agents, kanban, forgejo, automation]
description: How I use a single kanban board with four columns to work with AI agents asynchronously.
date: 2026-08-16T13:49:51+07:00
---

I've tried a lot of different AI interfaces: copilot, chats, console agents, bots in direct and group chats in messengers.

They all miss the same thing for me: async.

Right now I'm experimenting with kanban boards.

One board, four columns:

- Backlog: the task needs my attention. I take the first card, get into the context, write a detailed comment, and move it to ToDo.
- ToDo: the queue for the agents. As resources free up, an agent pulls a task into InProgress.
- InProgress: the agent works on it. It reads the context, breaks the task down for subagents, puts those on other internal boards (I don't touch those), does the work, and commits the code. If something's unclear, or the task needs a clarification, or it needs my attention some other way, it moves the task back to Backlog.
- Done: also needs my attention. I review the task. If everything's fine, I close the issue. If there are problems or something's off, I write a comment and move it to ToDo.

I went with Forgejo's minimal interface, but the setup would work on any kanban board with an API.
