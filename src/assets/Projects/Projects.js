import Portfolio from "./Portfolio.png";
import Wether from "./Wether.png";
import RealEstate from "./RealEstate.png";
import Yelpcamp from "./Yelpcamp.jpg";
import AiImage from "./Ai.jpg";

const projects = [
  {
    image: Portfolio,
    name: "Portfolio Website",
    link: "https://coh-portfolio-abdp.onrender.com",
    active: true,
    category: "Web Development",
    summary:
      "A responsive developer portfolio built with React and Tailwind CSS to showcase personal projects, skills, and experience. Designed with accessibility and mobile responsiveness in mind, the site also features social links, a contact form, and a modern dark-themed aesthetic. Hosted on Render for fast and reliable performance.",
    labels: ["React", "Tailwind"],
  },
  {
    image: RealEstate,
    name: "Lading page",
    link: "https://realestate-landing-page.onrender.com",
    active: true,
    category: "Web App",
    summary:
      "An interactiveA professional real estate landing page built using HTML, CSS, and Tailwind CSS. It features a hero section, property listings, testimonials, and contact form. The design focuses on clean layout, effective use of whitespace, and compelling CTAs to drive user engagement. Fully responsive and optimized for conversion, making it suitable for real estate marketing and client showcase.",
    labels: ["MERN", "OpenAI"],
  },
  {
    image: Yelpcamp,
    name: "YelpCamp",
    link: "https://yelpcamp-tae8.onrender.com",
    active: true,
    category: "Web Development",
    summary:
      "A full-stack web application inspired by Yelp, where users can create, view, and review campgrounds. Built with Node.js, Express, MongoDB, and EJS, it features user authentication, RESTful routing, and CRUD operations. Users can register, post camps with images and locations, leave comments, and rate experiences. Deployed on Render with Cloudinary integration for image hosting and Mapbox",
    labels: ["React", "Node.js"],
  },
];

export default projects;
