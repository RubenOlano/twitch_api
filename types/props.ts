import { GameRes } from "./twitch";

export interface Thumbnails {
  thumbnail_url: string;
  user_name: string;
  title: string;
  game_name: string;
}

export interface GameGalleryProps {
  gameRes: GameRes[];
}

export interface GameThumbnailProps {
  game: GameRes;
}

export interface err {
  error: any;
}
