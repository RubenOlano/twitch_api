import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "../../../../structs/TwitchAccess";
import { err } from "../../../../types/props";
import { GameRes } from "../../../../types/twitch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameRes | err>
) {
  const { gameName } = req.query;
  const game = gameName as string;

  const token = getToken();
  try {
    const twitchRes = await fetch(
      `https://api.twitch.tv/helix/games?name=${game.replace(/ /g, "%20")}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Client-ID": process.env.TWITCH_CLIENT_ID as string,
        },
      }
    );
    const { data }: any = await twitchRes.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
