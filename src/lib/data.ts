import {
  Code,
  Database,
  BrainCircuit,
  Server,
  TerminalSquare,
  Monitor,
  Languages,
} from 'lucide-react';

export const SKILLS_DATA = [
  {
    category: "Programming Languages",
    icon: Languages,
    skills: [
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Frontend",
    icon: Monitor,
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" },
     // { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
     // { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
     // { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      //{ name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "REST API", icon: Code },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" }
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
     // { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    category: "Machine Learning",
    icon: BrainCircuit,
    skills: [
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: TerminalSquare,
    skills: [
     // { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
     // { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
     { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
     { name: "Cursors", icon: "https://cursor.com/en/twitter-image.png?375711d39ab904b7" }
    ],
  },
];

export const PROJECTS_DATA = [
  {
    title: "Aurene - E-commerce Platform",
    description: "A modern e-commerce platform built with React, Vite, and Django. Represents the future of online shopping.",
    tags: ["React", "Vite", "Python", "Django", "PostgreSQL", "Docker"],
    imageUrl: "/pictures/aurene.png",
    liveUrl: "https://aurene.netlify.app",
    githubUrl: "https://github.com/sarowar107/Aurene",
  },
   {
    title: "Ghoorni-CUET Portal",
    description: "A RESTful API that analyzes the sentiment of a given text, built with Python, Flask, and Scikit-learn.",
    tags: ["React", "Vite", "JAVA", "Spring", "Spring Boot", "MySQL", "Docker"],
    imageUrl: "/pictures/ghoorni.png",
    liveUrl: "https://ghoorni.netlify.app/",
    githubUrl: "https://github.com/sarowar107/Ghoorni-Frontend",
  },
  {
    title: "Portfolio Generator",
    description: "A web-based application that helps users create and manage their portfolios easily.",
    tags: ["React", "Vite", "Python", "Django", "PostgreSQL"],
    imageUrl: "/pictures/portfolio_generator.png",
    liveUrl: "https://portfoliomakerfree.netlify.app/",
    githubUrl: "https://github.com/sarowar107/Portfolio-Generator",
  },
  {
    title: "Book Cottage",
    description: "An online bookstore platform built with React, Vite, and Django.",
    tags: ["React", "Vite", "Python", "Django", "PostgreSQL", "Docker"],
    imageUrl: "/pictures/book_cottage.jpg",
    liveUrl: "https://bookcottage.netlify.app/",
    githubUrl: "https://github.com/sarowar107/Book-Cottage",
  },
  {
    title: "SoleSphere - Modern E-commerce",
    description: "A full-stack e-commerce platform for selling shoes, with a focus on user experience and performance.",
    tags: ["React", "Vite", "Python", "Django", "PostgreSQL"],
    imageUrl: "/pictures/SoleSphere.png",
    liveUrl: "https://sole-sphere.netlify.app/",
    githubUrl: "https://github.com/sarowar107/SoleSphere",
  },

  {
    title: "Personal Blog Platform",
    description: "A feature-rich, statically generated blog website and Markdown for content creation.",
    tags: ["React", "Vite", "Python", "Django", "PostgreSQL"],
    imageUrl: "/pictures/blog_platform.png",
    liveUrl: "https://inkwel.netlify.app/",
    githubUrl: "https://github.com/sarowar107/inkwell",
  },
];
