import React, { useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

interface NotionEmbedFullContentProps {
  src: string;
  title: string;
  description: string;
}

export default function NotionEmbedFullContent({
  src,
}: NotionEmbedFullContentProps): JSX.Element | null {
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      window.location.replace(src);
    }
  }, [src]);

  if (!ExecutionEnvironment.canUseDOM) {
    return (
      <meta httpEquiv="refresh" content={`0; url=${src}`} />
    );
  }

  return null;
}
