---
title: A speech recognition tool
tags: [speech-to-text, whisper, speaker-diarization, mlx]
type: post
description: I needed to transcribe a two-person call, couldn't find a ready-made tool, so I put one together and looked at the current speech recognition and diarization options along the way.
date: 2026-08-11T20:36:05+07:00
timezone: Asia/Bangkok
---

I needed to transcribe a call between two people.

I looked for something ready-made and didn't find anything that fit. I wanted it to just work in one click on Apple MLX, split up who said what, and run LLM post-processing on top (to strip out the mumbling and filler words).

I decided to throw together a small Python script, and as usual it grew into half a day of debugging (which is why I don't like vibe-coding my own tools).

But I did get to do a quick bit of research on the state of speech recognition.

For the model I tried whisper-large-v3-turbo, but it works badly, it actually makes mistakes. Right now I'm trying whisper-large-v3, and if it's no better I'll switch to parakeet, which from what I can tell works really well.

For diarization (figuring out who said which line) we tried a bunch of options:

- Sortformer didn't fit in memory on anything over an hour, and once we chunked it, it started glitching and counted 4 speakers instead of two
- sherpa either split it into too many speakers, or collapsed and gave all the text to one, basically it glitched too
- we tried a homegrown solution: cut on pauses and compare by embeddings, bad. either our voices turned out to be the same, or the embedding algorithm is bad. or maybe the voice doesn't factor into the embedding and the meaning was pulling the coordinates around
- pyannotate seemed to work best of all.

But there's a problem with the mlx + pyannotate stack, they need different pytorch versions, so they don't run in the same venv, I had to split them.

On top of that I bolted on the LLM cleanup, and got a more or less readable result.

Now I'll try to clean it all up, polish it, and open-source it.

While coding it, I forgot what I needed it for.
