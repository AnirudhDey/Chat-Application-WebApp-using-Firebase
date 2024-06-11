import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";
import { decryptMessage } from "../encrypt";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      if (doc.exists()) {
        const encryptedMessages = doc.data().messages;
        console.log("Encrypted Messages:", encryptedMessages);
        const decryptedMessages = encryptedMessages.map((m) => {
          const decryptedText = decryptMessage(m.text);
          console.log("Decrypted Text:", decryptedText);
          return { ...m, text: decryptedText };
        });
        console.log("Decrypted Messages:", decryptedMessages);
        setMessages(decryptedMessages);
      }
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;