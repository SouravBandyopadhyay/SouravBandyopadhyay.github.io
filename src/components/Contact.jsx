import React from "react";
import Contactillust from "./Contactillust";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import {
  Box,
  SimpleGrid,
  Text,
  GridItem,
  Link,
  Button,
  ButtonGroup,
  Hide,
  Icon,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Box w="100%">
        <Text
          as="h2"
          textAlign="center"
          fontWeight="700"
          fontSize={{ base: "24px", md: "30px", lg: "34px" }}
          p={5}
        >
          Contact Me
        </Text>
        <SimpleGrid
          templateColumns={["1fr", "1fr", "0.5fr 1.5fr", "0.5fr 1.5fr"]}
          // templateRows={["1fr", "1fr"]}
          gap={[2, 2, 3, 3]}
        >
          <Hide below="md" margin="auto">
            <GridItem w="100">
              <Contactillust />
            </GridItem>
          </Hide>

          <GridItem>
            <Text
              as="h2"
              textAlign="center"
              fontWeight="500"
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
              justifyContent="center"
              margin="auto"
            >
              <Box>
                <Text
                  textAlign="left"
                  fontWeight="500"
                  fontSize={{ base: "18px", md: "24px", lg: "30px" }}
                  p={2}
                >
                  Get in Touch :
                </Text>
              </Box>

              <SimpleGrid p={2} templateColumns={"1fr 1fr 1fr"} gap={5}>
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
                <Link
                  margin="auto"
                  href="mailto:souravb.1998@gmail.com?"
                  isExternal
                >
                  <Icon as={SiGmail} boxSize={["2em", "3em"]} />
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
                <Icon as={FaHome} boxSize={["2em", "3em"]} />
                <Text fontSize={{ base: "16px", md: "24px", lg: "28px" }}>
                  &nbsp;&nbsp; Gurugram Haryana,India
                </Text>
              </Box>
              <Box display="flex" p={2}>
                <Icon as={FaPhoneAlt} boxSize={["2em", "3em"]} />
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
                <ButtonGroup variant="outline" spacing="6" marginTop={5}>
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
        <Box p={4}>
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
