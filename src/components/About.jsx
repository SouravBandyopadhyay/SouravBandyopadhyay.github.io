import { Box, Heading, Text, Hide } from "@chakra-ui/react";
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
              I'm a{" "}
              <strong>
                <i> Web Developer </i>
              </strong>
              from Gurugram, Haryana.
              <br />
              Gone through rigirous and competetive coding cirrculam and learned
              MERN Stack at Masai School. I have done various group as well as
              individual projects in my coding journey.Check out some of my work
              in the
              <strong>
                <i> Project </i>
              </strong>
              section.
              <br />
              I am open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to
              <strong>
                <i> Contact </i>
              </strong>
              me.
            </Text>
          </Box>
          <Hide below="md">
            <Box w="30%">
              <Illust />
            </Box>
          </Hide>
        </Box>
      </Box>
    </>
  );
};
export default About;
