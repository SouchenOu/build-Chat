import { useParams } from "next/navigation";
import {useMemo} from "react"

const useConversation = () => {
    const params = useParams();
    const ConversationId = useMemo(() => {
        if(!params?.conversationId){
            return '';
        }
        return params.conversationId as string;
    }, [params?.conversationId]);
   const isOpen = useMemo(() => !!ConversationId, [ConversationId]);
   return useMemo(() => ({
        isOpen, 
        ConversationId
    }), [isOpen, ConversationId])
}
 
export default useConversation;