import React from "react";
import NotionEmbedFullContent from "@site/src/components/NotionEmbedFullContent";
import { NOTION_PAGES } from "@site/src/constants/notion-pages";

export default function TenantPolicyEn(): JSX.Element {
  return (
    <NotionEmbedFullContent
      src={NOTION_PAGES.TENANT_POLICY_EN}
      title="Tenant Policy"
      description="Tenant Policy"
    />
  );
}
