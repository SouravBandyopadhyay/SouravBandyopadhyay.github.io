import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraMotionBox = motion(Box, {
  shouldForwardProp: (prop) => isValidMotionProp(prop),
});

export default function Home() {
  return (
    <Stack direction={{ base: "column", md: "row" }} spacing={2}>
      <Flex p={4} flex={1.5} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}>
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
              Hi, I am
            </Text>
            <br />
            {/* Apply fade-in animation to the name */}
            <ChakraMotionBox
              color={"blue.200"}
              as={"span"}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              Sourav Bandyopadhyay
            </ChakraMotionBox>
          </Heading>
          <Text
            textAlign="left"
            fontSize={{ base: "1rem", md: "1.3rem", lg: "1.6rem" }}
          >
            Enthusiastic Full Stack Web Developer{" "}
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            dedicated to delivering cutting-edge websites and applications. I'm
            passionate about crafting experiences that are engaging, accessible
            and user-centric.
          </Text>
          <Box>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              as={Link}
              href="https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view?usp=sharing"
              isExternal
              // textDecoration="none"
              _focus={{ outline: "none" }}
            >
              Resume
            </Button>
          </Box>
        </Stack>
      </Flex>
      <Flex p={4} flex={1} align={"center"} justify={"center"}>
        <Image
          margin="auto"
          boxSize={{ base: "200px", md: "300px" }}
          borderRadius="full"
          alt={"Sourav Bandyopadhyay"}
          objectFit={"cover"}
          src={"https://i.postimg.cc/tJFg0DSh/img.jpg"}
        />
      </Flex>
    </Stack>
  );
}
