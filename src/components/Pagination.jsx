import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Box, ButtonGroup, IconButton, Text } from "@chakra-ui/react";

const Pagination = ({ pageSize, pageNumber, setPageNumber, totalElements }) => {
  return (
    <Box display="flex" alignItems="center">
      <Text fontSize={{ base: "12px", xl: "14px", xxl: "16px" }} mr="20px">
        {`${pageNumber ? (pageNumber - 1) * pageSize + 1 : 1} - ${Math.min(
          pageNumber * pageSize,
          totalElements
        )} of ${totalElements}`}
      </Text>

      <ButtonGroup
        isAttached
        variant="outline"
        border="2px solid secondary.900"
      >
        <IconButton
          aria-label="first page"
          icon={<ArrowLeftIcon h={3} w={3} />}
          onClick={() => {
            setPageNumber(1);
          }}
          isDisabled={pageNumber <= 1}
        />
        <IconButton
          aria-label="previous page"
          icon={<ChevronLeftIcon h={7} w={7} />}
          onClick={() => {
            setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
          }}
          isDisabled={pageNumber <= 1}
        />
        <IconButton
          aria-label="next page"
          icon={<ChevronRightIcon h={7} w={7} />}
          onClick={() =>
            setPageNumber(
              pageNumber < Math.ceil(totalElements / pageSize)
                ? pageNumber + 1
                : pageNumber
            )
          }
          isDisabled={pageNumber >= Math.ceil(totalElements / pageSize)}
        />
        <IconButton
          aria-label="last page"
          icon={<ArrowRightIcon h={3} w={3} />}
          onClick={() => setPageNumber(Math.ceil(totalElements / pageSize))}
          isDisabled={pageNumber >= Math.ceil(totalElements / pageSize)}
        />
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
