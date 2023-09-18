import logo from "./logo.svg";
import "./App.css";
import Router from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
