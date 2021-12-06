import React from 'react';
import cn from 'classnames';

function Tabs({tabs, activeTabKey, onTabClick}) {
  return (
    <ul className="nav nav-tabs edm-ext-tabs">
      {tabs.map(tab => (
        <li key={tab.key} className="nav-item">
          <a
            className={cn('nav-link', {
              active: tab.key === activeTabKey
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
