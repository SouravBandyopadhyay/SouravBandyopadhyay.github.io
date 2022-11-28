import {
  Grid,
  GridItem,
  Box,
  Heading,
  Text,
  Icon
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
  SiGit
} from "react-icons/si";
const icons = [
  { id: 1, icon: SiNpm, text: "NPM" },
  { id: 2, icon: SiHtml5, text: "HTML" },
  { id: 3, icon: SiCss3, text: "CSS" },
  { id: 4, icon: SiJavascript, text: "JavaScript" },
  { id: 5, icon: SiReact, text: "React" },
  { id: 6, icon: SiNodedotjs, text: "Nodejs" },
  { id: 7, icon: SiPostman, text: "Postman" },
  { id: 8, icon: SiMongodb, text: "Mongodb" },
  { id: 9, icon: SiRedux, text: "Redux" },
  { id: 10, icon: SiTypescript, text: "Typescript" },
  { id: 11, icon: SiBootstrap, text: "Bootstrap" },
  { id: 12, icon: SiExpress, text: "Express" },
  { id: 13, icon: SiChakraui, text: "ChakraUI" },
  { id: 14, icon: SiGithub, text: "Github" },
  { id: 15, icon: SiGit, text: "Git" }
];
const Skills = () => {
  return (
    <>
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "24px", md: "30px", lg: "36px" }}
          mb={3}
          p={4}
        >
          Skills
        </Heading>
        <Box
          w="100%"
          h="-moz-max-content"
          display="flex"
          gap="1rem"
          justifyContent="space-evenly"
        >
          <Box w="90%" p={2} margin="auto">
            <Grid
              p={2}
              templateColumns={[
                "1fr",
                "repeat(2,1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)"
              ]}
              gap={[2, 2, 3, 3]}
            >
              {icons.map((el) => (
                <GridItem
                  w="100%"
                  display="inline-flex"
                  gap={4}
                  p={1}
                  _hover={{ transform: "translateY(-5px)", fontWeight: 700,color: "blue.200" }}
                  key={el.id}
                >
                  <Icon
                    as={el.icon}
                    boxSize={["3em", "4em", "5em"]}
                  />
                  <Text fontSize={["xl", "2xl", "3xl"]} margin="auto">
                    {el.text}
                  </Text>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Skills;
