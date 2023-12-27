import React from "react";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Link,
  Text,
  chakra,
} from "@chakra-ui/react";

const extrasData = [
  {
    title: "Open Source Contribution",
    badgeText: "Uiverse",
    description:
      "Uiverse: A Hub of Open Source UI Elements for Free Use – Contributed a Substantial Array Including Buttons, Cards, Tooltips, Forms, Loaders, Garnering Over 14K Views and Still Counting.",
    visitLinks: [
      {
        text: "uiverse.io",
        url: "https://uiverse.io/profile/SouravBandyopadhyay",
      },
      {
        text: "Github",
        url: "https://github.com/uiverse-io/galaxy",
      },
    ],
  },
  // Add more entries as needed
];

export default function Extra() {
  return (
    <>
      <Heading>Extras</Heading>
      <Flex
        // border="2px solid red"
        _dark={{ bg: "#3e3e3e" }}
        p={4}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        {extrasData.map((extra, index) => (
          <Box
            key={index}
            w="full"
            maxW="sm"
            mx="auto"
            px={4}
            py={3}
            bg="gray.200"
            _dark={{ bg: "gray.800" }}
            shadow="md"
            rounded="md"
            mt={index !== 0 ? 4 : 0} // Add margin top for subsequent components
          >
            <Flex justifyContent="space-between" alignItems="center">
              <chakra.span
                fontSize="sm"
                color="gray.800"
                _dark={{ color: "gray.400" }}
              >
                {extra.title}
              </chakra.span>
              <Badge
                color="teal"
                _dark={{ color: "brand.900" }}
                px={3}
                py={1}
                rounded="full"
                textTransform="uppercase"
                fontSize="xs"
              >
                {extra.badgeText}
              </Badge>
            </Flex>

            <Box>
              <Text
                fontSize="md"
                // fontWeight="bold"
                mt={2}
                color="gray.800"
                _dark={{ color: "white" }}
              >
                {extra.description}
              </Text>
            </Box>

            <Box>
              <Flex
                alignItems="center"
                mt={2}
                justifyContent={"center"}
                color="gray.700"
                _dark={{ color: "gray.200" }}
              >
                <chakra.span>Visit on:</chakra.span>
                {extra.visitLinks.map((link, linkIndex) => (
                  <React.Fragment key={linkIndex}>
                    <Link
                      mx={2}
                      cursor="pointer"
                      textDecor="underline"
                      color="brand.600"
                      _dark={{ color: "brand.400" }}
                      isExternal
                      href={link.url}
                    >
                      {link.text}
                    </Link>
                    {linkIndex < extra.visitLinks.length - 1 && (
                      <chakra.span>or</chakra.span>
                    )}
                  </React.Fragment>
                ))}
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
}
