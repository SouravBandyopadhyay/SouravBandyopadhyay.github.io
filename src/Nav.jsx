import {
  Box,
  Flex,
  HStack,
  Spacer,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import MobileDrawer from "./MobileDrawer";
const Nav = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Box as="nav" p="2">
        <HStack spacing="5" justify="space-between">
          <Box display="flex">
            <Text as="p" fontSize="24px" display="inline-box">
              <i>Sourav Bandyopadhyay</i>
            </Text>
          </Box>
          {isDesktop ? (
            <Flex w="100%" align="center" justify="flex-end" p={4}>
              <HStack as="nav" spacing="5">
                <Link activeClass="active" smooth spy to="about" offset={-100}>
                  <i>ABOUT</i>
                </Link>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="tech"
                  duration={300}
                  offset={-100}
                >
                  <i>TECH</i>
                </Link>
                <Link
                  activeClass="active"
                  spy
                  to="projects"
                  smooth={true}
                  duration={600}
                  offset={-100}
                >
                  <i>PROJECTS</i>
                </Link>

                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="contact"
                  duration={1000}
                  offset={-100}
                >
                  <i> CONTACT ME</i>
                </Link>
              </HStack>
            </Flex>
          ) : (
            <>
              <Spacer />
              <MobileDrawer />
            </>
          )}
        </HStack>
      </Box>
    </>
  );
};
export default Nav;
