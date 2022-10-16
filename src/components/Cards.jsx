import { Box, Heading, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CardFront from "../images/bg-card-front.png";
import CardBack from "../images/bg-card-back.png";
import CardLogo from "../images/card-logo.svg";
import { useGlobalContext } from "./context";

function Cards() {
  const { formDetails } = useGlobalContext();

  return (
    <Box>
      <Box
        h={{ base: "150px", lg: "230px" }}
        w={{ base: "250px", lg: "400px" }}
        borderRadius="lg"
        bgImage={CardFront}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        position="absolute"
        top={{ base: "60%", md: "15%" }}
        left={{ base: "20%", md: "40%" }}
        transform={{ base: "translate(-10%,-5%)", md: "none" }}
        zIndex={{ base: "10", lg: "10" }}
        boxShadow="2xl"
      >
        <VStack
          p="4"
          h="100%"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Img
            src={CardLogo}
            h={{ base: "2rem", md: "3rem" }}
            alignSelf="flex-start"
          />
          <VStack color="hsl(0, 0%, 100%)" w="100%" spacing="4">
            <Heading
              fontSize={{ base: "md", lg: "2xl" }}
              alignSelf="flex-start"
              letterSpacing="widest"
            >
              {formDetails.cardNumber.length === 0
                ? "0000 0000 0000 0000"
                : formDetails.cardNumber}
            </Heading>
            <HStack w="100%" justifyContent="space-between">
              <Text fontSize={{ base: "xs", lg: "md" }}>
                {formDetails.holderName.length === 0
                  ? "Jane Appleseed"
                  : formDetails.holderName}
              </Text>
              <Text fontSize={{ base: "xs", lg: "md" }}>
                {formDetails.expMonth.length === 0
                  ? "00"
                  : formDetails.expMonth}
                /{formDetails.expYear.length === 0 ? "00" : formDetails.expYear}
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Box>
      <VStack
        p="9"
        h={{ base: "150px", lg: "230px" }}
        w={{ base: "250px", lg: "400px" }}
        borderRadius="lg"
        bgImage={CardBack}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        position="absolute"
        top="50%"
        left="50%"
        transform={{ base: "translate(-40%,-50%)", md: "none" }}
        zIndex={{ base: "5", lg: "10" }}
        justifyContent="center"
        alignItems="flex-end"
        boxShadow="2xl"
      >
        <Text color="hsl(0, 0%, 100%)">
          {formDetails.cvv.length === 0 ? "000" : formDetails.cvv}
        </Text>
      </VStack>
    </Box>
  );
}

export default Cards;
