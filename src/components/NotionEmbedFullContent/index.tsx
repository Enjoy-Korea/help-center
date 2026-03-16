import { useEffect } from "react";

interface NotionEmbedFullContentProps {
  src: string;
  title: string;
  description: string;
}

export default function NotionEmbedFullContent({
  src,
}: NotionEmbedFullContentProps): null {
  useEffect(() => {
    window.location.replace(src);
  }, [src]);

  return null;
}
