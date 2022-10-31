import React from "react";
import {
  SiNetlify,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNpm,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import {
  Box,
  Text,
  Link,
  Grid,
  GridItem,
  AspectRatio,
  Image,
  List,
  ListItem,
  ListIcon,
  Heading,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const ProjectComponent = ({
  name,
  github_link,
  deployed_link,
  img_link,
  desc,
  funct,
}) => {
  return (
    <>
      <Box h="-moz-max-content" w="100%">
        <Grid templateColumns="repeat(5, 1fr)" gap={1}>
          <GridItem colStart={1} colEnd={6}>
            <Heading
              as="h2"
              textAlign="center"
              p={4}
              fontWeight="600"
              fontSize={["22px", "28px", "34px"]}
            >
              {name}
            </Heading>
          </GridItem>
          <GridItem
            colSpan={1}
            // h="-moz-max-content"
            display="inline-grid"
            justifyContent="space-around"
            gap={2}
            // border="4px solid red"
            alignItems="center"
          >
            <Link href={github_link} isExternal>
              <FaGithub size="3rem" />
            </Link>
            <Link href={deployed_link} isExternal>
              <SiNetlify size="3rem" />
            </Link>
          </GridItem>
          <GridItem colStart={2} colEnd={6}>
            {/* Picture related to project */}
            <AspectRatio ratio={2 / 1}>
              <Image w="100%" boxSize="250px" p={2} src={img_link} />
            </AspectRatio>
          </GridItem>
          <GridItem colStart={1} colEnd={6}>
            <Text
              textAlign="center"
              p={4}
              fontWeight="600"
              fontSize={["sm", "md", "lg", "xl"]}
            >
              {" "}
              {desc}
            </Text>
          </GridItem>
          <GridItem colSpan={3} p={5}>
            <Heading
              as="h3"
              textAlign="center"
              p={4}
              fontWeight="600"
              fontSize={["sm", "md", "lg", "xl"]}
            >
              Highlighted features
            </Heading>
            <Text>
              <List spacing={2}>
                {funct.map((el, index) => (
                  <Box key={index} display="flex" textAlign="left">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <ListItem> {el} </ListItem>
                  </Box>
                ))}
              </List>
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Heading
              as="h3"
              textAlign="center"
              p={4}
              fontWeight="600"
              fontSize={["sm", "md", "lg", "xl"]}
            >
              Stacks Used
            </Heading>
            <Box
              display="grid"
              gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
              gap={[2, 2, 3, 3]}
              justifyContent="center"
              margin="auto"
            >
              <SiJavascript size="2.5rem" /> <SiReact size="2.5rem" />
              <SiHtml5 size="2.5rem" /> <SiCss3 size="2.5rem" />
              <SiNpm size="2.5rem" />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default ProjectComponent;
