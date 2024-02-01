// import React from "react";
// import "./App.css";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import Project from "./components/Project";
// import Skills from "./components/Skills";
// import Nav from "./Nav";
// import Extra from "./components/Extra";

// const sectionData = [
//   { id: "home", component: <Home /> },
//   { id: "about", component: <About /> },
//   { id: "tech", component: <Skills /> },
//   { id: "projects", component: <Project /> },
//   { id: "extra", component: <Extra /> },
//   { id: "contact", component: <Contact /> },
// ];

// export default function App() {
//   return (
//     <div className="App">
//       <div className="nav">
//         <Nav />
//       </div>
//       {sectionData.map(({ id, component }) => (
//         <React.Fragment key={id}>
//           <section id={id}>{component}</section>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Drawer,
  Menu,
  MenuButton,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  useColorMode,
  Divider,
  Image,
} from "@chakra-ui/react";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { InternalLink, ExternalLink } from "./Component/NavItem";
import AllRoutes from "./Routes/AllRoutes";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { CiDark, CiLight } from "react-icons/ci";
const navItems = [
  { icon: AiOutlineHome, label: "Home", href: "/" },
  { icon: AiOutlineTeam, label: "Journey", href: "/journey" },
  // { icon: BsFolder2, label: "Extras", href: "/extra" },
  { icon: BsCalendarCheck, label: "Project", href: "/project" },
  // { icon: BsCalendarCheck, label: "Contact", href: "/Contact" },
];
const onlinenavItems = [
  {
    icon: BsSubstack,
    label: "Substack",
    href: "https://souravbandyopadhyay.substack.com/",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/souravbandyopadhyay/",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "https://twitter.com/souravb_1998",
  },
  {
    icon: FaGithub,
    label: "Github",
    href: "https://github.com/SouravBandyopadhyay",
  },
  {
    icon: MdDesignServices,
    label: "Uiverse",
    href: "https://uiverse.io/profile/SouravBandyopadhyay",
  },
  {
    icon: SiLeetcode,
    label: "LeetCode",
    href: "https://leetcode.com/Sourav_280598/",
  },
  {
    icon: SiGmail,
    label: "Email",
    href: "mailto:souravb.1998@gmail.com",
  },
];

export default function Index() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{ base: 0, md: 60 }}
        transition=".3s ease"
        // border="2px solid green"
      >
        <Flex
          as="header"
          align="center"
          w="full"
          px="4"
          d={{ base: "flex", md: "none" }}
          borderBottomWidth="1px"
          borderColor={useColorModeValue("inherit", "gray.700")}
          bg={useColorModeValue("white", "gray.800")}
          justifyContent={{ base: "space-between", md: "flex-end" }}
          boxShadow="lg"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="md"
          />

          <Flex
            align="center"
            // border="2px solid red"
            justifyContent="space-around"
          >
            <IconButton
              onClick={toggleColorMode}
              borderRadius={"full"}
            >
              {colorMode === "light" ? <CiDark /> : <CiLight />}
            </IconButton>
            {/* <Image
              src={require("./assets/Logo.jpeg")}
              fallbackSrc="SB"
              alt="SB"
              h={12}
              w={12}
              borderRadius="full"
            /> */}
          </Flex>
        </Flex>

        {/* SECTION For Working On components */}
        <Box
          // border="2px solid orange"
          as="main"
          p={8}
          minH="34rem"
          bg={useColorModeValue("auto", "gray.800")}
        >
          <AllRoutes />
        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ ...props }) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    // pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue("white", "gray.800")}
    borderColor={useColorModeValue("inherit", "gray.700")}
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <VStack
      h="full"
      w="full"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Box w="full">
        <Flex px="4" py="5" align="center">
          {/* <Icon as={RiFlashlightFill} h={8} w={8} /> */}
          {/* <Avatar
            size={"md"}
            name="Sourav Bandyopadhyay"
            src="https://i.postimg.cc/tJFg0DSh/img.jpg"
          /> */}
          <Text
            fontSize="sm"
            ml="2"
            color={useColorModeValue("brand.500", "white")}
            fontWeight="semibold"
          >
            SOURAV BANDYOPADHYAY
          </Text>
        </Flex>
        {/* SECTION Side NavItem  */}
        <Flex
          direction="column"
          as="nav"
          fontSize="md"
          color="gray.600"
          aria-label="Main Navigation"
          gap="5px"
        >
          {navItems.map((item, index) => (
            <InternalLink key={index} icon={item.icon} to={item.href}>
              {item.label}
            </InternalLink>
          ))}
          {/* SECTION Online Section */}

          <Divider />

          <Text textAlign="left" px="4">
            {" "}
            Online
          </Text>

          {onlinenavItems.map((item, index) => (
            <ExternalLink
              key={index}
              icon={item.icon}
              href={item.href}
              isExternal
            >
              {item.label}
            </ExternalLink>
          ))}
        </Flex>
      </Box>

      <Flex px="4" py="5" mt={10} justifyContent="center" alignItems="center">
        <Menu>
          <MenuButton
            as={Button}
            size={"sm"}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            _hover={{ textDecoration: "none" }}
          >
            {/* <Avatar
              size={"md"}
              name="Ahmad"
              src="https://i.postimg.cc/tJFg0DSh/img.jpg"
            /> */}
          </MenuButton>
          {/* <MenuList fontSize={17} zIndex={5555}>
            <MenuItem as={Link} to="#">
              My profile
            </MenuItem>
            <MenuItem as={Link} to="#">
              Change password
            </MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList> */}
        </Menu>
      </Flex>
    </VStack>
  </Box>
);
