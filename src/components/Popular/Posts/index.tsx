import { useState } from 'react';

import styles from './index.module.scss';
import PopularPostsListTabs from 'components/Popular/PostsListTabs';

interface PopularPostsProps {
  popularPostsByCategory: {
    plainPosts: PostPlain[],
    category: string
  }[];
}

export default function PopularPosts({ popularPostsByCategory }: PopularPostsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0); 
  return (
    <div className={styles.popularPosts}>
      <h3>Popular posts</h3>
      <div className={styles.tabs}>
        <div className={styles.titles}>
          {popularPostsByCategory.map(({ category }, index) => {
            const tabClassName = `${styles.title} ${activeTabIndex === index ? styles.activeTitle : ''}`;
            return (
              <div 
                key={category} 
                className={tabClassName}
                onClick={() => setActiveTabIndex(index)}
              >{category}</div>
            );
          })}
        </div>
        <PopularPostsListTabs popularPostsByCategory={popularPostsByCategory} activeTabIndex={activeTabIndex} />
      </div>
    </div>
  );
}