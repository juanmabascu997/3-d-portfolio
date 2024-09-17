import {
  portfolio,
    azure,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    pioeral,
    carrent,
    jobit,
    tripguide,
    threejs,
    acudir,
    pentas,
    c,
    vue,
    smclothes,
    pickingpro,
    jero,
    solange,
    blogapp,
    weatherapp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "feedback",
      title: "Testimonials",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Vue JS Dev",
      icon: web,
    },
    {
      title: "React JS Dev",
      icon: mobile,
    },
    {
      title: "Node JS Dev",
      icon: backend,
    },
    {
      title: "DevOps in Azure",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Vue JS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "c#",
      icon: c,
    },
    {
      name: "vue JS",
      icon: vue,
    },
    {
      name: "azure",
      icon: azure,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Pioeral",
      icon: pioeral,
      iconBg: "#383E56",
      date: "May 2022 - Jun 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Work practices and code reviews.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Penta Security Solutions",
      icon: pentas,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Jun 2023",
      points: [
        "Developing and maintaining web applications using React.ts, Vue.js, and backend with .NET.",
        "I work remotely, with scrum and kanban methodology.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "SSr Frontend Developer",
      company_name: "Acudir medical emergencies",
      icon: acudir,
      iconBg: "#383E56",
      date: "Jun 2023 - Currently",
      points: [
        "Developing and maintaining web applications using Vue.js and ASP .NET.",
        "I worked with the implementation of a new streaming system at Jitsi.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Contribute as DevOps in Azure with project and repository management.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Since I started working, I have had the pleasure of meeting someone who is always willing to help and face challenges with enthusiasm. Juan Manuel is an example of professionalism and dedication in our field. He is always ready to share his experience and knowledge, which has been a great help to the entire team. What has really impressed me about Juanma is his constant energy and good vibes. His positive attitude is contagious and motivates us all to do our best. In short, he is a developer who is not only a valuable asset to our team, but also a role model. I am grateful for the opportunity to work alongside someone so talented and dedicated.",
      name: "Solange Burgos",
      designation: "Sofware Engineer",
      company: "Acudir Emergencias Medicas",
      image: solange,
    },
    {
      testimonial:
        "Professional committed to delivering the final product. Focus on comprehensive solution proposals, without neglecting excellence in the detail applied in each individual solution. Efficient management of internal and external resources to ensure delivery of final product based on Streaming platform. Commitment to monitoring applied developments and generating improvement proposals. Adaptability to hybrid methodology.",
      name: "Jerónimo Manuel Igolnikov",
      designation: "Functional leader",
      company: "Acudir Emergencias Medicas",
      image: jero,
    },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "SM Clothes",
      description:
        "Mobile application created for the management of purchase returns linked to contabilium.",
      tags: [
        {
          name: "reactNative",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodeJs",
          color: "pink-text-gradient",
        },
      ],
      image: smclothes,
      source_code_link: "https://github.com/juanmabascu997/SM-Clothes-API",
    },
    {
      name: "Picking Pro",
      description:
        "Web and mobile application that allows the linking of TiendaNube stores, and facilitates the packaging and picking processes of products.",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "reactNative",
          color: "pink-text-gradient",
        },
        {
          name: "nodeJs",
          color: "green-text-gradient",
        },
        {
          name: "mongoDb",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: pickingpro,
      source_code_link: "https://github.com/juanmabascu997/pickingpro-front-v2",
    },
    {
      name: "My 3D Porfolio",
      description:
        "My 3D portfolio. I hope it is to your liking.",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "vite",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/juanmabascu997/3-d-portfolio",
    },
    {
      name: "Blog App",
      description:
        "Application to simulate the operation of a blog.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        }
      ],
      image: blogapp,
      source_code_link: "https://github.com/juanmabascu997/react-blog-webapp",
    },
    {
      name: "Weather App",
      description:
        "Check the forecast for the city you need. Up to 3 days forecast.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        }
      ],
      image: weatherapp,
      source_code_link: "https://github.com/juanmabascu997/ProjectWeatherAPI",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };