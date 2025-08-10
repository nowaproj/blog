import React from 'react';
import ReadingProgress from '@site/src/components/ReadingProgress';
import { PostHogProvider } from 'posthog-js/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Default implementation, that you can customize
function Root({children}) {
  const {siteConfig} = useDocusaurusContext();
  
  // Check if we're in a browser environment and have PostHog keys
  const isClient = typeof window !== 'undefined';
  
  // Get PostHog configuration from site config
  const posthogKey = siteConfig.customFields?.posthogKey;
  const posthogHost = siteConfig.customFields?.posthogHost;
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Debug logging
  if (isClient && isDevelopment) {
    console.log('PostHog Debug:', {
      posthogKey: posthogKey ? 'Present' : 'Missing',
      posthogHost: posthogHost ? 'Present' : 'Missing',
      isDevelopment,
      customFields: siteConfig.customFields
    });
  }

  // Only render PostHogProvider on client-side with valid keys
  if (isClient && posthogKey && posthogHost) {
    return (
      <PostHogProvider
        apiKey={posthogKey}
        options={{
          api_host: posthogHost,
          defaults: '2025-05-24',
          capture_exceptions: true,
          debug: isDevelopment,
        }}
      >
        <ReadingProgress />
        {children}
      </PostHogProvider>
    );
  }

  // Fallback for SSR or when PostHog is not configured
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}

export default Root;
