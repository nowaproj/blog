import React, {memo, useState, useCallback, useRef, useEffect} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import type {Props as BlogSidebarContentProps} from '@theme/BlogSidebar/Content';
import type {Props} from '@theme/BlogSidebar/Desktop';

import styles from './styles.module.css';

const ListComponent: BlogSidebarContentProps['ListComponent'] = ({items}) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName={clsx(styles.sidebarItemList, 'clean-list')}
      liClassName={styles.sidebarItem}
      linkClassName={styles.sidebarItemLink}
      linkActiveClassName={styles.sidebarItemLinkActive}
    />
  );
};

function BlogSidebarDesktop({sidebar}: Props) {
  const items = useVisibleBlogSidebarItems(sidebar.items);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle toggle collapse
  const handleToggle = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  // Handle resize start
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  // Handle resize
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing) return;
    
    const newWidth = e.clientX;
    // Constrain width between 200px and 500px
    const constrainedWidth = Math.min(Math.max(newWidth, 200), 500);
    setSidebarWidth(constrainedWidth);
  }, [isResizing]);

  // Handle resize end
  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  // Add global mouse events for resizing
  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp]);

  return (
    <aside 
      ref={sidebarRef}
      className={clsx(
        styles.sidebarContainer,
        isCollapsed && styles.collapsed
      )}
      style={{
        width: isCollapsed ? '40px' : `${sidebarWidth}px`,
        flexShrink: 0,
        transition: isResizing ? 'none' : 'width 0.3s ease'
      }}
    >
      {/* Toggle Button */}
      <button
        className={styles.toggleButton}
        onClick={handleToggle}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={clsx(styles.toggleIcon, isCollapsed && styles.collapsed)}
        >
          <path d="M6 2L10 8L6 14V2Z" />
        </svg>
      </button>

      {/* Sidebar Content */}
      {!isCollapsed && (
        <nav
          className={clsx(styles.sidebar, 'thin-scrollbar')}
          aria-label={translate({
            id: 'theme.blog.sidebar.navAriaLabel',
            message: 'Blog recent posts navigation',
            description: 'The ARIA label for recent posts in the blog sidebar',
          })}
        >
          <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
            {sidebar.title}
          </div>
          <BlogSidebarContent
            items={items}
            ListComponent={ListComponent}
            yearGroupHeadingClassName={styles.yearGroupHeading}
          />
        </nav>
      )}

      {/* Resize Handle */}
      {!isCollapsed && (
        <div
          className={styles.resizeHandle}
          onMouseDown={handleMouseDown}
          title="Drag to resize sidebar"
        />
      )}
    </aside>
  );
}

export default memo(BlogSidebarDesktop);
