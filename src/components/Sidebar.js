import { Flex, Avatar, Text, IconButton, Button } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
//ExternalLinkIcon

export default function Sidebar() {
  const Chat = () => {
    return (
      <Flex p={3} align="center" _hover={{ bg: "gray.100", cursor: "pointer" }}>
        <Avatar src="" marginEnd={3} />
        <Text>filpstr2004@gmail.coms</Text>
      </Flex>
    );
  };
  return (
    <Flex
      // bg="blue.100"
      h="100vh"
      w="300px"
      borderEnd="1px solid"
      borderColor="gray.200"
      direction="column"
    >
      <Flex
        // bg="red.100"
        h="81px"
        w="100%"
        align="center"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="gray.200"
        p={3}
      >
        <Flex align="center">
          <Avatar src="" marginEnd={3} />
          <Text>Felipe Rodrigues</Text>
        </Flex>

        <IconButton
          size="sm"
          isRound
          icon={<ArrowLeftIcon />}
          onClick={() => signOut(auth)}
        />
      </Flex>

      <Button m={5} p={4}>
        New Chat
      </Button>
      <Flex
        overflowX="scroll"
        direction="column"
        sx={{
          scrollbarWidth: "none",
          minHeight: "0",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        flex={1}
      >
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </Flex>
    </Flex>
  );
}
