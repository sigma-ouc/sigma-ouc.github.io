---
# SIGMA@OUC homepage
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: SIGMA Research Group
      image:
        filename: heying.jpg
      text: |
        Data mining, machine learning, and intelligent systems for complex real-world data.

        Based at the Institute of Artificial Intelligence, Ocean University of China, we design scalable models and algorithms for urban computing, recommendation, transportation, and spatiotemporal applications.
      cta:
        text: Explore our research
        url: ./research/
        icon: arrow-right
        icon_pack: fas
    design:
      columns: '2'
      background:
        color: '#f4f8fc'
      spacing:
        padding: ['2.5rem', '0', '2.25rem', '0']

  - block: features
    content:
      title: What we work on
      items:
        - name: Graph learning
          description: Representation learning and scalable algorithms for complex heterogeneous networks.
          icon: project-diagram
          icon_pack: fas
        - name: Spatiotemporal intelligence
          description: Models that understand movement, time, place, and the dynamics of urban systems.
          icon: route
          icon_pack: fas
        - name: Applied data mining
          description: Research that connects principled methods with transportation, recommendation, and social applications.
          icon: chart-line
          icon_pack: fas
    design:
      columns: '3'
      background:
        color: '#ffffff'
      spacing:
        padding: ['4rem', '0', '3rem', '0']

  - block: markdown
    content:
      title: Research directions
      subtitle: ''
      text: |
        <style>
          .sigma-home-research-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 1.5rem; }
          .sigma-home-research-card { display: grid; grid-template-columns: minmax(18rem, 42%) minmax(0, 1fr); min-width: 0; overflow: hidden; border: 1px solid rgba(16, 42, 67, 0.12); border-radius: 0.9rem; background: #fff; color: #102a43; text-decoration: none; box-shadow: 0 8px 24px rgba(16, 42, 67, 0.05); transition: transform 180ms ease, box-shadow 180ms ease; }
          .sigma-home-research-card:hover { color: #102a43; text-decoration: none; transform: translateY(-4px); box-shadow: 0 16px 32px rgba(16, 42, 67, 0.12); }
          .sigma-home-research-card img { width: 100%; height: 15rem; object-fit: cover; border-radius: 0; }
          .sigma-home-research-card-body { display: flex; flex: 1; flex-direction: column; justify-content: center; padding: 1.35rem 1.5rem; }
          .sigma-home-research-card-body h3 { margin: 0 0 0.65rem; color: #102a43; font-size: 1rem; }
          .sigma-home-research-card-body p { margin: 0; color: #486581; font-size: 0.88rem; line-height: 1.65; }
          .wg-features .featurette > [class*='col-sm-4'] { padding: 1.75rem 1.4rem; border-radius: 0.9rem; transition: transform 180ms ease, box-shadow 180ms ease; }
          .wg-features .featurette > [class*='col-sm-4']:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(16, 42, 67, 0.1); }
          .wg-features .featurette-icon { width: 2.75rem; height: 2.75rem; }
          .wg-collection .view-list-item { padding: 1rem 0; border-bottom: 1px solid rgba(16, 42, 67, 0.12); }
          .wg-collection .view-list-item:last-child { border-bottom: 0; }
          .wg-collection .pub-icon { color: #1769aa; margin-right: 0.5rem; }
          .sigma-home-news-list { max-width: 54rem; margin: 1.5rem auto 0; }
          .sigma-home-news-item { display: grid; grid-template-columns: 7rem 1.25rem minmax(0, 1fr); gap: 0.75rem; align-items: start; padding: 1rem 0; border-bottom: 1px solid rgba(16, 42, 67, 0.12); }
          .sigma-home-news-item:last-of-type { border-bottom: 0; }
          .sigma-home-news-item time { color: #1769aa; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.03em; }
          .sigma-home-news-item > span { padding-top: 0.2rem; color: #1769aa; font-size: 0.85rem; }
          .sigma-home-news-item p { margin: 0; color: #486581; line-height: 1.6; }
          .sigma-home-news-list > p a { color: #1769aa; font-weight: 700; text-decoration: none; }
          .wg-hero .row { align-items: flex-start; }
          .wg-hero .hero-media { align-self: flex-start; margin-top: 0; }
          .wg-hero .hero-title { max-width: none; margin-bottom: 1rem; font-size: clamp(1.9rem, 2.8vw, 2.75rem); line-height: 1.08; }
          .wg-hero .hero-lead { max-width: 34rem; font-size: 1.05rem; line-height: 1.58; }
          .wg-hero .cta-btns { margin-top: 1.35rem; }
          .wg-hero .cta-btns .btn { padding: 0.75rem 1.35rem; border-radius: 999px; transition: box-shadow 180ms ease, transform 180ms ease; }
          .wg-hero .cta-btns .btn:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(23, 105, 170, 0.22); }
          .sigma-home-research-grid > div:nth-child(even) .sigma-home-research-card { grid-template-columns: minmax(0, 1fr) minmax(18rem, 42%); }
          .sigma-home-research-grid > div:nth-child(even) .sigma-home-research-card img { grid-column: 2; grid-row: 1; }
          .sigma-home-research-grid > div:nth-child(even) .sigma-home-research-card-body { grid-column: 1; grid-row: 1; }
          @media (max-width: 700px) { .sigma-home-research-card, .sigma-home-research-grid > div:nth-child(even) .sigma-home-research-card { grid-template-columns: 1fr; } .sigma-home-research-card img, .sigma-home-research-grid > div:nth-child(even) .sigma-home-research-card img { grid-column: 1; grid-row: 1; height: 12rem; } .sigma-home-research-grid > div:nth-child(even) .sigma-home-research-card-body { grid-column: 1; grid-row: 2; } .sigma-home-news-item { grid-template-columns: 6.25rem 1.1rem minmax(0, 1fr); gap: 0.5rem; } }
        </style>
        <div class="sigma-home-research-grid">
          <div>
            <a class="sigma-home-research-card" href="./research/spatiotemporal_data_mining_/">
              <img class="card-img-top" src="/en/research/spatiotemporal_data_mining_/featured.png" alt="Spatiotemporal Data Mining">
              <div class="sigma-home-research-card-body"><h3>Spatiotemporal Data Mining</h3><p>Spatiotemporal Data Mining focuses on extracting knowledge and patterns from massive datasets with temporal and spatial dimensions, particularly large-scale trajectory data from moving objects. It involves developing machine learning-based modeling frameworks and computational paradigms to tackle real-world challenges in downstream spatiotemporal applications.</p></div>
            </a>
          </div>
          <div>
            <a class="sigma-home-research-card" href="./research/gnns/">
              <img class="card-img-top" src="/en/research/gnns/featured.png" alt="Graph Neural Networks">
              <div class="sigma-home-research-card-body"><h3>Graph Neural Networks</h3><p>Graph Neural Networks (GNNs) specialize in learning effective representation learning for large-scale complex graph-structured data, with particular emphasis on massive multi-layer heterogeneous graph networks. This research domain focuses on developing scalable GNN architectures tailored for complex graph networks with billions of nodes/edges, while enhancing performance across diverse graph mining tasks such as recommendation systems, anomaly detection, and beyond.</p></div>
            </a>
          </div>
          <div>
            <a class="sigma-home-research-card" href="./research/graph_data_mining/">
              <img class="card-img-top" src="/en/research/graph_data_mining/featured.png" alt="Graph Data Mining">
              <div class="sigma-home-research-card-body"><h3>Graph Data Mining</h3><p>Graph Data Mining focuses on discovering frequent and meaningful subgraph patterns (e.g., network motifs) from large-scale temporal graphs. It involves designing highly scalable and parallelizable algorithms to enable efficient mining and analysis of massive temporal graphs on modern multi-core computing architectures.</p></div>
            </a>
          </div>
          <div>
            <a class="sigma-home-research-card" href="./research/intelligent_transportation_systems/">
              <img class="card-img-top" src="/en/research/intelligent_transportation_systems/featured.png" alt="Intelligent Transportation Systems">
              <div class="sigma-home-research-card-body"><h3>Intelligent Transportation Systems</h3><p>Intelligent Transportation Systems aim to enhance urban mobility by leveraging large-scale traffic observation data and advanced machine learning techniques. This research direction focuses on developing data-driven predictive models for accurate traffic flow estimation, including vehicle and pedestrian dynamics, to optimize existing urban transportation infrastructure.</p></div>
            </a>
          </div>
        </div>
    design:
      columns: '1'
      spacing:
        padding: ['4rem', '0', '4rem', '0']

  - block: markdown
    content:
      title: Latest news
      subtitle: Recent publications, awards, and group updates
      text: |
        <div class="sigma-home-news-list">
          <div class="sigma-home-news-item"><time datetime="2026-06-13">13 Jun 2026</time><span class="fas fa-newspaper" aria-hidden="true"></span><p>One paper was accepted by <strong>SIGMOD 2027</strong> (<strong>Kunyu Ni</strong> as the first author).</p></div>
          <div class="sigma-home-news-item"><time datetime="2026-05-17">17 May 2026</time><span class="fas fa-newspaper" aria-hidden="true"></span><p>One paper was accepted by the <strong>KDD 2026 AI4Science Track</strong> (<strong>Shuo Lian</strong> as the co-first author).</p></div>
          <div class="sigma-home-news-item"><time datetime="2026-05-01">01 May 2026</time><span class="fas fa-newspaper" aria-hidden="true"></span><p>Four papers were accepted by <strong>IJCAI 2026</strong> (<strong>Shaoxuan Gu, Liangkun Chen, Jingjing Zhu, and Yingjie Chen</strong> as first authors).</p></div>
          <p class="mt-3"><a href="./news/">See all posts <span aria-hidden="true">→</span></a></p>
        </div>
    design:
      columns: '1'
      spacing:
        padding: ['3rem', '0', '3rem', '0']

  - block: markdown
    content:
      title: Work with us
      subtitle: Meet the people behind the research
      text: |
        We are a collaborative group working across data mining, machine learning, and intelligent systems. Learn about our members, projects, and recent work.

        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
      background:
        color: '#0f3557'
        text_color_light: true
      spacing:
        padding: ['4rem', '0', '4rem', '0']

  - block: markdown
    content:
      text: |
        <div class="container-fluid sigma-links">
          <div class="row justify-content-center">
            <div class="col-12 col-md-6 text-center">
              <h5>LINKS</h5>
              <a class="mr-3" href="https://www.ai-ouc.cn/" target="_blank" rel="noopener">Institute of Artificial Intelligence</a>
              <a href="https://it.ouc.edu.cn/" target="_blank" rel="noopener">Faculty of Information Science and Engineering</a>
            </div>
          </div>
        </div>
    design:
      columns: '1'
      spacing:
        padding: ['2rem', '0', '2rem', '0']
---
