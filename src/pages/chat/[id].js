import Sidebar from "@/components/Sidebar";
import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
export default function Chat() {
  const Topbar = () => {
    return (
      <Flex bg="gray.100" h="81px" w="100%" align="center" p={5}>
        <Avatar src="" marginEnd={3} />
        <Heading size="lg">filpstr2004@gmail.com</Heading>
      </Flex>
    );
  };

  const Bottombar = () => {
    return (
      <FormControl p={3}>
        <Input placeholder="Insira a mensagem" />
        <Button type="submit" hidden autoComplete="off">
          Submit
        </Button>
      </FormControl>
    );
  };

  return (
    <Flex h="100vh">
      <Sidebar />

      <Flex flex={1} direction="column">
        <Topbar />
        <Flex
          flex={1}
          direction="column"
          pt={4}
          mx={5}
          overflowX="scroll"
          sx={{
            scrollbarWidth: "none",
            minHeight: "0",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex
            bg="blue.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>Isto é uma mensagem</Text>
          </Flex>
          <Flex
            bg="blue.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>Isto </Text>
          </Flex>
          <Flex
            bg="green.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
            alignSelf="flex-end"
          >
            <Text>Isto é uma mensagem</Text>
          </Flex>
          <Flex
            bg="blue.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>Isto é uma mensagem</Text>
          </Flex>
          <Flex
            bg="blue.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>Isto </Text>
          </Flex>
          <Flex
            bg="green.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
            alignSelf="flex-end"
          >
            <Text>Isto é uma mensagem</Text>
          </Flex>
          <Flex
            bg="blue.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>Isto é uma mensagem</Text>
          </Flex>
          <Flex
            bg="blue.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>Isto </Text>
          </Flex>
          <Flex
            bg="green.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
            alignSelf="flex-end"
          >
            <Text>Isto é uma mensagem</Text>
          </Flex>
          <Flex
            bg="blue.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>Isto é uma mensagem</Text>
          </Flex>
          <Flex
            bg="blue.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>Isto </Text>
          </Flex>
          <Flex
            bg="green.100"
            w="fit-content"
            minWidth="100px"
            borderRadius="lg"
            p={3}
            m={1}
            alignSelf="flex-end"
          >
            <Text>Isto é uma mensagem</Text>
          </Flex>
        </Flex>

        <Bottombar />
      </Flex>
    </Flex>
  );
}
