import React from 'react';
import OriginalBlogPostItem from '@theme-original/BlogPostItem';
import Head from '@docusaurus/Head';
import GiscusComments from '@site/src/components/GiscusComments';

export default function BlogPostItem(props) {
  // Get metadata from props
  const metadata = props.children?.type?.metadata || props.metadata;
  
  // Only add structured data if we have metadata
  if (!metadata) {
    return <OriginalBlogPostItem {...props} />;
  }
  
  // Create structured data for the blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": metadata.title,
    "description": metadata.description,
    "image": metadata.frontMatter?.image || "https://blog.nowa.dev/img/logo.svg",
    "author": {
      "@type": "Person",
      "name": metadata.authors?.[0]?.name || "Nowa Team",
      "url": metadata.authors?.[0]?.url || "https://nowa.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nowa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blog.nowa.dev/img/logo.svg"
      }
    },
    "datePublished": metadata.date,
    "dateModified": metadata.lastUpdatedAt || metadata.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://blog.nowa.dev${metadata.permalink}`
    },
    "url": `https://blog.nowa.dev${metadata.permalink}`,
    "keywords": metadata.tags?.map(tag => tag.label).join(', '),
  };

  // Add reading time if available
  if (metadata.readingTime) {
    structuredData.timeRequired = `PT${Math.ceil(metadata.readingTime)}M`;
  }

  // Show comments by default, unless explicitly disabled in frontmatter
  const shouldShowComments = metadata.frontMatter?.hide_comments !== true;

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        {/* Enhanced Open Graph and Twitter meta tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={`https://blog.nowa.dev${metadata.permalink}`} />
        <meta property="og:type" content="article" />
        {metadata.frontMatter?.image && (
          <meta property="og:image" content={metadata.frontMatter.image} />
        )}
        <meta property="article:published_time" content={metadata.date} />
        {metadata.lastUpdatedAt && (
          <meta property="article:modified_time" content={metadata.lastUpdatedAt} />
        )}
        {metadata.authors?.[0] && (
          <meta property="article:author" content={metadata.authors[0].name} />
        )}
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        {metadata.frontMatter?.image && (
          <meta name="twitter:image" content={metadata.frontMatter.image} />
        )}
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://blog.nowa.dev${metadata.permalink}`} />
      </Head>
      <OriginalBlogPostItem {...props} />
      
      {/* Add comments section */}
      {shouldShowComments && (
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--ifm-color-emphasis-300)' }}>
          <GiscusComments />
        </div>
      )}
    </>
  );
} 