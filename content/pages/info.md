---
type: PageLayout
title: About
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg4.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    text: >+
      # About
      I'm a Senior Product Manager specializing in AI-powered digital products
      and enterprise solutions. I lead cross-functional teams, build product
      roadmaps, and deliver measurable growth across B2B and B2C platforms.

      Based in Dubai, I focus on AI automation, SaaS platform strategy, and
      enterprise partnerships that scale adoption and revenue.

    media:
      type: ImageBlock
      url: /images/about-photo.jpg
      altText: Meenal Singh speaking at an event
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
          - pt-16
          - pb-12
          - pl-4
          - pr-4
        textAlign: left
    type: HeroSection
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: MediaGallerySection
    colors: colors-f
    subtitle: 'Focus areas:'
    images:
      - type: ImageBlock
        url: /images/logo1.svg
        altText: AI product strategy
        caption: AI strategy
      - type: ImageBlock
        url: /images/logo2.svg
        altText: Enterprise SaaS
        caption: Enterprise SaaS
      - type: ImageBlock
        url: /images/logo3.svg
        altText: Growth analytics
        caption: Growth analytics
      - type: ImageBlock
        url: /images/logo4.svg
        altText: Automation
        caption: Automation
      - type: ImageBlock
        url: /images/logo5.svg
        altText: Partnerships
        caption: Partnerships
    spacing: 3
    columns: 5
    aspectRatio: auto
    showCaption: false
    enableHover: false
    styles:
      self:
        width: wide
        height: auto
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        textAlign: left
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: FeaturedItemsSection
    subtitle: 'Find me:'
    colors: colors-f
    items:
      - type: FeaturedItem
        actions:
          - type: Link
            label: LinkedIn
            url: 'https://www.linkedin.com/in/singh-meenal'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        actions:
          - type: Link
            label: Substack
            url: 'https://meenalsingh.substack.com/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        actions:
          - type: Link
            label: Email
            url: 'mailto:meenal.1799@gmail.com'
        styles:
          self:
            textAlign: left
    columns: 3
    spacingX: 120
    spacingY: 16
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: LabelsSection
    colors: colors-f
    subtitle: 'Skills:'
    items:
      - type: Label
        label: Product Strategy
      - type: Label
        label: Roadmapping
      - type: Label
        label: AI/ML
      - type: Label
        label: GenAI
      - type: Label
        label: SaaS
      - type: Label
        label: Enterprise Partnerships
      - type: Label
        label: Analytics
      - type: Label
        label: Stakeholder Management
  - type: FeaturedItemsSection
    subtitle: 'Downloads:'
    colors: colors-f
    items:
      - type: FeaturedItem
        actions:
          - type: Link
            label: Resume PDF
            url: '/docs/Meenal_Singh_CV.pdf'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        actions:
          - type: Link
            label: LinkedIn profile PDF
            url: '/docs/Meenal_Singh_LinkedIn_Profile.pdf'
        styles:
          self:
            textAlign: left
    columns: 2
    spacingX: 120
    spacingY: 16
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: TextSection
    variant: variant-a
    subtitle: 'Contact:'
    colors: colors-f
    text: |
      [meenal.1799@gmail.com](mailto:meenal.1799@gmail.com)
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: FeaturedItemsSection
    colors: colors-f
    items:
      - type: FeaturedItem
        subtitle: 'Experience:'
        text: |-
          **Trianz** — Product Manager (Mar 2024 - Present)

          **ACT Fibernet** — Product Manager (Feb 2022 - Mar 2024)

          **Ford Motor Company** — Software Developer (Jul 2018 - Jun 2019)
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        subtitle: 'Highlights:'
        text: |-
          * Delivered 15+ AWS security connector products valued at $4.5M
          * Contributed to 4 patents in GenAI and business intelligence
          * Achieved 80% reduction in manual effort via AI automation
          * Drove 7% conversion lift and 10% customer acquisition growth
        styles:
          self:
            textAlign: left
    columns: 2
    spacingX: 60
    spacingY: 60
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        textAlign: left
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: ContactSection
    backgroundSize: full
    title: Let's talk
    colors: colors-f
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
        - name: message
          label: Message
          hideLabel: true
          placeholder: Tell me about your project
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
          - ml-4
          - mr-4
        padding:
          - pt-12
          - pb-12
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---
