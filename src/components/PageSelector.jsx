import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

const PageSelector = ({ pageSize, setPageSize, setPageNumber }) => {
  return (
    <Box display="flex" alignItems="center" w="150px" mr="20px">
      <Text marginBottom={0} mr="10px">
        Rows
      </Text>
      <Menu variant={"dropDown"} isLazy lazyBehavior="unmount">
        <MenuButton as={Button} w="80px" pl={2} pr={0} bg={"#f2f2f2"}>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            gap="1"
          >
            <Text
              size={{ base: "xs", md: "sm" }}
              variant="black"
              marginBottom={0}
              fontWeight="500"
              overflow="clip"
              whiteSpace="nowrap"
              wordBreak="keep-all"
              textOverflow="ellipsis"
            >
              {pageSize}
            </Text>
            <ChevronDownIcon
              borderLeft="1px solid #e1e1e1"
              color="currentcolor"
              w={"8"}
              h={"6"}
            />
          </Box>
        </MenuButton>
        <MenuList
          w="70px"
          minW="auto"
          borderRadius={"4px"}
          bg={"#f2f2f2"}
          boxShadow={"1px 1px 15px rgba(0, 0, 0, .1)"}
        >
          {[10, 20, 30, 50, 100].map((option) => (
            <MenuItem
              key={option}
              as={Box}
              zIndex={3}
              h="50px"
              isActive={option === pageSize}
              justifyContent={"flex-start"}
              value={option}
              onClick={() => {
                setPageSize(option);
                setPageNumber(1);
              }}
              bgColor={"#f2f2f2"}
              color={"#212121"}
              borderTop={"1px solid"}
              borderTopColor={"#f2f7f8"}
              _hover={{
                color: "#1C5E3C",
                bgColor: "#f2f7f8",
                cursor: "pointer",
              }}
            >
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default PageSelector;
