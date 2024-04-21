import { Store } from "./Store";
import { Chat } from "./Store";

export interface Room {
    roomId: string;
    chats: Chat[];
}

let globalChatId = 0;

export class InMemoryStore implements Store {
    private store: Map<string, Room>;

    constructor() {
        this.store = new Map<string, Room>();
    }

    initRoom(roomId: string) {
        this.store.set(roomId, {
            roomId,
            chats: [],
        })
    }

    getChats(roomId: string, limit: number, offset: number) {
        const room = this.store.get(roomId);
        if(!room) {
            return [];
        }

        // TODO: Implement limit and offset logic here. 
        return room.chats;
    }

    addChat(roomId: string, userId: string, name: string, message: string) {
        const room = this.store.get(roomId);
        if(!room) {
            return;
        }

        room.chats.push({
            userId,
            name,
            message,
            upvotes: [],
            id: (globalChatId++).toString()
        })
    }

    upVote(roomId: string, userId: string, chatId: string) {
        const room = this.store.get(roomId);
        if(!room) {
            return;
        }

        const chat = room.chats.find(({id}) => chatId === id);
        if(chat) {
            chat.upvotes.push(userId);
        }
    }
}