import * as React from 'react';
import styles from '../styles/Index.module.sass';

export default function BtMore({ application }) {
  return (
    <div className={styles.box_button}>
      <img src="рамка.png" width="255" alt="border" className={styles.button_border} />
      <button className={styles.button_more} type="button">
        Показать еще
      </button>
    </div>

  );
}
