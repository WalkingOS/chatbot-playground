"use server";

import { kv } from "@vercel/kv";

import { type Chat } from "@/lib/types";

export async function getChat(id: string) {
  return await kv.hgetall<Chat>(`chat:${id}`);
}

export async function getSharedChat(id: string) {
  const chat = await kv.hgetall<Chat>(`chat:${id}`);

  if (!chat || !chat.sharePath) {
    return null;
  }

  return chat;
}

export async function shareChat(id: string) {
  const chat = await kv.hgetall<Chat>(`chat:${id}`);

  if (!chat) {
    return null;
  }

  const payload = {
    ...chat,
    sharePath: `/chat/${chat.id}`,
  };

  await kv.hmset(`chat:${chat.id}`, payload);

  return payload;
}
