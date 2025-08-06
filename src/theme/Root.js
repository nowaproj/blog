import React from 'react';
import ReadingProgress from '@site/src/components/ReadingProgress';
import { PostHogProvider } from 'posthog-js/react';

// Default implementation, that you can customize
function Root({children}) {
  return (
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
        defaults: '2025-05-24',
        capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
        debug: import.meta.env.MODE === 'development',
      }}
    >
      <ReadingProgress />
      {children}
    </PostHogProvider>
  );
}

export default Root;
