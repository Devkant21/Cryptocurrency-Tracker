import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"6"} shadow={"base"} bgColor={"blackAlpha.900"} >
      <Button variant={"unstyled"} color={"white"} size="md">
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} size="md">
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} size="md">
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
