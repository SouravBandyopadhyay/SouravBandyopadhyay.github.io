import {Box, Heading, Text } from "@chakra-ui/react";
import Illust from "./Illust";
const About = () => {
  return (
    <>
      <Box
        fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
        textAlign="center"
        p="1.5"
      >
        <Heading
          as="h1"
          fontSize={{ base: "24px", md: "30px", lg: "36px" }}
          mb={3}
        >
          About Me
        </Heading>
        <Box
          w="100%"
          h="-moz-max-content"
          display="flex"
          gap="1rem"
          justifyContent="space-evenly"
        >
          <Box
            w="60%"
            p={4}
            fontSize={{ base: "1rem", md: "1.3rem", lg: "1.6rem" }}
          >
            <Text textAlign="left">
              I'm a <strong>Web Developer</strong> from Gurugram, Haryana.
              <br />
              Gone through rigirous and competetive coding cirrculam and learned
              MERN Stack at Masai School. I have done various group as well as
              individual projects in my coding journey.Check out some of my work
              in the <strong>Project</strong> section.
              <br />I did my Bachelors in Mechanical Engineering . After college
              I was working with Globsyn AI Workspace as a Technical Apprentice
              from there I develop a keen inclination towards coding. My
              interests are reading articles and manga comics.
              <br />
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to <strong>Contact</strong> me.
            </Text>
          </Box>
          <Box w="30%">
            <Illust />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default About;
