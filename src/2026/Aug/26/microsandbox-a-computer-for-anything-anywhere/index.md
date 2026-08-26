---
title: Microsandbox, a computer for anything, anywhere
type: link
link: https://microsandbox.dev/
tags: [microsandbox, microvm, sandboxing, ai-agents, virtualization]
description: A quick look at Microsandbox, a tool for running OCI images in microVMs, and why it's handy for giving each agent its own machine.
date: 2026-08-26T18:11:50+07:00
---

# Microsandbox, a computer for anything, anywhere

![image|690x372](https://media.andysmith.ai/original/1X/ecbdbd67b67b01dbb70ef532252de21e61ca0262.jpeg)

Microsandbox lets you run OCI images in a microVM. It works on Windows, Linux, and Apple Silicon, and you don't need Docker.

You can script the whole VM launch as code.

So for each agent, and even for each task on its own, you can build an image (with Nix or a Dockerfile), run the agent in it, do the task, and kill the machine.

As long as the task is straightforward, it all runs instantly. The moment you need to tweak something in the environment, you have to rebuild the image. That takes a bit longer, but you don't rebuild often, so it's no big deal.
