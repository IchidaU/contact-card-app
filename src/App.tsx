import { Box, Heading, Text } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Cards from "./components/cards";
import { useEffect, useState } from "react";
import type { User } from "./types/types";
import { GetUsers } from "./lib/record";

function App() {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await GetUsers();
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Heading as="h1">デジタル名刺アプリ</Heading>
      {user.map((user) => (
        <Box key={user.user_id}>
          <Text>{user.name}</Text>
          <Text>{user.description}</Text>
          <Text>{user.github_id}</Text>
          <Text>{user.qiita_id}</Text>
          <Text>{user.x_id}</Text>
        </Box>
      ))}
      <BrowserRouter>
        <Routes>
          <Route path="/cards/:id" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
