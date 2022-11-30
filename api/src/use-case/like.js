import { getBeep } from "../db/get-beep"
import { insertLike } from "../db/insert-like"
import { BeepTooLongError } from "./post-beep"

export async function like(userId,beepId){
  await insertLike(userId,beepId);
}
