import React from 'react';
import OriginalBlogListPage from '@theme-original/BlogListPage';
import Head from '@docusaurus/Head';

export default function BlogListPage(props) {
  return (
    <>
      <Head>
        {/* Enhanced SEO for blog homepage */}
        <title>Nowa Blog - Mobile Development Insights & Tutorials</title>
        <meta 
          name="description" 
          content="Updates and articles from Nowa - Mobile development insights, tutorials, and industry trends" 
        />
        <meta 
          name="keywords" 
          content="mobile development blog, flutter tutorials, react native guides, app development, cross-platform development, mobile app tutorials, programming blog, tech insights, nowa blog" 
        />
        
        {/* Enhanced Open Graph for homepage */}
        <meta property="og:title" content="Nowa Blog - Mobile Development Insights & Tutorials" />
        <meta property="og:description" content="Updates and articles from Nowa - Mobile development insights, tutorials, and industry trends" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog.nowa.dev" />
        <meta property="og:image" content="https://blog.nowa.dev/img/logo.svg" />
        
        {/* Twitter Card for homepage */}
        <meta name="twitter:title" content="Nowa Blog - Mobile Development Insights & Tutorials" />
        <meta name="twitter:description" content="Updates and articles from Nowa - Mobile development insights, tutorials, and industry trends" />
        
        {/* Structured data for blog homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Nowa Blog",
            "description": "Updates and articles from Nova - Mobile development insights, tutorials, and industry trends",
            "url": "https://blog.nowa.dev",
            "author": {
              "@type": "Organization",
              "name": "Nowa",
              "url": "https://nowa.dev"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Nowa",
              "logo": {
                "@type": "ImageObject",
                "url": "https://blog.nowa.dev/img/logo.svg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://blog.nowa.dev"
            }
          })}
        </script>
      </Head>
      
      {/* Render the original blog list directly without extra content */}
      <OriginalBlogListPage {...props} />
    </>
  );
} 