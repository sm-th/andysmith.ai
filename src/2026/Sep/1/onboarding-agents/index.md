---
title: Onboarding agents
type: post
tags: [ai-agents, onboarding, access-control, automation, discourse]
description: Why I decided to keep creating new agents by hand instead of automating their onboarding at deploy time.
date: 2026-09-01T18:13:51+07:00
---

An addition to the Castle architecture: https://andysmith.ai/2026/Sep/1/castle-architecture/

The agent layer is a repo that manages agents. But agents need access, and each one needs different access.

So how do you hand that access out?

When I add a new agent, at a minimum I need to:

1. issue a token for the model
2. register it in discourse/buzz/zulip, set its name and bio, and save the API key or token somewhere
3. give it the right roles in discourse
4. issue it a token for the repos (and at that point I need to know which ones)
5. maybe give it some extra access (ssh, logs), if its role calls for it

I thought about describing all this declaratively, so that deploying an agent would create the secrets it needs automatically. Onboarding would just happen on first run.

But then I realized that's a mistake. Onboarding an agent is operator work, and it needs a manual check (especially when it means granting rights to irreversible actions).

So for now I'll keep creating new agents through a script in the agents repo, and I'll do it by hand.

Later on I might give some agent an hr role that can do this automatically for the simple, non-destructive ones.
