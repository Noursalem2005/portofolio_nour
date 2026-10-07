export interface SkillGroup {
  category: string;
  description: string;
  items: {
    name: string;
    level: string;
    isPrimary?: boolean;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend Development",
    description: "Modern, responsive UIs, state management, and custom React hooks.",
    items: [
      { name: "React.js", level: "Primary UI Framework", isPrimary: true },
      { name: "Next.js", level: "SSR & App Router", isPrimary: true },
      { name: "TypeScript", level: "Type-Safe Architecture", isPrimary: true },
      { name: "Tailwind CSS", level: "Utility Styling & UI", isPrimary: true },
      { name: "Redux Toolkit", level: "Global State Management", isPrimary: true },
      { name: "Context API", level: "React State & Hooks", isPrimary: true },
    ],
  },
  {
    category: "Core Backend & Microservices",
    description: "Distributed microservices, gRPC transport, and high-throughput APIs.",
    items: [
      { name: "Node.js", level: "Core Runtime", isPrimary: true },
      { name: "NestJS", level: "Enterprise Backend", isPrimary: true },
      { name: "Express.js", level: "REST Microservices", isPrimary: true },
      { name: "gRPC", level: "Service-to-Service RPC", isPrimary: true },
      { name: "Microservices", level: "Distributed Architecture", isPrimary: true },
      { name: "RESTful APIs", level: "API Specifications", isPrimary: true },
    ],
  },
  {
    category: "Message Brokers & Caching",
    description: "Asynchronous task queueing, state caching, and event brokering.",
    items: [
      { name: "RabbitMQ", level: "Message Queue Broker", isPrimary: true },
      { name: "Redis", level: "Pub/Sub & Caching", isPrimary: true },
      { name: "Bull Queue", level: "Background Workers", isPrimary: true },
    ],
  },
  {
    category: "Databases & ORM",
    description: "Schema modeling, query indexing, compound aggregation pipelines, and ORMs.",
    items: [
      { name: "PostgreSQL", level: "Relational DB", isPrimary: true },
      { name: "Prisma", level: "Type-Safe ORM", isPrimary: true },
      { name: "MongoDB", level: "Aggregations & Indexing", isPrimary: true },
      { name: "Mongoose", level: "ODM Modeling", isPrimary: true },
    ],
  },
  {
    category: "Testing & DevOps Tools",
    description: "Unit testing, containerization, cloud hosting, and build automation.",
    items: [
      { name: "Jest", level: "Unit & Integration Testing", isPrimary: true },
      { name: "Docker & Compose", level: "Containerization", isPrimary: true },
      { name: "Microsoft Azure", level: "Cloud Hosting", isPrimary: true },
      { name: "Vercel", level: "Frontend Deployment", isPrimary: true },
      { name: "Git & GitHub", level: "Version Control & CI/CD", isPrimary: true },
      { name: "Postman", level: "API Testing & Docs", isPrimary: true },
    ],
  },
  {
    category: "Languages & Core Concepts",
    description: "Programming languages, algorithms, and software engineering principles.",
    items: [
      { name: "JavaScript (ES6+)", level: "Primary Language", isPrimary: true },
      { name: "TypeScript", level: "Primary Language", isPrimary: true },
      { name: "Python", level: "Data & FastAPI", isPrimary: true },
      { name: "C++", level: "Systems & Algorithms", isPrimary: true },
      { name: "Java", level: "OOP Architecture", isPrimary: true },
      { name: "SQL", level: "Relational Queries", isPrimary: true },
    ],
  },
];

export const featuredSkills = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend & Core" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Redux Toolkit", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "gRPC", category: "Backend" },
  { name: "RabbitMQ", category: "Messaging" },
  { name: "Redis", category: "Caching" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "MongoDB", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "Vercel", category: "DevOps" },
  { name: "Jest", category: "Testing" },
  { name: "Python", category: "Language" },
];
