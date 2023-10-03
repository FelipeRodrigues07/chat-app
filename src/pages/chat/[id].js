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
import Head from "next/head";
import { useRouter } from "next/router";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { collection, doc, orderBy, query } from "firebase/firestore";
import { db, auth } from "../../../firebaseconfig";
import getOtherEmail from "../../../utils/getOtherEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { serverTimestamp, addDoc } from "firebase/firestore";
import { useRef, useEffect } from "react";

export default function Chat() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { id } = router.query;
  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
  const [messages] = useCollectionData(q);
  const [chat] = useDocumentData(doc(db, "chats", id));
  const bottomOfChat = useRef();

  const getMessages = () =>
    messages?.map((msg) => {
      const sender = msg.sender === user.email;
      return (
        <Flex
          key={Math.random()}
          alignSelf={sender ? "flex-start" : "flex-end"}
          bg={sender ? "blue.100" : "green.100"}
          w="fit-content"
          minWidth="100px"
          borderRadius="lg"
          p={3}
          m={1}
        >
          <Text>{msg.text}</Text>
        </Flex>
      );
    });

  useEffect(() => {
    const timer = setTimeout(() => {
      bottomOfChat.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    // Função de limpeza
    return () => clearTimeout(timer);
  }, [messages]);

  const Topbar = ({ email }) => {
    return (
      <Flex bg="gray.100" h="81px" w="100%" align="center" p={5}>
        <Avatar src="" marginEnd={3} />
        <Heading size="lg">{email}</Heading>
      </Flex>
    );
  };

  const Bottombar = ({ id, user }) => {
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
      e.preventDefault();
      await addDoc(collection(db, `chats/${id}/messages`), {
        text: input,
        sender: user.email,
        timestamp: serverTimestamp(),
      });
      setInput("");
    };

    return (
      <FormControl p={3} onSubmit={sendMessage} as="form">
        <Input
          placeholder="Insira a mensagem"
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button type="submit" hidden>
          Submit
        </Button>
      </FormControl>
    );
  };

  return (
    <Flex h="100vh">
      <Head>
        <title>Chat App</title>
      </Head>
      <Sidebar />

      <Flex flex={1} direction="column">
        <Topbar email={getOtherEmail(chat?.users, user)} />
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
          {getMessages()}
          <div ref={bottomOfChat}></div>
        </Flex>

        <Bottombar id={id} user={user} />
      </Flex>
    </Flex>
  );
}
