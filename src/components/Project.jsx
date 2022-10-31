import React from "react";
import ProjectComponent from "./ProjectComponent";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import Githubstats from "./Githubstats";
const Project = () => {
  const listProjects = [
    {
      id: 1,
      name: "Github Search App",
      github_link: "https://github.com/SouravBandyopadhyay/Github_Search_app",
      deployed_link: "https://inquisitive-rugelach-46383b.netlify.app/",
      img_link:
        "https://i.postimg.cc/gc6YrDfZ/Web-capture-22-10-2022-151948-inquisitive-rugelach-46383b-netlify-app.jpg",
      desc:
        "This is a robust, fully featured React App . This Single Page github app allows the visitor to search for github users.",
      funct: [
        "Display Searched Profile and Trending Profile",
        "Show Date and time",
        "Conditional Rendering"
      ]
    },
    {
      id: 2,
      name: "MyHours.com",
      github_link: "https://github.com/sushank678/mutual-cart-3380",
      deployed_link: "https://silver-sfogliatella-0c9664.netlify.app/",
      img_link:
        "https://i.postimg.cc/52gr1sMv/Web-capture-22-10-2022-164712-silver-sfogliatella-0c9664-netlify-app.jpg",
      desc:
        "MyHours is a cloud-based time tracking solution best suited for small teams and freelancers. Users can start time tracking on unlimited projects and tasks.",
      funct: [
        "Time tacking dashboard",
        "Login with user details stored in localstorage",
        "User can store client details and track time."
      ]
    },
    {
      id: 3,
      name: "Lyst.com",
      github_link: "https://github.com/SouravBandyopadhyay/Lyst.com-Clone",
      deployed_link: "https://moonlit-fenglisu-6d77e7.netlify.app/",
      img_link:
        "https://i.postimg.cc/50FWmyPn/Web-capture-22-10-2022-182637-moonlit-fenglisu-6d77e7-netlify-app.jpg",
      desc:
        "Lyst is a fashion technology company, and premium shopping website covering all range of customers.",
      funct: [
        "Login Authentication using API",
        "Sorting functionality based on price",
        "Payment and checkout Page"
      ]
    },
    {
      id: 4,
      name: "StyleCraze.com",
      github_link:
        "https://github.com/SouravBandyopadhyay/StyleCraze-Website-Clone",
      deployed_link: "https://serene-khapse-d163a3.netlify.app/",
      img_link:
        "https://i.postimg.cc/65R55znb/Web-capture-22-10-2022-183947-serene-khapse-d163a3-netlify-app.jpg",
      desc:
        "StyleCraze is a global women's platform that aims to answer one question: what do women want? From health and wellness to lifestyle and beauty.",
      funct: [
        "Displaying data using API",
        "Infinite Loop Banner",
        "Use of React to calculate BMI"
      ]
    }
  ];
  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Project
      </Heading>
      <Box w="100%" p={5}>
        <SimpleGrid
          // columns={2}
          spacing={10}
          templateColumns={[
            "1fr",
            "repeat(1,1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)"
          ]}
          gap={[2, 2, 3, 3]}
        >
          {listProjects.map((el) => (
            <ProjectComponent
              key={el.id}
              name={el.name}
              github_link={el.github_link}
              deployed_link={el.deployed_link}
              img_link={el.img_link}
              desc={el.desc}
              funct={el.funct}
            />
          ))}
        </SimpleGrid>
      </Box>
      {/* Github Statistics */}
      <Githubstats />
    </>
  );
};

export default Project;
