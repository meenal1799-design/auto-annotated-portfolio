---
type: ProjectFeedLayout
title: Projects
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 50
projectFeed:
  type: ProjectFeedSection
  colors: colors-f
  showDate: false
  showDescription: true
  showReadMoreLink: true
  showFeaturedImage: true
  variant: variant-a
  styles:
    self:
      width: narrow
      padding:
        - pt-0
        - pl-4
        - pr-4
        - pb-12
topSections:
  - type: HeroSection
    title: Selected work
    subtitle: Enterprise platforms, growth programs, and AI-led initiatives.
    actions: []
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-16
          - pb-16
          - pl-4
          - pr-4
        flexDirection: row
        textAlign: left
bottomSections:
  - type: ContactSection
    backgroundSize: full
    title: Have a product challenge to solve?
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
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---
