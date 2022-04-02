import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "../../../../structs/TwitchAccess";
import { IStreamRes } from "../../../../types/twitch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;
  const token = getToken();
  try {
    const twitchResponse = await fetch(
      `https://api.twitch.tv/helix/streams?${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Client-ID": process.env.TWITCH_CLIENT_ID as string,
        },
      }
    );
    const { data }: IStreamRes = await twitchResponse.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
