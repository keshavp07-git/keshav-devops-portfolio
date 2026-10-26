import {
  PersonalInfo,
  SkillCategory,
  FeaturedProject,
  AdditionalProject,
  Certification,
  Education
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Keshav Prajapati',
  title: 'Junior DevOps / Cloud Engineer',
  location: 'Lucknow, Uttar Pradesh, India',
  availability: 'Open to relocation',
  email: 'keshav.prajapati830@gmail.com',
  phone: '+91 9115294619',
  githubUrl: 'https://github.com/keshavp07-git',
  linkedinUrl: 'https://linkedin.com/in/keshav-prajapati-912bab168',
  portfolioUrl: 'https://keshav07.netlify.app',
  resumePdfUrl: '/assets/Keshav_Prajapati_DevOps_Resume_Updated.pdf',
  summary:
    'DevOps/Cloud engineer with hands-on project experience in AWS EKS, Kubernetes, Terraform, CI/CD pipelines, GitOps delivery, and observability, built through self-directed infrastructure and deployment work. Comfortable working across containerization, DevSecOps scanning, and monitoring tooling. Currently pursuing AWS Solutions Architect Associate (SAA-C03) certification and seeking an entry-level DevOps or Cloud Engineer role.'
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud-aws',
    title: 'Cloud & AWS',
    icon: 'Cloud',
    skills: [
      'AWS',
      'Amazon EKS',
      'EC2',
      'ECR',
      'VPC',
      'IAM',
      'S3',
      'Route 53',
      'ALB (Application Load Balancer)',
      'EBS CSI'
    ]
  },
  {
    id: 'containers-k8s',
    title: 'Containers & Orchestration',
    icon: 'Boxes',
    skills: [
      'Docker',
      'Kubernetes',
      'Helm',
      'Kustomize',
      'Gateway API',
      'Horizontal Pod Autoscaling (HPA)'
    ]
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    icon: 'Terminal',
    skills: ['Terraform', 'S3 Remote State', 'State Locking', 'Infrastructure Teardown']
  },
  {
    id: 'cicd-gitops',
    title: 'CI/CD & GitOps',
    icon: 'GitPullRequest',
    skills: [
      'Jenkins',
      'GitHub Actions',
      'Argo CD',
      'Argo CD Image Updater',
      'GHCR (GitHub Container Registry)'
    ]
  },
  {
    id: 'devsecops',
    title: 'DevSecOps & Code Quality',
    icon: 'ShieldCheck',
    skills: ['SonarQube', 'Quality Gates', 'Trivy Image Scan', 'Trivy Filesystem Scan']
  },
  {
    id: 'observability',
    title: 'Monitoring & Observability',
    icon: 'Activity',
    skills: [
      'Prometheus',
      'Grafana',
      'Alertmanager',
      'Slack Alerting',
      'Elasticsearch',
      'Kibana',
      'Filebeat'
    ]
  },
  {
    id: 'networking',
    title: 'Networking & Routing',
    icon: 'Network',
    skills: [
      'ExternalDNS',
      'Route 53',
      'AWS Load Balancer Controller',
      'VPC Subnetting',
      'NAT Gateway',
      'Internet Gateway'
    ]
  },
  {
    id: 'scripting-os',
    title: 'Scripting & Linux Systems',
    icon: 'Cpu',
    skills: [
      'Python',
      'Bash Scripting',
      'Linux Administration',
      'Ubuntu',
      'Amazon Linux',
      'CentOS'
    ]
  },
  {
    id: 'version-control',
    title: 'Version Control',
    icon: 'GitBranch',
    skills: ['Git', 'GitHub', 'Multi-Repo Workflows', 'Branching & Tagging']
  }
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'gitops-microservices-eks',
    title: 'GitOps-Driven Microservices Platform on AWS EKS',
    shortDescription:
      'An end-to-end cloud-native microservices platform on Amazon EKS using Terraform, GitHub Actions, Argo CD, automated image updates, Kubernetes networking, observability, and autoscaling.',
    badge: 'Production-Grade GitOps',
    githubUrl:
      'https://github.com/keshavp07-git/Production-Grade-GitOps-Driven-Microservices',
    previewImage: '/assets/gitops-eks-architecture.png',
    architectureDiagram: '/assets/gitops-eks-architecture.png',
    tags: [
      'AWS EKS',
      'Terraform',
      'Argo CD',
      'GitHub Actions',
      'Image Updater',
      'Gateway API',
      'ExternalDNS',
      'Trivy',
      'Prometheus',
      'ELK'
    ],
    overview:
      'Deploys Google Online Boutique — an 11-microservice polyglot e-commerce platform communicating over gRPC. Most services are deliberately stateless to prioritize platform automation; cart persistence is backed by a Redis cache. The platform is completely automated from code push to EKS cluster deployment.',
    problemStatement:
      'Manual deployments and push-based CI deployment scripts often suffer from credential leakage into build runners, environment drift, lack of auditability, and inconsistent rollback capabilities across complex distributed microservices.',
    architectureExplanation:
      'Implements pull-based GitOps. Developer code commits trigger GitHub Actions CI to run matrix builds, scan container images with Trivy, and publish sha-tagged artifacts to GitHub Container Registry (GHCR). Argo CD Image Updater monitors GHCR and commits updated deployment manifests to Git. Argo CD continuously reconciles desired state stored in Git with the live Amazon EKS cluster. Ingress traffic is handled via Kubernetes Gateway API backed by AWS Load Balancer Controller, with Route 53 DNS records managed automatically by ExternalDNS using EKS Pod Identity.',
    keyHighlights: [
      '11 independent microservices written in Go, C#, Node.js, Python, and Java communicating via gRPC.',
      'S3-backed Terraform remote state with server-side encryption and state locking.',
      'Private EKS cluster deployment with public endpoint access disabled for strict network isolation.',
      'GitHub Actions matrix CI that detects changed services and builds only modified containers with Docker layer caching.',
      'Automated vulnerability scanning with Aqua Trivy integrated directly into the CI pipeline.',
      'Argo CD Image Updater polling GHCR to automate deployment updates via Git commits (no manual manifest edits).',
      'AWS Load Balancer Controller + Kubernetes Gateway API for traffic routing with ExternalDNS automating Route 53 records.',
      'Full observability stack: Prometheus & Grafana for metrics, Alertmanager for Slack alerts, and ELK (ECK Operator, Filebeat, Elasticsearch, Kibana) for persistent container logs.',
      'Horizontal Pod Autoscaling (HPA) driven by Metrics Server and validated using Locust load generator.'
    ],
    sections: {
      infrastructure: {
        title: 'Terraform Infrastructure Provisioning',
        subtitle: 'Repeatable AWS VPC & Private EKS Cluster',
        points: [
          'Modular Terraform codebase provisioning VPC across multiple Availability Zones with public and private subnets, Internet Gateway, and NAT Gateway.',
          'Amazon EKS cluster provisioned with private endpoint enabled and public endpoint disabled for enhanced security.',
          'Public-subnet Bastion host configured for secure operator access via SSH to run kubectl and Helm commands inside the VPC.',
          'S3 remote backend with versioning enabled and KMS encryption to safeguard state files and prevent concurrent execution collisions.'
        ],
        codeSnippet: {
          language: 'hcl',
          code: `terraform {
  backend "s3" {
    bucket         = "gitops-terraform-state-prod"
    key            = "eks/terraform.tfstate"
    region         = "ap-southeast-2"
    encrypt        = true
    dynamodb_table = "terraform-lock-table"
  }
}`
        }
      },
      ci: {
        title: 'Continuous Integration Pipeline',
        subtitle: 'Matrix Builds, Docker Caching & Trivy Scanning',
        points: [
          'GitHub Actions workflow with path filtering: inspects Git commit diffs to build only modified services rather than rebuilding all 11 microservices.',
          'Parallel matrix jobs with Docker buildx caching to dramatically minimize build times and runner costs.',
          'Aqua Trivy vulnerability scan executed on every container image prior to publishing; builds fail if high/critical CVEs exceed policy.',
          'Images tagged with Git commit SHA and published securely to GitHub Container Registry (GHCR).'
        ],
        codeSnippet: {
          language: 'yaml',
          code: `jobs:
  build-and-push:
    strategy:
      matrix:
        service: \${{ fromJson(needs.detect-changes.outputs.services) }}
    steps:
      - uses: actions/checkout@v4
      - name: Trivy Vulnerability Scan
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: ghcr.io/keshavp07-git/\${{ matrix.service }}:\${{ github.sha }}
          severity: 'CRITICAL,HIGH'
          exit-code: '1'`
        }
      },
      gitops: {
        title: 'GitOps Continuous Delivery',
        subtitle: 'Argo CD & Argo CD Image Updater',
        points: [
          'Pure pull-based GitOps architecture using Argo CD running inside the EKS cluster. No cluster write credentials reside in CI runners.',
          'Kustomize and Helm overlays manage multi-environment configuration (base, dev, prod).',
          'Argo CD Image Updater monitors GHCR for newly pushed SHA tags matching semantic patterns and automatically reconciles cluster deployments.',
          'Automated sync with self-healing and pruning enabled to instantly revert out-of-band manual cluster mutations.'
        ],
        codeSnippet: {
          language: 'yaml',
          code: `apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: online-boutique
  namespace: argocd
  annotations:
    argocd-image-updater.argoproj.io/image-list: frontend=ghcr.io/keshavp07-git/frontend
    argocd-image-updater.argoproj.io/frontend.update-strategy: latest
spec:
  syncPolicy:
    automated:
      prune: true
      selfHeal: true`
        }
      },
      networking: {
        title: 'Kubernetes Gateway API & DNS Automation',
        subtitle: 'AWS Load Balancer Controller & ExternalDNS',
        points: [
          'Utilizes the modern Kubernetes Gateway API (`Gateway` and `HTTPRoute` resources) rather than legacy Ingress.',
          'AWS Load Balancer Controller (LBC) synthesizes an AWS Application Load Balancer from Gateway API definitions.',
          'ExternalDNS automatically monitors HTTPRoute hostnames and updates AWS Route 53 DNS records.',
          'Secured with EKS Pod Identity / IRSA (IAM Roles for Service Accounts) enforcing least-privilege AWS API access without static credentials.',
          'HTTPS termination with certificates managed through AWS Certificate Manager (ACM).'
        ]
      },
      observability: {
        title: 'Full-Stack Observability & Autoscaling',
        subtitle: 'Prometheus, Grafana, Alertmanager & ELK',
        points: [
          'Prometheus deployed via Helm collecting cluster metrics, pod CPU/memory utilization, and gRPC latency.',
          'Grafana dashboards providing real-time visibility into microservice health and cluster node capacity.',
          'Alertmanager configured with alert routes delivering actionable incident notifications to Slack.',
          'Elastic Cloud on Kubernetes (ECK) Operator managing Elasticsearch, Kibana, and Filebeat daemonset shipping container logs from EBS volumes.',
          'Horizontal Pod Autoscaling (HPA) configured for high-traffic services (frontend, currencyservice) and validated with Locust shopping flows.'
        ]
      }
    },
    screenshots: [
      {
        url: '/assets/gitops-eks-architecture.png',
        caption: 'Full GitOps EKS Architecture Diagram',
        description:
          'End-to-end architecture showing developer git push, GitHub Actions CI matrix, GHCR, Argo CD Image Updater, AWS private EKS, Gateway API, and Observability.'
      },
      {
        url: '/assets/online-boutique-services.png',
        caption: '11 Microservices Dependency Map',
        description:
          'Service-to-service communication diagram illustrating gRPC flows between frontend, cart (Redis), checkout, recommendation, and supporting services.'
      },
      {
        url: '/assets/online-boutique-ui.png',
        caption: 'Online Boutique Storefront UI',
        description:
          'Storefront application running live on Amazon EKS, serving user requests and load-generation traffic.'
      }
    ]
  },
  {
    id: 'amazon-prime-clone-cicd',
    title: 'Amazon Prime Clone — CI/CD Pipeline on AWS EKS',
    shortDescription:
      'A containerized streaming-platform clone deployed to Amazon EKS using Terraform, Jenkins CI, security and code-quality checks, Amazon ECR, Argo CD, Helm, and Prometheus/Grafana monitoring.',
    badge: 'Automated DevSecOps Pipeline',
    githubUrl: 'https://github.com/keshavp07-git/Prime_Video_Clone',
    previewImage: '/assets/prime-video-architecture.gif',
    architectureDiagram: '/assets/prime-video-architecture.gif',
    tags: [
      'Terraform',
      'Jenkins',
      'SonarQube',
      'Trivy',
      'Docker',
      'Amazon ECR',
      'AWS EKS',
      'Argo CD',
      'Helm',
      'Prometheus'
    ],
    overview:
      'A complete DevSecOps delivery pipeline deploying a responsive Amazon Prime Video clone web application to Amazon EKS in the ap-southeast-2 region. Emphasizes automated code quality verification, container vulnerability scanning, GitOps reconciliation, and cost-control infrastructure lifecycle management.',
    problemStatement:
      'Cloud deployments without rigorous automated code analysis and image security scanning risk deploying critical CVEs and untested vulnerabilities to Kubernetes environments, while orphaned cloud resources cause escalating infrastructure bills.',
    architectureExplanation:
      'Terraform provisions the Jenkins CI server on EC2 and creates the AWS EKS cluster. When code is pushed to GitHub, a parameterized Jenkins pipeline triggers: executes npm dependency installation, performs SonarQube static code analysis with quality-gate gates, runs Trivy filesystem security scans, builds a Docker container image, pushes it to private Amazon ECR tagged with build number and latest, and cleans up local Docker storage. Argo CD continuously detects updated Kubernetes manifests and syncs the workload to AWS EKS, where it is monitored by Prometheus and Grafana.',
    keyHighlights: [
      'Modular Terraform configuration provisioning Jenkins host and EKS cluster in ap-southeast-2.',
      'Parameterized Jenkins CI pipeline allowing reproducible builds with dynamic repository, account ID, and region parameters.',
      'SonarQube static code analysis with automated Quality Gate enforcement preventing flawed code from building.',
      'Aqua Trivy filesystem vulnerability scanning generating automated vulnerability reports.',
      'Private Amazon ECR integration with automated repository creation and authentication via AWS CLI.',
      'Docker images tagged with build number (${BUILD_NUMBER}) and latest, followed by automated local image cleanup to preserve disk space.',
      'Argo CD GitOps reconciliation: deployed amazon-prime-app in Healthy and Synced status on AWS EKS.',
      'Prometheus & Grafana monitoring stack deployed via Helm with dashboards for CPU, memory, and pod health.',
      'Automated cleanup pipelines and terraform destroy workflows to purge ECR images, KMS keys, and EKS resources for strict cloud cost control.'
    ],
    sections: {
      infrastructure: {
        title: 'Infrastructure Provisioning with Terraform',
        subtitle: 'Jenkins Server & AWS EKS Cluster in ap-southeast-2',
        points: [
          'Terraform scripts automate the creation of an EC2 instance pre-configured with Jenkins, Docker, SonarQube scanner, and AWS CLI.',
          'AWS EKS cluster and managed node groups provisioned with appropriate VPC subnets, route tables, and security groups.',
          'Least-privilege IAM policies configured for Jenkins runner and cluster nodes.'
        ],
        codeSnippet: {
          language: 'bash',
          code: `cd terraform_code/ec2_server/
terraform init
terraform apply --auto-approve`
        }
      },
      ci: {
        title: 'Jenkins CI with DevSecOps Gates',
        subtitle: 'SonarQube Quality Gate & Trivy Image Security',
        points: [
          'Stage 1: Git checkout from repository main branch.',
          'Stage 2 & 3: SonarQube code scanning using sonar-scanner; pipeline halts if Quality Gate criteria are violated.',
          'Stage 4 & 5: npm install followed by Aqua Trivy vulnerability scan outputting to report file.',
          'Stage 6: Docker image build tagged with repository name.',
          'Stage 7-9: ECR repository verification/creation, AWS credentials authentication, image tagging (${BUILD_NUMBER} and latest), and push to private Amazon ECR.',
          'Stage 10: Local image cleanup executing docker rmi to maintain Jenkins server disk health.'
        ],
        codeSnippet: {
          language: 'groovy',
          code: `stage('SonarQube Analysis') {
  steps {
    withSonarQubeEnv('sonar-server') {
      sh "$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=amazon-prime -Dsonar.projectKey=amazon-prime"
    }
  }
}
stage('Quality Gate') {
  steps {
    waitForQualityGate abortPipeline: true, credentialsId: 'sonar-token'
  }
}`
        }
      },
      gitops: {
        title: 'Continuous Deployment via Argo CD',
        subtitle: 'Declarative Manifest Sync on AWS EKS',
        points: [
          'Argo CD deployed into argocd namespace on EKS and exposed via AWS Load Balancer.',
          'Application manifest defined for amazon-prime-app synchronizing Deployment and Service resources.',
          'Automated sync enabled; verified cluster state reached Synced and Healthy status directly on live EKS cluster.',
          'Kubernetes LoadBalancer service provides public entry point for application users.'
        ]
      },
      networking: {
        title: 'Service Exposure & Load Balancing',
        subtitle: 'AWS Load Balancer & Subdomain Routing',
        points: [
          'Application Service patched with LoadBalancer type creating AWS Classic/Network Load Balancer.',
          'Argo CD server and Grafana dashboards similarly exposed on dedicated load balancer endpoints for operational management.',
          'Route 53 subdomain integration for clean endpoint naming.'
        ]
      },
      observability: {
        title: 'Observability & Automated Cost Teardown',
        subtitle: 'Prometheus, Grafana & Cleanup Pipelines',
        points: [
          'Prometheus Community Helm chart (kube-prometheus-stack) installed in prometheus namespace.',
          'Grafana dashboards deployed with LoadBalancer service exposure for real-time visualization of cluster CPU and memory pressure.',
          'Dedicated Jenkins Cleanup Pipeline: systematically deletes Kubernetes services, deployments, Argo CD, and Helm releases.',
          'ECR repository deletion and AWS KMS key scheduling/deletion workflow.',
          'Terraform destroy workflow ensuring zero orphaned AWS resources or surprise cloud costs after testing.'
        ],
        codeSnippet: {
          language: 'groovy',
          code: `stage('Cleanup K8s Resources') {
  steps {
    script {
      sh 'kubectl delete deploy pandacloud-app || true'
      sh 'kubectl delete svc pandacloud-app || true'
      sh 'helm uninstall kube-stack -n prometheus || true'
      sh 'aws ecr delete-repository --repository-name amazon-prime --region ap-southeast-2 --force'
    }
  }
}`
        }
      }
    },
    screenshots: [
      {
        url: '/assets/prime-video-architecture.gif',
        caption: 'Cloud-Native Streaming Platform Architecture (Animated)',
        description:
          'Verified animated architecture diagram from repository (Screenshots/1.gif) illustrating CI pipeline (GitHub, Jenkins, SonarQube, NPM, Docker, ECR), Cloud Infrastructure (Terraform, EC2, EKS), GitOps Delivery (Argo CD), and Observability (Prometheus, Grafana).'
      },
      {
        url: '/assets/prime-video-pipeline-overview.png',
        caption: 'DevOps Pipeline Stage Flow Diagram',
        description:
          'Detailed architectural flow showing Terraform provisioning, Jenkins pipeline stages, SonarQube, Trivy, Docker, ECR, Argo CD, EKS, and Prometheus/Grafana.'
      },
      {
        url: '/assets/prime-argocd-healthy.png',
        caption: 'Argo CD Synchronized & Healthy State',
        description:
          'Live Argo CD console confirming amazon-prime-app in Synced and Healthy status, showing pandacloud-app service, deployment, replica set, and pod resources.'
      },
      {
        url: '/assets/prime-jenkins-credentials.png',
        caption: 'Jenkins Secure Credentials Management',
        description:
          'Jenkins Global Credentials store configured with sonar-token, AWS access-key, and secret-key using least-privilege scoping.'
      },
      {
        url: '/assets/prime-video-app-ui.png',
        caption: 'Deployed Prime Video Clone Web App',
        description:
          'Live Amazon Prime Video streaming interface running on AWS ap-southeast-2 Load Balancer on port 3000.'
      }
    ]
  }
];

