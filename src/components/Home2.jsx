import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Link,
  Box,
} from "@chakra-ui/react";

export default function Home2() {
  return (
    <Stack direction={{ base: "column", md: "row" }} g={2}>
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
              Hi I am
            </Text>
            <br />{" "}
            <Text color={"blue.200"} as={"span"}>
              Sourav Bandyopadhyay
            </Text>{" "}
          </Heading>
          <Text
            textAlign="left"
            fontSize={{ base: "1rem", md: "1.3rem", lg: "1.6rem" }}
          >
            A passionate Full Stack Web Developer{" "}
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            having an exposure of building Websites with JavaScript / Reactjs /
            Nodejs / MongoDB and some other cool libraries and frameworks.
          </Text>
          <Box spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <Link
                href="https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view?usp=sharing"
                isExternal
                style={{ textDecoration: "none" }}
              >
                Resume
              </Link>
            </Button>
          </Box>
        </Stack>
      </Flex>
      <Flex p={4} flex={1} align={"center"} justify={"center"}>
        <Image
          margin="auto"
          boxSize="300px"
          borderRadius="full"
          alt={"Login Image"}
          objectFit={"cover"}
          src={"https://i.postimg.cc/tJFg0DSh/img.jpg"}
        />
      </Flex>
    </Stack>
  );
}
