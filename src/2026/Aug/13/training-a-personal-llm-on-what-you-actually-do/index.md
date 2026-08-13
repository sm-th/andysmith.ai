---
title: Training a personal LLM on what you actually do
type: post
tags: [personal-llm, fine-tuning, gwern, emacs, digital-identity]
description: Notes on Gwern's Guardian Angel idea of training a personal LLM from a log of your own actions, and why collecting those actions now matters.
date: 2026-08-13T20:06:45+07:00
---

I'm reading about Gwern's Guardian Angels (https://gwern.net/guardian-angel).

The idea is that instead of using general LLMs (which are trained to be useful to everyone, hackers included), you train your own personal LLM.

Instead of putting some bit of info about your personality into the context (which is never complete by definition), the idea is that the "persona" gets derived from the data.

The data is an append-only log of text editing actions. The model predicts the next action and suggests it to you. The success test is: the model wrote the whole text from the first paragraph.

Right now the author's idea is to digitize his data as a stream of actions. He uses Emacs, so he gets this out of the box. There's a bit more detail here: https://gwern.net/nenex.

Training a separate model for each user (and retraining it on new data on top of that) is expensive, so you'd have to use a simple model. If the model struggles to predict, it can ask a more expensive general model, ask the user for feedback, and fine-tune on that feedback.

This is a cool thing. As an Emacs fan I want it, and not just for text and code but for any kind of activity.

And there's another conclusion here that I agree with. Identity is exactly the actions we take. It's worth collecting them now, so there's something to train on later.

The format, and how you capture, safely store, and use these actions, matters a lot too.