export const additionalProjects: AdditionalProject[] = [
  {
    id: 'vprofile-cloud-native-argocd',
    title: 'Cloud-Native Social Media App — Argo CD',
    subtitle: 'Vprofile Multi-Repo GitOps on AWS EKS',
    description:
      'An end-to-end GitOps delivery pipeline across 3 specialized GitHub repositories (infrastructure, Helm chart, and application source code) deploying a multi-tier social media application on Amazon EKS.',
    githubUrl:
      'https://github.com/keshavp07-git/Cloud-Native-Social-Media-ArgoCD-Lab',
    technologies: [
      'AWS EKS',
      'Terraform',
      'Helm',
      'Argo CD',
      'Amazon ECR',
      'SonarQube',
      'Slack'
    ],
    highlights: [
      'Multi-repo architecture separating concerns: vprofile-infra (IaC), vprofile-helm (Argo CD manifests), and vprofile-app (source code).',
      'Terraform pipeline with syntax validation, execution planning, automated apply, and drift detection with Slack alerts.',
      'Pull-based Argo CD GitOps layer continuously watching the Helm repository and syncing cluster state.',
      'Automated Pull Request workflow updating container image tags in Helm values.yaml upon successful CI build.'
    ],
    diagramImage: '/assets/vprofile-architecture.png'
  },
  {
    id: 'ecommerce-multitier-microservices',
    title: 'E-Commerce Multi-Tier Microservice Application',
    subtitle: 'Full CI/CD & GitOps Delivery on Amazon EKS',
    description:
      'A multi-tier microservice architecture combining Java API, Node.js API, Nginx frontend, and client components deployed to Amazon EKS through automated Maven CI, SonarQube quality gates, and Argo CD.',
    githubUrl:
      'https://github.com/keshavp07-git/Ecommerce-Multi-Tier-Microservice-Application',
    technologies: [
      'Java/Maven',
      'Node.js',
      'Nginx',
      'Docker',
      'Jenkins',
      'SonarQube',
      'Helm',
      'Argo CD',
      'Amazon EKS'
    ],
    highlights: [
      'Multi-tier service components: client UI, javaapi backend, nodeapi microservice, and Nginx reverse proxy.',
      'Automated Maven build, unit tests, and Maven Checkstyle enforcement in CI.',
      'SonarQube static code analysis with quality-gate barrier before Docker containerization.',
      'Docker images pushed to Amazon ECR, with Helm values updated and reconciled by Argo CD on EKS.'
    ],
    diagramImage: '/assets/ecommerce-multitier-architecture.png'
  },
  {
    id: 'aws-cicd-iaac',
    title: 'AWS CI/CD & Infrastructure as Code',
    subtitle: 'Native AWS Automation with CodePipeline & Elastic Beanstalk',
    description:
      'A fully automated CI/CD pipeline built on AWS native developer tooling, orchestrated by AWS CodePipeline from local Git commits through automated build, review, artifact staging, and managed deployment.',
    githubUrl: 'https://github.com/keshavp07-git/AWS-CI_CD-and-IaaC',
    technologies: [
      'AWS CodePipeline',
      'AWS CodeCommit',
      'AWS CodeBuild',
      'Amazon S3',
      'AWS Elastic Beanstalk',
      'Amazon RDS'
    ],
    highlights: [
      'End-to-end automation orchestrated by AWS CodePipeline triggered automatically on Git push to CodeCommit.',
      'Two-stage AWS CodeBuild process separating automated code quality review from production compilation and packaging.',
      'Versioned Amazon S3 artifact storage serving as the immutable handoff between build and deployment stages.',
      'Automated zero-downtime deployment to AWS Elastic Beanstalk backed by Amazon RDS database instance.'
    ],
    diagramImage: '/assets/aws-cicd-architecture.png'
  },
  {
    id: 'aws-gcp-migration-lambda',
    title: 'AWS-to-GCP Migration & Lambda Automation',
    subtitle: 'Cloud VPC Migration & Serverless Operational Automation',
    description:
      'Architected a high-availability VPC migration from AWS to Google Cloud Platform with equivalent security posture, paired with a suite of serverless Python automation scripts for AWS cost control, security drift, and health auditing.',
    githubUrl:
      'https://github.com/keshavp07-git/AWS-to-GCP-Migration-and-Lambda-Automation',
    technologies: [
      'AWS Lambda',
      'Python',
      'EventBridge',
      'CloudWatch',
      'Amazon SNS',
      'AWS VPC',
      'GCP VPC',
      'Cloud NAT',
      'Cloud Router'
    ],
    highlights: [
      'Dual-cloud VPC architecture mapping AWS NAT Gateways and Route Tables to GCP Cloud NAT, Cloud Router, and VPC firewall rules.',
      'Serverless Python automation with EventBridge cron triggers for stale EC2 detection and automated shutdown.',
      'EKS cluster and node readiness health auditing script verifying cluster conditions via STS AssumeRole and Kubernetes API, posting alerts to Slack.',
      'S3 Public Access Block drift detector listening to CloudTrail events in real-time to alert security teams to permission regressions.'
    ],
    diagramImage: '/assets/lambda-automation-flow.png'
  }
];

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    issuer: 'Amazon Web Services',
    status: 'In Progress',
    badgeText: 'In Progress — Preparing'
  },
  {
    name: 'DevOps Beginners to Advanced with Projects',
    issuer: 'Udemy',
    status: 'Completed',
    certificateUrl:
      'https://udemy.com/certificate/UC-7a8145c8-3531-4135-a9bf-0f6d0dc9180e/',
    credentialId: 'UC-7a8145c8-3531-4135-a9bf-0f6d0dc9180e',
    badgeText: 'Verified Certificate'
  }
];

export const education: Education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'Shri Ramswaroop Memorial University',
  location: 'Lucknow, Uttar Pradesh, India',
  duration: 'August 2021 – August 2024',
  highlights: [
    'Focused on Computer Networks, Operating Systems, Database Management, and Software Engineering principles.',
    'Undertook hands-on cloud and DevOps labs alongside coursework, specializing in Linux administration and containerized systems.'
  ]
};
