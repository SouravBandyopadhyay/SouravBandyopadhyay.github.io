import React from "react";
import Contactillust from "./Contactillust";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHandshake, FaPhoneAlt, FaHome } from "react-icons/fa";
import {
  Box,
  SimpleGrid,
  Text,
  Grid,
  GridItem,
  AspectRatio,
  Image,
  Link,
  Spacer,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Box w="100%">
        <SimpleGrid
          templateColumns={["1fr", "1fr", "0.5fr 1.5fr", "0.5fr 1.5fr"]}
          // templateRows={["1fr", "1fr"]}
          gap={[2, 2, 3, 3]}
        >
          <GridItem w="100">
            <Contactillust />
          </GridItem>
          <GridItem>
            <Text
              textAlign="center"
              fontWeight="600"
              fontSize={{ base: "18px", md: "28px", lg: "30px" }}
              p={5}
            >
              {/* <FaHandshake size="3rem" /> */}
              Do you have any queries ? Reach me out and let's work together on
              something exciting.
            </Text>

            <Box
              display="flex"
              w="70%"
              // border="2px solid red"
              justifyContent="space-evenly"
              margin="auto"
            >
              <Text
                textAlign="center"
                fontWeight="600"
                fontSize={{ base: "18px", md: "24px", lg: "30px" }}
                p={2}
              >
                Connect with me on :
              </Text>
              <SimpleGrid
                p={2}
                templateColumns={[
                  "1fr",
                  "repeat(1,1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                ]}
                gap={[1, 1, 2, 3]}
              >
                <Link
                  margin="auto"
                  href="https://github.com/SouravBandyopadhyay"
                  isExternal
                >
                  <FaGithub size="3rem" />
                </Link>
                <Link
                  margin="auto"
                  href="https://www.linkedin.com/in/souravbandyopadhyay/"
                  isExternal
                >
                  <FaLinkedin size="3rem" />
                </Link>
                <Link
                  margin="auto"
                  href="mailto:souravb.1998@gmail.com?"
                  isExternal
                >
                  <SiGmail size="3rem" />
                </Link>
              </SimpleGrid>
            </Box>
            <Box
              colSpan={3}
              w="70%"
              display="grid"
              margin="auto"
              justifyContent="space-evenly"
              p={4}
            >
              <Box display="flex" p={2}>
                <FaHome size="3rem" />
                <Text fontSize={{ base: "16px", md: "24px", lg: "28px" }}>
                  &nbsp;&nbsp; Gurugram Haryana,India
                </Text>
              </Box>
              <Box display="flex" p={2}>
                <FaPhoneAlt size="2.5rem" />
                <Text fontSize={{ base: "16px", md: "24px", lg: "28px" }}>
                  &nbsp;&nbsp; +91 8240411987 / 9062415895
                </Text>
              </Box>
              <Box
                p={2}
                // border="2px solid red"
                w="70%"
                // h="-moz-max-content"
                justifyContent="center"
                display="flex"
              >
                <ButtonGroup variant="outline" spacing="6">
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
            </Box>
          </GridItem>
        </SimpleGrid>
        <Box>
          <Text fontSize={{ base: "18px", md: "24px", lg: "30px" }}>
            Created by Sourav Bandyopadhyay with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </Text>
        </Box>
      </Box>
    </>
  );
};
export default Contact;
