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
  HStack,
  Stack,
  OrderedList,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const ProjectComponentlol = ({
  name,
  github_link,
  deployed_link,
  img_link,
  desc,
  funct,
}) => {
  return (
    <>
      <Box
        h="-moz-max-content"
        border="5px solid white"
        p="3"
        _hover={{ transform: "translateY(-5px)" }}
        borderRadius="md"
      >
        <Grid templateColumns="repeat(5, 1fr)" gap={3}>
          <GridItem colStart={1} colEnd={6}>
            <Heading
              as="h2"
              textAlign="center"
              p={4}
              fontWeight="600"
              fontSize={["3xl","4xl","5xl"]}
              textDecoration="underline"
            >
              <strong> {name}</strong>
            </Heading>
          </GridItem>
          <VStack
            colSpan={1}
            display="inline-grid"
            justifyContent="center"
            gap={4}
            alignItems="center"
          >
            <Link href={github_link} isExternal>
              <Icon as={FaGithub} boxSize={["2em", "3em"]} />
            </Link>
            <Link href={deployed_link} isExternal>
              <Icon as={SiNetlify} boxSize={["2em", "3em"]} />
            </Link>
          </VStack>
          <GridItem colStart={2} colEnd={6}>
            {/* Picture related to project */}
            <AspectRatio ratio={2 / 1}>
              <Image
                w="100%"
                boxSize="250px"
                borderRadius="lg"
                src={img_link}
              />
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
        </Grid>
        <Stack
          direction={"column"}
          spacing={2}
          textAlign="center"
          p={2}
          paddingLeft={50}
          margin="auto"
        >
          <Text  fontSize={["xl", "2xl"]} fontWeight={600} textAlign="center">
            Functionality
          </Text>
          <OrderedList margin="auto">
            {funct.map((el, index) => (
              <ListItem key={index} fontSize={["md", "lg"]}>
                {el}
              </ListItem>
            ))}
          </OrderedList>
        </Stack>
        <Box>
          <Text  fontSize={["xl", "2xl"]} fontWeight={600} textAlign="center">
            Techstacks
          </Text>
          <HStack p={2} gap={4} margin="auto" justifyContent="center">
            <SiJavascript size="2.5rem" /> <SiReact size="2.5rem" />
            <SiHtml5 size="2.5rem" /> <SiCss3 size="2.5rem" />
            <SiNpm size="2.5rem" />
          </HStack>
        </Box>
      </Box>
    </>
  );
};
export default ProjectComponentlol;
