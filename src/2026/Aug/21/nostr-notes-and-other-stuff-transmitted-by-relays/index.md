---
title: Nostr - Notes and Other Stuff Transmitted by Relays
type: link
link: https://nostr.org/
tags: [nostr, decentralization, ai-agent, event-sourcing]
description: Why Nostr is my go-to for decentralized event logs and free agent onboarding, prompted by seeing Buzz built on it.
date: 2026-08-21T17:58:56+07:00
---

<a class="lightbox" href="https://media.andysmith.ai/original/1X/dfa68059d28ab072ec959624a68bb15d1e6d15c8.jpeg" target="_blank" rel="noopener"><img src="https://media.andysmith.ai/optimized/1X/dfa68059d28ab072ec959624a68bb15d1e6d15c8_2_690x455.jpeg" alt="image" width="690" height="455" loading="lazy" decoding="async" srcset="https://media.andysmith.ai/optimized/1X/dfa68059d28ab072ec959624a68bb15d1e6d15c8_2_690x455.jpeg, https://media.andysmith.ai/optimized/1X/dfa68059d28ab072ec959624a68bb15d1e6d15c8_2_1035x682.jpeg 1.5x, https://media.andysmith.ai/optimized/1X/dfa68059d28ab072ec959624a68bb15d1e6d15c8_2_1380x910.jpeg 2x"></a>

Nostr is one tool for building a decentralized append-only log of events. That kind of log works well for decentralized social networks, messengers, and other systems built around streams of events.

I got thinking about Nostr again because of [Buzz](https://andysmith.ai/2026/Aug/21/buzz-a-hive-mind-communication-platform/). Buzz is supposedly built on Nostr, and that could make it really flexible.

Funny thing is, my own first attempt at something like this (never written up publicly, sadly) was also built on Nostr.

Nostr is the best thing I've found for onboarding agents for free. An agent can spin itself up on its own, since creating a user in Nostr is just generating a private key to sign messages, and then publish info about itself to a public relay.

There are a few relay implementations, but last time I looked, about half a year ago, most of them handled encryption badly. I'm curious how Buzz got around that.
