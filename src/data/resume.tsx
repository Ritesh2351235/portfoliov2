import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ritesh Hiremath",
  initials: "RH",
  url: "https://riteshhiremath.com",
  location: "India",
  locationLink: "https://www.google.com/maps/place/banglore",
  description:
    "22 y/o entrepreneur, builder & developer based in Melbourne. I build SaaS products and apps.",
  summary: [
    "Scaling [***MagicLabs***](https://www.magiclabs.studio), an agency building MVPs, AI agents & helping founders grow startups",
    "Building & scaling apps with ***100+ users***",
    "***5+ international hackathon wins***",
    "Co-founder of [***FoundersKit***](https://founderskit.in)",
  ],
  avatarUrl: "/ritesh.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Langchain",
    "AI Automation",
    "RAG",
    "Postgres",
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/book", icon: NotebookIcon, label: "Book" },
  ],
  contact: {
    email: "riteshhiremath6@gmail.com",
    tel: "+91 9663946352",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ritesh2351235",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ritesh-hiremath-692904222/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ritesh_hiremath",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@riteshhiremath5330",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MagicLabs",
      href: "https://www.magiclabs.studio/",
      badges: [],
      location: "Remote",
      title: "Co-Founder",
      logoUrl: "/magiclabs.png",
      start: "August 2025",
      end: "Present",
      description:
        "Building MVPs, AI agents & helping founders grow startups"
    },
    {
      company: "Desapex",
      href: "https://www.desapex.com/",
      badges: [],
      location: "Remote",
      title: "Digital Engineer Intern",
      logoUrl: "/desapex.jpg",
      start: "Jan 2025",
      end: "May 2025",
      description:
        "Developed a construction progress management system by processing 360-degree site scans into point cloud data using Instant-NGP and photogrammetry tools. Implemented point cloud segmentation with Open3D and PointNet for automated progress tracking. Contributed to a Digital Twin system for real-time construction insights."
    }
  ],
  education: [
    {
      school: "RMIT University",
      href: "https://www.rmit.edu.au/",
      degree: "Master of Information Technology",
      logoUrl: "/rmit.png",
      start: "2025",
      end: "Present",
    },
    {
      school: "Kle Technological University",
      href: "https://www.kletech.ac.in/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/kletech.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "MagicLabs",
      href: "https://www.magiclabs.studio/",
      dates: "August 2025 - Present",
      active: true,
      description: "MagicLabs is a platform that helps founders grow their startups.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "OpenAI",
        "LemonSqueezy",
        "Vercel",
        "Supabase",
        "Vercel",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.magiclabs.studio/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:"",
      video: "https://github.com/user-attachments/assets/5d1671c6-8c81-4c41-950e-ef6b1f50e6db",
    },
    {
      title: "FoundersKit",
      href: "https://founderskit.in",
      dates: "July 2025",
      active: true,
      description: "FoundersKit is a platform that helps founders grow their startups.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "GeminiAI",
        "Ocktokit",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://founderskit.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:"",
      video: "https://github.com/user-attachments/assets/f0e04d96-7b6d-41ba-b706-16a108d55318"
    },
    {
      title: "Gitonboard",
      href: "https://gitonboard.com",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "A GitHub RAG-powered application that helps new open-source contributors onboard faster. Provides a personalized chatbot for each GitHub repo or organization, leveraging Gemini API to simplify documentation and contribute faster.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "GeminiAI",
        "Ocktokit",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://gitonboard.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/814a7c27-32f7-4dde-8160-ed8a5bc8616b",
    },
    {
      title: "FluentAI",
      href: "https://fluentai-coral.vercel.app/",
      dates: "Jan 2025 - February 2025",
      active: true,
      description:
        "An AI-powered language learning app that helps users improve their English faster. Analyzes speaking behavior through read-aloud tasks and scores pronunciation using AssemblyAI.",
      technologies: [
        "React.js",
        "Typescript",
        "AssemblyAI",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://fluentai-coral.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ritesh2351235/Fluentai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/user-attachments/assets/78458f65-b8e3-4289-b195-98e0c7dac7d5",
    },
    {
      title: "JarvisAI",
      href: "https://screenpi.pe/",
      dates: "Feb 2025 - March 2025",
      active: true,
      description:
        "A personal AI assistant that monitors the desktop screen in real-time using ScreenPipe. Processes data with OpenAI for reasoning and Deepgram for audio transcription & TTS, creating an interactive companion experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Screenpipe",
        "OpenAI",
        "Deepgram",
      ],
      links: [
        {
          type: "Website",
          href: "https://screenpi.pe/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/user-attachments/assets/3308104b-28ad-4ed8-8e2c-e212bb1c2018",
    },
    {
      title: "NutritionAI",
      href: "https://nutrition-ai-bay.vercel.app/",
      dates: "November 2024 - December 2024",
      active: true,
      description:
        "An AI-powered app that analyzes meal images using the LLaVA and Mistral models to provide nutritional insights and personalized diet recommendations based on user goals.",
      technologies: [
        "React.js",
        "Typescript",
        "VectorDB",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Ollama",
        "PgAI",
      ],
      links: [
        {
          type: "Website",
          href: "https://nutrition-ai-bay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/16367358-9dd2-4ad1-a61c-437c487b6ffb",
    },
    {
      title: "Omira",
      href: "https://omira.vercel.app/",
      dates: "April 2025 - Present",
      active: true,
      description:
        "Omira is an innovative AI-powered personal mentor that helps you unlock your full potential by providing deep insights into your health and conversations.",
      technologies: [
        "React.js",
        "Typescript",
        "Firebase",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Claude-MCP",
        "Omi",
        "OpenAI",
        "Amazon EC2",
      ],
      links: [
        {
          type: "Website",
          href: "https://nutrition-ai-bay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://github.com/user-attachments/assets/c116933b-d810-4b2d-bbc8-011ef80e7cba",
      video: "",
    },
    {
      title: "LogoGPT",
      href: "https://logogpt.fun/",
      dates: "May 2025 - Present",
      active: true,
      description: "logoGPT is an AI-powered app that generates professional, high-quality logos in seconds — fast, affordable, and tailored to your brand.",
      technologies: [
        "Next.js",
        "Typescript",
        "Neon.tech",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI",
        "Vercel",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://logogpt.fun/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://logo-gpt.s3.ap-south-1.amazonaws.com/portfolio/logoGPT.mp4",
    },
  ],
  hackathons: [
    {
      title: "Nebius Visionary Hackathon",
      dates: "March 15th - 17th, 2025",
      location: "Online",
      description:
        "Developed seeforme, an ai-powered vision assistant that analyzes real-time video, answers user queries, and enhances accessibility for visually impaired individuals.",
      image:
        "/nebuis.jpg",
      links: [
        {
          title: "Seeforme",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://seeforme.vercel.app/",
        },
        {
          title: "Seeforme",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Ritesh2351235/seeforme",
        },
      ],
    },
    {
      title: "Omi Mentor Hackathon",
      dates: "March 2nd - 31st, 2025",
      location: "Online",
      description:
        "Developed Omira, an AI-powered personal mentor that helps you unlock your full potential by providing deep insights into your health and conversations.",
      image:
        "/omi.webp",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/omira-aipowered-personal-mentor-f2e3",
        },
        {
          title: "Omira",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Ritesh2351235/Omira",
        },
      ],
    },
    {
      title: "Screenpipe Hackathon",
      dates: "February 28th - March 4th, 2025",
      location: "Online",
      description:
        "Developed JarvisAI, a personal AI assistant that monitors the desktop screen and provides guidance in real-time.",
      icon: "public",
      image:
        "/screenpipe.png",
      links: [
        {
          title: "screenpipe",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://screenpi.pe/",
        },
      ],
    },
    {
      title: "Agent.ai Challenge",
      dates: "January 15th - 26th, 2025",
      location: "Online",
      description:
        "Deveoped a financial ai agent FreedomFund which analyses user spendings and their finances to provide personalised article and recommendations.",
      image:
        "/agentai.png",
      links: [
        {
          title: "agenai",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://agent.ai/profile/freedomFund",
        },
      ],
    },
    {
      title: "AssemblyAI Challenge",
      dates: "November 13th - December 5th, 2024",
      location: "Online",
      description:
        "Developed FluentAI, a web application that analyzes text using the AssemblyAI model to provide language learning insights and personalized language learning recommendations based on user goals.",
      image:
        "./assemblyai.png",
      links: [
        {
          title: "FluentAI",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Ritesh2351235/Fluentai",
        },
      ],
    },
    {
      title: "The Open Source AI Challenge with pgai and Ollama",
      dates: "October 30th - November 10th, 2024",
      location: "Online",
      description:
        "Developed NutritionAI, a web application that analyzes meal images using the LLaVA and Mistral models to provide nutritional insights and personalized diet recommendations based on user goals.",
      image:
        "/timescalepgai.png",
      links: [
        {
          title: "NutritionAI",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Ritesh2351235/nutrition-ai",
        },
      ],
    },

  ],
  gallery: [
    {
      src: "/gallery/1.jpg",
      alt: "Exploring new places"
    },
    {
      src: "/gallery/2.jpg",
      alt: "Team collaboration"
    },
    {
      src: "/gallery/3.jpg",
      alt: "Presentation moment"
    },
    {
      src: "/gallery/4.jpg",
      alt: "Team building"
    },
    {
      src: "/gallery/5.jpeg",
      alt: "Outdoor adventures"
    },
    {
      src: "/gallery/7.jpeg",
      alt: "Group discussion"
    },
    {
      src: "/gallery/8.jpg",
      alt: "Team celebration"
    },
    {
      src: "/gallery/9.jpg",
      alt: "Travel memories"
    }
  ]
} as const;
