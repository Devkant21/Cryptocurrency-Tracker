import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";



const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>Cryptocurrency</Text>
          <Text
            fontSize={"md"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Crypto is a digital currency designed to work as a medium of
            exchange through a computer network that is not reliant on any
            central authority, such as a government or bank, to uphold or
            maintain it. It is a decentralized system for verifying that the
            parties to a transaction have the money they claim to have,
            eliminating the need for traditional intermediaries, such as banks,
            when funds are being transferred between two entities.
          </Text>
        </VStack>

        {/* <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack> */}
      </Stack>
    </Box>
  );
};

export default Footer;
