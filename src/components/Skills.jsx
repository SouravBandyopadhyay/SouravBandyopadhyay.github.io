import {
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  Box,
  Heading,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
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
} from "react-icons/si";
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
          <Box w="38%" p={2} margin="auto">
            <Grid
              p={2}
              templateColumns={[
                "1fr",
                "repeat(2,1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={[2, 2, 3, 3]}
            >
              <GridItem w="100%" display="inline-flex" gap={4} p={1}>
                <SiNpm size="3rem" />
                <p>npm</p>
              </GridItem>
              <GridItem w="100%" display="inline-flex" gap={4} p={1}>
                <SiCss3 size="3rem" />
                <p>css3</p>
              </GridItem>
              <GridItem w="100%" display="inline-flex" gap={4} p={1}>
                <SiJavascript size="3rem" />
                <p>JavaScript</p>
              </GridItem>
              <GridItem w="100%" display="inline-flex" gap={4} p={1}>
                <SiReact size="3rem" />
                <p>ReactJS</p>
              </GridItem>
              <GridItem w="100%" display="inline-flex" gap={4} p={1}>
                <SiPostman size="3rem" />
                <p>Postman</p>
              </GridItem>
              <GridItem w="100%" display="inline-flex" gap={4} p={1}>
                <SiMongodb size="3rem" />
                <p>Mongodb</p>
              </GridItem>
              <GridItem w="100%" display="inline-flex" gap={4} p={1}>
                <SiRedux size="3rem" />
                <p>Redux</p>
              </GridItem>
              <GridItem w="100%" display="inline-flex" gap={4} p={1}>
                <SiTypescript size="3rem" />
                <p>Typescript</p>
              </GridItem>
              <GridItem w="100%" display="inline-flex" gap={4} p={1}>
                <SiHtml5 size="3rem" />
                <p>html-5</p>
              </GridItem>
              <GridItem w="100%" display="inline-flex" gap={4} p={1}>
                <SiNodedotjs size="3rem" />
                <p>NodeJS</p>
              </GridItem>
            </Grid>
          </Box>

          <Box w="58%" p={2}>
            <Heading
              as="h2"
              fontSize={{ base: "18px", md: "24px", lg: "28px" }}
              mb={3}
            >
              FULL STACK WEB DEVELOPER WHO WANTS TO BUILD REAL ROBUST
              APPLICATION
            </Heading>
            <List
              spacing={4}
              fontSize={{ base: "14px", md: "18px", lg: "22px" }}
              textAlign="left"
            >
              <ListItem>
                {" "}
                <ListIcon as={CheckCircleIcon} color="green.500" /> Develop
                highly interactive Front end / User Interfaces for your web and
                mobile applications
              </ListItem>
              <ListItem>
                {" "}
                <ListIcon as={CheckCircleIcon} color="green.500" /> Intrested in
                designing and development of software Testing and debugging
                software to keep it optimized.
              </ListItem>
              <ListItem>
                {" "}
                <ListIcon as={CheckCircleIcon} color="green.500" /> Intrested in
                designing and development of software Testing and debugging
                software to keep it optimized.
              </ListItem>
              <ListItem>
                {" "}
                <ListIcon as={CheckCircleIcon} color="green.500" /> Keeping up
                with technological advances to optimize software Communication
                and effectiveness as per emerging technologies.
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Skills;
