import { AspectRatio, Box, Flex, Icon, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  SiNpm,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostman,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiBootstrap,
  SiExpress,
  SiChakraui,
  SiGithub,
  SiGit,
} from "react-icons/si";

const icons = [
  { id: 1, icon: SiNpm, text: "NPM" },
  { id: 2, icon: SiHtml5, text: "HTML" },
  { id: 3, icon: SiCss3, text: "CSS" },
  { id: 4, icon: SiJavascript, text: "JavaScript" },
  { id: 5, icon: SiReact, text: "React" },
  { id: 6, icon: SiNodedotjs, text: "Nodejs" },
  { id: 7, icon: SiPostman, text: "Postman" },
  { id: 8, icon: SiMongodb, text: "Mongodb" },
  { id: 9, icon: SiRedux, text: "Redux" },
  { id: 10, icon: SiTypescript, text: "Typescript" },
  { id: 11, icon: SiBootstrap, text: "Bootstrap" },
  { id: 12, icon: SiExpress, text: "Express" },
  { id: 13, icon: SiChakraui, text: "ChakraUI" },
  { id: 14, icon: SiGithub, text: "Github" },
  { id: 15, icon: SiGit, text: "Git" },
];

export default function Skills() {
  const animationKeyframes = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

  const animation = `${animationKeyframes} 20s linear infinite`;
  return (
    <Box
      p={4}
      w="full"
      // border="2px solid red"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow={"hidden"}
    >
      <Flex as={motion.div} animation={animation} gap={10}>
        {icons.map((el) => (
          <Icon as={el.icon} boxSize={16} key={el.text} />
        ))}
      </Flex>
    </Box>
  );
}
