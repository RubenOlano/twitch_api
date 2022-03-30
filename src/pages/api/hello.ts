import "dotenv/config";
import type { NextApiRequest, NextApiResponse } from "next";

interface ITwitchRes {
  name: string;
}

interface err {
  error: any;
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ITwitchRes | err>
) {
  try {
    const twitchResponse = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-ID": process.env.TWITCH_CLIENT_ID as string,
        client_secret: process.env.TWITCH_CLIENT_SECRET as string,
        grant_type: "client_credentials",
      },
    });
    const { data }: { data: ITwitchRes } = await twitchResponse.json();
    const test = await twitchResponse.json();
    console.log(test);

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
