import { url } from "inspector"

import IBCOL from "../public/IBCOL.jpg"
import BCOLBD from "../public/BCOLBD.jpg"
import PB from "../public/PB.jpg"

// Sample data for preview purposes
export const personalInfo = {
  name: "Tahsin Islam",
  title: "Software Engineering Student & Full-Stack Developer",
  email: "tahsinrayshad.2016@gmail.com",
  phone: "(+880) 1554749897",
  location: "Dhaka, Bangladesh",
  birthDate: "July 11, 2004",
  website: "tahsinrayshad.com",
  bio: "Aspiring software engineer with industry experience building enterprise and full-stack web applications in Agile teams.",
  socialLinks: {
    linkedin: "https://linkedin.com/in/tahsinrayshad",
    github: "https://github.com/tahsinrayshad",
    facebook: "https://www.facebook.com/tahsin.islam.rayshad",
    kaggle: "https://kaggle.com/tahsinrayshad",
  },
}



export const education = [
  {
    institution: "Islamic University of Technology (IUT)",
    degree: "Bachelor of Science in Software Engineering",
    period: "Aug 2022 - Present",
    cgpa: "3.55/4.0",
    type: "Bachelor's",
  },
  {
    institution: "Saint Joseph Higher Secondary School",
    degree: "Higher Secondary School Certificate",
    period: "July 2019 - Feb 2022",
    cgpa: "5.0/5.0",
    type: "HSC",
  },
  {
    institution: "Rani Bilasmoni Govt. Boys' High School",
    degree: "Secondary School Certificate",
    period: "Jan 2014 - May 2019",
    cgpa: "5.0/5.0",
    type: "SSC",
  },
]

export const skills = {
  languages: ["C/C++", "C#", "Java", "HTML", "CSS", "JavaScript", "React", "PHP", "Next.js", "Python"],
  frameworks: [".NET", "Bootstrap", "Laravel", "Express.js", "Tailwind CSS"],
  databases: ["MongoDB", "MySQL", "Oracle"],
  devTools: ["Git", "GitHub", "VS Code", "Office 365", "Google Workspace", "LaTeX"],
  designTools: ["Canva", "Figma"],
}

export const achievements = [
  {
    title: "Award of Merit",
    event: "International Blockchain Olympiad 2024",
    date: "November 2024",
    type: "International",
    description:
      "Recognized for outstanding performance in blockchain technology and innovation at the international level.",
    image: IBCOL,
  },
  {
    title: "Bronze Award",
    event: "Blockchain Olympiad Bangladesh 2024",
    date: "September 2024",
    type: "National",
    description:
      "Secured third position in the national blockchain competition, demonstrating expertise in distributed ledger technologies.",
    image: BCOLBD,
  },
  {
    title: "91st Place (Category: O)",
    event: "Physics Brawl Online 2023",
    date: "November 22, 2023",
    type: "International",
    description: "Achieved global ranking of 91 in the competitive physics problem-solving competition.",
    image: PB,
  },
]

