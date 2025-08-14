import React, {type ReactNode} from 'react';
import BlogLayout from '@theme-original/BlogLayout';
import type BlogLayoutType from '@theme/BlogLayout';
import type {WrapperProps} from '@docusaurus/types';

import './styles.module.css';

type Props = WrapperProps<typeof BlogLayoutType>;

export default function BlogLayoutWrapper(props: Props): ReactNode {
  return (
    <div className="blog-layout-wrapper">
      <BlogLayout {...props} />
    </div>
  );
}
