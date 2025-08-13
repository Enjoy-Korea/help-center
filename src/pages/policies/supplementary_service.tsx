import React from "react";
import NotionEmbedFullContent from "@site/src/components/NotionEmbedFullContent";
import { NOTION_PAGES } from "@site/src/constants/notion-pages";

export default function SupplementaryServiceEn(): JSX.Element {
  return (
    <NotionEmbedFullContent
      src={NOTION_PAGES.SUPPLEMENTARY_SERVICE_EN}
      title="Supplementary Service"
      description="Supplementary Service"
    />
  );
}
