import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import { Box, Spinner } from "@chakra-ui/react";
const Router = () => {
  return (
    <Suspense
      fallback={
        <Box>
          <Spinner />
        </Box>
      }
    >
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
