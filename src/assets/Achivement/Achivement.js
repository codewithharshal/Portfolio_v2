import FWR from "./React.webp";
import JI from "./Js.webp";
import DSA from "./DSA.webp";
import Web_dev_bootcamp from "./Web_dev_bootcamp.webp";

const achievements = [
  {
    image: Web_dev_bootcamp,
    // link: "https://your-portfolio-site.com",
    title: "Web devlopment Bootcamp",
    active: true,
    platform: "Udemy - Colt Steele",
    description:
      "Gained hands-on experience in full-stack web development, covering HTML, CSS, JavaScript, Node.js, Express, MongoDB, and RESTful APIs. Built multiple real-world projects while strengthening core web fundamentals and modern development practices.",
    date: "March 2024",
    labels: ["WEB", "MERN"],
  },
  {
    image: FWR,
    // link: "https://your-portfolio-site.com",
    title: "Frontend with React",
    active: true,
    platform: "Udemy",
    description:
      "Successfully completed a comprehensive React development curriculum focusing on component-based architecture, state management with hooks, props drilling, and building dynamic single-page applications. Developed a strong understanding of modern JavaScript (ES6+), JSX, and responsive web design.",
    date: "August 2023",
    labels: ["React", "JavaScript"],
  },
  {
    image: JI,
    // link: "https://your-portfolio-site.com",
    title: "JavaScript Essentials",
    active: true,
    platform: "Udemy",
    description:
      "Learned the fundamentals of JavaScript including working with the DOM, handling user events, manipulating HTML and CSS dynamically, and using browser APIs like localStorage and fetch. Built interactive web pages using vanilla JavaScript. Strengthened understanding of ES6 syntax, scopes, and asynchronous behavior with callbacks and promises.",
    date: "August 2023",
    labels: ["JavaScript", "DOM"],
  },

  {
    image: DSA,
    // link: "https://your-portfolio-site.com",
    title: "Data Structures and Algorithms",
    active: true,
    platform: "PW Skills",
    description:
      "Completed an intensive course focused on building problem-solving skills using essential data structures and algorithms. Covered topics such as arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and dynamic programming.",
    date: "May 2024",
    labels: ["DSA", "CP"],
  },
];

export default achievements;
