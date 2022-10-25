import React from "react";
import "../comp_styles/project.css";
import ProjectComponent from "./ProjectComponent";
import GitHubCalendar from "react-github-calendar";

const Project = () => {
  const listProjects = [
    {
      id: 1,
      name: "Github Search App",
      github_link: "https://github.com/SouravBandyopadhyay/Github_Search_app",
      deployed_link: "https://inquisitive-rugelach-46383b.netlify.app/",
      img_link:
        "https://i.postimg.cc/gc6YrDfZ/Web-capture-22-10-2022-151948-inquisitive-rugelach-46383b-netlify-app.jpg",
      desc: "This is a robust, fully featured React App . This Single Page github app allows the visitor to search for github users.",
      funct: [
        "Display the Searched Profile and Trending Profile",
        "Show Date and time",
        "Conditional Rendering",
      ],
    },
    {
      id: 2,
      name: "MyHours.com",
      github_link: "https://github.com/sushank678/mutual-cart-3380",
      deployed_link: "https://silver-sfogliatella-0c9664.netlify.app/",
      img_link:
        "https://i.postimg.cc/52gr1sMv/Web-capture-22-10-2022-164712-silver-sfogliatella-0c9664-netlify-app.jpg",
      desc: "MyHours is a cloud-based time tracking solution best suited for small teams and freelancers. Users can start time tracking on unlimited projects and tasks.",
      funct: [
        "Time tacking dashboard",
        "Login with user details stored in localstorage",
        "User can store client details and track time.",
      ],
    },
    {
      id: 3,
      name: "Lyst.com",
      github_link: "https://github.com/SouravBandyopadhyay/Lyst.com-Clone",
      deployed_link: "https://moonlit-fenglisu-6d77e7.netlify.app/",
      img_link:
        "https://i.postimg.cc/50FWmyPn/Web-capture-22-10-2022-182637-moonlit-fenglisu-6d77e7-netlify-app.jpg",
      desc: "Lyst is a fashion technology company, and premium shopping website covering all range of customers.",
      funct: [
        "Login Authentication using API",
        "Sorting functionality based on price",
        "Payment and checkout Page",
      ],
    },
    {
      id: 4,
      name: "StyleCraze.com",
      github_link:
        "https://github.com/SouravBandyopadhyay/StyleCraze-Website-Clone",
      deployed_link: "https://serene-khapse-d163a3.netlify.app/",
      img_link:
        "https://i.postimg.cc/65R55znb/Web-capture-22-10-2022-183947-serene-khapse-d163a3-netlify-app.jpg",
      desc: "StyleCraze is a global women's platform that aims to answer one question: what do women want? From health and wellness to lifestyle and beauty.",
      funct: [
        "Displaying data using API",
        "Infinite Loop Banner",
        "Use of React to calculate BMI",
      ],
    },
  ];
  return (
    <div>
      <h1>PROJECT</h1>
      <div className="map-project-div">
        {listProjects.map((project) => (
          <ProjectComponent
            key={project.id}
            name={project.name}
            github_link={project.github_link}
            deployed_link={project.deployed_link}
            img_link={project.img_link}
            desc={project.desc}
            funct={project.funct}
          />
        ))}
      </div>
      <div
        className="github-stats-div"
        style={{
          width: "100%",
          display: "inline-grid",
          margin: "auto",
          justifyContent: "center",
          gap: "2rem",
          border: "4px solid yellow",
          marginTop: "1rem",
        }}
      >
        <h2>Github Statistics</h2>
        <div style={{ margin: "auto" }}>
          <GitHubCalendar 
            username="SouravBandyopadhyay"
            blockMargin={6}
            blockSize={15}
            fontSize={16}
            margin
          />
        </div>

        <div style={{ display: "flex", gap: "0.5rem", padding: "0.5rem" }}>
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=souravbandyopadhyay&show_icons=true&locale=en&layout=compact&theme=algolia"
            alt="souravbandyopadhyay"
          />
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=souravbandyopadhyay&show_icons=true&locale=en&theme=algolia"
            alt="souravbandyopadhyay"
          />
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=souravbandyopadhyay&theme=algolia"
            alt="souravbandyopadhyay"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
