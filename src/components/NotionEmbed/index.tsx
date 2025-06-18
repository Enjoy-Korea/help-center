import React from "react";
import styles from "./styles.module.css";

interface NotionEmbedProps {
  src: string;
  height?: string;
  title?: string;
}

/**
 * @description Notion 페이지를 임베드하는 컴포넌트
 * Notion Embed Full Content 컴포넌트와 동일한 기능을 가지고 있지만
 * 왼쪽에 사이드바 있을 때 사용
 *
 * @example
 * ```mdx
 * ---
 * sidebar_position: 1
 * hide_table_of_contents: true
 * custom_edit_url: null
 * ---
 * import NotionEmbed from "@site/src/components/NotionEmbed";
 *
 * <div className="notion-full-width">
 *  <NotionEmbed
 *   src={embedSrc}
 *   height="calc(100vh - 44px)"
 *   title="FAQ - Notion Page"
 *  />
 * </div>
 * ```
 */
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
