---
title: A devbox on a remote server
type: post
tags: [remote-development, vscode, hetzner, self-hosting, ai-agents]
description: How I run a remote devbox on a Hetzner server so agents and third-party software stay off my main laptop, and the one thing that annoys me about it.
date: 2026-09-02T14:32:12+07:00
---

I really don't like running third-party software and agents on my main work machine. I can't always keep close track of what they're doing, and that makes me not trust them.

So I keep the software on my work laptop to the bare minimum. Everything else runs in isolated environments.

One thing I do is a remote devbox. It's an auction server from Hetzner running Debian (or NixOS). On it I run `code tunnel` and sign in through GitHub.

<a class="lightbox" href="https://files.andysmith.ai/img/6127f9c14845dab360985ab67e683dfaf65bd210/a-devbox-on-a-remote-server.png"><img src="https://files.andysmith.ai/img/6127f9c14845dab360985ab67e683dfaf65bd210/a-devbox-on-a-remote-server.webp" alt="image" width="1280" height="797" loading="lazy" decoding="async"></a>

Then I open the devbox through vscode.dev in the browser, or through my local VSCode, and work with the code as if it were sitting right here.

I can connect from any device with a browser (haven't tried from a toaster, NetBSD won't build).

This setup works for me in every way except responsiveness. The Hetzner server is on the other side of the world, so the response time is really slow. For VSCode that's fine, because the lag only shows up when I connect and open files. But for console agents like Claude Code or omp it's incredibly annoying, because there's a delay on every keystroke (mesh and similar tools for speeding up ssh don't work in the VSCode terminal).

The second problem is that I can't work offline. But local models aren't powerful enough yet to handle 100% of tasks, so it's not really a problem. You need to be online to get anything done anyway.
