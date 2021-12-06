import React from 'react';
import cn from 'classnames';
import logo from 'bundle-text:./logo.svg';
import * as styles from './header.module.css';
import * as bootstrapStyles from '../../styles/bootstrap.module.scss';

function Header({onClose}) {
  return (
    <header
      className={cn(
        bootstrapStyles.navbar,
        bootstrapStyles['navbar-light'],
        bootstrapStyles['bg-white'],
        styles['edm-ext-header']
      )}
    >
      <div className={cn(bootstrapStyles['container-fluid'])}>
        <div
          className={cn(
            bootstrapStyles['navbar-brand'],
            bootstrapStyles['w-100'],
            bootstrapStyles['d-flex'],
            bootstrapStyles['align-items-center'],
            bootstrapStyles['justify-content-between'],
            bootstrapStyles['me-0']
          )}
        >
          <div className={cn(bootstrapStyles['d-flex'], bootstrapStyles['align-items-center'])}>
            <div
              className={cn(bootstrapStyles['d-flex'], bootstrapStyles['align-items-center'])}
              dangerouslySetInnerHTML={{__html: logo}}
            ></div>
            <h3
              className={cn(
                bootstrapStyles['fs-6'],
                bootstrapStyles['ms-2'],
                bootstrapStyles['my-0'],
                bootstrapStyles['p-0']
              )}
            >
              Edmunds Hint
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            className={cn(
              bootstrapStyles.btn,
              bootstrapStyles['btn-sm'],
              bootstrapStyles['btn-close']
            )}
            aria-label="Close"
          ></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
