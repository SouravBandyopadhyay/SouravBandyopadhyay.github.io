import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const commonProps = {
  align: "center",
  px: "1",
  py: "2",
  cursor: "pointer",
  role: "group",
  fontWeight: "semibold",
  transition: ".15s ease",
  _hover: {},
};

export const InternalLink = ({ icon, children, to }) => {
  const colorModeValue = useColorModeValue("inherit", "gray.400");

  return (
    <Flex
      as={RouterLink}
      to={to}
      color={colorModeValue}
      {...commonProps}
    >
      {icon && <Icon mx="2" boxSize="4" as={icon} />}
      {children}
    </Flex>
  );
};

export const ExternalLink = ({ icon, children, href }) => {
  const colorModeValue = useColorModeValue("inherit", "gray.400");

  return (
    <Flex
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color={colorModeValue}
      {...commonProps}
    >
      {icon && <Icon mx="2" boxSize="4" as={icon} />}
      {children}
    </Flex>
  );
};
