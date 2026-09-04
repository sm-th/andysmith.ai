---
title: Bitnami/sealed-secrets
type: link
link: https://github.com/bitnami/sealed-secrets
tags: [sealed-secrets, sops, kubernetes, secrets-management, nixos]
description: How I use bitnami/sealed-secrets to push sops secrets into Kubernetes, and why I'm eyeing secretspec.dev as an alternative.
date: 2026-09-02T16:11:05+07:00
---

<a class="lightbox" href="https://files.andysmith.ai/img/2e4af316bbdbc28ecb65aeb4923e95e675da1695/bitnami-sealed-secrets.png"><img src="https://files.andysmith.ai/img/2e4af316bbdbc28ecb65aeb4923e95e675da1695/bitnami-sealed-secrets.webp" alt="image" width="1280" height="854" loading="lazy" decoding="async"></a>

I use bitnami/sealed-secrets to deploy secrets to Kubernetes from sops.

That way I get one sops flow for both my NixOS secrets and my k8s secrets, all encrypted with age.

Lately though I've been looking at secretspec.dev instead. It supports sops as one of its backends too, so the migration shouldn't be hard.