export const projects = [
  {
    title: "SwaapIt",
    period: "Jun 2025 - Sep 2025",
    description:
      "I am currently working the Skill Listings and Discovery feature, enabling users to filter and search teachers by skill, location, rating,and availability, with detailed profiles to support informed selection.",
    technologies: ["MERN Stack"],
    status: "Completed",
    supervisors: ["Njayou Youssouf", "Ajwad Abrar Mostofa"],
    github: "https://github.com/tahsinrayshad/SwapIt",
    demo: "#",
  },
  {
    title: "MathXplorer",
    period: "Sep 2024 - Mar 2025",
    description:
      "Interactive platform for learning math through problem solving and guided chat. Offers instant feedback and helps users build critical thinking and reasoning skills.",
    technologies: ["PHP", "Laravel", "Python", "React", "MySQL"],
    status: "Completed",
    supervisors: ["Sayed Md. Rifat Raiyan", "Zadid Bin Azad"],
    github: "https://github.com/tahsinrayshad/mathxplorer",
    demo: "#",
  },
  {
    title: "MoneyMate",
    period: "Feb 2025 - Mar 2025",
    description:
      "Simple, secure app to track income, expenses, loans, and shared money. Features smart insights, alerts, and budgeting tools for easy financial management.",
    technologies: ["PHP", "Blade", "JavaScript"],
    status: "Completed",
    supervisors: ["Shohel Ahmed", "Farzana Tabassum"],
    github: "https://github.com/tahsinrayshad/moneymate",
    demo: "#",
  },
  {
    title: "MathRanker",
    period: "Feb 2024 - Jun 2024",
    description:
      "Dynamic platform for math enthusiasts, offering contests, problem-solving, and community interaction with competitive programming features.",
    technologies: ["PHP", "Laravel", "Blade", "HTML", "CSS", "MySQL"],
    status: "Completed",
    supervisors: ["Asaduzzaman Herok"],
    github: "https://github.com/tahsinrayshad/mathranker",
    demo: "#",
  },
  {
    title: "MathVoyage",
    period: "Aug 2023 - Jan 2024",
    description:
      "Java library with versatile math functions, covering geometry, vectors, trigonometry, matrices, combinatorics, number systems, and more.",
    technologies: ["Java"],
    status: "Completed",
    supervisors: ["Sayed Md. Rifat Raiyan"],
    github: "https://github.com/tahsinrayshad/mathvoyage",
    demo: "#",
  },
  {
    title: "IUT DLT Room Booking Management",
    period: "Aug 2023 - Dec 2023",
    description:
      "Web application for booking Distance Learning Theater (DLT) rooms at Islamic University of Technology with scheduling and management features.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
    status: "Completed",
    supervisors: ["Prof. Dr. Khondokar Habibul Kabir"],
    github: "https://github.com/tahsinrayshad/iut-dlt-booking",
    demo: "https://dlt.library.iutoic-dhaka.edu/",
  },
  {
    title: "House of The Rent",
    period: "Mar 2023 - May 2023",
    description:
      "House of the Rent is a user-friendly app that simplifies the rental process. Manage and track your properties effortlessly. Experience the convenience of our intuitive interface and enhance your property management with our reliable software.",
    technologies: ["C#", ".NET"],
    status: "Completed",
    supervisors: ["Tasnim Ahmed"],
    github: "https://github.com/tahsinrayshad/OOP_Project_HOR",
    demo: "#",
  },
  {
    title: "ReadEasy",
    period: "Jan 2024",
    description:
      "ReadEasy is a Java console application for keeping records of your books and book readings. The sole purpose of this project was to build an application by following SOLID principles of Object Oriented Concepts.",
    technologies: ["Java"],
    status: "Completed",
    supervisors: ["Md. Jubair Ibna Mostafa"],
    github: "https://github.com/tahsinrayshad/ReadEasy_Project",
    demo: "#",
  },
]

export const experiences = [
  {
    organization: "IUT Arts and Cultural Society",
    period: "Dec 2023 - Present",
    duration: "Dec 2023",
    logo: "/iutacs.jpg",
    type: "leadership",
    roles: [
      {
        position: "President",
        period: "Dec 2025 - Present",
        current: true,
        description: "Lead a society of 50+ members, overseeing its flagship exhibitions and cultural programming.",
        events: ["Intra-IUT Art and Literature Exhibition", "OIC Day Exhibition & Cultural Program"],
      },
      {
        position: "General Secretary",
        period: "Dec 2024 - Nov 2025",
        description: "Organized more than 5 cultural events and exhibitions on the university campus.",
        events: [],
      },
    ],
  },
  {
    organization: "IUT Computer Society",
    period: "Sep 2024 - Present",
    duration: "Sep 2024",
    logo: "/iutcs.jpg",
    type: "leadership",
    roles: [
      {
        position: "Treasurer",
        period: "Dec 2025 - Present",
        current: true,
        description:
          "Manage the annual budget and cash flow for a society running 6+ flagship events alongside recurring workshops.",
        events: ["Prologue", "IJPC", "Dev Sprint", "Code Sprint", "IUT 12th ICT Fest"],
      },
      {
        position: "Assistant Treasurer",
        period: "2024 - Dec 2025",
        description: "Managed finances for flagship events and recurring workshops throughout the year.",
        events: ["CodeRush 2.0", "Prologue", "Code Sprint"],
      },
    ],
  },
  {
    organization: "IUT Photographic Society",
    period: "Aug 2023 - Present",
    duration: "Aug 2023",
    logo: "/iutps.jpg",
    type: "leadership",
    roles: [
      {
        position: "Head of Public Relations",
        period: "Dec 2025 - Present",
        current: true,
        description: "Lead external communications and outreach for the society's flagship events.",
        events: ["Pronoia", "Lumina", "Artisan Adda"],
      },
      {
        position: "Assistant Director",
        period: "Sep 2024 - Dec 2025",
        description: "Supported event logistics across the society's flagship events.",
        events: ["Pronoia", "Lumina", "Break the Circle Season 12"],
      },
      {
        position: "Sub-executive of IT & Communication",
        period: "Aug 2023 - Sep 2024",
        description: "Contributed to IT and communication efforts and supported event logistics.",
        events: ["Pronoia", "Lumina", "Artisan Adda"],
      },
    ],
  },
]



