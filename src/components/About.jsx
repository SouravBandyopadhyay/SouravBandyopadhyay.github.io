import {
  Heading,
  Text,
  Stack,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
const About = () => {
  return (
    <>
      <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} marginTop={2}>
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
          About Me
        </Text>
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} g={2}>
        <Center p={10} align={"center"} justify={"center"} w="full">
          <Text
            textAlign="left"
            fontSize={{ base: "1rem", md: "1.3rem", lg: "1.6rem" }}
          >
            I'm a{" "}
            <Text as={"i"} fontWeight={700}>
              Software Developer{" "}
            </Text>
            from Gurugram, Haryana.
            <br />
            Currently working as{" "}
            <Text as="u">
              Associate Software Developer at Detroit Software Consultants India
              Pvt ltd
            </Text>
            . Before working have went through a rigorous and competitive coding
            curriculum and learned web development from Masai School. I have
            done various group as well as individual projects in my coding
            journey. Check out some of my work in the{" "}
            <Text as={"i"} fontWeight={700}>
              Project{" "}
            </Text>
            section.
            <br />I am open to Job opportunities where I can contribute, learn
            and grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to{" "}
            <Text as={"i"} fontWeight={700}>
              Contact{" "}
            </Text>
            me.
          </Text>
        </Center>
      </Stack>
    </>
  );
};
export default About;
