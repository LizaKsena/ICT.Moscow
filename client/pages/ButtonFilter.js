import * as React from 'react';
import styles from '../styles/Index.module.sass';

export default function BtApplication({ application }) {
  const choseApp = () => {
    console.log(application);
  };

  return (
    <button className={styles.button} onClick={() => choseApp()} type="button">
      {application}
    </button>
  );
}
