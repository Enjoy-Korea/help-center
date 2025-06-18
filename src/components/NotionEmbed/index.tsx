import React from "react";
import styles from "./styles.module.css";

interface NotionEmbedProps {
  src: string;
  height?: string;
  title?: string;
}

export default function NotionEmbed({
  src,
  height = "600px",
  title = "Notion Page",
}: NotionEmbedProps): JSX.Element {
  return (
    <div className={styles.notionEmbedContainer}>
      <iframe
        src={`${src}?embed=true`}
        width="100%"
        height={height}
        allowFullScreen
        style={{
          display: "block",
          border: "none",
          marginTop: "-44px", // HACK: Notion navbar 높이 제외
          height: `calc(${height} + 44px)`,
        }}
        title={title}
      />
    </div>
  );
}
