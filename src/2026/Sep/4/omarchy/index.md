---
title: Omarchy
type: link
link: https://omarchy.org
tags: [omarchy, linux, ai-agents, nixos]
description: A quick look at Omarchy, an agent-run Linux from the creator of Ruby on Rails, and why I want to try its software instead of the x86_64-only distro itself.
date: 2026-09-04T13:19:01+07:00
---

![image|690x412](https://media.andysmith.ai/original/1X/7bbe57e463d7dad696099bfaa103f8ab226509f6.jpeg)

Interesting project from the guy behind Ruby on Rails. A good-looking Linux. It's built for agents and run entirely by agents, which spooks me right off, given how agents love to go read your secrets. Not clear how they deal with that.

People have been putting it on old Intel MacBook Pros, and from what they say, it runs faster than macOS.

![IMG_9996|666x500](https://media.andysmith.ai/original/1X/1b421e976eddafc0b623ec8cb143a3ab820c7a68.jpeg)

I haven't tried it myself yet. I've got an old MacBook too, but it's not near me.

What bugs me is that it's x86_64 only. I haven't had hardware like that around for a long time to even try it. I could emulate amd64 in QEMU, but that just sounds slow and pointless.

You can use asahi https://asahi-alarm.org, but it's experimental and only for old Macs.

There's a NixOS port: https://github.com/henrysipp/omarchy-nix (from an enthusiast). It's basically the same ideas and tools redone on NixOS, and it's got a shot at running on arm since it's just the same packages. Though some packages might not be there for arm.

Honestly, I'm thinking I'll try the set of software that comes with it rather than the distro itself. And you can install that software anywhere. I'll report back.
