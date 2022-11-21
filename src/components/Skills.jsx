import {
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  Box,
  Heading,
  Text,
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
  SiBootstrap,
  SiExpress,
  SiChakraui,
  SiGithub,
  SiGit,
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
          <Box w="90%" p={2} margin="auto">
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
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
                // border="2px solid red"
              >
                <SiNpm size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  NPM
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiCss3 size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  CSS
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiJavascript size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  JavaScript
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiGit size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  Git
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiReact size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  ReactJS
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiPostman size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  Postman
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiMongodb size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  Mongodb
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiChakraui size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  Chakraui
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiGithub size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  Github
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiExpress size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  Express
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiBootstrap size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  Bootstrap
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiRedux size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  Redux
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiTypescript size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  Typescript
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiHtml5 size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  HTML
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                display="inline-flex"
                gap={4}
                p={1}
                _hover={{ transform: "translateY(-5px)" }}
              >
                <SiNodedotjs size="5rem" />
                <Text fontSize="3xl" margin="auto">
                  NodeJS
                </Text>
              </GridItem>
            </Grid>
          </Box>

          {/* <Box w="58%" p={2}>
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
          </Box> */}
        </Box>
      </Box>
    </>
  );
};
export default Skills;
