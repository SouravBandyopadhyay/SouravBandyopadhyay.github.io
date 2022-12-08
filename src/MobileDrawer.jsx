import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-scroll";
const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon boxSize={6} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack>
              <Link
                activeClass="active"
                onClick={onClose}
                smooth
                spy
                to="about"
              >
                ABOUT
              </Link>
              <Link
                activeClass="active"
                onClick={onClose}
                smooth
                spy
                to="tech"
                duration={300}
              >
                TECH
              </Link>

              <Link
                activeClass="active"
                onClick={onClose}
                spy
                to="projects"
                smooth={true}
                duration={400}
              >
                PROJECTS
              </Link>

              <Link
                activeClass="active"
                onClick={onClose}
                smooth
                spy
                to="contact"
                duration={400}
              >
                CONTACT ME
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default MobileDrawer;
