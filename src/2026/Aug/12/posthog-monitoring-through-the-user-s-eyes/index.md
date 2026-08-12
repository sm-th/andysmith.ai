---
title: "PostHog: monitoring through the user's eyes"
type: post
tags: [posthog, observability, monitoring, product-analytics]
description: How PostHog turns observability around by building it around the customer instead of the system.
date: 2026-08-12T18:31:56+07:00
---

I've used PostHog for years as an open source alternative to Google Analytics. Today I read the docs and realized it's a deeper tool that flips the whole approach to infrastructure monitoring.

Traditionally the technical data about the state of a system (logs, metrics, traces) lives in a separate engineering system (ClickStack, Grafana LGTM, DataDog, etc). In that approach the system is the thing everything is built around. Monitoring answers questions like "is microservice X working correctly" and "is there a problem with the database".

In that setup, for an engineer an error is a line in a log and a ticket in an issue tracker. For the business it's lost money and lost customer loyalty.

PostHog suggests building observability around the customer. Every event (including cases where something is broken), every log entry, every trace gets tied to a user session and stored right next to the business metrics.

That approach flips how you look at infrastructure, analytics, and monitoring. The system exists to serve the customer, not the other way around. That shift takes some getting used to. For years we've measured service uptime, not the customer's path.

Now the cost of an incident is obvious. A broken payment button isn't a line in a log, it's N sessions that dropped off at checkout, and you see it in the same interface where you look at conversion.

You shouldn't treat PostHog as a replacement for your technical observability stack. Some service events aren't directly tied to user actions, so looking at them in PostHog won't be convenient. But as an addition to the technical stack, sure.

![image|690x436](https://media.andysmith.ai/original/1X/c93236cdcf7e2816a3f99981ff92360db10085cb.png)
