import {
  VStack,
  Heading,
  Box,
  Container,
  Circle,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { IoIosSend } from "react-icons/io";
// Here we have used react-icons package for the icons
import { FiPackage, FiHome, FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { FcCollaboration } from "react-icons/fc";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaHandsHelping,
} from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { IoMailOutline } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
const Milestones2022 = () => {
  const linkColor = "blue.400";
  const linkHoverColor = "blue.600";

  return (
    <Container maxW="7xl" p={{ base: 2, sm: 10 }}>
      <VStack textAlign="start" align="start" mb={5}>
        <Box zIndex={5}>
          <Heading fontSize="4xl" fontWeight="600" my={5}>
            2022
          </Heading>
          <Box>
            <MilestoneItem icon={FaLaptopCode}>
              Enrolled into Masai School for Full Stack Web Development Programe
            </MilestoneItem>
            <MilestoneItem icon={CgWorkAlt}>
              Started Collaboration project with Fellow batchmates.
            </MilestoneItem>
            <MilestoneItem icon={FaChalkboardTeacher} skipTrail>
              Learned MERN Stack
            </MilestoneItem>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

const Milestones2023 = () => {
  return (
    <Container maxW="7xl" p={{ base: 2, sm: 10 }}>
      <VStack textAlign="start" align="start" mb={5}>
        <Box zIndex={5}>
          <Heading fontSize="4xl" fontWeight="600" my={5}>
            2023
          </Heading>
          <Box>
            <MilestoneItem icon={FcBusinessman}>
              Graduated from Masai School in Full Stack Web Development
              Upskilling.
            </MilestoneItem>
            <MilestoneItem icon={CgWorkAlt}>
              Joined Detroit Software Consulting in Gurugram.
            </MilestoneItem>
            <MilestoneItem icon={IoMailOutline}>
              Developed an Email Service Provider tool.
            </MilestoneItem>
            <MilestoneItem icon={FaHandsHelping} skipTrail>
              Collaborated with the US team to develop an E-commerce Platform
              for Digital Assets.
            </MilestoneItem>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

const MilestoneItem = ({
  icon = FiCheckCircle,
  boxProps = {},
  skipTrail = false,
  children,
  ...props
}) => {
  const color = useColorModeValue("gray.700", "gray.500");
  return (
    <Flex minH={20} {...props}>
      <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
        <Circle
          size={12}
          bg={useColorModeValue("gray.600", "gray.500")}
          opacity={useColorModeValue(0.07, 0.15)}
        />
        <Box
          as={icon}
          size="1.25rem"
          color={color}
          pos="absolute"
          left="0.875rem"
          top="0.875rem"
        />
        {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
      </Flex>
      <Box pt={{ base: 1, sm: 3 }} {...boxProps}>
        {children}
      </Box>
    </Flex>
  );
};

const Milestones = () => {
  return (
    <VStack>
      <Milestones2023 />
      <Milestones2022 />
    </VStack>
  );
};
export default Milestones;
