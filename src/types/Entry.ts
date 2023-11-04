import type Emoji from "./Emoji";

export default interface Entry {
  id: number;
  text: string;
  emoji: Emoji | null;
  createdAt: Date;
  userId: number;
}