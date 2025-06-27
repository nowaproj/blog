import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function ReadingProgress() {
  const [readingProgress, setReadingProgress] = useState(0);
  const location = useLocation();
  
  // Only show on blog post pages (not on the main blog listing)
  const isBlogPost = location.pathname !== '/' && location.pathname.includes('/');
  
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
    };

    if (isBlogPost) {
      window.addEventListener('scroll', updateReadingProgress);
      return () => window.removeEventListener('scroll', updateReadingProgress);
    }
  }, [isBlogPost]);

  if (!isBlogPost) return null;

  return (
    <div
      className="progress-bar"
      style={{
        transform: `scaleX(${readingProgress / 100})`,
      }}
    />
  );
} 