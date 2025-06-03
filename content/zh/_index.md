---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
        <p style="font-size: 0.8em;">  
        SIGMA Group@OUC
        </p>     
      image:
        filename: heying.jpg
      text: |
        <p style="font-size: 0.88em;">  <br>
        SIGMA研究组依托于中国海洋大学人工智能研究院，专注于数据挖掘、机器学习、以及数据库系统等前沿领域研究，尤其关注于为大规模真实应用建模新问题并提出有效可扩展的算法，包括但不限于智能交通、城市计算、社交计算、推荐系统和时空系统。
        </p>    

  - block: collection
    content:
      title: 近期动态
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

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="团队成员 →" %}}
    design:
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=QJLp3xQ-w7019B5p3jHJSpwxfsmjIoKGPvyGMIRtuXU&cl=ffffff&w=a"></script>
---
