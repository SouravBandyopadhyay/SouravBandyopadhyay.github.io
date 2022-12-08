import React from "react";
import ProjectComponent from "./ProjectComponent";
import Githubstats from "./Githubstats";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  SiNpm,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostman,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiBootstrap,
  SiExpress,
  SiChakraui,
  SiGithub,
  SiGit,
} from "react-icons/si";
const Project = () => {
  const listProjects = [
    {
      id: 1,
      name: "Github Finder",
      github_link: "https://github.com/SouravBandyopadhyay/GithubFinder",
      deployed_link: "https://resplendent-granita-966ca8.netlify.app/",
      img_link:
        "https://camo.githubusercontent.com/e04d9b21382aa5d0cdd81927098ad42bcf78ace9308b1db63785a0f767638806/68747470733a2f2f692e706f7374696d672e63632f6430764a787952482f5765622d636170747572652d32392d31312d323032322d3134313335322d726573706c656e64656e742d6772616e6974612d3936366361382d6e65746c6966792d6170702e6a7067",
      desc: "This is a robust, fully featured React App. This GitHub Finder allow user to find existing user on GitHub and also checkout some Trending Repository and Developers.",
      funct: [
        "Display Searched Profile and Trending Profile",
        "Searching Functionality is also provided.",
        "All components are cross-device compatible.",
      ],
    },
    {
      id: 2,
      name: "MyHours.com",
      github_link: "https://github.com/sushank678/mutual-cart-3380",
      deployed_link: "https://silver-sfogliatella-0c9664.netlify.app/",
      img_link:
        "https://i.postimg.cc/52gr1sMv/Web-capture-22-10-2022-164712-silver-sfogliatella-0c9664-netlify-app.jpg",
      desc: "MyHours is a time tracking solution best suited for small teams and freelancers. Users can start time tracking on unlimited projects and tasks.",
      funct: [
        "Time tacking dashboard",
        "Login with user details stored in localstorage",
        "User can store client details and track time.",
      ],
    },
    {
      id: 3,
      name: "TheMealHub",
      github_link: "https://github.com/SouravBandyopadhyay/TheMealHub",
      deployed_link: "https://superlative-tapioca-85f901.netlify.app/",
      img_link:
        "https://camo.githubusercontent.com/edd4469d21f1a514182497de0bcfe87b224a716ebeca1130ea8082e8cdcb69b5/68747470733a2f2f692e706f7374696d672e63632f6b4d32743235564d2f5765622d636170747572652d31342d31312d323032322d32333137372d73757065726c61746976652d746170696f63612d3835663930312d6e65746c6966792d6170702e6a7067",
      desc: "TheMealHub is an Online Food Recipe website where you can search your favorite food according to your taste.",
      funct: [
        "Fetching API for displaying the data.",
        "Meal Item is sorted in Alphabetical Order.",
        "Food of the Day section is provided where Random special food is give",
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
      desc: "StyleCraze is a global women's platform that aims to answer question from health and wellness to lifestyle and beauty.",
      funct: [
        "Displaying data using API",
        "Infinite Loop Banner",
        "Use of React to calculate BMI",
      ],
    },
  ];
  return (
    <>
      <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
        <Text
          as={"span"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: useBreakpointValue({ base: "20%", md: "25%" }),
            position: "absolute",
            bottom: 1,
            left: 0,
            zIndex: -1,
          }}
        >
          Project
        </Text>
      </Heading>
      <Box w="100%" p={5} marginTop={2} >
        <SimpleGrid
          // columns={2}
          spacing={10}
          templateColumns={[
            "1fr",
            "repeat(1,1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
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
