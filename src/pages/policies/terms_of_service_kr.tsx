import React from "react";
import NotionEmbedFullContent from "@site/src/components/NotionEmbedFullContent";
import { NOTION_PAGES } from "@site/src/constants/notion-pages";

export default function TermsOfServiceKr(): JSX.Element {
  return (
    <NotionEmbedFullContent
      src={NOTION_PAGES.TERMS_OF_SERVICE_KR}
      title="이용약관"
      description="이용약관"
    />
  );
}
