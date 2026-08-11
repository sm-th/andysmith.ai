---
title: Speech to text
tags: [speech-to-text, local-first, open-source, handy]
type: post
description: My take on local speech-to-text tools, and why I settled on Handy.
date: 2026-08-11T09:49:31
---

I figured I'd look into how speech-to-text is doing these days.

Locally, I use [Handy](https://handy.computer) for input.

![image|580x500](https://media.andysmith.ai/original/1X/5ec3834eca31218749a99e2c31ba8119400dea92.jpeg)

I tried comparing a few tools, like [openwhispr](https://github.com/OpenWhispr/openwhispr) and [wisprflow](https://wisprflow.ai). Handy isn't the most feature-rich of the bunch, but the fact that it's free, open source, and runs locally wins me over.

Compared to wisprflow, for example, it's instant. Because the request doesn't go anywhere, it's processed locally.

Compared to openwhispr I didn't notice much of a difference, except that it's free.

At first I thought the recognition model alone wasn't enough and you'd need LLM post-processing, but it turns out it's totally enough. LLM post-processing adds a lot to the processing time, and the quality only goes up by about five percent.

Worth noting though, I don't need any text-editing features, meaning I need the text typed out word for word. If you want a transform option, say when you dictate something and the result gets run through some prompt, then Handy obviously won't cut it.

But for my cases it's more than enough.