export const workExperiences = [
  {
    id: 2,
    company: "AFK Tech Ltd",
    role: "Software Developer (Contractual)",
    period: "June 2026 - Present",
    location: "Dhaka, Bangladesh",
    logo: "/afk.jpg",
    description:
      "Backend and image-pipeline work on Chromaxx, a production HDR/PSD processing pipeline for real-estate photography.",
    highlights: [
      "Shipped a full-stack slider-grading feature for Chromaxx, a real-estate HDR/PSD pipeline, enabling post-merge color adjustments and a new job checkpoint using React and FastAPI/Celery.",
      "Contributed to an automated HDR image-generation pipeline that cut per-image turnaround from 45-50 minutes to under 30, reducing production time by over 35% via automated segmentation and processing.",
      "Diagnosed and fixed 5 production defects, including a repeated-edit consistency bug and a client/server color-math mismatch, improving pipeline reliability and output accuracy via pixel-level testing against the Python reference.",
      "Redesigned segmentation mask-overlap resolution with watershed-based edge arbitration in OpenCV, fixing incorrect boundary ownership between ensemble model outputs, and tuned SAM 3 text prompts via confidence scoring.",
      "Prototyped a RAW HDR merge pipeline with scene-aware blending and smooth exposure handover, informing the team's production merge architecture.",
    ],
  },
  {
    id: 1,
    company: "Kaz Software",
    role: "Software Developer Intern",
    period: "September 2025 - January 2026",
    location: "Dhaka, Bangladesh",
    logo: "/kaz.png",
    description:
      "Full-stack delivery across a client-facing supply chain SaaS product and an internal HR platform, working within an Agile team.",
    projects: [
      {
        name: "P1ston",
        context: "NY-based supply chain SaaS",
        highlights: [
          "Delivered 6+ frontend features for the Relay module in React against Figma specifications, clearing cross-browser input bugs with zero-regression QA across 4 environments and 3 device types.",
          "Worked through 40+ QA tickets, resolving critical interface defects such as cursor-jumping inputs, digit-limit validation, and number-formatting utilities for a cleaner, more stable UI.",
        ],
      },
      {
        name: "Roostpad",
        context: "Internal HR platform",
        highlights: [
          "Built the leave-management system end to end across React, .NET, and MySQL with role-based access control and automated reporting, and reduced a live login delay from over 10 seconds to under 2.",
          "Automated the annual holiday reset with a scheduler and migrated the MySQL schema behind holiday tracking, removing a recurring manual year-end task for HR staff.",
          "Closed an unauthorized dashboard-access vulnerability through AuthContext session validation, and benchmarked API latency with a custom Python script to improve response time by 20%.",
        ],
      },
    ],
  },
]

export const testimonials = [
  {
    name: "Dr. Sayed Md. Rifat Raiyan",
    position: "Project Supervisor, IUT",
    content:
      "Tahsin has consistently demonstrated exceptional problem-solving skills and dedication in his projects. His work on MathXplorer showcases his ability to create innovative educational solutions.",
    rating: 5,
  },
  {
    name: "Prof. Dr. Khondokar Habibul Kabir",
    position: "Professor, IUT",
    content:
      "An outstanding student with strong technical skills and leadership qualities. His contribution to the DLT Room Booking Management system was exemplary.",
    rating: 5,
  },
]

// Sample contact messages for admin preview
export const sampleContacts = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    subject: "Collaboration Opportunity",
    message:
      "Hi Tahsin, I came across your portfolio and I'm impressed by your work on MathXplorer. I'd like to discuss a potential collaboration opportunity.",
    createdAt: "2024-01-15T10:30:00Z",
    status: "unread",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.johnson@techcorp.com",
    subject: "Job Opportunity",
    message:
      "Hello Tahsin, We have an exciting full-stack developer position that matches your skills perfectly. Would you be interested in discussing this opportunity?",
    createdAt: "2024-01-14T14:20:00Z",
    status: "read",
  },
  {
    id: "3",
    name: "Ahmed Rahman",
    email: "ahmed.rahman@startup.com",
    subject: "Technical Consultation",
    message:
      "Hi, I'm working on a fintech project similar to your MoneyMate app. Would you be available for a technical consultation?",
    createdAt: "2024-01-13T09:15:00Z",
    status: "unread",
  },
]

