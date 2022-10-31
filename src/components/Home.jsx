import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Button,
  Link,
  Image,
  AspectRatio,
  ButtonGroup,
  Text
} from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box
        w="100%"
        h="-moz-max-content"
        textAlign="center"
        display="flex"
        gap="1.5rem"
        fontSize={{ base: "1rem", md: "1.3rem", lg: "1.6rem" }}
        p={4}
      >
        <Box w="70%" h="-moz-max-content" justifyContent="center">
          <Text
            as="h1"
            fontWeight="bold"
            p={4}
            fontSize={{ base: "24px", md: "28px", lg: "32px" }}
          >
            Hi I am Sourav Bandyopadhyay
          </Text>
          <Box>
            <Text w="90%" as="p" p={4} margin="auto" marginTop="10">
              A passionate Full Stack Web Developer
              <span role="img" aria-label="rocket">
                🚀
              </span>
              having an exposure of building Websites with JavaScript / Reactjs
              / Nodejs / MongoDB and some other cool libraries and frameworks.
            </Text>
          </Box>
          <ButtonGroup variant="outline" spacing="6" marginTop="5">
            <Link
              href="https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view?usp=sharing"
              isExternal
              style={{ textDecoration: "none" }}
            >
              <Button
                colorScheme="blue"
                fontSize={{ base: "18px", md: "24px", lg: "28px" }}
              >
                Resume
              </Button>
            </Link>
          </ButtonGroup>
        </Box>
        <Box w="28%" h="-moz-max-content" p="10">
          <AspectRatio ratio={1}>
            <Image
              src="https://i.postimg.cc/tJFg0DSh/img.jpg"
              alt="naruto"
              objectFit="cover"
              borderRadius="full"
            />
          </AspectRatio>
        </Box>
      </Box>
    </>
  );
};
export default Home;
