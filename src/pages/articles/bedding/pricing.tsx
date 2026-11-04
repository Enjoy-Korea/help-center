import React from "react";
import NotionEmbedFullContent from "@site/src/components/NotionEmbedFullContent";
import { STAY_BEDDING_URL } from "@site/src/constants/stay-links";

export default function BeddingPricingRedirect(): JSX.Element {
  return (
    <NotionEmbedFullContent
      src={STAY_BEDDING_URL}
      title="Bedding"
      description="Bedding"
    />
  );
}
