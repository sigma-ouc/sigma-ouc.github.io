(() => {
  const initPublicationFigures = () => {
    const archive = document.querySelector('.sigma-publications');
    if (!archive) return;

    // The first twelve figures follow the publication order in the archive.
    const orderedFigures = {
      C51: '/images/publications/01.png',
      C50: '/images/publications/02.png',
      J48: '/images/publications/J48.png',
      J47: '/images/publications/J47.png',
      J46: '/images/publications/J46.png',
      J45: '/images/publications/J45.png',
      C49: '/images/publications/C49.png',
      C48: '/images/publications/04.png',
      C47: '/images/publications/05.png',
      C46: '/images/publications/06.png',
      C45: '/images/publications/07.png',
      C44: '/images/publications/08.png',
      J44: '/images/publications/09.png',
      J43: '/images/publications/10.png?v=20260920-1',
      J42: '/images/publications/11.png',
      J41: '/images/publications/12.png',
      J40: '/images/publications/13.png',
      J39: '/images/publications/14.png',
      J38: '/images/publications/15.png',
      C43: '/images/publications/16.png',
      C42: '/images/publications/17.png',
      C41: '/images/publications/18.png',
      C40: '/images/publications/19.png',
      C38: '/images/publications/C38.png',
      C37: '/images/publications/C37.png',
      C36: '/images/publications/C36.png',
      C35: '/images/publications/C35.png',
      C34: '/images/publications/C34.png',
      C33: '/images/publications/C33.png',
      C32: '/images/publications/C32.png',
      C31: '/images/publications/C31.png',
      J31: '/images/publications/J31.png?v=20260920-1',
      J30: '/images/publications/J30.png?v=20260920-1',
      C29: '/images/publications/C29.png?v=20260920-1',
      C28: '/images/publications/C28.png?v=20260920-1',
      C27: '/images/publications/C27.png?v=20260920-1',
      J29: '/images/publications/J29.png?v=20260920-1',
      J28: '/images/publications/J28.png?v=20260920-1',
      J27: '/images/publications/J27.png?v=20260920-1',
      J37: '/images/publications/J37.png',
      C26: '/images/publications/C26.png',
      C25: '/images/publications/C25.png',
    };

    // Publication figures supplied with paper-title filenames. Keyed by paper ID
    // so archive reordering cannot change the image assigned to a paper.
    const namedFigures = {
      C52: '/images/publications/Coupling Multi-Physics Processes and Multi-Scale Data Correlations for Environmental Spatiotemporal Forecasting.png',
      J53: '/images/publications/可解释证据增强的连续时间动态图神经网络.png',
      J52: '/images/publications/动态增强双图协同学习的多元时间序列预测网络.png',
      J49: '/images/publications/Mutual Protein-Molecule Hash Learning for TargetedDrug Virtual Screening.png',
      J50: '/images/publications/Efficient Discovery of Motif Transition Process forLarge-Scale Temporal Graphs.png',
      J51: '/images/publications/Trajectory Data Management and Mining A Survey From Deep Learning to the LLM Era.png',
      C39: '/images/publications/TrajAgg Dual-Scale Feature Aggregation with Hybrid Training for Trajectory Similarity Computation in Free Space.png',
      C40: '/images/publications/Self-Supervised Cross-City Trajectory Representation Learning Based on Meta-Learning.png',
      C41: '/images/publications/Self-Supervised Hypergraph Sequential Recommendation.png',
      C42: '/images/publications/Multiplex Heterogeneous Graph Neural Networks with Euclidean-Riemannian Mutual Space Synergy.png',
      C43: '/images/publications/Automatic Channel Pruning by Searching with Structure Embedding for Hash Network.png',
      C47: '/images/publications/Disentangled Hypergraph Network with Implicit Structure Learning for Mobility Social Relationship Inference.png',
      C48: '/images/publications/Dual-Channel Hybrid Graph Neural Network for Mobility Social Relationship Inference.png',
      J38: '/images/publications/FlightDiff a dual-constraint guided two-phase diffusion framework for accurate flight prediction.png',
      J39: '/images/publications/Dynamic Dual-Channel Asynchronous Graph Neural Network for Traffic Prediction with Missing Values.png',
      J40: '/images/publications/Object-guided Multi-granularity unsupervised hashing for image retrieval.png',
      J41: '/images/publications/Trajectory Similarity Hash Learning with Spatio-Temporal GRU.png',
      J44: '/images/publications/ST-Imputer Multivariate dependency-aware diffusion network with physics guidance for spatiotemporal imputation.png',
      C30: '/images/publications/Self-supervised Trajectory Representation Learning with Multi-scale Spatio-temporal Feature Exploration.png',
      C32: '/images/publications/Spatiotemporal-aware Trend-Seasonality Decomposition Network for Traffic Flow Forecasting.png',
      C34: '/images/publications/Correlation Attention Masked Temporal Transformer for User Identity Linkage using Heterogeneous Mobility Data.png',
      C36: '/images/publications/Non-collective Calibrating Strategy for Time Series Forecasting.png',
      J32: '/images/publications/Dual-Channel Multiplex Graph Neural Networks for Recommendation.png',
      J33: '/images/publications/面向节点分类的多层异质图神经网络.png',
      J34: '/images/publications/Efficiently Counting Four-Node Motifs in Large-Scale Temporal Graphs.png',
      J35: '/images/publications/Local High-order Structure-aware Graph Neural Network for Motif Prediction.png',
      J36: '/images/publications/Diffusion Network with Multi-attribute Aggregation for Trajectory Generation.png',
      C23: '/images/publications/ST-MoE Spatio-temporal Mixture of Experts for Multivariate Time Series Forecasting.png',
      C24: '/images/publications/DeepNWP4Wind A Wind Forcasting Correction Solution in View of Multi-Criteria Evaluation.png',
      J22: '/images/publications/OSGNN Original graph and Subgraph aggregated Graph Neural Network.png',
      C16: '/images/publications/Scalable Motif Counting for Large-scale Temporal Graphs.png',
      C17: '/images/publications/Mutual Distillation Learning Network for Trajectory-User Linking.png',
      C18: '/images/publications/Multi-Behavior Hypergraph-Enhanced Transformer for Next-Item Recommendation.png',
      C19: '/images/publications/Multiplex Heterogeneous Graph Convolutional Network.png',
      J18: '/images/publications/Spatio-Temporal Representation Learning with Social Tie for Personalized POI Recommendation.png',
      J19: '/images/publications/Heterogeneous Graph Neural Network for Attribute Completion.png',
      C13: '/images/publications/Personalized POI Recommendation Spatio-Temporal Representation Learning with Social Ties.png',
      C14: '/images/publications/Motif-Preserving Dynamic Attributed Network Embedding.png',
      C15: '/images/publications/Temporal Multi-view Graph Convolutional Networks for Citywide Traffic Volume Inference.png',
      J17: '/images/publications/Citywide Traffic Volume Inference with Surveillance Camera Records.png',
      C10: '/images/publications/Student Performance Prediction based on Multi-View Network Embedding.png',
      C11: '/images/publications/Dynamic Representation Learning for Large-Scale Attributed Networks.png',
      C12: '/images/publications/Fast Attributed Multiplex Heterogeneous Network Embedding.png',
      C9: '/images/publications/Anomaly Detection in High-dimensional Data Based on Autoregressive Flow.png',
      J11: '/images/publications/Ordering-Based Kalman Filter Selective Ensemble for Classification.png',
      J12: '/images/publications/Shape-optimizing mesh warping method for stereoscopic panorama stitching.png',
      J13: '/images/publications/Layer-constrained Variational Autoencoding Kernel Density Estimation Model for Anomaly Detection.png',
      J14: '/images/publications/Find You If You Drive Inferring Home Locations for Vehicles with Surveillance Camera Data.png',
      J15: '/images/publications/Speech Emotion Recognition Based on Robust Discriminative Sparse Regression.png',
      J16: '/images/publications/Scalable KDE-based Top-n Local Outlier Detection over Large-Scale Data Streams.png',
      C8: '/images/publications/Joint Modeling of Dense and Incomplete Trajectories for Citywide Traffic Volume Inference.png',
      C6: '/images/publications/Representation Learning for Large-scale Dynamic Networks.png',
      C7: '/images/publications/Inferring Mobility Relationship using Graph embedding.png',
      J8: '/images/publications/A Parameter Space Framework for Online Outlier Detection Over High-Volume Data Streams.png',
      J9: '/images/publications/Region Compatibility based Stability Assessment for Decision Trees.png',
      C5: '/images/publications/Discovering Moving Object Evolving Groups from Massive Trajectory Streams.png',
      J4: '/images/publications/An Effective and Efficient Hierarchical K-means Clustering Algorithm.png',
      J5: '/images/publications/Outlier Detection over Massive-Scale Trajectory Streams.png',
    };

    const figures = {
      ...orderedFigures,
      ...namedFigures,
      C20: '/images/publications/C20.png?v=20260920-1',
      J21: '/images/publications/J21.png?v=20260920-1',
      J20: '/images/publications/J20.png?v=20260920-1',
      C21: '/images/publications/C21.png?v=20260920-1',
      C22: '/images/publications/C22.png?v=20260920-1',
      J26: '/images/publications/J26.png?v=20260920-1',
      J25: '/images/publications/J25.png?v=20260920-1',
      J24: '/images/publications/J24.png?v=20260920-1',
      J23: '/images/publications/J23.png?v=20260920-1',
      C25: '/images/publications/C25.png',
      C26: '/images/publications/C26.png',
      ...(window.SIGMA_PUBLICATION_FIGURES || {}),
    };
    const fallbackFigures = [
      '/images/publications/01.png',
      '/images/publications/02.png',
      '/images/publications/03.png',
      '/images/publications/04.png',
      '/images/publications/05.png',
      '/images/publications/06.png',
      '/images/publications/07.png',
      '/images/publications/08.png',
      '/images/publications/09.png',
      '/images/publications/10.png',
      '/images/publications/11.png',
      '/images/publications/12.png',
      '/images/publications/13.png',
      '/images/publications/14.png',
      '/images/publications/15.png',
      '/images/publications/16.png',
      '/images/publications/17.png',
      '/images/publications/18.png',
      '/images/publications/19.png',
    ];
    const publicationsWithoutFigures = new Set();
    const cards = archive.querySelectorAll(':scope > p');
    const lightbox = document.createElement('div');
    lightbox.className = 'sigma-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Enlarged framework figure');
    lightbox.innerHTML = '<button class="sigma-lightbox-close" type="button" aria-label="Close enlarged figure">×</button><img alt="">';
    document.body.appendChild(lightbox);
    const lightboxImage = lightbox.querySelector('img');
    let zoomScale = 1;
    const resetZoom = () => {
      zoomScale = 1;
      lightboxImage.style.transform = 'scale(1)';
    };
    const zoomWithWheel = (event) => {
      if (!lightbox.classList.contains('is-open')) return;
      event.preventDefault();
      zoomScale = Math.min(4, Math.max(1, zoomScale + (event.deltaY < 0 ? 0.2 : -0.2)));
      lightboxImage.style.transform = `scale(${zoomScale})`;
    };
    lightbox.addEventListener('wheel', zoomWithWheel, { passive: false });
    const closeLightbox = () => {
      resetZoom();
      lightbox.classList.remove('is-open');
    };
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox || event.target.classList.contains('sigma-lightbox-close')) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLightbox();
    });

    cards.forEach((card, index) => {
      const match = card.textContent.trim().match(/^([CJ]\d+)\./);
      if (card.dataset.figureReady === 'true') return;

      const paperId = match ? match[1] : null;
      const copy = document.createElement('div');
      copy.className = 'paper-copy';
      copy.innerHTML = card.innerHTML;
      // Keep the publication ID internally for figure matching, but hide it from the visible card.
      if (paperId && copy.firstChild && copy.firstChild.nodeType === Node.TEXT_NODE) {
        copy.firstChild.textContent = copy.firstChild.textContent.replace(/^[CJ]\d+\.\s*/, '');
      }

      if (!paperId || publicationsWithoutFigures.has(paperId)) {
        card.classList.add('sigma-publication-no-figure');
        card.replaceChildren(copy);
        card.dataset.figureReady = 'true';
        return;
      }

      const figure = document.createElement('figure');
      figure.className = 'paper-figure';
      figure.setAttribute('aria-label', `${paperId} framework figure`);
      figure.setAttribute('tabindex', '0');

      // Older papers reuse the available figures so every publication has a visual.
      const imagePath = figures[paperId] || fallbackFigures[index % fallbackFigures.length];
      if (imagePath) {
        const image = document.createElement('img');
        image.src = imagePath;
        image.alt = `${paperId} illustrative research framework`;
        image.loading = 'lazy';
        const openLightbox = () => {
          resetZoom();
          lightboxImage.src = image.src;
          lightboxImage.alt = image.alt;
          lightbox.classList.add('is-open');
        };
        image.addEventListener('click', openLightbox);
        figure.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openLightbox();
          }
        });
        image.addEventListener('error', () => {
          figure.innerHTML = '<div class="paper-figure-placeholder"><span>＋</span><small>Illustrative framework</small></div>';
        });
        figure.appendChild(image);
      } else {
        figure.innerHTML = '<div class="paper-figure-placeholder"><span>＋</span><small>Illustrative framework</small></div>';
      }

      card.replaceChildren(figure, copy);
      card.dataset.figureReady = 'true';
    });

    archive.classList.add('is-gallery-ready');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPublicationFigures);
  } else {
    initPublicationFigures();
  }
})();
