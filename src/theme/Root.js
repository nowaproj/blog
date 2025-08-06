import React from 'react';
import ReadingProgress from '@site/src/components/ReadingProgress';
import { PostHogProvider } from 'posthog-js/react';

// Default implementation, that you can customize
function Root({children}) {
  // Check if we're in a browser environment and have PostHog keys
  const isClient = typeof window !== 'undefined';
  const posthogKey = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_PUBLIC_POSTHOG_KEY : undefined;
  const posthogHost = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_PUBLIC_POSTHOG_HOST : undefined;
  const isDevelopment = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.MODE === 'development' : false;

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
