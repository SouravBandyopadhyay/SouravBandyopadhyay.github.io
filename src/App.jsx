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
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Image,
  Button,
  Heading,
  Stack,
  VStack,
  Drawer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { BsFolder2, BsCalendarCheck } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { RiFlashlightFill } from "react-icons/ri";
import NavItem from "./Component/NavItem";
import AllRoutes from "./Routes/AllRoutes";

const navItems = [
  { icon: AiOutlineHome, label: "Home", href: "/" },
  { icon: AiOutlineTeam, label: "Journey", href: "/journey" },
  { icon: BsFolder2, label: "Skills", href: "/Skills" },
  { icon: BsCalendarCheck, label: "Project", href: "/Project" },
  // { icon: BsCalendarCheck, label: "Contact", href: "/Contact" },
];

export default function Index() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
      border="2px solid red"
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
        border="2px solid green"
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

          <Flex align="center" border="2px solid teal">
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
            <Icon as={RiFlashlightFill} h={8} w={8} />
          </Flex>
        </Flex>

        {/* SECTION For Working On components */}
        <Box
          border="2px solid orange"
          as="main"
          p={14}
          minH="30rem"
          bg={useColorModeValue("auto", "gray.800")}
        >
          <AllRoutes />
          {/* <Stack
            direction={{ base: "column", sm: "row" }}
            alignItems="center"
            justifyContent="center"
            h="100%"
          >
            <Stack spacing={8}>
              <Box>
                <Heading color="blue.400" fontSize="3xl">
                  Point of sale
                </Heading>
                <Text fontSize="md" color="gray.500">
                  Manage your inventory and sale effeciently.
                </Text>
              </Box>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justifyContent="center"
              >
                <Button
                  rounded="full"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Stocks
                </Button>
                <Button rounded="full">Vendors</Button>
              </Stack>
            </Stack>

            <Image
              alt="Homepage Image"
              objectFit="cover"
              width="60vh"
              src="https://plus.unsplash.com/premium_photo-1685136482569-a59b03025108?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Stack> */}
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
          <Icon as={RiFlashlightFill} h={8} w={8} />
          <Text
            fontSize="2xl"
            ml="2"
            color={useColorModeValue("brand.500", "white")}
            fontWeight="semibold"
          >
            POS
          </Text>
        </Flex>
        {/* SECTION Side NavItem  */}
        <Flex
          direction="column"
          as="nav"
          fontSize="md"
          color="gray.600"
          aria-label="Main Navigation"
        >
          {navItems.map((item, index) => (
            <NavItem key={index} icon={item.icon} to={item.href}>
              {item.label}
            </NavItem>
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
            <Avatar
              size={"lg"}
              name="Ahmad"
              src="https://i.postimg.cc/tJFg0DSh/img.jpg"
            />
          </MenuButton>
          <MenuList fontSize={17} zIndex={5555}>
            <MenuItem as={Link} to="#">
              My profile
            </MenuItem>
            <MenuItem as={Link} to="#">
              Change password
            </MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </VStack>
  </Box>
);