export const publications = [
  {
    title:
      "LLM-Ideoplasticity: Measuring Ideological Plasticity in the Political Behavior of LLMs as a Context-Conditioned Distribution",
    authors: [
      "Adib Sakhawat",
      "Syed Rifat Raiyan",
      "Tahsin Islam",
      "Takia Farhin",
      "Hasan Mahmud",
      "Md Kamrul Hasan",
    ],
    venue:
      "Proceedings of the 15th International Joint Conference on Natural Language Processing and the 5th Conference of the Asia-Pacific Chapter of the Association for Computational Linguistics",
    venueShort: "IJCNLP-AACL 2026",
    status: "Accepted",
    arxivId: "2606.28335",
    version: "v3",
    date: "September 2026",
    categories: ["cs.CY", "cs.AI", "cs.CL"],
    summary:
      "Argues that a language model's political ideology is not a fixed point but a distribution conditioned on context. Nine LLMs are evaluated across three political dimensions and six contextual axes under a unified VAA-CHES projection framework, showing coordinate shifts of up to 0.57 units under reframing and 0.52 under a change of language, while the cohort as a whole occupies an Overton envelope roughly one-third the spread of major European parties.",
    abstractUrl: "https://arxiv.org/abs/2606.28335",
    pdfUrl: "https://arxiv.org/pdf/2606.28335",
    bibtex: `@inproceedings{sakhawat2026ideoplasticity,
  title         = {LLM-Ideoplasticity: Measuring Ideological Plasticity in the Political Behavior of LLMs as a Context-Conditioned Distribution},
  author        = {Sakhawat, Adib and Raiyan, Syed Rifat and Islam, Tahsin and Farhin, Takia and Mahmud, Hasan and Hasan, Md Kamrul},
  booktitle     = {Proceedings of the 15th International Joint Conference on Natural Language Processing and the 5th Conference of the Asia-Pacific Chapter of the Association for Computational Linguistics (IJCNLP-AACL 2026)},
  year          = {2026},
  eprint        = {2606.28335},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CY},
  url           = {https://arxiv.org/abs/2606.28335}
}`,
  },
  {
    title:
      "Political Alignment in Large Language Models: A Multidimensional Audit of Psychometric Identity and Behavioral Bias",
    authors: [
      "Adib Sakhawat",
      "Tahsin Islam",
      "Takia Farhin",
      "Syed Rifat Raiyan",
      "Hasan Mahmud",
      "Md Kamrul Hasan",
    ],
    venue: "Preprint",
    venueShort: "Preprint",
    status: "Under review",
    arxivId: "2601.06194",
    version: "v2",
    date: "March 2026",
    categories: ["cs.CY", "cs.AI", "cs.CL"],
    summary:
      "Audits 26 contemporary LLMs with three political psychometric inventories (Political Compass, SapplyValues, 8Values) alongside a news bias labeling task, separating model effects from prompt effects with a two-way ANOVA. 96.3% of models fall in the Libertarian-Left quadrant and model identity explains most of the variance across prompt variants, yet psychometric positioning does not predict downstream classification errors - evidence that single-axis evaluations are insufficient for characterizing deployed models.",
    abstractUrl: "https://arxiv.org/abs/2601.06194",
    pdfUrl: "https://arxiv.org/pdf/2601.06194",
    bibtex: `@misc{sakhawat2026political,
  title         = {Political Alignment in Large Language Models: A Multidimensional Audit of Psychometric Identity and Behavioral Bias},
  author        = {Sakhawat, Adib and Islam, Tahsin and Farhin, Takia and Raiyan, Syed Rifat and Mahmud, Hasan and Hasan, Md Kamrul},
  year          = {2026},
  eprint        = {2601.06194},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CY},
  url           = {https://arxiv.org/abs/2601.06194}
}`,
  },
  // Withdrawn on arXiv by the authors (v2, May 2026) - omitted from the site.
  // Uncomment to restore.
  // {
  //   title: "Coordinates of Capability: A Unified MTMM-Geometric Framework for LLM Evaluation",
  //   authors: [
  //     "Adib Sakhawat",
  //     "Tahsin Islam",
  //     "Takia Farhin",
  //     "Syed Rifat Raiyan",
  //     "Hasan Mahmud",
  //     "Md Kamrul Hasan",
  //   ],
  //   venue: "Preprint",
  //   venueShort: "Preprint",
  //   status: "Withdrawn",
  //   arxivId: "2605.08522",
  //   version: "v2",
  //   date: "May 2026",
  //   categories: ["cs.CL"],
  //   summary:
  //     "Proposes a Multi-Trait Multi-Method framework that unifies nine LLM evaluation metrics, reading them as geometric measurements in a shared latent coordinate space factorized into instability, alignment, and coverage.",
  //   abstractUrl: "https://arxiv.org/abs/2605.08522",
  //   pdfUrl: "https://arxiv.org/pdf/2605.08522",
  // },
]
