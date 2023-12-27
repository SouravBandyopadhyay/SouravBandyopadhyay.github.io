import React from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
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
  FaFolder,
  FaDownload,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const contactDetails = [
  { icon: FaHome, text: "Gurugram Haryana, India" },
  { icon: FaPhoneAlt, text: "+91 8240411987 / 9062415895" },
  {
    icon: FaFolder,
    text: "Resume",
    link: "https://drive.google.com/file/d/1X4JXImKhHJj_tv4Mcn1ZPy4uDV5boDwj/view?usp=sharing",
    download: "Sourav-Bandyopadhyay-Resume.pdf",
  },
];

const socialLinks = [
  { icon: FaGithub, link: "https://github.com/SouravBandyopadhyay" },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/souravbandyopadhyay/",
  },
  { icon: SiGmail, link: "mailto:souravb.1998@gmail.com?" },
];

export default function Contact() {
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
        {contactDetails.map(({ icon: IconComponent, text, link, download }) => (
          <HStack key={text}>
            <Icon as={IconComponent} boxSize={["2em", "3em"]} />
            {link ? (
              <Link href={link} download={download} isExternal>
                <Text fontSize={["md", "lg"]}>{text}</Text>
              </Link>
            ) : (
              <Text fontSize={["md", "lg"]}>&nbsp;&nbsp;{text}</Text>
            )}
          </HStack>
        ))}
        <Stack direction={"row"} spacing={6} p={2}>
          {socialLinks.map(({ icon: IconComponent, link }) => (
            <Link key={link} margin="auto" href={link} isExternal>
              <Icon as={IconComponent} boxSize={["2em", "3em"]} />
            </Link>
          ))}
        </Stack>
      </Container>
      <Box
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        margin="auto"
        p={2}
      >
        <Text>
          © 2023 All rights reserved. Created by Sourav Bandyopadhyay with{" "}
          <span role="img">❤️</span>
        </Text>
      </Box>
    </Box>
  );
}
