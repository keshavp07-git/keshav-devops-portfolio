# Keshav Prajapati — DevOps & Cloud Engineer Portfolio

A complete, production-quality personal portfolio website built for **Keshav Prajapati**, Junior DevOps / Cloud Engineer. Designed with Google Material Design 3 principles, technical credibility, authentic project evidence, and seamless recruiter usability.

---

## 🚀 Live Preview & Local Execution

The website is running on the local Vite preview server:
- **Local URL:** [http://localhost:4173/](http://localhost:4173/)
- **Live Netlify URL (Resume Reference):** [https://keshav07.netlify.app](https://keshav07.netlify.app)
- **GitHub Profile:** [https://github.com/keshavp07-git](https://github.com/keshavp07-git)
- **LinkedIn Profile:** [https://linkedin.com/in/keshav-prajapati-912bab168](https://linkedin.com/in/keshav-prajapati-912bab168)
- **Direct Email:** [keshav.prajapati830@gmail.com](mailto:keshav.prajapati830@gmail.com)

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 + TypeScript
- **Bundler & Build Tool:** Vite 8.3
- **Styling:** Tailwind CSS v4 configured with Google Material Design 3 dark-native design tokens
- **Theme:** Permanent Dark Theme (`#111827` background, `#1B2435` surfaces, `#2D3748` borders)
- **Icons:** Lucide Icons & Custom SVG brand icons
- **Modals & Viewers:**
  - **Request Resume Modal:** Accessible dialog with URL-encoded Gmail compose generator & mailto fallback
  - **Case Study Modal:** Deep-dive technical explorer for Featured Projects (IaC, CI matrix, GitOps reconciliation, Networking, Observability)
  - **Architecture Diagram Viewer:** Fullscreen pan & zoom viewer with scaling controls and keyboard accessibility

---

## 📂 Project Structure

```
keshav-devops-portfolio/
├── dist/                              # Production build output
├── public/
│   └── assets/                        # Real verified architecture diagrams & screenshots
│       ├── gitops-eks-architecture.png
│       ├── gitops-eks-animation.gif
│       ├── online-boutique-services.png
│       ├── online-boutique-ui.png
│       ├── prime-video-pipeline-overview.png
│       ├── prime-argocd-healthy.png
│       ├── prime-jenkins-credentials.png
│       ├── prime-video-app-ui.png
│       ├── vprofile-architecture.png
│       ├── ecommerce-multitier-architecture.png
│       ├── aws-cicd-architecture.png
│       ├── aws-to-gcp-migration.png
│       ├── lambda-automation-flow.png
│       └── Keshav_Prajapati_DevOps_Resume_Updated.pdf
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx           # Authentic narrative & education summary
│   │   ├── AdditionalProjectsSection.tsx # Projects 3, 4, 5, 6 with diagram previews
│   │   ├── CaseStudyModal.tsx         # Comprehensive tabbed deep-dive for Projects 1 & 2
│   │   ├── CertificationsEducationSection.tsx # SAA-C03 (In Progress) & Udemy certificate
│   │   ├── ContactSection.tsx         # Real anchor links & resume request banner
│   │   ├── DiagramViewerModal.tsx     # Fullscreen zoomable architecture viewer
│   │   ├── FeaturedProjectsSection.tsx# High-impact case study cards with interactive tabs
│   │   ├── Footer.tsx                 # Copyright, back-to-top, and social links
│   │   ├── HeroSection.tsx            # Eye-catching intro with architecture showcase widget
│   │   ├── Navbar.tsx                 # Sticky navigation, theme toggle & mobile drawer
│   │   ├── RequestResumeModal.tsx     # Required interactive resume request feature
│   │   └── SocialIcons.tsx            # SVG GitHub and LinkedIn icons
│   ├── data/
│   │   └── portfolioData.ts           # Centralized structured data verified from GitHub & Resume
│   ├── types/
│   │   └── portfolio.ts               # TypeScript interfaces
│   ├── App.tsx                        # Root component orchestrating theme and modal states
│   ├── index.css                      # Material Design 3 tokens & custom styling
│   ├── main.tsx                       # React DOM entrypoint
│   └── vite-env.d.ts                  # Vite client declarations
├── index.html                         # Rich SEO, Open Graph & favicon metadata
├── package.json                       # Scripts and dependencies
├── tsconfig.json                      # TypeScript root configuration
├── tsconfig.app.json                  # Application compiler options
├── tsconfig.node.json                 # Node compiler options
└── vite.config.ts                     # Vite plugins (React & Tailwind CSS v4)
```

---

## 🧪 Verified Projects Grounded in Real GitHub Evidence

1. **Featured 1: GitOps-Driven Microservices Platform on AWS EKS**
   - Repository: `https://github.com/keshavp07-git/Production-Grade-GitOps-Driven-Microservices`
   - 11 microservices (Online Boutique polyglot services) communicating over gRPC.
   - S3-backed Terraform remote state with locking; private EKS cluster.
   - GitHub Actions matrix CI with path filtering, Docker caching, and Aqua Trivy scanning.
   - Pull-based Argo CD delivery with Argo CD Image Updater automating manifest commits.
   - Kubernetes Gateway API with AWS Load Balancer Controller and ExternalDNS managing Route 53.
   - Prometheus, Grafana, Alertmanager (Slack), and ECK-managed Elasticsearch, Filebeat, and Kibana.

2. **Featured 2: Amazon Prime Clone — CI/CD Pipeline on AWS EKS**
   - Repository: `https://github.com/keshavp07-git/Prime_Video_Clone`
   - Terraform-provisioned Jenkins EC2 server and AWS EKS cluster in `ap-southeast-2`.
   - Parameterized Jenkins CI: Git checkout, npm install, SonarQube quality gate, Trivy filesystem scan, Docker build, private ECR push, and local image cleanup.
   - Argo CD GitOps synchronization (`amazon-prime-app` Synced & Healthy).
   - Prometheus and Grafana installed via Helm with LoadBalancer endpoints.
   - Automated Jenkins cleanup pipelines and `terraform destroy` workflows for cost control.

3. **Project 3: Cloud-Native Social Media App — Argo CD**
   - Repository: `https://github.com/keshavp07-git/Cloud-Native-Social-Media-ArgoCD-Lab`
   - Multi-repo GitOps architecture (`vprofile-infra`, `vprofile-helm`, `vprofile-app`).

4. **Project 4: E-Commerce Multi-Tier Microservice Application**
   - Repository: `https://github.com/keshavp07-git/Ecommerce-Multi-Tier-Microservice-Application`
   - Maven build, Checkstyle, SonarQube quality gates, Docker containerization, Helm charts on EKS.

5. **Project 5: AWS CI/CD & Infrastructure as Code**
   - Repository: `https://github.com/keshavp07-git/AWS-CI_CD-and-IaaC`
   - Native AWS CodePipeline, CodeCommit, CodeBuild, S3, Elastic Beanstalk, and RDS.

6. **Project 6: AWS-to-GCP Migration & Lambda Automation**
   - Repository: `https://github.com/keshavp07-git/AWS-to-GCP-Migration-and-Lambda-Automation`
   - Serverless Python automation (`stale_ec2_detector`, `eks_health_slack_notifier`, `weekly_untagged_resources_report`, `s3_pab_drift_detector`), plus dual-cloud VPC migration.

---

## 📋 Build & Run Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
