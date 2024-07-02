import {
  Box,
  Button,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useState } from "react";
import dummyData from "../config/dummyData";
import CustomTable from "../components/CustomTable";
import Pagination from "../components/Pagination";
import PageSelector from "../components/PageSelector";
import { InfoIcon } from "@chakra-ui/icons";

const Index = () => {
  const [data, setData] = useState(dummyData);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [searchTerms, setSearchTerms] = useState({
    Id: "",
    UserID: "",
    logtype: "",
    CallerFunction: "",
    LogMessage: "",
    CreatedDateTime: "",
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Updating SortColumn , Direction
  const handleSort = (column, sortDirection) => {
    setSortColumn(column.selector);
    setSortDirection(sortDirection);
  };

  // Update the Seatch Terms and Page Number
  const handleSearch = (event, column) => {
    setSearchTerms({ ...searchTerms, [column]: event.target.value });
    setPageNumber(1); // Reset to the first page whenever search terms change
  };

  // Sorted By Column Wise
  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection) return data;

    return [...data].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  // Filtered By Search
  const filteredData = useMemo(() => {
    return sortedData.filter((item) => {
      return Object.keys(searchTerms).every((key) => {
        const searchTerm = searchTerms[key].toLowerCase().trim();
        if (searchTerm === "") {
          return true;
        }
        const itemValue = String(item[key]).toLowerCase();
        return itemValue.includes(searchTerm);
      });
    });
  }, [sortedData, searchTerms]);

  // Pagination Applied over Data
  const paginatedData = useMemo(() => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, pageNumber, pageSize]);

  // Columns for Table
  const columns = [
    {
      name: (
        <Box
          p={"10px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
        >
          <Text mb={"10px"}>Id</Text>
          <Input
            type="number"
            value={searchTerms.Id}
            border={"0px"}
            padding={"0px"}
            borderRadius={"0px"}
            borderBottom={"2px solid #cecece"}
            _hover={{}}
            _focusVisible={{
              borderColor: "#212121",
            }}
            onChange={(e) => handleSearch(e, "Id")}
            placeholder="Search ID"
          ></Input>
        </Box>
      ),
      width: "10%",
      minWidth: "120px",
      id: "id",
      sortable: true,
      reorder: true,
      selector: "Id",
      cell: (row) => (
        <>
          <Text px={"10px"}>{row.Id}</Text>
        </>
      ),
    },
    {
      name: (
        <Box
          p={"10px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
        >
          <Text mb={"10px"}>User Id</Text>
          <Input
            type="text"
            value={searchTerms.UserID}
            border={"0px"}
            padding={"0px"}
            borderRadius={"0px"}
            borderBottom={"2px solid #cecece"}
            _hover={{}}
            _focusVisible={{
              borderColor: "#212121",
            }}
            onChange={(e) => handleSearch(e, "UserID")}
            placeholder="Search User ID"
          ></Input>
        </Box>
      ),
      width: "10%",
      minWidth: "200px",
      id: "UserID",
      selector: "UserID",
      cell: (row) => (
        <>
          <Text px={"10px"}>{row.UserID}</Text>
        </>
      ),
      sortable: true,
      reorder: true,
    },
    {
      name: (
        <Box
          p={"10px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
        >
          <Text mb={"10px"}>Log Type</Text>
          <Input
            type="text"
            value={searchTerms.logtype}
            border={"0px"}
            padding={"0px"}
            borderRadius={"0px"}
            borderBottom={"2px solid #cecece"}
            _hover={{}}
            _focusVisible={{
              borderColor: "#212121",
            }}
            onChange={(e) => handleSearch(e, "logtype")}
            placeholder="Search Log Type"
          ></Input>
        </Box>
      ),
      width: "10%",
      minWidth: "150px",
      id: "logtype",
      selector: "logtype",
      sortable: true,
      reorder: true,
      cell: (row) => (
        <>
          <Text px={"10px"}>{row.logtype}</Text>
        </>
      ),
    },
    {
      name: (
        <Box
          p={"10px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
        >
          <Text mb={"10px"}>Caller Function</Text>
          <Input
            type="text"
            value={searchTerms.CallerFunction}
            border={"0px"}
            padding={"0px"}
            borderRadius={"0px"}
            borderBottom={"2px solid #cecece"}
            _hover={{}}
            _focusVisible={{
              borderColor: "#212121",
            }}
            onChange={(e) => handleSearch(e, "CallerFunction")}
            placeholder="Search Caller Function"
          ></Input>
        </Box>
      ),
      width: "30%",
      minWidth: "200px",
      id: "CallerFunction",
      selector: "CallerFunction",
      sortable: true,
      reorder: true,
      cell: (row) => (
        <>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"100%"}
          >
            <Text noOfLines={[1, 2]} px={"10px"}>
              {row.CallerFunction}
            </Text>
            <IconButton
              background={"none"}
              _focusVisible={{}}
              _hover={{}}
              _focus={{}}
              _focusWithin={{}}
              aria-label="next page"
              icon={<InfoIcon />}
              onClick={() => {
                setSelectedRow(row);
                setSelectedColumn("CallerFunction");
                onOpen();
              }}
            />
          </Box>
        </>
      ),
    },
    {
      name: (
        <Box
          p={"10px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
        >
          <Text mb={"10px"}>Log Message</Text>
          <Input
            type="text"
            value={searchTerms.LogMessage}
            border={"0px"}
            padding={"0px"}
            borderRadius={"0px"}
            borderBottom={"2px solid #cecece"}
            _hover={{}}
            _focusVisible={{
              borderColor: "#212121",
            }}
            onChange={(e) => handleSearch(e, "LogMessage")}
            placeholder="Search Log Message"
          ></Input>
        </Box>
      ),
      width: "25%",
      minWidth: "250px",
      id: "LogMessage",
      selector: "LogMessage",
      sortable: true,
      reorder: true,
      cell: (row) => (
        <>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"100%"}
          >
            <Text noOfLines={[1, 2]} px={"10px"}>
              {row.LogMessage}
            </Text>
            <IconButton
              background={"none"}
              _focusVisible={{}}
              _hover={{}}
              _focus={{}}
              _focusWithin={{}}
              aria-label="next page"
              icon={<InfoIcon />}
              onClick={() => {
                setSelectedRow(row);
                setSelectedColumn("LogMessage");
                onOpen();
              }}
            />
          </Box>
        </>
      ),
    },
    {
      name: (
        <Box
          p={"10px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
        >
          <Text mb={"10px"}>Created Date Time</Text>
          <Input
            type="text"
            value={searchTerms.CreatedDateTime}
            border={"0px"}
            padding={"0px"}
            borderRadius={"0px"}
            borderBottom={"2px solid #cecece"}
            _hover={{}}
            _focusVisible={{
              borderColor: "#212121",
            }}
            onChange={(e) => handleSearch(e, "CreatedDateTime")}
            placeholder="Search Created Date Time"
          ></Input>
        </Box>
      ),
      width: "15%",
      minWidth: "255px",
      id: "CreatedDateTime",
      selector: "CreatedDateTime",
      sortable: true,
      reorder: true,
      cell: (row) => (
        <>
          <Text px={"10px"}>{row.CreatedDateTime}</Text>
        </>
      ),
    },
  ];

  return (
    <>
      <Box padding={"50px"} backgroundColor={"#f4f7fe"}>
        <Text textAlign={"left"} mb={"20px"} fontWeight={600} fontSize={"24px"}>
          Dummy Logs Table
        </Text>
        <Box
          backgroundColor={"#ffffff"}
          borderRadius={"20px"}
          overflow={"hidden"}
          // p={"50px"}
          boxShadow={
            "0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)"
          }
        >
          <CustomTable
            columns={columns}
            data={paginatedData}
            sortServer
            onSort={handleSort}
          />
          <Box
            p={"10px"}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <PageSelector
              pageSize={pageSize}
              setPageSize={(size) => {
                setPageSize(size);
                setPageNumber(1);
              }}
              setPageNumber={setPageNumber}
            />
            <Pagination
              pageSize={pageSize}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalElements={filteredData.length}
            />
          </Box>
        </Box>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setSelectedColumn(null);
          setSelectedRow(null);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedRow?.UserID + " - " + selectedRow?.logtype}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedRow && selectedColumn && (
              <Text>{selectedRow[selectedColumn]}</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                setSelectedColumn(null);
                setSelectedRow(null);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Index;
