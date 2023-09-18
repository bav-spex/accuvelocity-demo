import {
  Box,
  Button,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NumberTable from "../components/NumberTables";

const IndexPage = () => {
  const [tableNumber, setTableNumber] = useState(1);
  const [steps, setSteps] = useState(10);
  const [showTable, setShowTable] = useState(false);
  const handleShowTable = () => {
    setShowTable(true);
  };
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#e1e1e1", "green");
  const color = useColorModeValue("#000000", "white");
  return (
    <Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Text>Table Assignment</Text>
      <Box display={"flex"} justifyContent={"center"}>
        <Stack width={"50%"}>
          <Box width={"100%"} display={"flex"} mb="10px">
            <FormLabel width={"36%"}>Table Number</FormLabel>
            <Input
              name="number"
              value={tableNumber}
              onChange={(e) => {
                setTableNumber(e.target.value);
                setShowTable(false);
              }}
            />
          </Box>
          <Box display={"flex"}>
            <FormLabel>Select steps upto</FormLabel>
            <RadioGroup onChange={setSteps} value={steps.toString()}>
              <Radio mr={"20px"} value="10">
                10
              </Radio>
              <Radio mr={"20px"} value="20">
                20
              </Radio>
            </RadioGroup>
          </Box>
          <Button bg={bg} color={color} onClick={() => handleShowTable()}>
            Show Table
          </Button>
        </Stack>
      </Box>
      <Box>
        <Text>
          {showTable && <NumberTable number={tableNumber} steps={steps} />}
        </Text>
      </Box>
    </Box>
  );
};

export default IndexPage;
