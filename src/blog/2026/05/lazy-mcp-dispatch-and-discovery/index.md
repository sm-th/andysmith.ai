---
title: "Lazy MCP: Dispatch and Discovery"
description: "How to reduce token waste from large MCP tool catalogues using a two-tool dispatch pattern with lazy discovery via help and call."
date: 2026-05-25
---

MCP is now used everywhere, and some products exist only as MCP servers. Some of these MCPs contain dozens or even hundreds of tools, and that creates a real problem when working with them.

## The problem

The manifest of such an MCP is shipped in every LLM call, which means token usage grows proportionally with the size of the tool catalogue. The cost of running an agent system that depends on these MCPs grows accordingly. Prompt caching lets you reduce that cost (see [IBM's overview](https://www.ibm.com/think/topics/prompt-caching) and [Anthropic's documentation](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)), but it doesn't solve the problem of context window pollution.

There's also a defocus effect: a weaker LLM can struggle to choose the right tool from a long list, and that affects the quality of the result. The [Berkeley Function Calling Leaderboard (BFCL)](https://openreview.net/forum?id=2GmDdhBdDk) measures function-calling quality directly and shows that smaller models visibly degrade. [ToolLLM](https://arxiv.org/abs/2307.16789) frames the same regime as a learning problem: how to teach an LLM to work with 16K+ APIs.

The root issue is that the full information about every tool is sent on every request — while in practice only one or two tools from the entire list will actually be used.

## An optimization

This can be optimized. Suppose we have an MCP for working with notes, and we want to implement two basic tools: `create(text)` and `find(keywords)`. Instead of implementing them as separate MCP tools, we can expose a single one: `notes_mcp_call(method, params)`. Then we'd invoke them as `call('create', ['Hello, World'])` and `call('find', ['notes about emacs'])`.

Effectively, this is untyped RPC dispatch on top of MCP, whereas the conventional approach is to expose each method as its own typed tool. Naturally, this isn't a silver bullet — choosing one approach over the other is a real architectural decision for the MCP developer. The proposed approach pays off most when the number of tools is genuinely large. And for dynamic MCPs, where the set of methods isn't known ahead of time, it's arguably the only viable option.

## The discovery problem

With this approach, a discovery problem appears immediately. The LLM has to learn somehow what methods this MCP exposes — but at the same time it shouldn't receive the full list of tools all at once.

So we also need a service method, `help`. It can be implemented as `call('help', ['create'])`, or as a separate MCP tool.

Regardless of how `help` is implemented, it can operate in several modes.

The first mode is keyword search (or semantic search). The LLM asks the MCP something like "how do I create a new note?" and gets back a list of tools with their descriptions, parameter lists, and result descriptions. This is very easy to implement, but it requires maintaining semantic search infrastructure, including embedding the incoming queries. There's a bigger issue, though: building a complete map of available methods is hard for the LLM, because it doesn't know all of the MCP's capabilities — and so the discovery goal isn't actually reached. The model has to *already* know what it needs from the MCP.

The second mode is FSM-style discovery: `help` ships wiki-like documentation with cross-links. `help` without parameters returns a general overview and links to other pages. The LLM reads the wiki sequentially and assembles information about all the pages. This mode can be combined with search; it enables real discovery, but it requires extra effort from the MCP developer to maintain that documentation. As a side note: nothing stops you from implementing just a single FSM state with the full list of tools — in that case the mechanism behaves very close to the default MCP behaviour.

## The final design

So the MCP manifest ends up containing two tools: `help` and `call`. The description of `call` should include the call format, instructions on how to use `help` for discovery, and optionally a description of the most frequently used methods — so the LLM doesn't have to go through `help` for every little thing.

## What already exists

Before building this ourselves, let's look at what already exists in the industry.

Anthropic implements dynamic tool loading in its own products through `tool_search`, but this doesn't work in other vendors, so it can't be used as a universal pattern.

There's a draft standard proposal, [SEP-1821](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1821), which extends the MCP standard with keyword search. This is partly what I need, but it doesn't enable flexible FSM-style documentation.

Speakeasy implements a very similar pattern in their tool Gram (see their [blog post](https://www.speakeasy.com/blog/100x-token-reduction-dynamic-toolsets) and the [documentation](https://www.speakeasy.com/docs/mcp/build/toolsets/dynamic-toolsets)).
