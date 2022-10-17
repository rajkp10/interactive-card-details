import { Heading, Image, Text, VStack, Button } from "@chakra-ui/react";
import React from "react";
import CompleteIcon from "../images/icon-complete.svg";
import { useGlobalContext } from "./context";

function CompleteAlert() {
  const { handleSubmit } = useGlobalContext();
  return (
    <VStack maxW={{ base: "xs", md: "sm" }} spacing="10">
      <Image src={CompleteIcon} />
      <VStack>
        <Heading letterSpacing="widest">THANK YOU!</Heading>
        <Text textColor="hsl(270, 3%, 87%)">We've added your card details</Text>
      </VStack>
      <Button
        w="100%"
        color="hsl(0, 0%, 100%)"
        bgColor="hsl(278, 68%, 11%)"
        _hover={{ bgColor: "hsl(279, 6%, 55%)" }}
        onClick={handleSubmit}
      >
        Continue
      </Button>
    </VStack>
  );
}

export default CompleteAlert;
