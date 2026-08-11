---
title: Tags on my blog
type: post
tags: [tagging, blogging, automation, taxonomy]
description: How I handle blog tags, and why I auto-generate them for each post from scratch.
date: 2026-08-11T23:46:51+07:00
timezone: Asia/Bangkok
---

What to do about tags on a blog.

The point of tags is to highlight the topics I keep coming back to.

One problem with tags is that they're unstable. They depend on how deep you've gone into a topic.

At first, when I'm just starting to dig into a new topic, say AI, every post gets the same high-level tag: AI. Then as things get more specific, LLM shows up, then ollama, then mlx, and you can keep going deeper forever.

But if you start with detailed tags from the beginning, you end up with a huge pile of empty tags, each one marking a single post. That's not useful. It's easier to just use search.

For my blog I set up automatic tag generation for each post, based on the text.

Each run starts from scratch, with no hint from a global tag dictionary. That keeps it from drifting toward the tags I used in my earliest posts.

The problem this creates is duplicate tags. When the same thing is written slightly differently, like agent and ai-agent and ai-agents all meaning the same thing. With independent runs and no hints, you can't fully avoid that.

For now I've left it as is. Later I'll add a periodic merge of tags, or some extra tooling to classify them and pull out common themes.
