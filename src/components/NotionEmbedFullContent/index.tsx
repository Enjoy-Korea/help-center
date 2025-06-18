import React from "react";
import Layout from "@theme/Layout";

interface NotionEmbedFullContentProps {
  src: string;
  title: string;
  description: string;
}

export default function NotionEmbedFullContent({
  src,
  title,
  description,
}: NotionEmbedFullContentProps): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <style>
        {`
          .notion-container {
            width: 100%;
            height: calc(100vh - 60px - 270px); // HACK: navbar와 footer 높이 제외
            overflow: hidden;
            position: relative;
          }
          
          @media (max-width: 997px) {
            .notion-container {
              height: calc(100vh - 60px - 582px); // HACK: 모바일인 경우 navbar와 footer 높이 제외
            }
          }
          
          @media (max-height: 820px) {
            .notion-container {
              height: calc(100vh - 60px) !important; // HACK: 높이가 820px 이하면 footer 영역 제외하지 않음
            }
          }
        `}
      </style>
      <div className="notion-container" style={{ position: "relative" }}>
        <iframe
          src={src}
          width="100%"
          height="100%"
          allowFullScreen
          style={{
            display: "block",
            border: "none",
            marginTop: "-44px", // HACK: Notion navbar 높이 제외
            height: "calc(100% + 44px)",
          }}
        />
      </div>
    </Layout>
  );
}
