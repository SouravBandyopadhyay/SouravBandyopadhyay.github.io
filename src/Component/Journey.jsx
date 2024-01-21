import {
  VStack,
  Heading,
  Box,
  Link,
  Container,
  BoxProps,
  Circle,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";
// Here we have used react-icons package for the icons
import { FiPackage, FiHome, FiBarChart2, FiCheckCircle } from "react-icons/fi";

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
            <MilestoneItem icon={FaTools}>
              Learned Lorem Ipsum technologies and frameworks.
            </MilestoneItem>
            <MilestoneItem icon={FaTools}>
              Learned Lorem Ipsum technologies and frameworks.
            </MilestoneItem>
            <MilestoneItem icon={FaTools}>
              Learned Lorem Ipsum technologies and frameworks.
            </MilestoneItem>
            {/* Add more MilestoneItem components for 2022 */}
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

const Milestones2023 = () => {
  const linkColor = "blue.400";
  const linkHoverColor = "blue.600";

  return (
    <Container maxW="7xl" p={{ base: 2, sm: 10 }}>
      <VStack textAlign="start" align="start" mb={5}>
        <Box zIndex={5}>
          <Heading fontSize="4xl" fontWeight="600" my={5}>
            2023
          </Heading>
          <Box>
            <MilestoneItem icon={FaTools}>
              Explored Lorem Ipsum cutting-edge technologies.
            </MilestoneItem>
            <MilestoneItem icon={FaTools}>
              Learned Lorem Ipsum technologies and frameworks.
            </MilestoneItem>
            <MilestoneItem icon={FaTools}>
              Learned Lorem Ipsum technologies and frameworks.
            </MilestoneItem>
            <MilestoneItem icon={FaTools}>
              Learned Lorem Ipsum technologies and frameworks.
            </MilestoneItem>
            {/* Add more MilestoneItem components for 2023 */}
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
      <Milestones2022 />
      <Milestones2023 />
    </VStack>
  );
};
export default Milestones;
