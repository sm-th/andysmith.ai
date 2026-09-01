---
title: Castle architecture
type: post
tags: [castle, kubernetes, ai-agents, self-hosting]
description: My current thinking on how Castle is structured, as three layers built so it can be deployed for a real client.
date: 2026-09-01T17:52:40+07:00
---

I'm still rethinking [Castle](https://andysmith.ai/2026/Sep/1/rethinking-the-vision-for-reflection-castle/).

I'm working from the idea that this could grow into a product you can easily deploy yourself. Or that I could walk into a company, set it up for them, and keep maintaining it afterward.

A three-layer architecture is taking shape:

1. Kubernetes infra. Usually this isn't part of Castle, because it's hard to standardize. One person has a slice of a server set aside for Castle, so we'll run everything in minikube/k3s. Another has a small k3s cluster. Someone else has GKE with a dozen nodes. In general we leave this up to the client and set it up separately. A working Kubernetes is a prerequisite for Castle (optional, see below).
2. Citadel. This is where the agents keep their data. At a minimum it needs some communication layer and a place to store repos. It could be something self-hosted (say, Discourse/Buzz/Zulip + Forgejo), or it could be Github + Slack. This layer doesn't depend on the choices above. The self-hosted part could run in the cluster, or somewhere else, or you might not run anything of your own at all.
3. The team of agents (I haven't come up with a word for this yet, I'll probably just leave it as agents). This is a set of agent descriptions (probably all in one repo, but maybe one per agent if that turns out to be handier). The idea is that every agent is described declaratively in one place, including its infra, secrets, access, and so on. It all deploys to the cluster (by default) or to microsandbox (msb).

I might put together a basic nixos config you can use for a minimal run, but it looks like each client will end up with its own set of choices, and so its own setup.

Right now I'm trying to deploy this for a real team (they happen to be short on hardware, so the agent cluster will have to share with other infra). As I go, the limits will become clear, along with what it has in common with what I built for myself yesterday. Based on that I'll figure out what to open-source and what to keep at the level of client-specific setups (and so keep closed).
