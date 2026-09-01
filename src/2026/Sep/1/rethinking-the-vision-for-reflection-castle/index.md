---
title: Rethinking the vision for Reflection Castle
type: post
tags: [nixos, kubernetes, flux, ai-agents, self-hosting]
description: Why I'm moving Citadel to K3S plus Flux, dropping the human devbox from Tower, and turning Castle into an AI-native platform.
date: 2026-09-01T13:55:28+07:00
---

I'm building [Reflection Castle](https://github.com/reflection-dev/castle) as "a home for agents and people (tower), plus infrastructure for communication and for storing code and docs (citadel)". All of it ran on NixOS or Nix-Darwin.

The plan is to ship an open-source solution you can drop into any team and have running fast, and to sell support on top of it for people who don't want to figure it out themselves.

Partway through, I changed my mind about running all the Citadel components as NixOS oci-containers. It's easier to use NixOS just for the K3S cluster and roll everything else out with Flux.

That keeps Citadel portable. You can run the whole thing on GKE with no changes, for example.

I'm also leaning toward rethinking Tower. I used to plan on the devbox pattern for people and agents, where everyone, human or agent, gets their own dev space on a remote server. I'm dropping that now. Isolation at the user level just isn't reliable. Users can see each other's open ports. So I want to pull the human devbox-tower out of Castle. Human users can set up their own workspace and make their own calls, they're adults. For agents I'll either use https://github.com/superradcompany/microsandbox or run them in the same cluster, depending on what hardware a given team has.

That turns Castle into an AI-native platform, Reflection's core product: a place where people and agents talk to each other as equals.

So it needs two layers. NixOS for the infrastructure (bare metal for now), plus k8s manifests to deploy into any Kubernetes. The job is to make both reusable and public. Starting now.
