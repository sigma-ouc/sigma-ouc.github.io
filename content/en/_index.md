---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  # - block: slider
  #   content:
  #     slides:
  #     - title: 👋 Welcome to the group
  #       content: Take a look at what we're working on...
  #       align: center
  #       background:
  #         image:
  #           filename: coders.jpg
  #           filters:
  #             brightness: 0.9
  #         position: right
  #         color: '#666'
  #     - title: 👋 Welcome to the group
  #       content: Take a look at what we're working on...
  #       align: center
  #       background:
  #         image:
  #           filename: contact.jpg
  #           filters:
  #             brightness: 0.7
  #         position: center
  #         color: '#555'
  #     - title: 👋 Welcome to the group
  #       content: Take a look at what we're working on...
  #       align: center
  #       background:
  #         image:
  #           filename: welcome.jpg
  #           filters:
  #             brightness: 0.5
  #         position: center
  #         color: '#333'
  #       # link:
  #       #   icon: graduation-cap
  #       #   icon_pack: fas
  #       #   text: Join Us
  #       #   url: ../contact/
  #   design:
  #     # Slide height is automatic unless you force a specific height (e.g. '400px')
  #     slide_height: ''
  #     is_fullscreen: true
  #     # Automatically transition through slides?
  #     loop: false
  #     # Duration of transition between slides (in ms)
  #     interval: 2000


  - block: hero
    content:
      title: |
        <p style="font-size: 0.8em;">  
        SIGMA Group@OUC
        </p>   
      image:
        filename: heying.jpg
      text: |
        <p style="font-size: 0.77em;">  <br>
        The SIGMA Research Group, established under the Institute of Artificial Intelligence at Ocean University of China, specializes in cutting-edge research areas including data mining, machine learning, and database systems. With a particular focus on modeling novel problems and developing effective and scalable algorithms for large-scale real-world applications, including but not limited to intelligent transportation, urban computing, social computing, recommendation systems, and spatiotemporal systems.
        </p>   
  # - block: slider
  #   content:
  #     slides:
  #       - title: Slide One
  #         image:
  #           filename: welcome.jpg

  #       - title: Slide two
  #         image:
  #           filename: coders.jpg    

  - block: collection
    content:
      title: Research
      subtitle:
      text:
      count: 4
      filters:
        author: ""
        category: ""
        exclude_featured: false
        publication_type: ""
        tag: ""
      offset: 0
      order: desc
      page_type: research
    design:
      view: showcase
      columns: "1"

  - block: collection
    content:
      title: Latest News
      subtitle:
      text:
      count: 3
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: list
      columns: '1'
  
  # - block: markdown
  #   content:
  #     title:
  #     subtitle: ''
  #     text:
  #   design:
  #     columns: '1'
  #     background:
  #       image: 
  #         filename: coders.jpg
  #         filters:
  #           brightness: 1
  #         parallax: false
  #         position: center
  #         size: cover
  #         text_color_light: true
  #     spacing:
  #       padding: ['20px', '0', '20px', '0']
  #     css_class: fullscreen

  # - block: collection
  #   content:
  #     title: Latest Preprints
  #     text: ""
  #     count: 5
  #     filters:
  #       folders:
  #         - publication
  #       publication_type: 'article'
  #   design:
  #     view: citation
  #     columns: '1'
#   - block: markdown
#     id: papers
#     content:
#       title: Section 1
#       subtitle: A subtitle
#       text: Add any **markdown** formatted content here - text, images, videos, galleries - and even HTML code!

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1' # Choose how many columns the section has. Valid values: '1' or '2'.

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        <div style="width: 30%; margin: 0 auto; overflow: hidden;">
          <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=QJLp3xQ-w7019B5p3jHJSpwxfsmjIoKGPvyGMIRtuXU&cl=ffffff&w=a"></script>
        </div>
---
