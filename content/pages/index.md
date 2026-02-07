---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: 'Meenal Singh - Product Manager (AI & Digital Products)'
    subtitle: >-
      I lead AI-powered product strategy and enterprise partnerships, scaling
      SaaS products and automation that drive measurable growth.
    media:
      type: ImageBlock
      url: /images/profile-photo.jpg
      altText: Meenal Singh
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        flexDirection: row
        textAlign: left
    type: HeroSection
    actions:
      - type: Button
        label: View work
        url: /projects
        showIcon: true
        icon: arrow-right
      - type: Button
        label: Download resume
        url: /docs/Meenal_Singh_CV.pdf
        style: secondary
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all projects
        url: /projects
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-c
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
    title: Selected work
    subtitle: Product launches, enterprise connectors, and growth initiatives.
  - type: FeaturedItemsSection
    elementId: ''
    colors: colors-f
    title: Insights
    subtitle: Recent LinkedIn notes on AI strategy, workflows, and agents.
    items:
      - type: FeaturedItem
        title: AI strategy for business adoption
        actions:
          - type: Link
            label: Read on LinkedIn
            url: https://www.linkedin.com/posts/singh-meenal_uaebusiness-dubaitech-aistrategy-share-7424349186105733121-GcN0
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: AI workflows and the future of work
        actions:
          - type: Link
            label: Read on LinkedIn
            url: https://www.linkedin.com/posts/singh-meenal_aiworkflows-futureofwork-uaeinnovation-share-7421424515206918145-MLCZ
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: NotebookLM, SaaS, and AI agents
        actions:
          - type: Link
            label: Read on LinkedIn
            url: https://www.linkedin.com/posts/singh-meenal_notebooklm-saas-aiagents-activity-7414512373220409344-xb38
        styles:
          self:
            textAlign: left
    columns: 3
    spacingX: 24
    spacingY: 24
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-48
          - pl-4
          - pr-4
        textAlign: left
  - type: ContactSection
    elementId: contact
    colors: colors-f
    backgroundSize: full
    title: Have a product challenge to solve?
    text: >-
      Share your goals, timelines, and constraints. I'll reply with next steps
      and availability.
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: 1/2
          type: EmailFormControl
        - name: project
          label: Project
          hideLabel: true
          placeholder: What are you working on?
          isRequired: true
          width: full
          type: TextareaFormControl
      submitLabel: Send message
      styles:
        self:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---
