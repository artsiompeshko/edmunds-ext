import React from 'react';
import * as styles from './loading.module.scss';

function Loading() {
  return <div className={styles['lds-dual-ring']}></div>;
}

export default Loading;
