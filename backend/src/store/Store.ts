

export type UserId = string;

export interface Chat {
    userId: UserId;
    id: string;
    name: string;
    message: string;
    upvotes: UserId[];
}


export abstract class Store {
    constructor() {

    }

    initRoom(roomId: string) {

    }

    getChats(roomId: string, limit: number, offset: number) {

    }

    addChat(roomId: string, userId: string, name: string, message: string) {

    }

    upVote(roomId: string, userId: string, chatId: string) {

    }
}