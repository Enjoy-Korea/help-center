import React from "react";
import NotionEmbedFullContent from "@site/src/components/NotionEmbedFullContent";
import { NOTION_PAGES } from "@site/src/constants/notion-pages";

export default function HostKr(): JSX.Element {
  return (
    <NotionEmbedFullContent
      src={NOTION_PAGES.HOST_POLICY_EN}
      title="Host Terms and Conditions"
      description="Host Terms and Conditions"
    />
  );
}
