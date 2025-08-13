import React from "react";
import NotionEmbedFullContent from "@site/src/components/NotionEmbedFullContent";
import { NOTION_PAGES } from "@site/src/constants/notion-pages";

export default function TenantPolicyKr(): JSX.Element {
  return (
    <NotionEmbedFullContent
      src={NOTION_PAGES.TENANT_POLICY_KR}
      title="세입자 규정"
      description="세입자 규정"
    />
  );
}
