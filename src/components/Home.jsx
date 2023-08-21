import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import crypto from "../assets/crypto.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <Text
        fontSize={"3xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        color={"whiteAlpha.700"}
        
        mt={"-20"}
      >
        Cryptocurrency Tracker
      </Text>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "40px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={crypto}
          filter={"grayscale(1)"}
        />
      </motion.div>
    </Box>
  );
};

export default Home;
