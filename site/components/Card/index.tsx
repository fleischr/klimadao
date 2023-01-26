import Image from "next/image";
import Link from "next/link";

import { Text } from "@klimadao/lib/components";
import { PostDetails } from "lib/queries";
import defaultImage from "public/cover-default.png";

import * as styles from "./styles";

interface CardProps {
  post: PostDetails;
}

export const Card = (props: CardProps) => {
  const date = new Date(props.post.publishedAt).toLocaleDateString("en");

  return (
    <Link href={`/blog/${props.post.slug}`} className={styles.card}>
      <div className="content">
        <Text t="body3" className="date">
          {date}
        </Text>
        <Text t="body1">{props.post.title}</Text>
        <Text t="body2" className="summary">
          {props.post.summary}
        </Text>
        <Text t="caption" className="read_more" style={{ marginTop: "auto" }}>
          Read more
        </Text>
      </div>
      <div className="image">
        <Image
          fill
          src={props.post.imageUrl || defaultImage}
          alt={props.post.title}
          style={{ objectFit: "cover" }}
        />
      </div>
    </Link>
  );
};
