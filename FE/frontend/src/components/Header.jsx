import React from "react";
import { Heading, Flex, Divider } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg="#FFE74C"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="sm">Kino's Thought</Heading>
        <Divider />
      </Flex>
    </Flex>
  );
};

export default Header;