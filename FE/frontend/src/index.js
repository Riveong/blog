import React from "react";
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Blogs from "./components/Blogs";  // new

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Blogs />  {/* new */}
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)