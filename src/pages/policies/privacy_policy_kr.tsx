import React from "react";
import NotionEmbedFullContent from "@site/src/components/NotionEmbedFullContent";
import { NOTION_PAGES } from "@site/src/constants/notion-pages";

export default function PrivacyPolicyKr(): JSX.Element {
  return (
    <NotionEmbedFullContent
      src={NOTION_PAGES.PRIVACY_POLICY_KR}
      title="개인정보 처리방침"
      description="개인정보 처리방침"
    />
  );
}
