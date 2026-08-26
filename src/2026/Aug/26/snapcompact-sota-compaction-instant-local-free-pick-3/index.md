---
title: "Snapcompact: SoTA compaction, instant, local, free. Pick 3"
type: link
link: https://stencil.so/blog/snapcompact
tags: [context-compaction, token-optimization, multimodal, snapcompact]
description: A trick for cutting token costs by handing a model its context as a tiny-font image instead of plain text.
date: 2026-08-26T18:20:16+07:00
---

# Snapcompact: SoTA compaction, instant, local, free. Pick 3

![image|690x374](https://media.andysmith.ai/original/1X/1ab56843b4230eab76029f8f0301d5f2fa2969a7.png)

A clever way to get context into a model while spending fewer tokens on it.

The idea: instead of the text, you hand the model an image with that same text written on it in a tiny font.

Get the font settings right and you save a lot of tokens, with quality that holds up.
