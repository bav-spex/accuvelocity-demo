import React from "react";
import { Text, Box, Stack } from "@chakra-ui/react";
const NumberTable = ({ number, steps }) => {
  return (
    <>
      <Box
        width={"50%"}
        display={"flex"}
        justifyContent={"center"}
        flexDir={"column"}
        margin={"auto"}
      >
        {" "}
        <Text my={"20px"} fontWeight={700} fontSize={"20px"}>
          {"Table of "}
          {number}
        </Text>
        <Box width={"100%%"} display={"flex"} justifyContent={"center"}>
          <Box display={"flex"} justifyContent={"center"} flexDir={"column"}>
            {Array.from({ length: 10 }, (elm, index) => {
              return (
                <Box display={"flex"} justifyContent={"center"}>
                  <Text
                    minW={"20px"}
                    maxW={"20px"}
                    fontWeight={700}
                    textAlign={"right"}
                    mr={"20px"}
                  >
                    {index + 1}
                  </Text>
                  <Text minW={"100px"} textAlign={"left"}>
                    {" x "}
                    {number}
                  </Text>
                  {" = "}
                  <Text
                    fontWeight={700}
                    ml={"10px"}
                    minW={"100px"}
                    textAlign={"right"}
                  >
                    {number * (index + 1)}
                  </Text>
                </Box>
              );
            })}
          </Box>
          {steps == 20 && (
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDir={"column"}
              ml={"50px"}
            >
              {Array.from({ length: 10 }, (elm, index) => {
                return (
                  <Box display={"flex"} justifyContent={"center"}>
                    <Text
                      minW={"20px"}
                      maxW={"20px"}
                      fontWeight={700}
                      textAlign={"right"}
                      mr={"20px"}
                    >
                      {index + 10 + 1}
                    </Text>
                    <Text minW={"100px"} textAlign={"left"}>
                      {" x "}
                      {number}
                    </Text>
                    {" = "}
                    <Text
                      fontWeight={700}
                      ml={"10px"}
                      minW={"100px"}
                      textAlign={"right"}
                    >
                      {number * (index + 1)}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default NumberTable;
