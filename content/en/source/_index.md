---
title: Source
date: 2026-09-11
type: page
translationKey: source-page
---

<style>
.page-body > .universal-wrapper.pt-3 h1{font-size:clamp(2rem,3vw,2.6rem);margin-bottom:.35rem}
.sigma-source{max-width:100%;color:#102a43}
.sigma-source-lead{margin:0 0 1.5rem;color:#486581;font-size:1rem}
.sigma-source h1{font-size:1.45rem;margin:2rem 0 1rem;color:#102a43}
.sigma-source h2{font-size:1.3rem;font-weight:800;margin:2.5rem 0 1rem;padding-top:.5rem;color:#102a43;border-bottom:2px solid rgba(23,105,170,.16);padding-bottom:.55rem;text-align:center}
.sigma-source h3{font-size:1.05rem;margin:1.25rem 0 .7rem;color:#243b53}
.sigma-source table{width:100%;margin:0 0 2rem;border-collapse:separate;border-spacing:0;overflow:hidden;border:1px solid rgba(16,42,67,.12);border-radius:.8rem;box-shadow:0 6px 18px rgba(16,42,67,.05);font-size:.9rem}
.sigma-source th{padding:.75rem .85rem;background:#f4f8fc;color:#243b53;border-bottom:1px solid rgba(16,42,67,.14);font-size:.78rem;letter-spacing:.02em;text-align:left;white-space:nowrap}
.sigma-source td{padding:.75rem .85rem;vertical-align:middle;border-bottom:1px solid rgba(16,42,67,.09);line-height:1.5}
.sigma-source tr:last-child td{border-bottom:0}
.sigma-source tbody tr{transition:background-color 160ms ease}
.sigma-source tbody tr:hover{background:#f7fbff}
.sigma-source td:first-child{min-width:18rem;font-weight:600;overflow-wrap:anywhere}
.sigma-source td:nth-child(2){white-space:nowrap}
.sigma-source td:nth-child(3){min-width:13rem;color:#627d98;font-size:.82rem}
.sigma-source table:first-of-type{table-layout:fixed}
.sigma-source table:first-of-type th:nth-child(1),.sigma-source table:first-of-type td:nth-child(1){width:52%}
.sigma-source table:first-of-type th:nth-child(2){width:48%;min-width:0;text-align:center;color:#102a43;font-weight:700;font-size:.78rem;white-space:nowrap}
.sigma-source table:first-of-type td:nth-child(2){width:48%;min-width:0;text-align:center;color:#1769aa;font-weight:700;white-space:nowrap}
.sigma-source td a{display:inline-block;margin:.1rem .25rem .1rem 0;padding:.24rem .6rem;border:1px solid rgba(23,105,170,.25);border-radius:999px;color:#1769aa;font-size:.78rem;font-weight:700;text-decoration:none;white-space:nowrap}
.sigma-source td a:hover{background:#1769aa;color:#fff;text-decoration:none}
.sigma-source-badge{display:inline-block;margin:.1rem .1rem;padding:.08rem .38rem;border-radius:999px;background:#e8f1f8;color:#1769aa;font-size:.72rem;font-weight:800;white-space:nowrap}
@media(max-width:700px){.sigma-source table{display:block;overflow-x:auto;white-space:normal}.sigma-source th,.sigma-source td{min-width:9rem}.sigma-source td:first-child{min-width:15rem}.sigma-source td:nth-child(3){min-width:12rem}.sigma-source h2{margin-top:2rem}}

</style>
<div class="sigma-source">
<p class="sigma-source-lead">An on-site index of the SIGMA Lab's published papers, research directions, paper links, and source code.</p>

# Index of Published Papers and Code from the Lab

This repository is used to maintain an index of the papers and code from the lab's published papers.

All code links point by default to source code repositories forked or maintained under the lab account.

## Overview of Research Directions

| Research Direction | Number of Papers in Main Research Direction |
|---|:---:|
| [Spatiotemporal Data Mining](#spatiotemporal-data-mining) | 26 |
| [Graph Neural Networks](#graph-neural-networks) | 20 |
| [Graph Data Mining](#graph-data-mining) | 4 |
| [Multivariate Time Series Forecasting](#multivariate-time-series-forecasting) | 4 |
| [Edge Computing](#edge-computing) | 2 |
| [Data Mining](#data-mining) | 7 |
| [AI4DB](#ai4db) | 1 |

<a id="spatiotemporal-data-mining"></a>

## Spatiotemporal Data Mining

### Papers

| title | year | venue | paper | code |
|---|---:|---|---|---|
| ST-Imputer: Multivariate dependency-aware diffusion network with physics guidance for spatiotemporal imputation | 2026 | Information Fusion<br>(JCR Q1, CAAI A) | [Paper](https://www.sciencedirect.com/science/article/abs/pii/S1566253525011467) | [Code](https://github.com/sigma-ouc/2026-Information-Fusion-ST-Imputer) |
| Trajectory Similarity Hash Learning with Spatio-Temporal GRU | 2026 | IEEE Transactions on Big Data<br>(JCR Q1, <span class="sigma-source-badge">CCF C</span>) | [Paper](https://ieeexplore.ieee.org/abstract/document/11432961) | [Code]( https://github.com/caoyuan618/Traj-ST) |
| FlightDiff: a dual-constraint guided two-phase diffusion framework for accurate flight prediction | 2026 | GeoInformatica<br>(<span class="sigma-source-badge">CCF B</span>) | [Paper](https://link.springer.com/article/10.1007/s10707-025-00559-7) | TODO |
| Self-Supervised Cross-City Trajectory Representation Learning Based on Meta-Learning | 2026 | Proceedings of the 40th AAAI Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=4167/23680=17.6%) | [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/38658) | [Code](https://github.com/sigma-ouc/2026AAAI-MetaTRL) |
| TrajAgg: Dual-Scale Feature Aggregation with Hybrid Training for Trajectory Similarity Computation in Free Space | 2026 | Proceedings of the 40th AAAI Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=4167/23680=17.6%) | [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/38675) | [Code](https://github.com/sigma-ouc/2026AAAI-TrajAgg) |
| MA^2Traj: Diffusion network with multi-attribute aggregation for trajectory generation | 2025 | GeoInformatica<br>(<span class="sigma-source-badge">CCF B</span>) | [Paper](https://dl.acm.org/doi/abs/10.1007/s10707-025-00549-9) | TODO |
| Efficiently Counting Four-Node Motifs in Large-Scale Temporal Graphs | 2025 | The VLDB Jounral<br>(<span class="sigma-source-badge">CCF A</span>) | [Paper](https://doi.org/10.1007/s00778-025-00926-8) | TODO |
| Correlation-Attention Masked Temporal Transformer for User Identity Linkage Using Heterogeneous Mobility Data | 2025 | Proceedings of Thirty-Ninth AAAI Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=3032/12957=23.4%, Oral) | [Paper](https://doi.org/10.1609/aaai.v39i12.33418) | [Code](https://github.com/sigma-ouc/2025AAAI-Mt-Link) |
| Scalable Trajectory-User Linking with Dual-Stream Representation Networks | 2025 | Proceedings of Thirty-Ninth AAAI Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=3032/12957=23.4%, Oral) | [Paper](https://doi.org/10.1609/aaai.v39i12.33443) | [Code](https://github.com/sigma-ouc/2026AAAI-ScalableTUL) |
| Spatiotemporal-aware Trend-Seasonality Decomposition Network for Traffic Flow Forecasting | 2025 | Proceedings of Thirty-Ninth AAAI Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=3032/12957=23.4%, Oral) | [Paper](https://doi.org/10.1609/aaai.v39i11.33247) | [Code](https://github.com/sigma-ouc/2025AAAI-STDN) |
| Lightweight yet Fine-grained: A Graph Capsule Convolutional Network with Subspace Alignment for Shared-account Sequential Recommendation | 2025 | Proceedings of Thirty-Ninth AAAI Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=3032/12957=23.4%, Oral) | [Paper](https://doi.org/10.1609/aaai.v39i12.33445) | [Code](https://github.com/sigma-ouc/2025AAAI-LightGC2N) |
| Self-Supervised Trajectory Representation Learning with Multi-Scale Spatio-Temporal Feature Exploration | 2025 | Proceedings of 41th IEEE International Conference on Data Engineering<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=300/1465=20.5%) | [Paper]( 10.1109/ICDE65448.2025.00064) | [Code](https://github.com/sigma-ouc/2025ICDE-TrajRL) |
| MCN4Rec: Multi-level Collaborative Neural Network for Next Location Recommendation | 2024 | ACM Transactions on Information Systems<br>(<span class="sigma-source-badge">CCF A</span>) | [Paper](https://doi.org/10.1145/3643669) | [Code](https://github.com/sigma-ouc/2024TOIS-MCN4Rec) |
| Skillful prediction of Indian monsoon intraseasonal precipitation using Central Indian Ocean mode and machine learning | 2024 | Geophysical Research Letters<br>(JCR Q1) | [Paper]( https://doi.org/10.1029/2024gl112308) |TODO |
| Adaptive Spatio-Temporal Graph Recurrent Network for Sea Surface Temperature Forecasting | 2024 | IEEE Transactions on Geoscience and Remote Sensing<br>(CAAI A) | [Paper]( 10.1109/TGRS.2024.3502841) | TODO |
| Trajectory-User Linking via Hierarchical Spatio-Temporal Attention Networks | 2024 | ACM Transactions on Knowledge Discovery from Data<br>(<span class="sigma-source-badge">CCF B</span>) | [Paper](https://doi.org/10.1145/3635718) | [Code](https://github.com/sigma-ouc/2024TKDD-AttnTUL) |
| Cross-city Few-Shot Traffic Forecasting via Traffic Pattern Bank | 2023 | Proceedings of the 32nd ACM International Conference on Information and Knowledge Management<br>(<span class="sigma-source-badge">CCF B</span>, acceptance rate=354/1472=24%) | [Paper](https://doi.org/10.1145/3583780.3614829) | [Code](https://github.com/sigma-ouc/2023CIKM-TPB) |
| Self-supervised contrastive representation learning for large-scale trajectories | 2023 | Future Generation Computer Systems<br>(JCR Q1, <span class="sigma-source-badge">CCF C</span>) | [Paper](https://doi.org/10.1016/j.future.2023.05.033) | TODO |
| PreCLN: Pretrained-based Contrastive Learning Network for Vehicle Trajectory Prediction | 2023 | World Wide Web Journal<br>(<span class="sigma-source-badge">CCF B</span>) | [Paper](https://doi.org/10.21203/rs.3.rs-2121114/v1) | TODO |
| Mutual Distillation Learning Network for Trajectory-User Linking | 2022 | Proceedings of the 31st International Joint Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=681/4535=15%) | [Paper](http://dx.doi.org/10.24963/ijcai.2022/274) | [Code](https://github.com/sigma-ouc/2022IJCAI-MainTUL) |
| Spatio-Temporal Representation Learning with Social Tie for Personalized POI Recommendation | 2022 | Data Science and Engineering<br>(<span class="sigma-source-badge">CCF C</span>) | [Paper](https://doi.org/10.1007/s41019-022-00180-w) | TODO |
| Citywide Traffic Volume Inference with Surveillance Camera Records | 2021 | IEEE Transactions on Big Data<br>(<span class="sigma-source-badge">CCF C</span>) | [Paper]( 10.1109/TBDATA.2019.2935057) | TODO |
| Personalized POI Recommendation: Spatio-Temporal Representation Learning with Social Ties | 2021 | The 26th International Conference on Database System for Advanced Applications<br>(<span class="sigma-source-badge">CCF B</span>, acceptance rate=98/490=20%, 优秀论文) | [Paper](https://doi.org/10.1007/978-3-030-73194-6_37) | [Code](https://github.com/sigma-ouc/2021DASFAA-PPR-master) |
| Find You If You Drive: Inferring Home Locations for Vehicles with Surveillance Camera Data | 2020 | Knowledge-Based Systems<br>(<span class="sigma-source-badge">CCF C</span>) | [Paper](https://doi.org/10.1016/j.knosys.2020.105766) | TODO |
| 面向位置大数据的快速密度聚类算法 | 2018 | 软件学报<br>(<span class="sigma-source-badge">CCF A</span>) | [Paper](10.13328/j.cnki.jos.005289) | TODO |
| Discovering Evolving Moving Object Groups from Massive-Scale Trajectory Streams | 2017 | International Conference on Mobile Data Management<br>(<span class="sigma-source-badge">CCF C</span>, acceptance rate=20/75=26.7%) | [Paper](10.1109/MDM.2017.42) | TODO |

---

<a id="graph-neural-networks"></a>

## Graph Neural Networks

### Papers

| title | year | venue | paper | code |
|---|---:|---|---|---|
| Disentangled Hypergraph Network with Implicit Structure Learning for Mobility Social Relationship Inference | 2026 | Proceedings of the 35th International Joint Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF B</span>) | TODO | [Code](https://github.com/Tilamisu-zz/DHISL) |
| Dynamic Dual-Channel Asynchronous Graph Neural Network for Traffic Prediction with Missing Values | 2026 | Fundamental Research<br>(JCR Q1) | [Paper](https://www.sciencedirect.com/science/article/pii/S2667325826001652) | TODO |
| ScaleGNN: Towards Scalable Graph Neural Networks via Adaptive High-order Neighboring Feature Fusion | 2026 | Proceedings of the ACM Web Conference<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=676/3370=20.1%) | [Paper](https://dl.acm.org/doi/10.1145/3774904.3792347) | [Code](https://github.com/sigma-ouc/2026-WWW-ScaleGNN)|
| Automatic Channel Pruning by Searching with Structure Embedding for Hash Network | 2026 | Proceedings of the 40th AAAI Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=4167/23680=17.6%) | [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/39029) | TODO|
| Multiplex Heterogeneous Graph Neural Networks with Euclidean-Riemannian Mutual Space Synergy | 2026 | Proceedings of the 40th AAAI Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=4167/23680=17.6%) | [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/38536) | [Code](https://github.com/sigma-ouc/2026AAAI-MRiemGNN)|
| S²HyRec: Self-Supervised Hypergraph Sequential Recommendation | 2026 | Proceedings of the 40th AAAI Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=4167/23680=17.6%) | [Paper](https://ojs.aaai.org/index.php/AAAI/article/view/38566) | [Code](https://github.com/sigma-ouc/2026AAAI-S2HyRec)|
| Multi-Channel Hypergraph Contrastive Learning for Matrix Completion | 2025 | ACM Transactions on Information Systems<br>(<span class="sigma-source-badge">CCF A</span>) | [Paper](https://dl.acm.org/doi/full/10.1145/3768319) | [Code](https://github.com/sigma-ouc/2025TOIS-MHCL)|
| Local High-order Structure-aware Graph Neural Network for motif prediction | 2025 | Knowledge-Based Systems<br>(JCR Q1, <span class="sigma-source-badge">CCF C</span>) | [Paper](https://www.sciencedirect.com/science/article/abs/pii/S0950705125006641) | [Code](https://github.com/sigma-ouc/2025KBS-LHSGNN)|
| MaskDGNN: Self-Supervised Dynamic Graph Neural Networks with Activeness-aware Temporal Masking | 2025 | Proceedings of the 34th International Joint Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=1042/5404=19.3%) | [Paper](https://doi.org/10.24963/ijcai.2025/322) | [Code](https://github.com/sigma-ouc/2025IJCAI-MaskDGNN)|
| 面向节点分类的多层异质图神经网络 | 2025 | 软件学报<br>(<span class="sigma-source-badge">CCF A</span>) | [Paper](10.13328/j.cnki.jos.007440) | TODO|
| Dual-Channel Multiplex Graph Neural Networks for Recommendation | 2025 | IEEE Transactions on Knowledge and Data Engineering<br>(<span class="sigma-source-badge">CCF A</span>) | [Paper](10.1109/TKDE.2025.3544081) | [Code](https://github.com/sigma-ouc/2025TKDE-DCMGNN)|
| Hierarchical Graph Contrastive Learning for Review-Enhanced Recommendation | 2024 | Joint European Conference on Machine Learning and Knowledge Discovery in Databases<br>(<span class="sigma-source-badge">CCF B</span>, acceptance rate=198/826=24%) | [Paper](https://doi.org/10.1007/978-3-031-70365-2_25) | [Code](https://github.com/sigma-ouc/2024PKDD-HGCL)|
| Hypergraph Hash Learning for Efficient Trajectory Similarity Computation | 2024 | Joint European Conference on Machine Learning and Knowledge Discovery in Databases<br>(<span class="sigma-source-badge">CCF B</span>, acceptance rate=198/826=24%) | [Paper](https://doi.org/10.1145/3627673.3679555) | [Code](https://github.com/sigma-ouc/2024CIKM-HHL-Traj)|
| Multi-Relational Graph Attention Network for Social Relationship Inference from Human Mobility Data | 2024 | Proceedings of the 33rd International Joint Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=791/5651=14%) | [Paper]( https://doi.org/10.24963/ijcai.2024/256) | [Code](https://github.com/sigma-ouc/2024IJCAI-MRGAN)|
| MHGCN+: Multiplex Heterogeneous Graph Convolutional Network | 2024 | ACM Transactions on Intelligent Systems and Technology<br>(Conference Extension, Online) | [Paper]( https://doi.org/10.1145/3650046) | [Code](https://github.com/sigma-ouc/2024TIST-MHGCN-plus)|
| Multiplex Heterogeneous Graph Neural Network with Behavior Pattern Modeling | 2023 | Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=313/1416=22.1%) | [Paper](https://doi.org/10.1145/3580305.3599441) | [Code](https://github.com/sigma-ouc/2023KDD-BPHGNN)|
| Graph Structure Learning on User Mobility Data for Social Relationship Inference | 2023 | Proceedings of Thirty-Seventh AAAI Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=1721/8777=19.6%) | [Paper]( https://doi.org/10.1609/aaai.v37i4.25580) | [Code](https://github.com/sigma-ouc/2023AAAI-SRINet)|
| Dynamic Multi-View Graph Neural Networks for Citywide Traffic Inference | 2023 | ACM Transactions on Knowledge Discovery from Data<br>(<span class="sigma-source-badge">CCF B</span>) | [Paper](https://doi.org/10.1145/3564754) | [Code](https://github.com/sigma-ouc/2023PKDD-CTVI)|
| Heterogeneous graph neural network for attribute completion | 2022 | Knowledge-Based Systems<br>(JCR Q1, <span class="sigma-source-badge">CCF C</span>) | [Paper](https://doi.org/10.1016/j.knosys.2022.109171) | [Code](https://github.com/sigma-ouc/2022KBS-AC-HEN)|
| Multiplex Heterogeneous Graph Convolutional Network | 2022 | Proceedings of 28th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=254/1695=15%) | [Paper](https://doi.org/10.1145/3534678.3539482) | [Code](https://github.com/sigma-ouc/2022KDD-MHGCN)|
| Temporal Multi-view Graph Convolutional Networks for Citywide Traffic Volume Inference | 2021 | Proceedings of 21st IEEE International Conference on Data Mining<br>(<span class="sigma-source-badge">CCF B</span>, acceptance rate=198/990=20%) | [Paper](10.1109/ICDM51629.2021.00120) | [Code](https://github.com/sigma-ouc/2021ICDM-CTVI-master)|

---



---

<a id="graph-data-mining"></a>

## Graph Data Mining

### Papers

| title | year | venue | paper | code |
|---|---:|---|---|---|
| Weighted Graph Clustering via Scale Contraction and Graph Structure Learning | 2026 | Proceedings of the ACM Web Conference<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=676/3370=20.1%) | [Paper](https://dl.acm.org/doi/10.1145/3774904.3792363) | TODO |
| UMGAD: Unsupervised Multiplex Graph Anomaly Detection | 2025 | Proceedings of 41th IEEE International Conference on Data Engineering<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=300/1465=20.5%) | [Paper](10.1109/ICDE65448.2025.00278) | [Code](https://github.com/sigma-ouc/2025ICDE-UMGAD) |
| MoTTo: Scalable Motif Counting with Time-aware Topology Constraint for Large-scale Temporal Graphs | 2024 | Proceedings of the 33rd ACM International Conference on Information and Knowledge Management<br>(<span class="sigma-source-badge">CCF B</span>, acceptance rate=347/1496=23%) | [Paper](https://doi.org/10.1145/3627673.3679694) | TODO |
| Scalable Motif Counting for Large-scale Temporal Graphs | 2022 | Proceedings of 38th IEEE International Conference on Data Engineering<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=211/780=27.1%) | [Paper](10.1109/ICDE53745.2022.00244) | [Code](https://github.com/sigma-ouc/2022ICDE-FAST-temporal-motif) |
| Motif-Preserving Dynamic Attributed Network Embedding | 2021 | Proceedings of the Web Conference<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=355/1736=20.4%) | [Paper](https://doi.org/10.1145/3442381.3449821) | [Code](https://github.com/sigma-ouc/2021WWW-MTSN) |
| Fast Attributed Multiplex Heterogeneous Network Embedding | 2020 | Proceedings of the 29th ACM International Conference on Information and Knowledge Management<br>(<span class="sigma-source-badge">CCF B</span>, acceptance rate=194/970=20%) | [Paper](https://doi.org/10.1145/3340531.3411944) | [Code](https://github.com/sigma-ouc/2020CIKM-FAME) |
| Dynamic Representation Learning for Large-Scale Attributed Networks | 2020 | Proceedings of the 29th ACM International Conference on Information and Knowledge Management<br>(<span class="sigma-source-badge">CCF B</span>, acceptance rate=194/970=20%) | [Paper](https://doi.org/10.1145/3340531.3411945) | [Code](https://github.com/sigma-ouc/2020CIKM-DRLAN) |
| Student Performance Prediction based on Multi-View Network Embedding | 2020 | 3rd Chinese Conference on Pattern Recognition and Computer Vision<br>(<span class="sigma-source-badge">CCF C</span>) | [Paper](https://doi.org/10.1007/978-3-030-60636-7_11) | TODO |
| Inferring Mobility Relationship via Graph Embedding | 2018 | The 2018 ACM International Joint Conference on Pervasive and Ubiquitous Computing<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=24.8%) | [Paper](https://doi.org/10.1145/3264957) | TODO |
| Representation Learning for Large-scale Dynamic Networks | 2018 | 23rd International Conference on Database System for Advanced Applications<br>(<span class="sigma-source-badge">CCF B</span>, acceptance rate=83/360=23%) | [Paper](https://doi.org/10.1007/978-3-319-91458-9_32) | TODO |

---



---

<a id="multivariate-time-series-forecasting"></a>

## Multivariate Time Series Forecasting

### Papers

| title | year | venue | paper | code |
|---|---:|---|---|---|
| DGraFormer: Dynamic Graph Learning Guided Multi-Scale Transformer for Multivariate Time Series Forecasting | 2025 | Proceedings of the 34th International Joint Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=1042/5404=19.3%) | [Paper](https://doi.org/10.24963/ijcai.2025/391) | [Code](https://github.com/sigma-ouc/2025IJCAI-DGraFormer) |
| Non-collective Calibrating Strategy for Time Series Forecasting | 2025 | Proceedings of the 34th International Joint Conference on Artificial Intelligence<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=1042/5404=19.3%) | [Paper](https://doi.org/10.24963/ijcai.2025/371) | TODO |
| Dataset Condensation for Time Series Classification via Dual Domain Matching | 2024 | Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=409/2046=20%) | [Paper](https://doi.org/10.1145/3637528.3671675) | [Code](https://github.com/sigma-ouc/2024KDD-TimeSeriesCond) |
| Robust anomaly detection for multivariate time series through temporal GCNs and attention-based VAE | 2023 | Knowledge-Based Systems<br>(JCR Q1, <span class="sigma-source-badge">CCF C</span>) | [Paper](https://doi.org/10.1016/j.knosys.2023.110725) | [Code](https://github.com/sigma-ouc/2023KBS-MUTANT) |

---



---

<a id="edge-computing"></a>

## Edge Computing


### Papers

| title | year | venue | paper | code |
|---|---:|---|---|---|
| Decision-Aware Status Updating for Multi-AP Compute-First Networking Under Transmission Constraints | 2026 | IEEE Internet of Things Journal<br>(JCR Q1, <span class="sigma-source-badge">CCF C</span>) | [Paper](https://ieeexplore.ieee.org/document/11424561?denied=) | TODU |
| Efficient Information Updates in Compute-First Networking via Reinforcement Learning With Joint AoI and VoI | 2026 | IEEE Internet of Things Journal<br>(JCR Q1, <span class="sigma-source-badge">CCF C</span>) | [Paper](https://ieeexplore.ieee.org/abstract/document/11396674) | TODU |

---



---

<a id="data-mining"></a>

## Data Mining

### Papers

| title | year | venue | paper | code |
|---|---:|---|---|---|
| Machine Learning for Depression Screening and Intervention: an Original Circadian Rhythm Score-based Methodology | 2026 | Proceedings of the 32th ACM SIGKDD Conference on Knowledge Discovery and Data Mining<br>(<span class="sigma-source-badge">CCF A</span>, acceptance rate=243/790=30.8%) | [Paper](https://dl.acm.org/doi/10.1145/3770855.3818913) | [Code](https://github.com/sigma-ouc/2026KDD-AI4Science-CRS) |
| Scalable KDE-based top-N local outlier detection over large-scale data streams | 2020 | Knowledge-Based Systems<br>(<span class="sigma-source-badge">CCF C</span>) | [Paper](https://doi.org/10.1016/j.knosys.2020.106186) | [Code](https://github.com/sigma-ouc/2020KBS-TopNKOF) |
| Layer-constrained variational autoencoding kernel density estimation model for anomaly detection | 2020 | Knowledge-Based Systems<br>(<span class="sigma-source-badge">CCF C</span>) | [Paper](https://doi.org/10.1016/j.knosys.2020.105753) | TODO |
| Anomaly Detection in High-Dimensional Data Based on Autoregressive Flow | 2020 | 25th International Conference on Database System for Advanced Applications<br>(<span class="sigma-source-badge">CCF B</span>, acceptance rate=119/487=24.4%) | [Paper](https://doi.org/10.1007/978-3-030-59416-9_8) | TODO |
| 基于密度的Top-n局部异常点快速检测算法 | 2019 | 自动化学报<br>(<span class="sigma-source-badge">CCF A</span>) | [Paper](10.16383/j.aas.c180425) | [Code](https://github.com/sigma-ouc/2019AAS-TopNDetection) |
| Region Compatibility based Stability Assessment for Decision Trees | 2018 | Expert Systems with Applications<br>(<span class="sigma-source-badge">CCF C</span>) | [Paper](https://doi.org/10.1016/j.eswa.2018.03.036) | TODO |
| Outlier Detection over Massive-Scale Trajectory Streams | 2017 | ACM Transactions on Database Systems<br>(<span class="sigma-source-badge">CCF A</span>) | [Paper](http://dx.doi.org/10.1145/3013527) | TODO |
| An Effective and Efficient Hierarchical K-means Clustering Algorithm | 2017 | International Journal of Distributed Sensor Networks<br>(<span class="sigma-source-badge">CCF C</span>) | [Paper](https://doi.org/10.1177/1550147717728627) | TODO |

---



---

<a id="AI4DB"></a>

## AI4DB

### Papers

| title | year | venue | paper | code |
|---|---:|---|---|---|
| FlowPipe: LLM-Enhanced Conditional Generative Flow Networks for Data Preparation Pipeline Construction | 2026 | Proceedings of the ACM on Management of Data 2027<br>(<span class="sigma-source-badge">CCF A</span>) | [Paper](https://arxiv.org/abs/2606.24679) | [Code](https://github.com/KunyuNi/FlowPipe) |

---



</div>
