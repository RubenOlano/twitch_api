import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "../../../../structs/TwitchAccess";
import { IStreamRes, IStream } from "../../../../types/twitch";

interface err {
  error: any;
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IStream[] | err>
) {
  const token = getToken();
  try {
    const twitchResponse = await fetch("https://api.twitch.tv/helix/streams", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-ID": process.env.TWITCH_CLIENT_ID as string,
      },
    });
    const { data }: IStreamRes = await twitchResponse.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
