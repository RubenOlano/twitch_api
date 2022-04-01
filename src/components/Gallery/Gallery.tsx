import { GridItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useMemo } from "react";
import { Thumbnails } from "../../../types/props";
import styles from "./Gallery.module.css";

const Thumbnails: FC<Thumbnails> = ({
  thumbnail_url,
  title,
  user_name,
  game_name,
}) => {
  const url = useMemo(
    () => thumbnail_url.replace("{height}", "248").replace("{width}", "440"),
    [thumbnail_url]
  );
  return (
    <GridItem suppressHydrationWarning={true}>
      <ul className={styles.title}>
        <li>{user_name}</li>
        <li style={{ float: "right" }}>{game_name}</li>
      </ul>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            src={url}
            alt={`${user_name} is streaming ${title}`}
            height={248}
            width={440}
          />
        </div>
        <div className={styles.overlay}>
          <Link href={`https://www.twitch.tv/${user_name}`} passHref>
            <h3 className={styles.text}>{title}</h3>
          </Link>
        </div>
      </div>
    </GridItem>
  );
};

export default Thumbnails;
