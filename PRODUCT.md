# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Existing Vue 2 + Vue CLI 5 app (Vuetify 2, bootstrap-vue), history-mode router, deployed as a static site (public/_redirects). Keep the stack; no framework migration.

## Users
Inferred from the repository, not interview-confirmed:
- Prospective trainees, PhD students and postdocs deciding whether to join (Training, Team, Contact pages).
- Fellow scientists, reviewers and funders checking the lab's credibility (Publications, Funding, Awards, Explorables).
- Current members and alumni (news, retreat, awards).

## Product Purpose
Public website of the Venkatesh Lab (Axon Growth & Regeneration, CSIR-Centre for Cellular and Molecular Biology, Hyderabad, PI Dr. Ishwariya Venkatesh). It presents the research question, the people, the publications, the training offered, funding and recognition, and how to get in touch.

## Positioning
A mammalian CNS axon-regeneration lab that combines bioinformatics, functional genomics (scRNA-seq, ATAC-seq, Hi-C, ChIP-seq), in vitro growth assays, in vivo injury models and behaviour; unusually open about mentoring (public one-year Training page with trainee data) and about outputs (interactive "Explorables" for papers).

## Capabilities and Constraints
- Routes: Home, Team, Training, Publications, Explorables (+ viewer), Funding, Awards, Lab Retreat, Resources (external Google Doc), Contact, Social Media.
- Data-driven content: lab-news.json, publications.json, Google Scholar and testimonial update scripts run at build.
- Light and dark themes with a persisted toggle.
- Decided with the user (2026-11-19): full visual redesign; remove neuron particle background, the embedded X/Twitter feed on Home, the Social Media page (fold into footer link) and unused leftovers (HelloWorld.vue, About.vue, patz1.html, dist); group navigation into about six items.
- All existing factual copy (research description, bios, news, awards, funding) is preserved.

## Brand Commitments
Name "Venkatesh Lab", CSIR-CCMB affiliation, existing logo (src/assets/ishlab-icon.png), funder logos in src/assets/images/logo.

## Evidence on Hand
Real microscopy imagery in src/assets/images/lab_webpage (spinal cord injury, DRG, snRNA, Hi-C, etc.), real team and award photographs, a YouTube lab video, publications and news data. No invented testimonials or metrics.

## Product Principles
- Let the science and the people lead; the microscopy is the lab's strongest asset.
- Credibility over decoration: every element earns its place for a trainee or a reviewer.
- Keep content current and easy for lab members to update (JSON/data driven).
- Accessible and fast on modest connections.
