---
title: "PostHog: monitoring through the user's eyes"
type: post
tags: [posthog, observability, monitoring, product-analytics]
description: How PostHog turns observability around by building it around the customer instead of the system.
date: 2026-08-12T18:31:56+07:00
---

I've used PostHog for years as an open source alternative to Google Analytics. Today I read the docs and realized it's a deeper tool that flips the whole approach to infrastructure monitoring.

Traditionally the technical data about the state of a system (logs, metrics, traces) lives in a separate engineering system (ClickStack, Grafana LGTM, DataDog, etc). In that model, the system is the center of gravity. Monitoring answers questions like "is microservice X working correctly" and "is there a problem with the database".

For an engineer, an error is a line in a log and a ticket in an issue tracker. For the business it's lost money and lost customer loyalty.

PostHog builds observability around the customer instead. Every event (including cases where something is broken), every log entry, every trace gets tied to a user session and stored right next to the business metrics.

That inverts how you look at infrastructure, analytics, and monitoring. The system exists to serve the customer, not the other way around. That shift takes some getting used to. For years we've measured service uptime, not the customer's path.

Now the cost of an incident is obvious. A broken payment button isn't a line in a log, it's the sessions that dropped off at checkout, and you see it in the same interface where you look at conversion.

You shouldn't treat PostHog as a replacement for your technical observability stack. Some internal events aren't directly tied to user actions, so PostHog is an awkward place to look at them. But alongside the technical stack? Absolutely.

<a class="lightbox" href="https://media.andysmith.ai/original/1X/c93236cdcf7e2816a3f99981ff92360db10085cb.png" target="_blank" rel="noopener"><img src="https://media.andysmith.ai/optimized/1X/c93236cdcf7e2816a3f99981ff92360db10085cb_2_690x436.png" alt="image" width="690" height="436" loading="lazy" decoding="async" srcset="https://media.andysmith.ai/optimized/1X/c93236cdcf7e2816a3f99981ff92360db10085cb_2_690x436.png, https://media.andysmith.ai/optimized/1X/c93236cdcf7e2816a3f99981ff92360db10085cb_2_1035x654.png 1.5x, https://media.andysmith.ai/optimized/1X/c93236cdcf7e2816a3f99981ff92360db10085cb_2_1380x872.png 2x"></a>
