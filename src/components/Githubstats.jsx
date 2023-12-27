import GitHubCalendar from "react-github-calendar";
import { Box, SimpleGrid, Image, Heading } from "@chakra-ui/react";
import ReactTooltip from "react-tooltip";
const GithubStats = () => {
  return (
    <>
      <Box w="100%" p={5}>
        <Heading
          as="h1"
          fontSize={{ base: "24px", md: "30px", lg: "36px" }}
          mb={3}
          p={4}
        >
          Github Statistics
        </Heading>
        <Box w="-moz-max-content">
          <GitHubCalendar
            username="SouravBandyopadhyay"
            blockMargin={6}
            // theme={{
            //   "light": [
            //     "hsl(0, 0%, 92%)",
            //     "rebeccapurple"
            //   ],
            //   "dark": [
            //     "hsl(0, 0%, 22%)",
            //     "hsl(225,92%,77%)"
            //   ]
            // }}
            blockSize={15}
            blockRadius={20}
            fontSize={14}
            style={{ margin: "auto" }}
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </Box>
        <SimpleGrid
          p={2}
          templateColumns={[
            "1fr",
            "repeat(1,1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={[2, 2, 3, 3]}
          // border="4px solid black"
          margin="auto"
          marginTop="2"
        >
          <Image
            w="100%"
            objectFit="cover"
            p={2}
            src="https://github-readme-stats.vercel.app/api/top-langs?username=souravbandyopadhyay&show_icons=true&locale=en&layout=compact&theme=algolia"
            alt="souravbandyopadhyay"
          />

          <Image
            w="100%"
            objectFit="cover"
            p={2}
            src="https://github-readme-stats.vercel.app/api?username=souravbandyopadhyay&show_icons=true&locale=en&theme=algolia"
            alt="souravbandyopadhyay"
          />

          <Image
            w="100%"
            objectFit="cover"
            p={2}
            src="https://github-readme-streak-stats.herokuapp.com/?user=souravbandyopadhyay&theme=algolia"
            alt="souravbandyopadhyay"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};
export default GithubStats;
