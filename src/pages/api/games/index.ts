import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "../../../../structs/TwitchAccess";
import { err } from "../../../../types/props";
import { IGameRes } from "../../../../types/twitch";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IGameRes | err>
) {
  const token = getToken();
  try {
    const twitchRes = await fetch(`https://api.twitch.tv/helix/games/top`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-ID": process.env.TWITCH_CLIENT_ID as string,
      },
    });
    const { data }: { data: IGameRes } = await twitchRes.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
