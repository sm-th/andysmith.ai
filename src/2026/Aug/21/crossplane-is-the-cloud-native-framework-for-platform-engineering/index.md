---
title: Crossplane Is the Cloud-Native Framework for Platform Engineering
type: link
link: https://www.crossplane.io/
tags: [crossplane, platform-engineering, infrastructure-as-code, kubernetes, pulumi]
description: A look at Crossplane, which uses the Kubernetes reconciliation loop to manage any infrastructure, and why I wish it ran on a universal language instead.
date: 2026-08-21T14:35:39+07:00
---

<a class="lightbox" href="https://media.andysmith.ai/original/1X/dfee53540d5d90714a44c37cf037a18c774998d9.png" target="_blank" rel="noopener"><img src="https://media.andysmith.ai/optimized/1X/dfee53540d5d90714a44c37cf037a18c774998d9_2_690x366.png" alt="image" width="690" height="366" loading="lazy" decoding="async" srcset="https://media.andysmith.ai/optimized/1X/dfee53540d5d90714a44c37cf037a18c774998d9_2_690x366.png, https://media.andysmith.ai/optimized/1X/dfee53540d5d90714a44c37cf037a18c774998d9_2_1035x549.png 1.5x, https://media.andysmith.ai/optimized/1X/dfee53540d5d90714a44c37cf037a18c774998d9_2_1380x732.png 2x"></a>

Interesting way to describe infrastructure, using the reconciliation loop from Kubernetes.

The idea is that you describe the desired state of your infra as a Kubernetes manifest, and then Crossplane brings the infra to that state on its own.

So it's the same pattern Kubernetes uses, but for describing any infrastructure: databases, servers.

This runs against the Pulumi/Terraform/NixOS philosophy. There you need an explicit "rebuild" command. Here the approach is more reactive.

But I don't like that it needs yet another language to describe things. Pulumi is more interesting there. I wish someone would build something like this, but on a universal language (LISP?).
