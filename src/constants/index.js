import { meta, shopify, starbucks, tesla, aitu, slb } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";
import {
    python,
    pytorch,
    tensorflow,
    opencv,
    docker,
    googlecloud,
    javascript as jsSkill,
    react as reactSkill,
    git as gitSkill,
    github as githubSkill,
    sql
} from "../assets/skills_ions";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "ML/AI",
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "ML Framework",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "ML Framework",
    },
    {
        imageUrl: opencv,
        name: "Computer Vision",
        type: "AI Specialization",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: gitSkill,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: githubSkill,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: jsSkill,
        name: "JavaScript",
        type: "Programming",
    },
    {
        imageUrl: reactSkill,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: googlecloud,
        name: "Google Cloud",
        type: "Cloud",
    }
];

export const experiences = [
    {
        title: "Data Scientist",
        company_name: "SLB (Schlumberger)",
        icon: slb,
        iconBg: "#fbc3bc",
        date: "Jul 2023 - Aug 2025",
        points: [
            "Led digital transformation initiative migrating 500+ manual Excel processes to automated data platform, reducing operational costs by 35% and data errors by 95% while enabling real-time decision-making across engineering teams.",
            "Developed AI-powered knowledge retrieval system that transformed engineering workflow efficiency, reducing technical query resolution time by 90% (from 4 hours to 25 minutes) and improving engineer productivity across 5 business units.",
            "Developed real-time computer vision pipeline (YOLOv8 + tracking algorithms) for IoT monitoring, processing 1000+ video streams and achieving 94% detection accuracy, saving 120+ hours/month of manual inspection.",
            "Led cross-functional deployment of ML solutions across 5 business units, presenting ROI analysis to C-level executives and establishing MLOps best practices.",
        ],
    },
    {
        title: "Undergraduate Research Assistant",
        company_name: "Astana IT University",
        icon: aitu,
        iconBg: "#accbe1",
        date: "Sep 2024 - Present",
        points: [
            "Architected novel multi-modal RoBERTa Transformer with custom cross-attention mechanism, fusing RoBERTa textual embeddings and CNN-LSTM temporal features from 2M+ sensor readings and 15K+ drilling reports.",
            "Developed innovative positional encoding for irregular time-series data and implemented attention-weighted fusion layer, outperforming baseline by 18% F1-score.",
            "Achieved 85% F1-score on early anomaly detection with BERT/GPT pipeline, representing 13% improvement over production Random Forest models and reducing false positive rates by 23%.",
            "Validated model interpretability with domain experts using attention visualization and SHAP analysis; manuscript submitted to AAAI Workshop on AI for Energy (under review, 6 pages).",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/assylbek-creation',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/assylbek-oteubayev-660018263/',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'DDR Analyzer',
        description: 'Automated Daily Drilling Reports analysis system using ML and NLP. Features PDF processing, LLM-powered problem analysis, well information extraction, and document section classification with FastAPI REST API.',
        link: 'https://github.com/assylbek-creation/ddr_analyzer',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'MP3 Converter System',
        description: 'Microservices-based video-to-MP3 converter deployed on Kubernetes. Features JWT authentication, RabbitMQ message queues, MongoDB GridFS storage, and email notifications with Docker containerization.',
        link: 'https://github.com/assylbek-creation/mp3-converter-system',
    }
];