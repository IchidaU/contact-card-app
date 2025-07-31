import { Heading } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Cards from "./components/cards";

function App() {
  return (
    <>
      <Heading as="h1">デジタル名刺アプリ</Heading>
      <BrowserRouter>
        <Routes>
          <Route path="/cards/:id" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
