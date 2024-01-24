import { Heading } from "@chakra-ui/react";
import React from "react";
import GithubStats from "../components/Githubstats";
import Extra from "../components/Extra";
const Extras = () => {
  return (
    <>
      <Heading as="h1">Extra</Heading>
      <GithubStats />
      <Extra />
    </>
  );
};

export default Extras;
