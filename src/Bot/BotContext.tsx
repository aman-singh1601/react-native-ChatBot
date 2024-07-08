import {FC, PropsWithChildren, createContext, useContext, useState } from "react";



interface Conversation {
    message: string,
    owner: "bot" | "user"
}

type BotContextType = {
    conversation: Conversation[],
    setConversation: (conversation: Conversation) => void;
}

const BotContext = createContext<BotContextType>({
    conversation: [],
    setConversation: () => {}
});

const BotContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [conversation, setConversationState] = useState<Conversation[]>([]);
    console.log(conversation);
    const setConversation = (conversation: Conversation) => {
        setConversationState((prevConvo) => [conversation, ...prevConvo]);
    }

    return (
        <BotContext.Provider value={{conversation, setConversation}}>
                {children}
        </BotContext.Provider>
    )
};

export default BotContextProvider;

export const useConversation = () => {
    return useContext(BotContext);
}
