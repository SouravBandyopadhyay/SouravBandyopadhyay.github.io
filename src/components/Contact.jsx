import {
  Box,
  chakra,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
  Icon,
  Link,
  HStack,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaGithub,
  FaHome,
  FaPhoneAlt,
  FaDownload,
  FaFolder,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function SmallWithSocial() {
  return (
    <Box>
      <VStack>
        <Heading>Contact Me</Heading>
      </VStack>
      {/* Footer */}
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <HStack>
          <Icon as={FaHome} boxSize={["2em", "3em"]} />
          <Text fontSize={["md", "lg"]}>
            &nbsp;&nbsp; Gurugram Haryana,India
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaPhoneAlt} boxSize={["2em", "3em"]} />
          <Text fontSize={["md", "lg"]}>
            &nbsp;&nbsp; +91 8240411987 / 9062415895
          </Text>
        </HStack>
        <HStack>
          <Icon as={FaFolder} boxSize={["2em", "3em"]} />
          <Link
            href="https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view?usp=sharing"
            download="Sourav-Bandyopadhyay-Resume.pdf"
            isExternal
          >
            <Text fontSize={["md", "lg"]}>Resume</Text>
          </Link>
        </HStack>
        <Stack direction={"row"} spacing={6} p={2}>
          <Link
            margin="auto"
            href="https://github.com/SouravBandyopadhyay"
            isExternal
          >
            <Icon as={FaGithub} boxSize={["2em", "3em"]} />
          </Link>
          <Link
            margin="auto"
            href="https://www.linkedin.com/in/souravbandyopadhyay/"
            isExternal
          >
            <Icon as={FaLinkedin} boxSize={["2em", "3em"]} />
          </Link>
          <Link margin="auto" href="mailto:souravb.1998@gmail.com?" isExternal>
            <Icon as={SiGmail} boxSize={["2em", "3em"]} />
          </Link>
        </Stack>
      </Container>
      <Box
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        margin="auto"
        p={2}
      >
        <Text>
          © 2022 All rights reserved. Created by Sourav Bandyopadhyay with{" "}
          <span role="img">❤️</span>
        </Text>
      </Box>
    </Box>
  );
}
