import { UserInfo, ConversationRequest } from "./models";

export async function conversationApi(options: ConversationRequest, abortSignal: AbortSignal): Promise<Response> {
    const response = await fetch("/conversation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messages: options.messages
        }),
        signal: abortSignal
    });

    return response;
}

export type UserInfo = {
    access_token: string;
    expires_on: string;
    id_token: string;
    provider_name: string;
    user_claims: any[];
    user_id: string;
};

export async function getUserInfo(): Promise<UserInfo[]> {
    return [{
        access_token: "token",
        expires_on: "1/1/2030",
        id_token: "1",
        provider_name: "test",
        user_claims: [],
        user_id: "something"
        // Add any other properties required by the UserInfo type
    }];
}