import {
  VStack,
  Heading,
  Box,
  Container,
  Circle,
  Flex,
  useColorModeValue,
  UnorderedList,
  ListItem,
  Badge,
} from "@chakra-ui/react";

import { FiCheckCircle } from "react-icons/fi";

import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaHandsHelping,
} from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { IoMailOutline } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
// const Milestones2022 = () => {
//   return (
//     <Container maxW="7xl" p={{ base: 1, sm: 6 }}>
//       <VStack textAlign="start" align="start">
//         <Box zIndex={5}>
//           <Heading fontSize="4xl" fontWeight="600" my={5}>
//             2022
//           </Heading>
//           <Box>
//             <MilestoneItem icon={FaLaptopCode}>
//               Enrolled into Masai School for Full Stack Web Development
//               Programme
//             </MilestoneItem>
//             <MilestoneItem icon={CgWorkAlt}>
//               Started Collaboration project with Fellow batchmates.
//             </MilestoneItem>
//             <MilestoneItem icon={FaChalkboardTeacher} skipTrail>
//               Learned MERN Stack
//             </MilestoneItem>
//           </Box>
//         </Box>
//       </VStack>
//     </Container>
//   );
// };

const Milestones2023 = () => {
  return (
    <Container maxW="7xl" p={{ base: 1, sm: 6 }}>
      <VStack textAlign="start" align="start">
        <Box zIndex={5}>
          <Heading fontSize="4xl" fontWeight="600" my={5}>
            2023
          </Heading>
          <Box>
            <MilestoneItem
              icon={FcBusinessman}
              isCompanyMilestone={'Masai School'}
              startDate="April 2022"
              endDate="March 2023"
            >
              Graduated from Masai School in Full Stack Web Development
              Upskilling.
            </MilestoneItem>
            <MilestoneItem
              icon={CgWorkAlt}
              isCompanyMilestone={'Detroit Software Consulting'}
              startDate="April 2023"
            >
              Joined Detroit Software Consulting in Gurugram, Haryana.
            </MilestoneItem>

            <MilestoneItem icon={IoMailOutline}>
              Developed an Email Service Provider tool with the following key
              contributions:
              <UnorderedList ml={5}>
                <ListItem>
                  Optimized legacy CSS code for mobile email reset
                  functionality.
                </ListItem>
                <ListItem>
                  Integrated Unlayer (React Email Editor) for a seamless email
                  creation experience.
                </ListItem>
                <ListItem>
                  Upgraded the dashboard UI, incorporating meaningful charts for
                  enhanced analytics using Sendgrid API.
                </ListItem>
                <ListItem>
                  Managed the central repository on GitHub, implementing
                  branching strategies for effective collaboration.
                </ListItem>
              </UnorderedList>
            </MilestoneItem>
            <MilestoneItem icon={FaHandsHelping} skipTrail>
              Collaborated with the US team on an E-commerce Platform for
              Digital Assets with the following key contributions:
              <UnorderedList ml={5}>
                <ListItem>
                  Integrated Payment Gateway Integration using Stripe for both
                  One Time and Recurring payments.
                </ListItem>
                <ListItem>
                  Implemented custom logic for Cart Total and Shipping Price,
                  improving user experience.
                </ListItem>
                <ListItem>
                  Resolved numerous bugs collaboratively with QA and Dev teams,
                  ensuring product stability.
                </ListItem>
              </UnorderedList>
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
  isCompanyMilestone,
  startDate,
  endDate,
  children,
  ...props
}) => {
  const color = useColorModeValue("gray.700", "gray.500");
  const badgeColor = useColorModeValue("teal.500", "teal.300");

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
        {startDate && (
          <Box fontSize="xs" color={color} mt={1}>
            {endDate
              ? `${startDate} - ${endDate}`
              : `Joined on ${startDate} - Present`}
          </Box>
        )}
        {isCompanyMilestone && (
          <Badge
            mt={2}
            fontSize="xs"
            fontWeight="bold"
            color={badgeColor}
            textTransform="uppercase"
          >
            {isCompanyMilestone}
          </Badge>
        )}
      </Box>
    </Flex>
  );
};

const Milestones = () => {
  return (
    <VStack>
      <Milestones2023 />
      {/* <Milestones2022 /> */}
    </VStack>
  );
};
export default Milestones;
