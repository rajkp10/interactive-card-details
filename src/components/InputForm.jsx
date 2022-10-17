import {
  Container,
  VStack,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  HStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import React from "react";
import { useGlobalContext } from "./context";
import CompleteAlert from "./CompleteAlert";

function InputForm() {
  const { formDetails, success, customHandleChange, handleSubmit } =
    useGlobalContext();

  if (success) {
    return <CompleteAlert />;
  }

  return (
    <Container maxW={{ base: "xs", md: "sm" }}>
      <Formik
        initialValues={formDetails}
        validate={(values) => {
          const errors = {};

          if (!values.holderName) {
            errors.holderName = "Required";
          }
          if (!values.cardNumber) {
            errors.cardNumber = "Required";
          }
          if (!values.expMonth) {
            errors.expMonth = "Required";
          }
          if (!values.expYear) {
            errors.expYear = "Required";
          }
          if (!values.cvv) {
            errors.cvv = "Required";
          }

          if (!values.holderName.match(/^[A-Za-z ]+$/)) {
            errors.holderName = "Wrong Format, alphabets only";
          }
          if (
            !values.cardNumber.match(
              /^[0-9 ][0-9][0-9][0-9] [0-9 ][0-9][0-9][0-9] [0-9 ][0-9][0-9][0-9] [0-9 ][0-9][0-9][0-9]$/
            )
          ) {
            errors.cardNumber = "Wrong Format, numbers only";
          }
          if (
            !values.expMonth.match(/^[0-9][0-9]$/) ||
            values.expMonth > 12 ||
            values.expMonth < 1
          ) {
            errors.expMonth = "Wrong Format";
          }
          if (!values.expYear.match(/^[0-9 ][0-9]$/)) {
            errors.expYear = "Wrong Format";
          }
          if (!values.cvv.match(/^[0-9 ][0-9][0-9]$/)) {
            errors.cvv = "Wrong Format";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm({ values: "" });
          handleSubmit();
        }}
      >
        {({ handleSubmit, handleChange, touched, errors, values }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing="6" py="6">
              <FormControl isInvalid={errors.holderName && touched.holderName}>
                <FormLabel
                  htmlFor="holderName"
                  fontSize="sm"
                  fontWeight="bold"
                  letterSpacing="widest"
                >
                  CARDHOLDER NAME
                </FormLabel>
                <Field
                  as={Input}
                  id="holderName"
                  name="holderName"
                  variant="outline"
                  placeholder="e.g. Jane Appleseed"
                  fontSize="xl"
                  _focus={{ borderColor: "hsl(278, 94%, 30%)" }}
                  onChange={(e) => {
                    handleChange(e);
                    customHandleChange(e);
                  }}
                  value={values.holderName}
                />
                <FormErrorMessage>{errors.holderName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.cardNumber && touched.cardNumber}>
                <FormLabel
                  htmlFor="cardNumber"
                  fontSize="sm"
                  fontWeight="bold"
                  letterSpacing="widest"
                >
                  CARD NUMBER
                </FormLabel>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  variant="outline"
                  placeholder="e.g. 1234 5678 9123 0000"
                  fontSize="xl"
                  _focus={{ borderColor: "hsl(278, 94%, 30%)" }}
                  onChange={(e) => {
                    handleChange(e);
                    customHandleChange(e);
                  }}
                  value={values.cardNumber}
                />
                <FormErrorMessage>{errors.cardNumber}</FormErrorMessage>
              </FormControl>
              <HStack alignItems="flex-end">
                <FormControl
                  isInvalid={
                    (errors.expMonth || errors.expYear) &&
                    (touched.expMonth || touched.expYear)
                  }
                >
                  <HStack justifyContent="space-between" alignItems="flex-end">
                    <Box>
                      <FormLabel
                        htmlFor="expMonth"
                        fontSize="sm"
                        fontWeight="semibold"
                        letterSpacing="widest"
                      >
                        EXP.
                      </FormLabel>
                      <Input
                        id="expMonth"
                        name="expMonth"
                        variant="outline"
                        placeholder="MM"
                        fontSize="xl"
                        _focus={{ borderColor: "hsl(278, 94%, 30%)" }}
                        onChange={(e) => {
                          handleChange(e);
                          customHandleChange(e);
                        }}
                        value={values.expMonth}
                      />
                    </Box>
                    <Box>
                      <FormLabel
                        htmlFor="expYear"
                        fontSize="sm"
                        fontWeight="semibold"
                        letterSpacing="widest"
                      >
                        DATE
                      </FormLabel>
                      <Input
                        id="expYear"
                        name="expYear"
                        variant="outline"
                        placeholder="YY"
                        fontSize="xl"
                        _focus={{ borderColor: "hsl(278, 94%, 30%)" }}
                        onChange={(e) => {
                          handleChange(e);
                          customHandleChange(e);
                        }}
                        value={values.expYear}
                      />
                    </Box>
                  </HStack>
                  <FormErrorMessage>
                    {errors.expMonth}
                    {errors.expYear}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.cvv && touched.cvv}>
                  <FormLabel
                    htmlFor="cvv"
                    fontSize="sm"
                    fontWeight="bold"
                    letterSpacing="widest"
                  >
                    CVV
                  </FormLabel>
                  <Input
                    id="cvv"
                    name="cvv"
                    variant="outline"
                    placeholder=" e.g. 123"
                    fontSize="xl"
                    _focus={{ borderColor: "hsl(278, 94%, 30%)" }}
                    onChange={(e) => {
                      handleChange(e);
                      customHandleChange(e);
                    }}
                    value={values.cvv}
                  />
                  <FormErrorMessage>{errors.cvv}</FormErrorMessage>
                </FormControl>
              </HStack>
              <Button
                type="submit"
                w="100%"
                color="hsl(0, 0%, 100%)"
                bgColor="hsl(278, 68%, 11%)"
                _hover={{ bgColor: "hsl(279, 6%, 55%)" }}
              >
                Confirm
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default InputForm;
