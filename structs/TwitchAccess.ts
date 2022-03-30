import { ITwitchRes } from "../types/twitch";

let twitchResponse: ITwitchRes = {
  access_token: "tjmyi95ph55m0xqyuujjce81e55n9s",
  expires_in: 5386666,
  token_type: "bearer",
  refresh_token: "",
  scope: [],
};

export const checkTime = (): boolean => {
  if (!twitchResponse.access_token) {
    return false;
  }
  const now = new Date();
  const expires = new Date(twitchResponse.expires_in * 1000 + now.getTime());
  return now < expires;
};

export const getToken = (): string => {
  if (!twitchResponse.access_token) {
    throw new Error("No token");
  }
  return twitchResponse.access_token;
};
