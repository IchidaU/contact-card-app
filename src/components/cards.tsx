import { Text } from "@chakra-ui/react";
import { useParams } from "react-router";

export default function Cards() {
  const { id } = useParams();
  return <Text>ID: {id}</Text>;
}
