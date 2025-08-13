import React from "react";
import NotionEmbedFullContent from "@site/src/components/NotionEmbedFullContent";
import { NOTION_PAGES } from "@site/src/constants/notion-pages";

export default function TermsOfServiceEn(): JSX.Element {
  return (
    <NotionEmbedFullContent
      src={NOTION_PAGES.TERMS_OF_SERVICE_EN}
      title="Terms of Service"
      description="Terms of Service"
    />
  );
}
