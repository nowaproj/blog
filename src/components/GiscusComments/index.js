import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      id="comments"
      repo="nowaproj/blog"
      repoId="R_kgDOPCfZ3Q"
      category="General"
      categoryId="DIC_kwDOPCfZ3c4CsJt0"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={colorMode === 'dark' ? 'dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  );
} 