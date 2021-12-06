import React from 'react';
import cn from 'classnames';

import * as bootstrapStyles from '../../styles/bootstrap.module.scss';

function Tabs({tabs, activeTabKey, onTabClick}) {
  return (
    <ul className={cn(bootstrapStyles.nav, bootstrapStyles['nav-tabs'])}>
      {tabs.map(tab => (
        <li key={tab.key} className={cn(bootstrapStyles['nav-item'])}>
          <a
            className={cn(bootstrapStyles['nav-link'], {
              [bootstrapStyles.active]: tab.key === activeTabKey
            })}
            onClick={e => {
              e.preventDefault();

              onTabClick(tab.key);
            }}
            href="#"
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
