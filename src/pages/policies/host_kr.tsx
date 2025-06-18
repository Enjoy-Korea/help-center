import React from "react";
import Layout from "@theme/Layout";

export default function HostKr(): JSX.Element {
  return (
    <Layout title="호스트 정책" description="호스트 정책">
      <style>
        {`
          .notion-container {
            width: 100%;
            height: calc(100vh - 60px - 270px);
            overflow: hidden;
            position: relative;
          }
          
          @media (max-width: 997px) {
            .notion-container {
              height: calc(100vh - 60px - 582px);
            }
          }
        `}
      </style>
      <div className="notion-container" style={{ position: "relative" }}>
        <iframe
          src="https://enkorwithus.notion.site/ebd/216d9e29823480c5bd31e39cafd6d0b5"
          width="100%"
          height="100%"
          allowFullScreen
          style={{
            display: "block",
            border: "none",
            marginTop: "-44px",
            height: "calc(100% + 44px)",
          }}
        />
      </div>
    </Layout>
  );
}
