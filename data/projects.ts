export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  purpose: string;
  stats: { label: string; value: string }[];
  image: string;
  accentColor: string;
  technologies: string[];
  keyFeatures: string[];
  architecture?: {
    overview: string;
    components: { title: string; desc: string }[];
  };
  links?: {
    demo?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: "virtualqueue",
    number: "01",
    title: "VirtualQueue",
    category: "Distributed Systems & Queues",
    tagline: "Scalable asynchronous queueing & staff dispatch platform",
    description:
      "Engineered an asynchronous message-driven backend to handle queueing, priority assignment, and staff dispatching under heavy concurrent workloads.",
    purpose:
      "Designed to resolve high-concurrency bottlenecking in ticket dispatch systems by utilizing RabbitMQ worker pools, Bull queues, and Redis Pub/Sub for sub-millisecond status broadcasting.",
    stats: [
      { label: "Queue Throughput", value: "10k+ req/sec" },
      { label: "State Sync Latency", value: "< 2.4ms" },
      { label: "Data Race Reduction", value: "100%" },
    ],
    longDescription:
      "VirtualQueue is a distributed queue & staff dispatching engine built with Node.js, Express, and NestJS. It leverages RabbitMQ message brokers and consumer worker pools to process state changes reliably without race conditions, backed by Redis for instant cache lookups and pub/sub ticket broadcasting.",
    image: "/images/workspace.png",
    accentColor: "#B96F4D",
    technologies: [
      "Node.js",
      "NestJS",
      "RabbitMQ",
      "Redis",
      "Bull Queue",
      "Docker",
      "TypeScript",
      "RBAC",
    ],
    keyFeatures: [
      "Asynchronous message-driven architecture for priority assignment & staff dispatching",
      "RabbitMQ consumer worker pools ensuring idempotent state processing with zero race conditions",
      "Redis distributed caching & Pub/Sub mechanisms broadcasting ticket updates in real time",
      "RESTful administrative APIs with role-based access control (RBAC) and routing analytics",
    ],
    architecture: {
      overview:
        "API Gateway delegating tasks to RabbitMQ topic exchanges, consumed by autoscaling worker processes with Redis state caching.",
      components: [
        {
          title: "API Ingestion Gateway",
          desc: "Validates incoming dispatch requests and enforces RBAC authorization.",
        },
        {
          title: "RabbitMQ Broker",
          desc: "Manages consumer worker pools with dead-letter queue retries.",
        },
        {
          title: "Redis Pub/Sub Layer",
          desc: "Broadcasts live ticket state updates to client dashboards with zero DB overhead.",
        },
      ],
    },
    links: {
      github: "https://github.com/Noursalem2005/VirtualQueue",
    },
  },
  {
    id: "ownshopy",
    number: "02",
    title: "OwnShopy",
    category: "E-Commerce & Payment Microservices",
    tagline: "Multi-provider e-commerce backend & automated webhook engine",
    description:
      "Architected payment orchestration microservices integrating Stripe, PayPal, and Fawry for multi-currency order settlement and webhook security.",
    purpose:
      "Built to streamline multi-channel order settlement, verify cryptographic signatures against replay attacks, and optimize catalog query performance with MongoDB compound indexes.",
    stats: [
      { label: "Query Speed Up", value: "40%" },
      { label: "Payment Gateways", value: "Stripe, PayPal, Fawry" },
      { label: "Replay Attack Defense", value: "100% Verified" },
    ],
    longDescription:
      "OwnShopy is a full-stack e-commerce backend built with Next.js, Node.js, Mongoose, and MongoDB. Features secure webhook receiver microservices verifying cryptographic signatures, atomic inventory updates, and containerized deployment pipelines on Microsoft Azure.",
    image: "/images/workspace.png",
    accentColor: "#707962",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "PayPal",
      "Docker",
      "Azure",
    ],
    keyFeatures: [
      "Multi-provider payment orchestration integrating Stripe, PayPal, and Fawry",
      "Secure webhook microservices verifying cryptographic signatures for atomic inventory updates",
      "MongoDB compound schema indexing improving complex catalog lookup speeds by 40%",
      "Containerized core backend services via Docker deployed with Azure CI/CD pipelines",
    ],
    architecture: {
      overview:
        "Next.js SSR storefront connected to Node.js payment microservices backed by MongoDB Atlas and Docker containers on Azure.",
      components: [
        {
          title: "Payment Orchestrator",
          desc: "Handles multi-currency transactions and webhook signature verification.",
        },
        {
          title: "MongoDB Index Layer",
          desc: "Compound indexes keeping read/write latency low during heavy catalog queries.",
        },
        {
          title: "Azure Cloud Pipeline",
          desc: "Automated GitHub Actions pipeline deploying Docker container clusters.",
        },
      ],
    },
    links: {
      github: "https://github.com/Noursalem2005/OwnShopy",
    },
  },
  {
    id: "quanth",
    number: "03",
    title: "QuantH",
    category: "Quantitative Strategy & High-Throughput APIs",
    tagline: "Trading strategy execution engine & real-time market data platform",
    description:
      "Built server-side infrastructure and trading strategy execution APIs backed by Python and Node.js microservices with low-latency market updates.",
    purpose:
      "Empowers automated trading strategy evaluations, real-time WebSocket tick streaming, and optimized database query routines to safeguard financial endpoints under high concurrency.",
    stats: [
      { label: "Tick Ingestion Engine", value: "Python + C++" },
      { label: "API Latency", value: "< 1.8ms" },
      { label: "Security Enforcement", value: "RBAC + Rate Limiting" },
    ],
    longDescription:
      "QuantH combines Python data pipelines with FastAPI and Node.js microservices to execute algorithmic trading strategies, backtest historical market data, and stream real-time price feeds. Enforces strict rate limiting, schema validation, and role-based authorization.",
    image: "/images/workspace.png",
    accentColor: "#AAA297",
    technologies: [
      "Python",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "WebSockets",
      "gRPC",
    ],
    keyFeatures: [
      "Server-side trading strategy execution APIs backed by Python and Node.js microservices",
      "gRPC service-to-service communication reducing serialization overhead between internal services",
      "Structured optimized query routines & Redis caching layers maintaining low latency",
      "Financial data security with schema validation, rate limiting, and RBAC rules",
    ],
    architecture: {
      overview:
        "gRPC microservices communicating between Python strategy daemons and Node.js API servers with PostgreSQL persistence.",
      components: [
        {
          title: "Strategy Daemon",
          desc: "Vectorized Python evaluation engine calculating technical indicators.",
        },
        {
          title: "gRPC Transport Layer",
          desc: "Low-overhead internal RPC calls for microservice synchronization.",
        },
        {
          title: "Cache & Store",
          desc: "PostgreSQL with Prisma ORM and Redis in-memory ticker cache.",
        },
      ],
    },
    links: {
      github: "https://github.com/Noursalem2005/QuantH",
    },
  },
  {
    id: "realtime-automation",
    number: "04",
    title: "Real-Time Tracking & Automation API",
    category: "Real-Time Systems & Cloud Automation",
    tagline: "WebRTC live location tracking & headless browser automation backend",
    description:
      "High-throughput backend service engineered for WebRTC live location tracking, WebSockets real-time streaming, and automated cloud browser orchestration.",
    purpose:
      "Delivers sub-second WebRTC peer connection management for live location tracking alongside cloud browser scraping clusters deployed on Azure.",
    stats: [
      { label: "Real-Time Latency", value: "Sub-50ms WebRTC" },
      { label: "Concurrently Tracked Users", value: "500+ Active" },
      { label: "Deployment", value: "Docker / Azure App Service" },
    ],
    longDescription:
      "Real-Time Tracking & Automation API handles low-latency WebRTC media/location signaling, WebSocket streams, and containerized web automation clusters. Built with FastAPI, Node.js, Express, Jest automated testing, and deployed on Microsoft Azure.",
    image: "/images/workspace.png",
    accentColor: "#B96F4D",
    technologies: [
      "WebRTC",
      "WebSockets",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Docker",
      "Azure",
      "Jest",
    ],
    keyFeatures: [
      "WebRTC signaling & WebSockets layer for live location tracking and real-time streaming",
      "Asynchronous cloud scraping & headless browser pool management",
      "Comprehensive unit & integration test coverage authored with Jest",
      "OpenAPI / Swagger documentation for clean frontend collaboration",
    ],
    architecture: {
      overview:
        "WebSocket & WebRTC signaling server delegating real-time telemetry to Redis Pub/Sub and persistent logs to MongoDB.",
      components: [
        {
          title: "Signaling Server",
          desc: "WebRTC peer connection coordinator handling SDP exchange and ICE candidates.",
        },
        {
          title: "Automation Cluster",
          desc: "Isolated Docker containers executing headless browser workflows.",
        },
        {
          title: "Azure Cloud Host",
          desc: "Continuous integration deployment pipeline running automated Jest tests.",
        },
      ],
    },
    links: {
      github: "https://github.com/Noursalem2005",
    },
  },
];
