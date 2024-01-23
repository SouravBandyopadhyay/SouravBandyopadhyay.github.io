import React from "react";
import {
  Box,
  Badge,
  Image,
  Text,
  Link,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

const Project = () => {
  const projects = [
    {
      title: "TheMealHub",
      description:
        "TheMealHub is an Online Food Recipe website where you can search your favorite food according to your taste.",
      image: require("../assets/TheMealHub.jpeg"),
      fallbackSrc: "https://via.placeholder.com/600x200",
      techStack: ["React", "Chakra UI"],
      githubLink: "https://github.com/SouravBandyopadhyay/TheMealHub",
      liveDemoLink: "https://superlative-tapioca-85f901.netlify.app/",
    },
    {
      title: "Github Finder",
      description:
        "The GitHub Finder allow the user to find existing user on GitHub and also check out some Trending Repository and Developers.",
      image: require("../assets/GithubFinder.jpeg"),
      fallbackSrc: "https://via.placeholder.com/600x200",
      techStack: ["React", "Chakra UI"],
      githubLink: "https://github.com/SouravBandyopadhyay/GithubFinder",
      liveDemoLink:
        "https://github-finder-cobvz5zvl-souravbandyopadhyay.vercel.app/",
    },
    // {
    //   title: "Project 3",
    //   description: "Description for Project 3",
    //   image: "https://via.placeholder.com/600x200",
    //   fallbackSrc: "https://via.placeholder.com/600x200",
    //   techStack: ["React", "Node.js"],
    //   githubLink: "https://github.com/yourusername/project1",
    //   liveDemoLink: "https://project1-demo.com",
    // },
  ];

  return (
    <SimpleGrid columns={[1, 1, 2]} spacing="40px">
      {projects.map((project, index) => (
        <Box
          key={index}
          maxW={{ base: "100%", md: "md" }} // Adjusted maxW for responsiveness
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={4}
          shadow="md"
        >
          <Image
            // w="600"
            // h="200"
            objectFit="cover"
            src={project.image}
            alt={`Project Image ${index + 1}`}
            borderRadius="md"
            fallbackSrc={project.fallbackSrc}
          />
          <Box mt={4}>
            <Text fontSize="2xl" fontWeight="semibold">
              {project.title}
            </Text>
            <Text mt={2} color="gray.500">
              {project.description}
            </Text>
          </Box>
          <Box mt={4}>
            {project.techStack.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="outline"
                colorScheme="blue"
                mr={2}
              >
                {tech}
              </Badge>
            ))}
          </Box>
          <Box mt={4} textAlign="center">
            <Button
              as={Link}
              href={project.githubLink}
              isExternal
              aria-label={`GitHub Link ${index + 1}`}
            >
              GitHub
            </Button>
            <Button
              as={Link}
              href={project.liveDemoLink}
              isExternal
              ml={4}
              color="green.500"
              aria-label={`Live Demo Link ${index + 1}`}
            >
              Live Demo
            </Button>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Project;
