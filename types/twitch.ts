export interface ITwitchRes {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string[];
  token_type: string;
}

export interface IStream {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: string[];
  is_mature: boolean;
}

export interface IStreamRes {
  data: IStream[];
}

export interface GameRes {
  id: string;
  name: string;
  box_art_url: string;
}

export interface IGameRes {
  data: GameRes[];
}
