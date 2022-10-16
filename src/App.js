import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import "./App.css";
import Cards from "./components/Cards";
import InputForm from "./components/InputForm";
import backgroundDesktop from "./images/bg-main-desktop.png";
import backgroundMobile from "./images/bg-main-mobile.png";

function App() {
  return (
    <SimpleGrid
      minH="100vh"
      w="100%"
      templateColumns={{ base: "100%", md: "30% 70%", lg: "30% 70%" }}
      templateRows={{ base: "30% 70%", md: "100%", lg: "100%" }}
    >
      <Box
        bgImg={{ base: backgroundMobile, md: backgroundDesktop }}
        bgRepeat="no-repeat"
        bgSize="cover"
        position="relative"
      >
        <Cards />
      </Box>
      <VStack mt={{ base: "14", md: "0" }} justifyContent="center">
        <InputForm />
      </VStack>
    </SimpleGrid>
  );
}

export default App;
