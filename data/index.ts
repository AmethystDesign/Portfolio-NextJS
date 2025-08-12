import { m } from "framer-motion";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#workExperiences" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const commonTitleColors = ["text-purple", "dark:text-white text-black"];

export const siteConfig = {
  infiniteShowcase: "WorkExperiences", // or "Works"
};

export const heroInfo = {
  name: "Jun L",
  title:
    "Transforming initial concepts into fully realized, real-world software applications", // tailored for impact and scalability.",
  className: "text-center text-[40px] md:text-4xl lg:text-5xl",
  fontColors: ["text-purple", "dark:text-white text-black"],
  secondFontColorIndexList: [1, 5, 6],
  subTitle: "Dream it, Build it",
  info: "Hi! I'm Jun, Front-End Developer and Senior C#.NET Application Engineer based in Toronto.",
  email: "amethystdesign@gmail.com",
};

export const gridItems = [
  {
    id: 1,
    template: "FullImageBG",
    title:
      "Passionate software engineer with 15+ years of experience turning complex ideas into real-world applications. I specialize in C#.NET, React.js, and Next.js, with a strong focus on building real-time, multithreaded systems - especially in the retail and payment solutions space. \n\nI love solving problems through clean, efficient code and have a deep appreciation for OOP, algorithms, and scalable architecture. Whether it’s designing applications or debugging tough issues, I bring a detail-driven mindset and a passion for building reliable, high-quality software that makes an impact.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bg07.jpg",
    spareImg: "",
  },
  {
    id: 2,
    template: "FullImageBG",
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    template: "Skills",
    title: "My main tech stack",
    description: "I constantly try to improve",
    items: "C#.NET,React.JS,TypeScript,Next.JS,Python,EMV,DevOps,FullStack",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[25vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    // title: "Tech enthusiast with a passion for development.",
    title:
      "Technology enthusiast focused on crafting innovative digital solutions",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Full-Stack Website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    template: "CopyEmail",
    title: "Do you want to get more information?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const workExperiences = {
  config: {
    className: "text-center text-[40px] md:text-3xl lg:text-5xl",
    title: "Work experiences",
    secondFontColorIndexList: [1],
    fontColors: ["text-blue-500", "dark:text-white text-black"],
  },
  layoutSetting: {
    boardClassName: "sm:max-[300px] md:max-[600px] lg:max-w-[800px]",
    imgMaxSize: [380, 380],
    descWidth: "sm:max-w-[150px] md:max-w-[400px] lg:max-w-[500px]",
  },
  data: [
    {
      id: 1,
      company: "Amethyst Design",
      title: "Full Stack Website and Mobile App Developer",
      responsibility:
        "Responsible for designing, developing, and maintaining visually appealing and user-centric websites and mobile app.",
      img: "/we-amethystdesign-f2.png",
      // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
      iconLists: [
        "/re.svg",
        "/tail.svg",
        "/ts.svg",
        "/next.svg",
        "/icon_github.svg",
        "/fm.svg",
      ],
      link: "https://profolio-amethystdesign.vercel.app",
    },
    {
      id: 2,
      company: "Verifone Inc. Canada",
      title: "Software Engineer",
      responsibility:
        "Involved in design, development, debugging and maintenance of payment solution for processing EMV and MSR transactions.",
      img: "/we-Verifone-f1.png",
      iconLists: [
        "/VS-icon.svg",
        "/icon_github.svg",
        "/dock.svg",
        "/icon-cs.svg",
      ], //, "/stream.svg"
      link: "http://www.verifone.com",
    },
    {
      id: 3,
      company: "eBridge connections Accounting Integration",
      title: "Mapping Specialist & Technical Support Software Developer",
      responsibility:
        "Developed and Maintained customized Accounting Integration Platform (C#)",
      img: "/we-eBridge-f1.png",
      iconLists: ["/VS-icon.svg", "/icon-cs.svg"], //, "/tail.svg", "/ts.svg", "/three.svg"
      link: "http://info.jitterbit.com/ebridge-sage-guide.html",
    },
    // {
    //   id: 4,
    //   company: "WS & Company Ltd.",
    //   title: "Application Developer and Technical Supporter",
    //   responsibility:
    //     "Designed and developed the rk-Stores management system, involved in system analysis, development and maintenance. ",
    //   img: "/we-WScompany-f1.png",
    //   iconLists: ["/VS-icon.svg"], //, "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"
    //   link: "http://www.wsandcompany.com/",
    // },
  ],
};

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/b1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const works = {
  config: {
    className: "text-center text-[40px] md:text-3xl lg:text-5xl",
    title: "Curated works showcasing my design and development expertise",
    secondFontColorIndexList: [4, 6],
    fontColors: commonTitleColors,
  },
  layoutSetting: {
    boardClassName: "sm:max-[300px] md:max-[600px] lg:max-w-[800px]",
    imgMaxSize: [380, 380],
    descWidth: "sm:max-w-[150px] md:max-w-[400px] lg:max-w-[500px]",
  },
  data: [
    {
      id: 1,
      project: "Portfolio",
      description:
        "A curated portfolio showcasing modern web development projects with a focus on responsive design, interactive user interfaces, and performance-driven architecture using React.js, Next.js, and Tailwind CSS.",
      img: "we-amethystdesign.png",
      iconLists: [
        "/re.svg",
        "/tail.svg",
        "/ts.svg",
        "/next.svg",
        "/icon_github.svg",
      ],
      link: "https://portfolio-amethystdesign.vercel.app/",
    },
    {
      id: 2,
      project: "Brainwave",
      description:
        "Demonstrates the creation of modern websites featuring sleek parallax effects and bento box layouts — covering everything from elegant UI design to mobile-first principles, while sharpening React.js and Tailwind CSS skills.",
      img: "we-Brainwave.png",
      iconLists: [
        "/re.svg",
        "/tail.svg",
        "/ts.svg",
        "/next.svg",
        "/icon_github.svg",
        "/fm.svg",
      ],
      link: "https://brainwave-amethystdesign.vercel.app/",
    },
    {
      id: 3,
      project: "Verdant Vibe",
      description:
        "A user-friendly online shopping platform that allows customers to browse products, add them to a cart, and seamlessly manage their purchases with a smooth checkout experience.",
      img: "we-VerdantVibe.png",
      iconLists: ["/re.svg", "/tail.svg", "/icon_github.svg"],
      link: "https://verdantvibe-amethystdesign.vercel.app/",
    },
    {
      id: 4,
      project: "Cultural Dragon",
      description:
        "A creative sharing platform where users can upload works to share vision and let others connect, appreciate, and support it through votes. Using React.js, Next.js, Tailwind CSS, Sanity.io, and Sentry.io",
      img: "we-CulturalDragon.png",
      iconLists: [
        "/re.svg",
        "/tail.svg",
        "/ts.svg",
        "/next.svg",
        "/logo-sentry.svg",
        "/logo-sanity.png",
        "/icon_github.svg",
      ],
      link: "https://culturaldragon.vercel.app/",
    },
    {
      id: 5,
      project: "Amethyst Design",
      description:
        "A modern one-page site presenting AmethystDesign’s vision, services, pricing, and work, with a clear call-to-action. Using React.js, Tailwind CSS",
      img: "LandingPage.png",
      iconLists: ["/re.svg", "/tail.svg", "/icon_github.svg"],
      link: "https://amethystdesign.vercel.app/",
    },
    {
      id: 6,
      project: "AD eCommerce",
      description:
        "A modern e-commerce platform that lets customers browse products, shop online, and complete purchases through secure, seamless payment options. Using Next.js 15, Stripe, Tailwind CSS",
      img: "we-eCommerce.png",
      iconLists: [
        "/re.svg",
        "/tail.svg",
        "/next-w.svg",
        "/logo-stripe.jpeg",
        "/icon_github.svg",
      ],
      link: "https://ad-ecommerce.vercel.app/",
    },
    {
      id: 7,
      project: "Recipe App",
      description:
        "A modern recipe app that lets home cooks and food lovers discover, save, and customize their favorite meals. Whether you're a beginner or a seasoned chef, it makes cooking easier and more fun. Using React.js, Neon, Render, and Clerk",
      img: "Recipe.png",
      iconLists: [
        "/re.svg",
        "/icon_github.svg",
        "/logoNeon.png",
        "/logoClerk.png",
        "/logoRender.svg",
      ],
      link: "",
    },
    {
      id: 8,
      project: "Movie App",
      description:
        "A creative mobile app that users can search for movies, view movie details, and add them to a list. Using React.js, Tailwind CSS, Appwrite",
      img: "MovieApp.png",
      isHalfHeight: true,
      iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/icon_github.svg"],
      link: "",
    },
    {
      id: 9,
      project: "Habit Tracker App",
      description:
        "A user-friendly app designed to help users build habits and visualize their progress. Using React.js, Appwrite",
      img: "HabitTracker.png",
      isHalfHeight: true,
      iconLists: ["/re.svg", "/app.svg", "/icon_github.svg"],
      link: "",
    },
    {
      id: 10,
      project: "Test Practice App",
      description:
        "A mobile app that helps users prepare for exams by practicing with their personalized question sets. Using React.js, Appwrite",
      img: "test.png",
      isHalfHeight: true,
      iconLists: ["/re.svg", "/icon_github.svg"],
      link: "",
    },
  ],
};

export const skills = {
  resource: [
    {
      id: 1,
      name: "VS Code",
      img: "/logo-VScode.svg",
      nameImg: "/VScodeName.svg",
      nameImgLength: 80,
    },
    {
      id: 2,
      name: "GitHub",
      img: "/icon_github.svg",
      nameImg: "/GitHubName.svg",
      nameImgLength: 70,
    },
    {
      id: 3,
      name: "React",
      img: "/re.svg",
      nameImg: "/ReactName.svg",
      nameImgLength: 80,
    },
    {
      id: 4,
      name: "Next",
      img: "/next.svg",
      nameImg: "/NextJsName.svg",
      nameImgLength: 70,
    },
    {
      id: 5,
      name: "TailWind",
      img: "/tail.svg",
      nameImg: "/TailName.svg",
      nameImgLength: 80,
    },
    // {
    //   id: 2,
    //   name: "cloudinary",
    //   img: "/cloud.svg",
    //   nameImg: "/cloudName.svg",
    //   nameImgLength: 140,
    // },
    // {
    //   id: 4,
    //   name: "HOSTINGER",
    //   img: "/host.svg",
    //   nameImg: "/hostName.svg",
    //   nameImgLength: 150,
    // },
    {
      id: 6,
      name: "vite",
      img: "/logo-vite.svg",
      nameImg: "/ViteName.svg",
      nameImgLength: 30,
    },
    // {
    //   id: 4,
    //   name: "stream",
    //   img: "/s.svg",
    //   nameImg: "/streamName.svg",
    // nameImgLength: 100,
    // },
    {
      id: 7,
      name: "docker",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
      nameImgLength: 70,
    },
    {
      id: 8,
      name: "Vercel",
      img: "/logo-Vercel-W.svg",
      nameImg: "/NameVercel.svg",
      nameImgLength: 70,
    },
    {
      id: 9,
      name: "sanity",
      img: "/logo-sanity.png",
      nameImg: "/name-Sanity.svg",
      nameImgLength: 70,
    },
    {
      id: 10,
      name: "sentry",
      img: "/logo-sentry.svg",
      nameImg: "/name-Sentry.svg",
      nameImgLength: 80,
    },
    {
      id: 11,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
      nameImgLength: 100,
    },
    {
      id: 12,
      name: "PostgreSQL",
      img: "/postgreSQL.svg",
      nameImg: "/namePostgreSQL.svg",
      nameImgLength: 120,
    },
    {
      id: 13,
      name: "Render",
      img: "/logoRender.svg",
      nameImg: "",
      nameImgLength: 120,
    },
    {
      id: 13,
      name: "Neon",
      img: "/logoNeon.png",
      nameImg: "",
      nameImgLength: 120,
    },
    {
      id: 14,
      name: "Clerk",
      img: "/logoClerk.png",
      nameImg: "",
      nameImgLength: 120,
    },
    {
      id: 15,
      name: "stripe",
      img: "/logo-stripe.jpeg",
      nameImg: "/name-stripe.svg",
      nameImgLength: 70,
    },
  ],
};

export const clients = {
  config: {
    className: "text-center text-[40px] md:text-3xl lg:text-5xl",
    title: "Kind words from satisfied clients",
    secondFontColorIndexList: [3, 4],
    fontColors: commonTitleColors,
  },
  data: [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
      nameImgLength: 100,
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
      nameImgLength: 100,
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
      nameImgLength: 100,
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
      nameImgLength: 150,
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
      nameImgLength: 150,
    },
  ],
};

export const workExperienceCards = {
  config: {
    className: "text-center text-[40px] md:text-3xl lg:text-4xl",
    title: "My work experiences",
    secondFontColorIndexList: [2],
    // fontColors: ["text-purple", "dark:text-white text-black"],
    fontColors: commonTitleColors,
  },
  data: [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ],
};

export const approachSteps = {
  config: {
    className: "text-center text-[40px] md:text-3xl lg:text-5xl",
    title: "My approach",
    secondFontColorIndexList: [1],
    fontColors: ["text-green-400", "dark:text-white text-black"],
    // fontColors: commonTitleColors,
  },
  data: [
    {
      id: 1,
      title: "Planning & Strategy",
      desc: "Together, we’ll define your application's goals, identify your target audience, and outline the essential features. We’ll cover everything from structure and navigation to content requirements.",
      iconCaption: "Phase  1",
      animationSpeed: 5.1,
      className: "bg-emerald-900 rounded-3xl overflow-hidden",
      color: [],
      dotSize: 1,
    },
    {
      id: 2,
      title: "Development & Progress Update",
      desc: "After we finalize the plan, I get into focused flow—starting from initial concepts to clean, production-ready code. You’ll stay informed at every milestone.",
      iconCaption: "Phase 2",
      animationSpeed: 3,
      className: "bg-pink-900 rounded-3xl overflow-hidden",
      color: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      dotSize: 2,
    },
    {
      id: 3,
      title: "Development & Launch",
      desc: "Using the approved design as a blueprint, I code every component from the ground up—ensuring your application is fast, functional, and user-friendly.",
      iconCaption: "Phase 3",
      animationSpeed: 3,
      className: "bg-sky-900 rounded-3xl overflow-hidden",
      color: [[125, 211, 252]],
      dotSize: 3,
    },
  ],
};

export const certificationCards = {
  config: {
    className: "text-center text-[40px] md:text-3xl lg:text-5xl",
    title: "Licenses & Certifications",
    secondFontColorIndexList: [2],
    // fontColors: ["text-purple", "dark:text-white text-black"],
    fontColors: commonTitleColors,
  },
  data: [
    {
      id: 1,
      title: "MCP - Microsoft® Certified Professional",
      desc: "",
      className: "md:col-span-2",
      thumbnail: "/microsoft.svg",
    },
    {
      id: 2,
      title: "MCPD - Microsoft® Certified Professional Developer",
      desc: "",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/microsoft.svg",
    },
    {
      id: 3,
      title: "MCTS - Microsoft® Certified Technology Specialist",
      desc: "",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/microsoft.svg",
    },
    {
      id: 4,
      title: "PCAP™ - Python Institue® Certified Associate Python Programmer",
      desc: "",
      className: "md:col-span-2",
      thumbnail: "/pcap.png",
    },
    {
      id: 5,
      title: "PCEP™ - Python Institue® Certified Entry-Level Python Programmer",
      desc: "",
      className: "md:col-span-2",
      thumbnail: "/pcep.png",
    },
    {
      id: 6,
      title: "IBM Certified Generative AI Fundamentals Specialization",
      desc: "", //explored prompt engineering techniques for writing effective prompts to produce desired outcomes. They learned about the building blocks and foundation models of generative AI, such as GPT, DALL-E, and IBM Granite models. Learners explored AI platforms like IBM watsonx and Hugging Face. They appreciated the ethical issues and implications of generative AI. They were introduced to the potential career opportunities in generative AI. Learners were privy to the insights from AI experts for being successful with generative AI. By completing the hands-on labs and projects, the learners explored the use cases of generative AI through tools like OpenAI ChatGPT.",
      className: "md:col-span-2",
      thumbnail: "/IBM-GenAI.png",
    },
    {
      id: 7,
      title: "IBM Full Stack Software Developer Professional Certificate",
      desc: "", //Hands-on working knowledge with HTML, CSS, JavaScript, GitHub, Node.js, React, Cloud Native practices, DevOps, CI/CD, Containers, Docker, Kubernetes, OpenShift, Python programming, Databases, SQL, NoSQL, Django ORM, Bootstrap, Application Security, Microservices, Serverless computing, and more.",
      className: "md:col-span-2",
      thumbnail: "/IBM_Full_Stack.png",
    },
    {
      id: 8,
      title: "IBM Front-End Developer Professional Certificate",
      desc: "",
      className: "md:col-span-2",
      thumbnail: "/IBM_FrontEnd.png",
    },
    {
      id: 9,
      title: "IBM Back-End Development Professional Certificate",
      desc: "", //Used latest tools and technologies used by professional back-end developers, including Linux scripting, Git and GitHub, Python, SQL, Django, Containers, Docker, Kubernetes, and OpenShift, Microservices, Serverless, as well as practiced Application Security, and Monitoring.",
      className: "md:col-span-2",
      thumbnail: "/IBM_BackEnd.png",
    },
    {
      id: 10,
      title: "Python Project for AI and Application Development",
      desc: "", //Used latest tools and technologies used by professional back-end developers, including Linux scripting, Git and GitHub, Python, SQL, Django, Containers, Docker, Kubernetes, and OpenShift, Microservices, Serverless, as well as practiced Application Security, and Monitoring.",
      className: "md:col-span-2",
      thumbnail: "/PythanAI.png",
    },
  ],
};

export const footerInfo = {
  config: {
    className: "text-center text-[40px] md:text-3xl lg:text-5xl",
    title: "Ready to take your digital presence to the next level?",
    secondFontColorIndexList: [3],
    fontColors: ["text-purple", "dark:text-white text-black"],
  },
  builder: {
    desc: "Reach out to me today and I can work with you to achieve your goals.",
    iconUrl:
      "https://raw.githubusercontent.com/AmethystDesign/media-assets/refs/heads/main/AD-logo-p.svg",
    organization: "Amethyst Design",
    email: "amethystdesign@gmail.com",
    publishDate: "2025",
  },
  socialMedia: [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/AmethystDesign",
    },
    // {
    //   id: 2,
    //   img: "/twit.svg",
    //   url: ""
    // },
    {
      id: 3,
      img: "/link.svg",
      url: "https://www.linkedin.com/in/jun-liu-a16ba635/",
    },
  ],
};
